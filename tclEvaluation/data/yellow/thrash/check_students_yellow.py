
"""EnergyChecker_test.py

Hi Colm, thank you for the update. I participated in bachelor theses defences which is finished right now. Considering the repository, I recommend:
write requirements.txt file, so all requirements could be installed with pip3 install -r requirements.txt
Add more to README.md: installation instructions, entry points (what to run, etc)
"""
############# Library section
############# 
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
from sop import *
from write_stats import *

numOfStudents = 6 
# We just do two Tracks for now 
#0:  Yellow
#1:  Billie Jean

stem_index=0


# Student Arrays for Energy Checker
sonset_deviationsArray=[]
soffset_deviationsArray=[]
sprecision_array = []
srecall_array   = []
sf_measure_value_array = []

# Student Arrays for SOP
onset_deviationsArray=[]
sprecision_sop_array = []
srecall_sop_array   = []
sf_measure_value_sop_array = []

# Build and array of pandas data frames for all the annotations
i= 0
df = pd.read_csv(rhythm_filenames[stem_index], usecols=col_list)
onset_list = df["onset"].tolist()   
offset_list = df["offset"].tolist()   
audio_file = stem_filenames[stem_index]
raw = MonoLoader(filename = audio_file, sampleRate = fs)()
raw = raw / np.max(np.abs(raw))


# Capture the Energy Island of (0) Yellow 
onsetStemIndex, offsetStemIndex,_ = myOnsetEnergyChecker(raw,frameSize,hopSize,threshIndex[stem_index])
precision, recall, f_measure_value = evaluate_accuracy(onset_list, onsetStemIndex, matching_window_size)
onset_deviations,offset_deviations, missing_onset_notes = match_rhythm(df,onsetStemIndex,offsetStemIndex,matching_window_size)
print(songList[stem_index],"STEM  precision, recall, f_measure_value", precision, recall, f_measure_value)
write_stem_stats(onset_deviations,offset_deviations," onsets", " offset",precision,recall,f_measure_value,"yellow_iec_gt")
# Capture the SOP
onsetStemSOP = onset_SOP(audio_file)
onset_list = df["onset"].tolist()    
precision_sop, recall_sop, f_measure_value_sop = evaluate_accuracy(onset_list, onsetStemSOP, matching_window_size)
print(round(precision_sop,3), round(recall_sop,3), round(f_measure_value_sop,3))
sonsetSopArray =  []
sonset_SopDeviationsArray  =  []

student_index= 0
while student_index < numOfStudents:
 studentAudioFilename  = studentFilenames[stem_index]+str(student_index+1)+'.wav'
 sraw = MonoLoader(filename = studentAudioFilename, sampleRate = fs)()
 sraw = sraw / np.max(np.abs(sraw))
 # Commenting out the version that is for the SOP
 sonsetIndex, soffsetIndex,ssplit_decision_func = myOnsetEnergyChecker(sraw,frameSize,hopSize,threshIndex[stem_index])
 sprecision, srecall, sf_measure_value = evaluate_accuracy(onset_list, sonsetIndex, matching_window_size)
 print(student_index+1 ," IEC Student precision, recall, f_measure_value", sprecision, srecall, sf_measure_value)
 sonset_deviations,soffset_deviations, smissing_onset_notes = match_rhythm(df, sonsetIndex,soffsetIndex,matching_window_size)
 # Append Student onset/offsets
 sprecision_array.append(sprecision)
 srecall_array.append(srecall)
 sf_measure_value_array.append(sf_measure_value)
 sonset_deviationsArray.append(sonset_deviations)
 soffset_deviationsArray.append(soffset_deviations)
 
 ################# SOP Part
 onsetStudentSOP = onset_SOP(studentAudioFilename)
 print( "YELLOW This is student number ", i+1, "Onset Len. length is ", len(sonsetIndex))
 sonset_SopDeviationsArray.append(onsetStudentSOP)
 sprecision, srecall, sf_measure_value=evaluate_accuracy(onset_list, onsetStudentSOP, matching_window_size)
 print("\n")
 print(student_index+1 ," SOP  Student precision, recal, f_measure_value",sprecision, srecall, sf_measure_value)
 print("\n")
 sprecision_sop_array.append(sprecision)
 srecall_sop_array.append(srecall)
 sf_measure_value_sop_array.append(sf_measure_value)  
 #################
 student_index+=1 
print ("done")	 


the_student_grades = returnGradesYellow()
 # Write Statistics for  IEC
write_stats(sonset_deviationsArray,soffset_deviationsArray," onsets", " offset",the_student_grades,sprecision_array,srecall_array,sf_measure_value_array,"Yellow")
 # Write Statistics for  SOP
write_sop_stats(sonset_SopDeviationsArray," onsets", the_student_grades,sprecision_sop_array,srecall_sop_array,sf_measure_value_sop_array,"yellow")
