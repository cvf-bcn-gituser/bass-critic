
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

from onsetmetrics import *
#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 
rhythm_filenames = ['data/bass/Yellow_rhythm.csv','data/bass/Billiejean_rhythm.csv','data/bass/Justlooking_rhythm.csv','data/bass/Brown_rhythm.csv','data/bass/Roadrunner_rhythm.csv','data/bass/Walking_rhythm.csv']

ground_t_offsets_array = []
ground_t_onsets_array = []
ground_t_durations_array = []

# Column names of the annotated columns in the rhythm files
col_list = ["onset", "muted", "offset"]

# Build and array of pandas data frames for all the annotations
i= 0
df_array= []
while i < len(rhythm_filenames):
  print(i)
  df = pd.read_csv(rhythm_filenames[i], usecols=col_list)
  df_array.append(df)
  i+=1

# Filenames of the trinity ground truth stems
stem_filenames = ['data/bass/2_bassX_Yellow_Coldplay_Bass Gr0.wav',
'data/bass/2_bassX_Billie Jean_Michael Jackson_BassGr1.wav',
'data/bass/2_bassX_Just Looking_Stereophonics_BassGr1.wav',
'data/bass/2_bassX_Brown Eyed Girl_Van Morrison_BassGr2.wav',
'data/bass/2_bassX_(I_m A) Road Runner_Jr Walker _ The Allstars_Bass Gr3.wav',
'data/bass/2_bassX_Walking On The Moon_Half.wav']

# Load the Stems (stem_filenames) into the an array of audios  (raw_audio)
fs = 44100
raw_audio = []
i= 0

while i < len(stem_filenames):
    audio_file = stem_filenames[i]
    raw = MonoLoader(filename = audio_file, sampleRate = fs)()
    raw = raw / np.max(np.abs(raw))
    raw_audio.append(raw)
    i+=1

# Window scaler m, nominally set at 1
#Setting the parameters 
m=1 
windowSize = int(1024*m)
hopSize = int(512*m)
frameSize = windowSize

#These are the different energy thresholds for the different Trinity tracks
threshIndex = [0.049, 0.049, 0.022, 0.04505, 0.078, 0.1]
matching_window_size = 0.05  # MIREX reference

student_path = 'data/bass/'

# Just do yellow for now
student_audio= []
index= 1
while index <= 12:
  theFilename=student_path+'0_yellow'+'/'+'yellow'+str(index)+'.wav'
  student = MonoLoader(filename = theFilename, sampleRate = fs)()
  student = student / np.max(np.abs(student))
  student_audio.append(student)
  index+=1


# 2. Load the audio for the Dataset
offset_deviations_array = []
onset_deviations_array = []
index=0
while index < 1:# stem_filenames
    onsetIndex, offsetIndex,split_decision_func = myOnsetEnergyChecker(raw_audio[index],frameSize,hopSize,threshIndex[index])
    df = df_array[index]
    onset_list = df["onset"].tolist()    
    p,r,f = evaluate_accuracy(onset_list, onsetIndex, matching_window_size)
    print(round(p,3), round(r,3), round(f,3))
    onset_deviations, offset_deviations, missing_onset_notes = match_rhythm(df, onsetIndex, offsetIndex, matching_window_size)
    #multiple_hist(onset_deviations1,"Onsets")
    #plt.show()
    #multiple_hist(offset_deviations1,"Offsets")
    #plt.show()
    index+=1

#data/bass/2_bassX_Yellow_Coldplay_Bass Gr0.wav
#0.939 0.942 0.94
# student Metrics
sp= []
sr= []
sf = []
sonsetIndexArray =  []
soffsetIndexArray =  []
sdurationIndexArray =  []
sonset_deviationsArray  =  []
soffset_deviationsArray  =  []
smissing_onset_notesArray  =  []

i=0
# Index 0 is yellow hard code the position for the onset lists here.
df = df_array[0]
print(stem_filenames[0])
onset_list = df["onset"].tolist() 

print("Length of onset list", len(onset_list))

