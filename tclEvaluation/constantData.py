#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 
STEM_INDEX_YELLOW = 0
STEM_INDEX_BJEAN = 1
STEM_INDEX_JUST = 2
STEM_INDEX_BROWN = 3
STEM_INDEX_ROAD = 4
STEM_INDEX_WOTM = 5

yellowTag = "yellow"
bjeanTag = "bjean"
justTag = "just"
brownTag = "brown"
roadTag = "road"
wotmTag = "wotm"
dash= '/'

songList = [yellowTag,bjeanTag,justTag,brownTag,roadTag,wotmTag]

################################################ AUDIO PATHS################################################

AUDIO_PATH = 'audio'

yellowStem =  '2_bassX_Yellow_Coldplay_Bass Gr0half.wav'
bjeanStem =  '2_bassX_Billie Jean_Michael Jackson_BassGr1.wav'
justStem =  '2_bassX_Just Looking_Stereophonics_BassGr1_Half.wav'
brownStem = '2_bassX_Brown Eyed Girl_Van Morrison_BassGr2half.wav'
roadStem = '2_bassX_(I_m A) Road Runner_Jr Walker _ The Allstars_Bass Gr3Half.wav'
wotmStem = '2_bassX_Walking On The Moon_Half.wav'


yellowStemPath =  AUDIO_PATH + dash + yellowStem
bjeanStemPath =   AUDIO_PATH + dash + bjeanStem
justStemPath =  AUDIO_PATH + dash + justStem
brownStemPath= AUDIO_PATH + dash + brownStem
roadStemPath = AUDIO_PATH + dash + roadStem
wotmStemPath = AUDIO_PATH + dash + wotmStem

stem_filenames = [yellowStemPath,bjeanStemPath,justStemPath,brownStemPath,roadStemPath,wotmStemPath]

yellowStudentAudio  = AUDIO_PATH + dash + yellowTag + dash + yellowTag
bjeanStudentAudio =  AUDIO_PATH + dash + bjeanTag + dash + bjeanTag
justStudentAudio     = AUDIO_PATH + dash + justTag + dash + justTag
brownStudentAudio    = AUDIO_PATH + dash + brownTag + dash + brownTag
roadStudentAudio   = AUDIO_PATH + dash + roadTag + dash + roadTag
wotmStudentAudio   = AUDIO_PATH + dash + wotmTag + dash + wotmTag

studentFilenames = [yellowStudentAudio, bjeanStudentAudio, justStudentAudio, brownStudentAudio, roadStudentAudio,wotmStudentAudio]


################################################ DATA PATHS ################################################

DATA_PATH = 'data'
rhythmTag = '_rhythm.csv'

yellowRhythmFilename =  DATA_PATH + dash+yellowTag + rhythmTag
bjeanRhythmFilename =  DATA_PATH + dash+bjeanTag + rhythmTag
justRhythmFilename     = DATA_PATH + dash+justTag + rhythmTag
brownRhythmFilename    = DATA_PATH + dash+brownTag +rhythmTag
roadRhythmFilename   = DATA_PATH + dash+roadTag + rhythmTag
wotmRhythmFilename   = DATA_PATH + dash+wotmTag + rhythmTag
rhythm_filenames = [yellowRhythmFilename, bjeanRhythmFilename, justRhythmFilename, brownRhythmFilename, roadRhythmFilename,wotmRhythmFilename]

STATS_PATH = 'stats_and_devs'
################################################ Statistics Column Headers  ################################################
header1TF = ["Student", "precision", "recall", "f_measure_value", "Onset ABS Mean", "Onset Mean", "Onset Std",
             "Duration ABS Mean", "Duration Mean", "Duration Std", "onsetMark", " DurationMark", " TF 1 Mark ",
             "Sound Quality Mark",  " finalMark"]

header2TF = ["Student", "precision", "recall", "f_measure_value", "Onset ABS Mean", "Onset Mean", "Onset Std",
             "Duration ABS Mean", "Duration Mean", "Duration Std", "onsetMark", " DurationMark", " TF 1 Mark ",
             " TF 2 Mark ", "Sound Quality Mark", " finalMark"]

# Column names of the annotated columns in the rhythm files
col_list = ["onset", "muted", "offset"]

OSETS_TAG = 'osets' # output director for onsets and offsets

################################################ AUDIO PARAMETERS  ################################################

fs = 44100
windowSize = 1024
hopSize = 512
frameSize = windowSize

THRESHOLD_FOR_EFFECTIVE_DURATION = 0.05 #  For the Eddesnti library function EffectiveDuration
#These are the different energy thresholds for the different Trinity tracks from  Stem 0 to Stem 5
threshIndex = [0.049, 0.02, 0.1, 0.04505, 0.078, 0.1]
matching_window_size = 0.02 # 0.0125 # MIREX reference

def getNumberOfStudents(stem_index):
    if stem_index == STEM_INDEX_YELLOW:
        return(8)
    elif stem_index == STEM_INDEX_BJEAN:
        return(15)
    elif stem_index == STEM_INDEX_JUST:
        return (12)
    elif stem_index == STEM_INDEX_BROWN:
        return (8)
    elif stem_index == STEM_INDEX_ROAD:
        return (8)
    elif stem_index == STEM_INDEX_WOTM:
        return (11)
    else:
        return (8)

def getStartPoint(stem_index):
    if stem_index == STEM_INDEX_YELLOW:
        return(17.0)
    elif stem_index == STEM_INDEX_BJEAN:
        return(4.8)
    elif stem_index == STEM_INDEX_JUST:
        return (15.1)
    elif stem_index == STEM_INDEX_BROWN:
        return (3.2)
    elif stem_index == STEM_INDEX_ROAD:
        return (3.4)
    elif stem_index == STEM_INDEX_WOTM:
        return (3.0)
    else:
        return (0.0)