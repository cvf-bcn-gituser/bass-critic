
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
import IPython.display as ipd
import os

import IPython
import pickle
from pickle import load
from scipy.signal import find_peaks
import ipywidgets as widgets
from scipy import signal
from lxml import etree

import plotly.express as px
import scipy

import mir_eval
from mir_eval import *
from statistics import mean
import math
from math import sqrt
import pandas as pd
import sys
import csv  

from onsetmetrics import *
from sop import *
from write_stats import *
from student_grades_yellow import *

numOfStudents = 6 

#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 
student_path = 'data/bass/'
yellowFilename  = student_path+'0_yellow'+'/'+'yellow'
#billieJeanFilename = student_path+'1_billiejean'+'/'+'billiejean'
billieJeanFilename = student_path+'1_billiejean'+'/'+'bj'
justFilename     = student_path+'1_justlooking'+'/'+'justlooking'
brownFilename    = student_path+'2_brown'+'/'+'brown'
roadFilename    = student_path+'3_roadrunner'+'/'+'road'
wotmFilename    = student_path+'3_wotm'+'/'+'wotm'
 
studentFilenames = [yellowFilename, billieJeanFilename, justFilename, brownFilename, roadFilename,wotmFilename]
songList = ['yellow', 'billieJean','justlooking','brown','roadrunner','wotm']
rhythm_filenames = ['data/bass/Yellow_rhythm.csv','data/bass/Billiejean_rhythm.csv','data/bass/Justlooking_rhythm.csv','data/bass/Brown_rhythm.csv','data/bass/Roadrunner_rhythm.csv','data/bass/Walking_rhythm.csv']

# Filenames of the trinity ground truth stems
stem_filenames = ['data/bass/2_bassX_Yellow_Coldplay_Bass Gr0half.wav',
'data/bass/2_bassX_Billie Jean_Michael Jackson_BassGr1.wav',
'data/bass/2_bassX_Just Looking_Stereophonics_BassGr1.wav',
'data/bass/2_bassX_Brown Eyed Girl_Van Morrison_BassGr2.wav',
'data/bass/2_bassX_(I_m A) Road Runner_Jr Walker _ The Allstars_Bass Gr3.wav',
'data/bass/2_bassX_Walking On The Moon_Half.wav']




ground_t_offsets_array = []
ground_t_onsets_array = []

# Column names of the annotated columns in the rhythm files
col_list = ["onset", "muted", "offset"]

# Build and array of pandas data frames for all the annotations
# Load the Stems (stem_filenames) into the an array of audios  (raw_audio)
fs = 44100

i= 0
# Window scaler m, nominally set at 1
#Setting the parameters 
m=1 
windowSize = int(1024*m)
hopSize = int(512*m)
frameSize = windowSize
#These are the different energy thresholds for the different Trinity tracks
threshIndex = [0.049, 0.02, 0.1, 0.04505, 0.078, 0.1]
matching_window_size = 0.02 # MIREX reference
raw_audio = []
df_array= []

onsetStemIndexArray = []
offsetStemIndexArray = []
global_sonset_deviationsArray = []
global_soffset_deviationsArray = []
global_sprecision = []
global_srecall = []
global_sfmeasure = []

# We just do two Tracks for now 
#0:  Yellow
#1:  Billie Jean

stem_index=0
onset_deviationsArray=[]
offset_deviationsArray=[]
precision_array = []
recall_array   = []
f_measure_value_array = []

while stem_index <1:

  sonset_deviationsArray=[]
  soffset_deviationsArray=[]
  sprecision_array = []
  srecall_array   = []
  sf_measure_value_array = []
  df = pd.read_csv(rhythm_filenames[stem_index], usecols=col_list)
  df_array.append(df)
  onset_list = df["onset"].tolist()   
  offset_list = df["offset"].tolist()   
  audio_file = stem_filenames[stem_index]
  raw = MonoLoader(filename = audio_file, sampleRate = fs)()
  raw = raw / np.max(np.abs(raw))
  # Capture the Energy Island of (0) Yellow (1) Billie Jean
  #onsetStemIndex0 = onset_SOP(audio_file)
  onsetStemIndex, offsetStemIndex,split_decision_func = myOnsetEnergyChecker(raw,frameSize,hopSize,threshIndex[stem_index])
  precision, recall, f_measure_value = evaluate_accuracy(onset_list, onsetStemIndex, matching_window_size)
  onset_deviations,offset_deviations, missing_onset_notes, missing_offset_notes, stolen_onsets = match_onset1(onset_list,onsetStemIndex,offset_list,offsetStemIndex,matching_window_size)
  # Add stem statistic to array element 0
  precision_array.append(precision)
  recall_array.append(recall)
  f_measure_value_array.append(f_measure_value)
  onset_deviationsArray.append(onset_deviations)
  offset_deviationsArray.append(offset_deviations)
  
  header = ["Student","precision","recall","f_measure_value","Onset ABS Mean","Onset Mean","Onset Std",
         "Duration ABS Mean","Duration Mean","Duration Std","onsetMark"," DurationMark"," articulationMark ","soundQualityMark","volumeControlMark"," finalMark"]
 
	  
  # Add stem statistic to array element 0
  print(songList[stem_index],"STEM  precision, recall, f_measure_value", precision, recall, f_measure_value)

  raw_audio.append(raw)
   
  student_index= 0

  while student_index < 8:
     studentAudioFilename  = studentFilenames[stem_index]+str(student_index+1)+'.wav'
     sraw = MonoLoader(filename = studentAudioFilename, sampleRate = fs)()
     sraw = sraw / np.max(np.abs(sraw))
     # Commenting out the version that is for the SOP
     #sonsetIndex = onset_SOP(studentAudioFilename)
     sonsetIndex, soffsetIndex,ssplit_decision_func = myOnsetEnergyChecker(sraw,frameSize,hopSize,threshIndex[stem_index])
     sprecision, srecall, sf_measure_value = evaluate_accuracy(onset_list, sonsetIndex, matching_window_size)
     print(student_index+1 ,"Student precision, recall, f_measure_value", sprecision, srecall, sf_measure_value)
     onset_deviations,offset_deviations, missing_onset_notes, missing_offset_notes, sstolen_onsets = match_onset1(onset_list,sonsetIndex,offset_list,soffsetIndex,matching_window_size)
     # Append Student onset/offsets
     sprecision_array.append(sprecision)
     srecall_array.append(srecall)
     sf_measure_value_array.append(sf_measure_value)
     sonset_deviationsArray.append(onset_deviations)
     soffset_deviationsArray.append(offset_deviations)
     student_index+=1 
  print ("done")	 
  global_sonset_deviationsArray.append(sonset_deviationsArray)
  global_soffset_deviationsArray.append(soffset_deviationsArray)
  global_sprecision.append(sprecision_array)
  global_srecall.append(srecall_array)
  global_sfmeasure.append(sf_measure_value_array)
  stem_index+=1

  
  
onset_X, onset_mean, onset_std, duration_X, duration_mean, duration_std= write_stem_stats(onset_deviationsArray[0],offset_deviationsArray[0]," onsets", " offset",precision,recall,f_measure,"yellow_iec_gt")


the_student_grades = returnGradesYellow()
 # Write Statistics for  

print("the_ IEC student_grades")
print(len(the_student_grades))

onset_X, onset_mean, onset_std, duration_X, duration_mean, duration_std= write_stats(global_sonset_deviationsArray[0],global_soffset_deviationsArray[0]," onsets", " offset",the_student_grades,global_sprecision[0],global_srecall[0],global_sfmeasure[0],"Yellow")

