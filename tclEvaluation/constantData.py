#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 
student_path = '../data/bass/'
yellowFilename  = student_path+'0_yellow'+'/'+'yellow'
billieJeanFilename = student_path+'1_billiejean'+'/'+'bj'
justFilename     = student_path+'1_justlooking'+'/'+'justlooking'
brownFilename    = student_path+'2_brown'+'/'+'brown'
roadFilename    = student_path+'3_roadrunner'+'/'+'road'
wotmFilename    = student_path+'3_wotm'+'/'+'wotm'
 
studentFilenames = [yellowFilename, billieJeanFilename, justFilename, brownFilename, roadFilename,wotmFilename]
songList = ['yellow', 'billieJean','justlooking','brown','roadrunner','wotm']
rhythm_filenames = ['../data/bass/Yellow_rhythm.csv','../data/bass/Billiejean_rhythm.csv','../data/bass/Justlooking_rhythm.csv','../data/bass/Brown_rhythm.csv','../data/bass/Roadrunner_rhythm.csv','../data/bass/Walking_rhythm.csv']

# Filenames of the trinity ground truth stems
stem_filenames = ['../data/bass/2_bassX_Yellow_Coldplay_Bass Gr0half.wav',
'../data/bass/2_bassX_Billie Jean_Michael Jackson_BassGr1.wav',
'../data/bass/2_bassX_Just Looking_Stereophonics_BassGr1.wav',
'../data/bass/2_bassX_Brown Eyed Girl_Van Morrison_BassGr2.wav',
'../data/bass/2_bassX_(I_m A) Road Runner_Jr Walker _ The Allstars_Bass Gr3.wav',
'../data/bass/2_bassX_Walking On The Moon_Half.wav']

# Column names of the annotated columns in the rhythm files
col_list = ["onset", "muted", "offset"]

# Build and array of pandas data frames for all the annotations
# Load the Stems (stem_filenames) into the an array of audios  (raw_audio)
fs = 44100


# Window scaler m, nominally set at 1
#Setting the parameters 

windowSize = 1024
hopSize = 512
frameSize = windowSize
#These are the different energy thresholds for the different Trinity tracks
threshIndex = [0.049, 0.02, 0.1, 0.04505, 0.078, 0.1]
matching_window_size = 0.02 # MIREX reference