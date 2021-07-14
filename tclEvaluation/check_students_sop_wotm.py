
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
from sop import *
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
raw_audio_name = []
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
student_audio_name = []
index= 1
while index <= 8:
  theFilename=student_path+'3_wotm'+'/'+'wotm'+str(index)+'.wav'
  student = MonoLoader(filename = theFilename, sampleRate = fs)()
  student = student / np.max(np.abs(student))
  student_audio.append(student)
  student_audio_name.append(theFilename)
  index+=1


# 2. Load the audio for the Dataset
onsetIndex  = onset_SOP(stem_filenames[5])
df = df_array[5]
onset_list = df["onset"].tolist()    
p,r,f = evaluate_accuracy(onset_list, onsetIndex, matching_window_size)
print(round(p,3), round(r,3), round(f,3))


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


print("Length of onset list", len(onset_list))

# Do the Students
for i in range(8): 
    sonsetIndex = onset_SOP(student_audio_name[i])
    print( " This is student number ", i+1, "Onset Len. length is ", len(sonsetIndex))
    sonsetIndexArray.append(sonsetIndex)
    sprecision, srecal, sf_measure_value=evaluate_accuracy(onset_list, sonsetIndex, 0.05)
    print("\n")
    print(i+1 ," precision, recal, f_measure_value",sprecision, srecal, sf_measure_value)
    print("\n")
    sp.append(sprecision)
    sr.append(srecal)
    sf.append(sf_measure_value)
	