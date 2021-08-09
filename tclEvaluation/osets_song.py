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
from student_grades import *
from constantData import *
from onsetmetrics import *
from energy_checker import *
from write_stats import *
from sop  import *

STEM_INDEX=STEM_INDEX_YELLOW # GLOBAL VARIABLE

# Student Arrays for Energy Checker

print(" OPTIONS ARE"
      "\n"
      "0. Yellow"
      "\n"
      "1. Billie Jean"
      "\n"
      "2. Just Looking"
      "\n"
      "3. Brown Eyed girl"
      "\n"
      "4. Road Runner"
      "\n"
      "5. Walking on the Moon (WOTM)"
      "\n")
print("Choose song to analyse from 0 to 5:")
stem_index = int(input())

if (stem_index <0) or (stem_index > 5 ):
    print("Invalid input")
    exit(0)

sprecision_array = []
srecall_array   = []
sf_measure_value_array = []
sonset_deviationsArray=[]
soffset_deviationsArray=[]
############################################################################################################################################################

audio_file = stem_filenames[stem_index]

new_onset_stem_array, new_offset_stem_array, new_effective_durs = blend_iec_sop(audio_file, str(0), stem_index)

if (len(new_onset_stem_array)==0) or (len(new_offset_stem_array)==0):
    print("WARNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, empty deviations returned")
else:
    print("OK deviations")
    print("OK deviations")
    print("OK deviations")
#print(energy_signal_stem_array,energy_signal_stem_array_time,ratio_array )

# Build and array of pandas data frames for all the annotations
if os.path.isfile(rhythm_filenames[stem_index])==True:
    df = pd.read_csv(rhythm_filenames[stem_index], usecols=col_list)
    onset_list = df["onset"].tolist()
    offset_list = df["offset"].tolist()
else:
    print("File",rhythm_filenames[stem_index], "Does not exist")

# We get the PRF of the GT STEM
if  len(onset_list) == 0 or len(offset_list) == 0:
    print("ERROR IN READING THE ONSET AND OFFSET LISTS")
else:
    precision, recall, f_measure_value = evaluate_accuracy(onset_list, new_onset_stem_array, matching_window_size)

print(songList[stem_index],"STEM  precision, recall, f_measure_value", precision, recall, f_measure_value)

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

theFilePath = DATA_PATH + dash + songList[stem_index] + dash + songList[stem_index] + '_devs_student0'+'.csv'
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
numOfStudents = getNumberOfStudents (stem_index)

while student_index < numOfStudents:
    studentAudioFilename  = studentFilenames[stem_index]+str(student_index+1)+'.wav'
    snew_onset_stem_array, snew_offset_stem_array,sed = blend_iec_sop(studentAudioFilename,str(student_index+1),stem_index)

    sprecision, srecall, sf_measure_value = evaluate_accuracy(onset_list, snew_onset_stem_array, matching_window_size)

    print(student_index+1 ," IEC Student precision, recall, f_measure_value", sprecision, srecall, sf_measure_value)

    #dprecision, drecall, df_measure_value = evaluate_accuracy(onset_list, sed, matching_window_size)


    #print(student_index+1 ," Duration Energy Fidelity ", dur_Accuracy)
    sonset_deviations,soffset_deviations, smissing_onset_notes = match_rhythm(df, snew_onset_stem_array,snew_offset_stem_array,matching_window_size)

    # Append Student onset/offsets
    sprecision_array.append(sprecision)
    srecall_array.append(srecall)
    sf_measure_value_array.append(sf_measure_value)
    sonset_deviationsArray.append(sonset_deviations)
    soffset_deviationsArray.append(soffset_deviations)

    theFilePath = DATA_PATH+dash+songList[stem_index]+dash+songList[stem_index]+ '_devs_student' +str(student_index+1)+'.csv'

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

the_student_grades = returnGrades(stem_index)
 # Write Statistics for  IEC
#print(len(the_student_grades),len(sprecision_array),len(srecall_array),len(sf_measure_value_array))


########################## WRITE THE STATISICS FOR STUDENT0, 1- N


if (len(sonset_deviationsArray)==0) or (len(soffset_deviationsArray)==0):
    print("Warning: ZERO DEVIATIONS")

if (len(sonset_deviationsArray[0])==0) or (len(soffset_deviationsArray[0])==0):
    print("Warning: ZERO DEVIATIONS at STEM")


if (len(sprecision_array) == 0) or (len(srecall_array) == 0):
    print("Warning: ZERO PRFS")

write_stats(sonset_deviationsArray,soffset_deviationsArray," onsets", " offset",the_student_grades,sprecision_array,srecall_array,sf_measure_value_array,stem_index)



