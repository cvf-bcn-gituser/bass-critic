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


# Window scaler m, nominally set at 1
m=1 
windowSize = int(1024*m)
hopSize = int(512*m)
frameSize = windowSize

p = []
r = []
f = []
onsetIndexArray =  []
offsetIndexArray =  []
onset_deviationsArray  =  []
missing_onset_notesArray  =  []
thesholds = []
# Truncate yellow 17.21 to 21  22.72 to 27.573, 28.27 to 32
index = 1

matching_window_size = 0.02  # MIREX reference0


#     sonsetIndex = onset_SOP(student_audio_name[i])

index=0
while index < len(stem_filenames):# stem_filenames
    onsetIndex = onset_SOP(stem_filenames[index])
    df = df_array[index]
    print(stem_filenames[index])
    onset_list= df["onset"].tolist()    
    p,r,f=evaluate_accuracy(onset_list, onsetIndex, matching_window_size)
    print(round(p,3),round(r,3),round(f,3))
    index+=1


    
