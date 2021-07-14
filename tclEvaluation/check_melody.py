
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

from pitch_melody import *
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
stem_index=0
global_onset_deviationsArray = []
global_offset_deviationsArray = []
global_precision = []
global_recall = []
global_fmeasure = []

# We just do two Tracks for now 
#0:  Yellow
#1:  Billie Jean
sprecision_array = []
srecall_array   = []
sf_measure_value_array = []


f0= open("onsets_sop.txt", "w")
f1= open("onsets_iec.txt", "w")
stem_index=2
while stem_index <3:
  df = pd.read_csv(rhythm_filenames[stem_index], usecols=col_list)
  df_array.append(df)
  onset_list = df["onset"].tolist()   
  audio_file = stem_filenames[stem_index]
  raw = MonoLoader(filename = audio_file, sampleRate = fs)()
  raw = raw / np.max(np.abs(raw))
  # Capture the Energy Island of (0) Yello (1) Billie Jean

  onsetStemIndex, offsetStemIndex = onsetPitchMelody(raw)
  
  print(onsetStemIndex)
  print("\n\n")
  print(offsetStemIndex)
  """
  precision, recall, f_measure_value = evaluate_accuracy(onset_list, onsetStemIndex, matching_window_size)
  print(precision, recall, f_measure_value)
  precision, recall, f_measure_value = evaluate_accuracy(onset_list, offsetStemIndex, matching_window_size)
  print(precision, recall, f_measure_value)
  """
  stem_index+=1
