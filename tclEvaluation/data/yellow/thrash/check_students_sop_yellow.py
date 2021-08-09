
"""EnergyChecker_test.py

I recommend:
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
from student_grades_yellow import *
sys.path.insert(1, '../')
from onsetmetrics import *
from sop import *
from write_stats import *


# Number of students actually graded
numOfStudents = 6 

#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 
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
i= 0
df_array= []
while i < len(rhythm_filenames):
  df = pd.read_csv(rhythm_filenames[i], usecols=col_list)
  df_array.append(df)
  i+=1

fs = 44100

#Setting the parameters 

frameSize = 1024
hopSize = 512

#These are the different energy thresholds for the different Trinity tracks
threshIndex = [0.049, 0.049, 0.022, 0.04505, 0.078, 0.1]
matching_window_size = 0.05  # MIREX reference

student_path = '../data/bass/'

# Just do yellow for now

student_audio_name = []
index= 1
while index <= numOfStudents:
  theFilename=student_path+'0_yellow'+'/'+'yellow'+str(index)+'.wav'
  student = MonoLoader(filename = theFilename, sampleRate = fs)()
  student = student / np.max(np.abs(student))
  student_audio_name.append(theFilename)
  index+=1


# 2. Load the audio for the Dataset
onsetIndex  = onset_SOP(stem_filenames[0])
df = df_array[0]
onset_list = df["onset"].tolist()    
p,r,f = evaluate_accuracy(onset_list, onsetIndex, matching_window_size)
print(round(p,3), round(r,3), round(f,3))

#../data/bass/2_bassX_Yellow_Coldplay_Bass Gr0.wav
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

print("Length of onset list", len(onset_list))
# Do the Students
for i in range(numOfStudents): # Number of yellow student files  
    sonsetIndex = onset_SOP(student_audio_name[i])
    print( "YELLOW This is student number ", i+1, "Onset Len. length is ", len(sonsetIndex))
    sonsetIndexArray.append(sonsetIndex)
    sprecision, srecal, sf_measure_value=evaluate_accuracy(onset_list, sonsetIndex, 0.05)
    print("\n")
    print(i+1 ," precision, recal, f_measure_value",sprecision, srecal, sf_measure_value)
    print("\n")
    sp.append(sprecision)
    sr.append(srecal)
    sf.append(sf_measure_value)

onset_X, onset_mean, onset_std = write_sop_stem_stats(onsetIndex," onsets", p,r,f,"yellow_sop_gt")

the_student_grades = returnGradesYellow()
print("the student_grades SOP")
print(len(the_student_grades))

sonset_X, sonset_mean, sonset_std = write_sop_stats(sonsetIndexArray," onsets", the_student_grades,sp,sr,sf,"yellow")




