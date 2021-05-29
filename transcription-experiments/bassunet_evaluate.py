import os
import librosa
import csv
import numpy as np
from tensorflow.keras.models import load_model
from pooling import MaxPoolingWithArgmax2D, MaxUnpooling2D
import time
import glob
from numpy import *
import scipy 


import IPython
import pickle
from pickle import load
from scipy.signal import find_peaks
import ipywidgets as widgets
from scipy import signal
from lxml import etree


from lxml import etree


class BassUNet:
    """ Class implements the inference using the BassUNet model for bass transcription
    Reference:  [1] J. Abesser & M. Mueller: BassUNet: Jazz Bass Transcription using a U-Net
                Architecture, ISMIR 2020
    """
    def __init__(self,
                 fn_model="bassunet_mixed.h5",
                 verbose=True):
        """ Initialize class
        Args:
            fn_model (string): Model file name
                'bassunet_mixed.h5': Model "BassUNet^M" (for mixed music genres)
                'bassunet_jazz.h5': Model "BassUNet^J" (for jazz)
        """
        assert fn_model in ('bassunet_mixed.h5', 'bassunet_jazz.h5'), 'Non-valid model file name!'
        # define processing parameters as in [1]
        self.__fs = 22050.
        self.__hop_len = 512
        self.__bpo = 12
        midi_lo, midi_hi = 25, 88
        self.__midi_range = np.arange(midi_lo, midi_hi+1)
        self.__midi_range_plus_unvoiced = np.append(self.__midi_range, -1)
        self.__n_bins = len(self.__midi_range)
        self.__fmin = 440.*2**((self.__midi_range[0]-69)/12.)
        self.__model = load_model(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'data', fn_model),
                                  custom_objects={"MaxPoolingWithArgmax2D": MaxPoolingWithArgmax2D,
                                                  "MaxUnpooling2D": MaxUnpooling2D})
        self.__verbose = verbose



    def run(self, fn_wav, min_note_len=2):
        """ Transcribe WAV file
        Args:
            fn_wav (string): WAV file name
            min_note_len (int): Minimum note duration in frames (one frame = 23.2 ms)
        Returns:
            time_axis_sec (np.ndarray): Time axis in seconds (n_frames)
            est_freq (np.ndarray): Estimated bass frequencies in Hz (0 = unvoiced frames) (n_frames)
            onset (np.ndarray): Note onset times (n_notes)
            duration (np.ndarray): Note durations (n_notes)
            pitch (np.ndarray): Note pitch values (n_notes)
        """
        if self.__verbose:
            t1 = time.time()
        # load WAV file, enforce sample rate
        x, fs = librosa.load(fn_wav, sr=self.__fs, mono=True)
        # extract features
        feat = self.audio_to_feat(x, fs)
        # get model predictions
        pred = self.__model.predict(feat)
        target_pred = pred[0, :, :]
        # get frame-wise f0 estimates
        est_freq = np.zeros(target_pred.shape[0])
        est_pitch = self.__midi_range_plus_unvoiced[np.argmax(target_pred, axis=1)]
        est_freq[est_pitch > 0] = 440. * 2 ** ((est_pitch[est_pitch > 0] - 69) / 12)
        time_axis_sec = np.arange(len(est_freq)) * self.__hop_len/self.__fs
        # note formation
        onset, duration, pitch = self.note_formation(est_pitch, time_axis_sec, min_note_len=min_note_len)
        if self.__verbose:
            print('Transcription of {:2.2f}s audio in {:2.2f}s'.format(len(x)/fs, time.time()-t1))
        return time_axis_sec, est_freq, onset, duration, pitch

    def audio_to_feat(self, x, fs):
        """ Extract spectrogram features for model input from waveform
        Args:
            x (np.ndarray): Audio samples
            fs (float): Sample rate in Hz
        Returns:
            feat (4D np.ndarray): Tensor input for BassSegNet model
        """
        cqt = np.abs(librosa.core.cqt(x, sr=fs, hop_length=self.__hop_len, fmin=self.__fmin,
                                      bins_per_octave=self.__bpo, n_bins=self.__n_bins))
        feat = cqt.astype(np.float16).T
        feat -= np.min(feat)
        feat /= np.max(feat)
        feat = np.expand_dims(feat, 0)
        feat = np.expand_dims(feat, -1)
        return feat

    @staticmethod
    def add_new_note(onset, offset, pitch, curr_frame, curr_pitch):
        """ Add a new note candidate to the note lists
        Args:
            onset (list): List of onset candidates
            offset (list): List of offset candidates
            pitch (list): List of pitch candidates
        Returns:
            curr_frame (int): Current onset frame index
            curr_pitch (int): Current MIDI pitch candidate
        """
        onset.append(curr_frame)
        offset.append(curr_frame)
        pitch.append(curr_pitch)
        return onset, offset, pitch

    def note_formation(self, est_pitch, time_axis, pitch_unvoiced=-1, min_note_len=2):
        """ Simple note formation approach to convert frame-wise f0 estimates with voicing
            to list of note events. Note that this cannot resolve multiple successive notes
            with the same pitch (and no unvoiced frame between).
        Args:
            est_pitch (np.ndarray): Frame-level pitch estimates
            time_axis (np.ndarray): Frame times in seconds
            pitch_unvoiced (int): MIDI pitch value in est_pitch that indicates unvoiced frames
            min_note_len (int): Minimum duration thresholds to consider a note candidate
                                in the final set of notes
        Returns:
            onset (np.ndarray): Note onset times
            duration (np.ndarray): Note durations
            pitch (np.ndarray): Note pitches
        """
        dt = time_axis[1] - time_axis[0]
        onset, offset, pitch = [], [], []
        n_frames = len(est_pitch)
        prev_frame_pitch = pitch_unvoiced
        # iterate over frames
        for i in range(n_frames):
            if est_pitch[i] != pitch_unvoiced:
                # (1) voiced frame
                if prev_frame_pitch == pitch_unvoiced:
                    # (1.1) previous frame was unvoiced -> create a new note
                    onset, offset, pitch = BassUNet.add_new_note(onset, offset, pitch, i, est_pitch[i])
                    prev_frame_pitch = est_pitch[i]
                else:
                    # (1.2.) previous frame was voiced
                    if est_pitch[i] == prev_frame_pitch:
                        # (1.2.1.) continue note (increase offset frame)
                        offset[-1] = i
                    else:
                        # (1.2.2.) create new note
                        onset, offset, pitch = BassUNet.add_new_note(onset, offset, pitch, i, est_pitch[i])
                        prev_frame_pitch = est_pitch[i]
            else:
                # (2) unvoiced frame
                prev_frame_pitch = pitch_unvoiced

        onset = np.array(onset, dtype=np.int32)
        offset = np.array(offset, dtype=np.int32)
        pitch = np.array(pitch, dtype=np.int32)

        duration = offset+1-onset

        # remove too short notes
        filter = duration >= min_note_len
        duration = duration[filter]
        onset = onset[filter]
        pitch = pitch[filter]
        if self.__verbose:
            print(np.sum(filter), '/', len(filter), ' notes kept')

        duration = duration.astype(np.float16) * dt
        onset = time_axis[onset]

        return onset, duration, pitch

    @staticmethod
    def export_pitch_track_as_csv(t, f0, fn_csv):
        """ Export pitch track as two-column CSV file to be importable in Sonic Visualiser
        Args:
            t (np.ndarray): Time values in seconds
            f0 (np.ndarray): Frame-level f0 estimates (0 = unvoiced frame) in Hz
            fn_csv (string): CSV file name
        """
        with open(fn_csv, 'w') as f:
            writer = csv.writer(f, delimiter=',')
            for i in range(len(t)):
                writer.writerow([t[i], f0[i]])

    @staticmethod
    def export_notes_as_csv(onset, duration, pitch, fn_csv):
        """ Export bass notes as three-column CSV file to be imported in SV as note layer
        Args:
            onset (np.ndarray): Note onset times
            duration (np.ndarray): Note durations
            pitch (np.ndarray): Note pitches
            fn_csv (string): CSV file name
            """
        with open(fn_csv, 'w') as f:
            writer = csv.writer(f, delimiter=',')
            for i in range(len(onset)):
                writer.writerow([onset[i], duration[i], pitch[i]])
                
    def extract_onsets_offsets_from_xml(xml_filename):
        with open(xml_filename, "rb") as f:
            tree = etree.parse(f)
        ground_t_offsets= []
        ground_t_onsets= []
        for x in tree.getroot().xpath("//offsetSec"):
            ground_t_offsets.append(float(x.text))
        for x in tree.getroot().xpath("//onsetSec"):
            ground_t_onsets.append(float(x.text))
        return ground_t_onsets, ground_t_offsets

    def match_duration(gt_onsets, onsets, gt_offsets, offsets, matching_window_size):
        """
        Finds best matching pairs so
           - distance between elements is no greater than matching_window_size
           - sum of all distances is is minimized
           - also returns the fidelity ( conformance to 100% hit notes)
        """
        # Not sure yet what to do with these statistics.
        # Late onset metrics
        lods=0 # duration short
        lodl=0 # duration long               
        lodb=0 # duration bang on    
        # Early  onset metrics         
        eods=0  # duration short
        eodl=0  # duration long
        eodb=0  # duration bang on
        # "Bang on" onset metrics
        bods=0  # duration short
        bodl=0  # duration long
        bodb=0  # duration bang on
        duration_violation = 0
        onset_early=0
        onset_late=0
        onset_bangon=0
        result = []
        missing_onset_notes= 0
        onset_deviation_array = []
        duration_deviation_array = []

        m = scipy.spatial.distance_matrix([[x] for x in gt_onsets], [[x] for x in onsets])
        # don't consider events which are out of matching window size
        big_distance = 10 ** 6
        m[m > matching_window_size] = big_distance

        n = scipy.spatial.distance_matrix([[x] for x in gt_offsets], [[x] for x in offsets])
        # don't consider events which are out of matching window size
        big_distance = 10 ** 6
        n[n > matching_window_size] = big_distance

        row_ons, col_ons = scipy.optimize.linear_sum_assignment(m)
        row_offs, col_offs = scipy.optimize.linear_sum_assignment(n)

        for (xn, yn, xf, yf) in zip(row_ons, col_ons,row_offs, col_offs):
            # Lets calculate the ground truth duration from onset/offset
            gt_duration = gt_offsets[xf]-gt_onsets[xn]
            #print("gt_duration",gt_duration)
            if abs(gt_onsets[xn] - onsets[yn]) <= matching_window_size:
                # We are within margin
                # This is initialization of the duration deviation
                duration_deviation = 0
                if (onsets[yn]> gt_onsets[xn]): # then it is a late onset wrt GT
                    real_duration  = offsets[yf]- onsets[yn]
                    if (real_duration<gt_duration):
                    # late onset,  duration is short
                       lods+=1
                       duration_deviation= gt_duration-real_duration
                       # Since its shiort we call it negative
                       duration_deviation = -duration_deviation
                    elif (real_duration>gt_duration):
                    # late onset,  duration is long
                       lodl+=1        
                       duration_deviation = real_duration-gt_duration       
                    elif (real_duration==gt_duration):
                    # late onset,  duration bang on
                       lodb+=1 
                       duration_deviation= 0
                    # Calculate the deviations         
                    onset_deviation = onsets[yn] - gt_onsets[xn]
                    onset_late+=1
                elif (onsets[yn]< gt_onsets[xn]): # then it is a early onset
                    # Check the real duratation against the GT duration in this early case
                    real_duration  = offsets[yf] - onsets[yn]
                    # This is initialization of the duration deviation
                    duration_deviation = 0
                    if (real_duration<gt_duration):
                    # early onset,  duration is short
                       eods+=1  
                       duration_deviation= gt_duration-real_duration
                       # Since its shiort we call it negative
                       duration_deviation = -duration_deviation
                    elif (real_duration>gt_duration):
                       # early onset,  duration is long
                       eodl+=1  
                       duration_deviation = real_duration-gt_duration   
                    elif (real_duration==gt_duration):
                       # early onset,  duration bang on 
                       eodb+=1  
                       duration_deviation = 0
                    else:
                       duration_violation+=1
                    #Calculate the deviations         
                    temp =  gt_onsets[xn]-onsets[yn] 
                    onset_deviation = -temp
                    onset_early+=1
                elif (onsets[yn]== gt_onsets[xn]): # default else onset bang on 
                    # Check the real duratation against the GT duration in this early case
                    real_duration  = offsets[yf] - onsets[yn]
                    duration_deviation = 0
                    if (real_duration<gt_duration):
                    # bang on onset,  duration is short
                       bods+=1  
                       duration_deviation= gt_duration-real_duration
                       # Since its shiort we call it negative
                       duration_deviation = -duration_deviation
                    elif (real_duration>gt_duration):
                    # bang on onset,  duration is long
                       bodl+=1  
                       duration_deviation = real_duration-gt_duration 
                    elif (real_duration==gt_duration):
                    # bang on onset,  duration bang on 
                       bodb+=1  
                       duration_deviation = 0
                    onset_deviation=0 
                    onset_bangon+=1   
                onset_deviation_array.append(onset_deviation) 
                if (abs(duration_deviation)<1): # remove outliers
                  duration_deviation_array.append(duration_deviation)
                else: 
                  duration_violation+=1
            else:
                missing_onset_notes+=1
        print("lods,lodl,lodb, eods,eodl,eodb, bods,bodl,bodb,duration_violation")
        print(lods,lodl,lodb, eods,eodl,eodb, bods,bodl,bodb,duration_violation)
        return onset_deviation_array,duration_deviation_array,missing_onset_notes
        
    def evaluate_accuracy(gt_onsets, onsets, matching_window_size):
        def match_events(gt_onsets, onsets, matching_window_size):

            # In case of performance issues for big piecs,
            # we could try to use simpler/faster local algorithm.
            m = scipy.spatial.distance_matrix([[x] for x in gt_onsets], [[x] for x in onsets])
            # don't consider events which are out of matching window size
            big_distance = 10 ** 6
            m[m > matching_window_size] = big_distance

            row_ind, col_ind = scipy.optimize.linear_sum_assignment(m)
            result = []
            missing_notes= 0
            deviated_notes = []
            for (x, y) in zip(row_ind, col_ind):
                if abs(gt_onsets[x] - onsets[y]) <= matching_window_size:
                    result.append((x, y))
                    # We are within marging lets get mlroe details on difference
                    if (onsets[y]> gt_onsets[x]): # then it is late
                      deviation = onsets[y] - gt_onsets[x]
                    elif (onsets[y]< gt_onsets[x]): # then it is early
                      diff =  gt_onsets[x] - onsets[y]
                      deviation = -diff
                    elif (onsets[y]== gt_onsets[x]): # then it is bang on
                      deviation=0    
                    deviated_notes.append(deviation)
                else:
                    missing_notes+=1
             # How many missing as % of total?
            total_notes= len(onsets)
            delta_missing_notes= total_notes-missing_notes
            fidelity = round( 100.0*(delta_missing_notes/total_notes),4)     
            return result,fidelity,deviated_notes
        matching,_,_ = match_events(
            gt_onsets,
            onsets,
            matching_window_size)
        precision = float(len(matching)) / len(onsets)
        recall = float(len(matching)) / len(gt_onsets)
        
        def f_measure(precision, recall):
            if precision == 0 and recall == 0:
                return 0.0
            return 2.0 * precision*recall / (precision + recall)


        f_measure_value = f_measure(precision, recall)
        return precision, recall, f_measure_value
