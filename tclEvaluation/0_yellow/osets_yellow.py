############# Library section
import madmom
from essentia.standard import *
from essentia import Pool, array
import essentia.standard as es
import matplotlib.pyplot as plt
import numpy as np
import os
from statistics import mean
import math
from math import sqrt
import pandas as pd
import sys
import csv  
# My Librares
from student_grades_yellow import *
sys.path.insert(1, '../')
from constantData import *
from onsetmetrics import *
from energy_checker import *
from write_stats import *
from sop  import *

STEM_INDEX=STEM_INDEX_YELLOW # GLOBAL VARIABLE

# Student Arrays for Energy Checker

sprecision_array = []
srecall_array   = []
sf_measure_value_array = []
sonset_deviationsArray=[]
soffset_deviationsArray=[]
############################################################################################################################################################

audio_file = stem_filenames[STEM_INDEX]

new_onset_stem_array, new_offset_stem_array,energy_signal_stem_array,energy_signal_stem_array_time,ratio_array= blend_iec_sop(audio_file,str(0),STEM_INDEX)

#print(energy_signal_stem_array,energy_signal_stem_array_time,ratio_array )

# Build and array of pandas data frames for all the annotations
df = pd.read_csv(rhythm_filenames[STEM_INDEX], usecols=col_list)
onset_list = df["onset"].tolist()   
offset_list = df["offset"].tolist()   


# We get the PRF of the GT STEM
precision, recall, f_measure_value = evaluate_accuracy(onset_list, new_onset_stem_array, matching_window_size)

print(songList[STEM_INDEX],"STEM  precision, recall, f_measure_value", precision, recall, f_measure_value)

# APPEND THE "STUDENT 0" OR STEM TO THE "S ARRAYS".. Remember array position 0 for Student 0 represent the STEM
sprecision_array.append(precision)
srecall_array.append(recall)
sf_measure_value_array.append(f_measure_value)

# WE CALCULATE THE DEVIATIONS OF THE STEM
onset_deviations, offset_deviations, missing_onset_notes = match_rhythm(df, new_onset_stem_array, new_offset_stem_array,matching_window_size)
sonset_deviationsArray.append(onset_deviations)
soffset_deviationsArray.append(onset_deviations)

########################## WRITE THE DEVIATIONS FOR STUDENT 0 OR STEM 
# Save the deviations in a file for the stem

theFilePath = DATA_PATH + dash + STATS_PATH + dash + songList[STEM_INDEX] + '_devs_student0'+'.csv'
f1 = open(theFilePath, "w")
print(theFilePath)
f1.write("onset dev")
f1.write(",")
f1.write("offset dev")
f1.write("\n")
index=0
while index < len(onset_deviations):
    f1.write(str(onset_deviations[index]))
    f1.write(",")
    if index < len(offset_deviations):
        f1.write(str(offset_deviations[index]))
    else:
        f1.write(str(0.0))   
    f1.write("\n")
    index+=1
f1.close

########################## STUDENT 1..N


student_index= 0
while student_index < numOfStudents:
    studentAudioFilename  = studentFilenames[STEM_INDEX]+str(student_index+1)+'.wav'
    snew_onset_stem_array, snew_offset_stem_array,energy_signal_student_array,energy_signal_student_array_time,_ = blend_iec_sop(studentAudioFilename,str(student_index+1),STEM_INDEX)
    #################################### Put this in function ####################################
    sraw = MonoLoader(filename = studentAudioFilename, sampleRate = fs)()
    sraw = sraw / np.max(np.abs(sraw))
    length_student_segment = len(energy_signal_student_array) # should asset lens are equal
    length_stem_segment = len(energy_signal_stem_array) # should asset lens are equal
    min_segment= min(length_student_segment,length_stem_segment)
    print("Stem and Stud lengths are ", length_stem_segment,length_student_segment)
    sindex = 0
    student_flags = []
    while sindex < min_segment:
        # compare energy_signal_student_array with  energy_signal_stem_array
        # check first if it is less than        
        if (energy_signal_student_array[sindex] < energy_signal_stem_array[sindex]):
            diff = energy_signal_stem_array[sindex]-energy_signal_student_array[sindex]
            percent_diff = float(diff/energy_signal_stem_array[sindex])
            
            if (percent_diff>=0.66):
                student_flags.append(1)
            else: 
                student_flags.append(0)                
        else:# Crude assuption here. IT is always pssoible to do a a spike and get lots of energy
            student_flags.append(1)
        sindex+=1
        
    array_student_flags = array(student_flags)
    total_size = len(array_student_flags)
    total_non_zeros = np.count_nonzero(array_student_flags)
    dur_Accuracy =  float(total_non_zeros /total_size)
    
    #################################### Put above in function ####################################    
    sprecision, srecall, sf_measure_value = evaluate_accuracy(onset_list, snew_onset_stem_array, matching_window_size)

    print(student_index+1 ," IEC Student precision, recall, f_measure_value", sprecision, srecall, sf_measure_value)
    #print(student_index+1 ," Duration Energy Fidelity ", dur_Accuracy)
    sonset_deviations,soffset_deviations, smissing_onset_notes = match_rhythm(df, snew_onset_stem_array,snew_offset_stem_array,matching_window_size)

    # Append Student onset/offsets
    sprecision_array.append(sprecision)
    srecall_array.append(srecall)
    sf_measure_value_array.append(sf_measure_value)
    sonset_deviationsArray.append(sonset_deviations)
    soffset_deviationsArray.append(soffset_deviations)

    theFilePath = DATA_PATH+dash+STATS_PATH+dash+songList[STEM_INDEX]+ '_devs_student' +str(student_index+1)+'.csv'

    ########################## WRITE THE DEVIATIONS FOR STUDENTS 1...NameError
    f3 = open(theFilePath, "w")
    f3.write("onset dev")
    f3.write(",")
    f3.write("offset dev")
    f3.write("\n")
    dev_index=0
    while dev_index < len(sonset_deviations):
        f3.write(str(sonset_deviations[dev_index]))
        f3.write(",")
        if dev_index < len(soffset_deviations):
            f3.write(str(soffset_deviations[dev_index]))
        else:
            f3.write(str(0.0))   
        f3.write("\n")
        dev_index+=1
        f3.close
    student_index+=1

the_student_grades = returnGradesYellow()
 # Write Statistics for  IEC
#print(len(the_student_grades),len(sprecision_array),len(srecall_array),len(sf_measure_value_array))


########################## WRITE THE STATISICS FOR STUDENT0, 1- N
songDirectory= songList[STEM_INDEX]
write_stats(sonset_deviationsArray,soffset_deviationsArray," onsets", " offset",the_student_grades,sprecision_array,srecall_array,sf_measure_value_array,songDirectory)



