
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
import pickle
from pickle import load
from scipy.signal import find_peaks
import ipywidgets as widgets
from scipy import signal
from lxml import etree
import plotly.express as px
import scipy
from mir_eval import *
from statistics import mean
import math
from math import sqrt
import pandas as pd
import sys
############# My Libraries
from onsetmetrics import *
from sop import *
from write_stats import *
from student_grades_billie import *

#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 

"""
Roadrunner        H = 40
"""

numOfStudents=8
rhythm_filenames = ['data/bass/Yellow_rhythm.csv','data/bass/Billiejean_rhythm.csv','data/bass/Justlooking_rhythm.csv','data/bass/Brown_rhythm.csv','data/bass/Roadrunner_rhythm.csv','data/bass/Walking_rhythm.csv']

# Filenames of the trinity ground truth stems
stem_filenames = ['data/bass/2_bassX_Yellow_Coldplay_Bass Gr0.wav',
'data/bass/2_bassX_Billie Jean_Michael Jackson_BassGr1.wav',
'data/bass/2_bassX_Just Looking_Stereophonics_BassGr1.wav',
'data/bass/2_bassX_Brown Eyed Girl_Van Morrison_BassGr2.wav',
'data/bass/2_bassX_(I_m A) Road Runner_Jr Walker _ The Allstars_Bass Gr3.wav',
'data/bass/2_bassX_Walking On The Moon_Half.wav']


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
matching_window_size = 0.02  # MIREX reference

onsetIndex  = onset_SOP( stem_filenames[2])
df = df_array[2]
onset_list = df["onset"].tolist()    
p,r,f = evaluate_accuracy(onset_list, onsetIndex, matching_window_size)
print(round(p,3), round(r,3), round(f,3))

"""
initial_C = 0.99
indexC = initial_C
while indexC < 2.29:
	
	# 2. Load the audio for the Dataset
	onsetIndex  = onset_SOP( stem_filenames[4])
	df = df_array[4]
	onset_list = df["onset"].tolist()    
	p,r,f = evaluate_accuracy(onset_list, onsetIndex, matching_window_size)
	print(round(p,3), round(r,3), round(f,3))
	indexC+=0.1
"""