if __name__ == '__main__':
    #fn_wav = os.path.join(os.path.dirname(__file__), 'data','2_bassX_Walking On The Moon_The Police_Bass Gr3.wav')
    index=0
    
    audio_files =   ['001.wav',     '002.wav',     '003.wav',     '004.wav',     '005.wav',     '006.wav',     '007.wav',     '008.wav',     '009.wav',     '010.wav',     '011.wav',     '012.wav',     '013.wav',     '014.wav',     '015.wav',     '016.wav',     '017.wav']
 
    annotation_files =   ['001.xml',     '002.xml',     '003.xml',     '004.xml',     '005.xml',     '006.xml',     '007.xml',     '008.xml',     '009.xml',     '010.xml',     '011.xml',     '012.xml',     '013.xml',     '014.xml',     '015.xml',     '016.xml',     '017.xml']
    
            

    the_file= "PRF_measure.txt"
    f1 = open(the_file, "w")
    f1.write(" precision, recall, f_measure_value \n")
    while index <  9:
    
        filename= "00"+str(index+1)+".wav" 
        print( "\n","Filename *************************" , filename,  "\n")
        fn_wav = os.path.join(os.path.dirname(__file__), 'data',filename)
        bun = BassUNet()
        # transcription
        t, f0, onset, duration, pitch = bun.run(fn_wav)
        #######################################################################################################################
        myOnsetEnergyCheckerThreshold= 0.05 
        matching_window_size = 0.05 # MIREX reference
        assert(len(audio_files) == len(annotation_files))

        ground_t_offsets_array = []
        ground_t_onsets_array = []
        ground_t_durations_array = []

        # To Colm: just always use absolute time in the annotations.
        # scaled_factor=1 #or fs depending on whether the graph uses time of samples


        for xml_file in annotation_files:

            ground_t_onsets, ground_t_offsets = BassUNet.extract_onsets_offsets_from_xml(xml_file)  
            ground_t_durations = array(ground_t_offsets)-array(ground_t_onsets)
            ground_t_onsets_array.append(array(ground_t_onsets))
            ground_t_durations_array.append(array(ground_t_durations))
            
        p = []
        r = []
        f = []
        # After break , calculate 
        precision, recal, f_measure_value=BassUNet.evaluate_accuracy(ground_t_onsets_array[index], onset, matching_window_size)
        print(index+1 ," precision, recal, f_measure_value \n",precision, recal, f_measure_value)
        print("\n")
        p.append(precision)
        r.append(recal)
        f.append(f_measure_value)

        string_to_write=str(index+1) + "\t" + str(precision) + "\t" + str(recal) + "\t" + str(f_measure_value)+"\n"
        f1.write(string_to_write)
        p1=ground_t_onsets_array[index]
        p2=onset
        p3=ground_t_durations_array[index] 
        p4=duration
        p5=matching_window_size
        onset_deviations,duration_deviations,missing_onset_notes =   BassUNet.match_duration(p1,p2,p3,p4,p5)
        print(index+1 ," missing_onset_notes",missing_onset_notes)
        missing_string = str(index+1) + "missing_onset_notes " + str(missing_onset_notes)
        f1.write(missing_string)
        f1.write("\n")
        j=0 
        fn_onset_dev = fn_wav.replace('.wav', 'onset_dev')
        the_file= fn_onset_dev+'.csv'
        f2 = open(the_file, "w")
        while j < len(onset_deviations):
            f2.write(str(onset_deviations[j]))
            f2.write("\n")
            j+=1
            
        j=0 
        fn_duration_dev = fn_wav.replace('.wav', 'duration_dev')         
        the_file= fn_duration_dev+'.csv'
        f3 = open(the_file, "w")    
        
        while j < len(duration_deviations):
            f3.write(str(duration_deviations[j]))
            f3.write("\n")
            j+=1
                
        
        #######################################################################################################################
        
        # export pitch track
        fn_csv = fn_wav.replace('.wav', '_bass_f0.csv')
        BassUNet.export_pitch_track_as_csv(t, f0, fn_csv)
        print(fn_csv, ' saved!')

        # export notes
        fn_csv = fn_wav.replace('.wav', '_bass_notes.csv')
        BassUNet.export_notes_as_csv(onset, duration, pitch, fn_csv)
        print(fn_csv, ' saved!')
        index+=1
    #index= 9
    while index < 17:
        if (index== 9):
            filename= "00"+str(index)+".wav"
        else:
            filename= "0"+str(index)+".wav"
            
        print( "\n","Filename *************************" , filename,  "\n")
        fn_wav = os.path.join(os.path.dirname(__file__), 'data',filename)
        bun = BassUNet()
        # transcription
        t, f0, onset, duration, pitch = bun.run(fn_wav)
        #######################################################################################################################
        myOnsetEnergyCheckerThreshold= 0.05 
        matching_window_size = 0.1 # MIREX reference
        assert(len(audio_files) == len(annotation_files))

        ground_t_offsets_array = []
        ground_t_onsets_array = []
        ground_t_durations_array = []

        # To Colm: just always use absolute time in the annotations.
        # scaled_factor=1 #or fs depending on whether the graph uses time of samples


        for xml_file in annotation_files:

            ground_t_onsets, ground_t_offsets = BassUNet.extract_onsets_offsets_from_xml(xml_file)  
            ground_t_durations = array(ground_t_offsets)-array(ground_t_onsets)
            ground_t_onsets_array.append(array(ground_t_onsets))
            ground_t_durations_array.append(array(ground_t_durations))
            
        p = []
        r = []
        f = []
        # After break , calculate 
        precision, recal, f_measure_value=BassUNet.evaluate_accuracy(ground_t_onsets_array[index], onset, matching_window_size)
        print(index+1 ," precision, recal, f_measure_value \n",precision, recal, f_measure_value)
        print("\n")
        p.append(precision)
        r.append(recal)
        f.append(f_measure_value)

        string_to_write=str(index+1) + "\t" + str(precision) + "\t" + str(recal) + "\t" + str(f_measure_value)+"\n"
        f1.write(string_to_write)
        p1=ground_t_onsets_array[index]
        p2=onset
        p3=ground_t_durations_array[index] 
        p4=duration
        p5=matching_window_size
        onset_deviations,duration_deviations,missing_onset_notes =   BassUNet.match_duration(p1,p2,p3,p4,p5)
        print(index+1 ," missing_onset_notes",missing_onset_notes)
        missing_string = str(index+1) + "missing_onset_notes " + str(missing_onset_notes)
        f1.write(missing_string)
        f1.write("\n")
        j=0 
        fn_onset_dev = fn_wav.replace('.wav', 'onset_dev')
        the_file= fn_onset_dev+'.csv'
        f2 = open(the_file, "w")
        while j < len(onset_deviations):
            f2.write(str(onset_deviations[j]))
            f2.write("\n")
            j+=1
            
        j=0 
        fn_duration_dev = fn_wav.replace('.wav', 'duration_dev')         
        the_file= fn_duration_dev+'.csv'
        f3 = open(the_file, "w")    
        
        while j < len(duration_deviations):
            f3.write(str(duration_deviations[j]))
            f3.write("\n")
            j+=1
                
        
        #######################################################################################################################
        
        # export pitch track
        fn_csv = fn_wav.replace('.wav', '_bass_f0.csv')
        BassUNet.export_pitch_track_as_csv(t, f0, fn_csv)
        print(fn_csv, ' saved!')

        # export notes
        fn_csv = fn_wav.replace('.wav', '_bass_notes.csv')
        BassUNet.export_notes_as_csv(onset, duration, pitch, fn_csv)
        print(fn_csv, ' saved!')
        index+=1