# Do the Students
for i in range(12): # Number of yellow student files  
    sonsetIndex, soffsetIndex,split_decision_func = myOnsetEnergyChecker(student_audio[i], frameSize, hopSize ,threshIndex[0])
    print( "YELLOW This is student number ", i+1, "Onset Len. length is ", len(sonsetIndex))
    sonsetIndexArray.append(sonsetIndex)
    soffsetIndexArray.append(soffsetIndex)
    sprecision, srecal, sf_measure_value=evaluate_accuracy(onset_list, sonsetIndex, matching_window_size)
    print("\n")
    print(i+1 ," precision, recal, f_measure_value",sprecision, srecal, sf_measure_value)
    print("\n")
    sp.append(sprecision)
    sr.append(srecal)
    sf.append(sf_measure_value)
	
    sonset_deviations, soffset_deviations, smissing_onset_notes = match_rhythm(df, sonsetIndex, soffsetIndex, matching_window_size)
	
    sonset_deviationsArray.append(sonset_deviations)
    soffset_deviationsArray.append(soffset_deviations) 
    smissing_onset_notesArray.append(smissing_onset_notes)

	
billiejean_audio = []
while index <= 8:
  theFilename=student_path+'1_billiejean'+'/'+'billiejean'+str(index)+'.wav'
  student = MonoLoader(filename = theFilename, sampleRate = fs)()
  student = student / np.max(np.abs(student))
  billiejean_audio.append(student)
  index+=1
  
  
 

# 2. Load the audio for the Dataset
offset_deviations_array = []
onset_deviations_array = []
index=1
while index < 2:# stem_filenames
    onsetIndex, offsetIndex,split_decision_func = myOnsetEnergyChecker(raw_audio[index],frameSize,hopSize,threshIndex[index])
    df = df_array[index]
    onset_list = df["onset"].tolist()    
    p,r,f = evaluate_accuracy(onset_list, onsetIndex, matching_window_size)
    print(round(p,3), round(r,3), round(f,3))
    onset_deviations, offset_deviations, missing_onset_notes = match_rhythm(df, onsetIndex, offsetIndex, matching_window_size)
    #multiple_hist(onset_deviations1,"Onsets")
    #plt.show()
    #multiple_hist(offset_deviations1,"Offsets")
    #plt.show()
    index+=1


i=0
# Index 0 is yellow hard code the position for the onset lists here.
df = df_array[0]
print(stem_filenames[0])
onset_list = df["onset"].tolist() 
onsetIndex, offsetIndex,split_decision_func = myOnsetEnergyChecker(raw_audio[1],frameSize,hopSize,threshIndex[1])
df = df_array[1]
onset_list = df["onset"].tolist()    
p,r,f = evaluate_accuracy(onset_list, onsetIndex, matching_window_size)
print("BILLIE JEAN STEM", round(p,3), round(r,3), round(f,3))
print("Length of onset list", len(onset_list))

# Do the BJ  Students
for i in range(8): # Number of billie jean student files  
    sonsetIndex, soffsetIndex,split_decision_func = myOnsetEnergyChecker(billiejean_audio[i], frameSize, hopSize ,threshIndex[0])
    print( "BILLIE JEAN This is student number ", i+1, "Onset Len. length is ", len(sonsetIndex))
    sonsetIndexArray.append(sonsetIndex)
    soffsetIndexArray.append(soffsetIndex)
    sprecision, srecal, sf_measure_value=evaluate_accuracy(onset_list, sonsetIndex, matching_window_size)
    print("")
    print(i+1 ," precision, recal, f_measure_value",sprecision, srecal, sf_measure_value)
    print("")
    sp.append(sprecision)
    sr.append(srecal)
    sf.append(sf_measure_value)
	
    sonset_deviations, soffset_deviations, smissing_onset_notes = match_rhythm(df, sonsetIndex, soffsetIndex, matching_window_size)
	
    sonset_deviationsArray.append(sonset_deviations)
    soffset_deviationsArray.append(soffset_deviations) 
    smissing_onset_notesArray.append(smissing_onset_notes)
