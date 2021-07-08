
"""EnergyChecker_test.py


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
from extractors  import *
#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 
# 1. Preparing the Dataset (annotations)
audio_files = [
'data/bass/abesser/002.wav',
'data/bass/abesser/004.wav',
'data/bass/abesser/010.wav',
'data/bass/abesser/012.wav']

# To Colm: consider converting them to .csv
annotation_files = [
 'data/bass/abesser/002.xml',
 'data/bass/abesser/004.xml',
 'data/bass/abesser/010.xml',
 'data/bass/abesser/012.xml']

ground_t_offsets_array = []
ground_t_onsets_array = []
ground_t_durations_array = []


    
################# Main section
for xml_file in annotation_files:
    ground_t_onsets, ground_t_offsets = extract_onsets_offsets_from_xml(xml_file)  
    ground_t_offsets_array.append(ground_t_offsets) 
    ground_t_onsets_array.append(ground_t_onsets) 

# 2. Load the audio for the Dataset
raw_audio = []
fs = 44100
for audio_file in audio_files:
    raw = MonoLoader(filename = audio_file, sampleRate = fs)()
    raw = raw / np.max(np.abs(raw))
    raw_audio.append(raw)
    

golden_offsets_0 = array(ground_t_onsets_array[0])
golden_onsets_0 = array(ground_t_offsets_array[0])
golden_offsets_1 = array(ground_t_onsets_array[1])
golden_onsets_1 = array(ground_t_offsets_array[1])
golden_offsets_2 = array(ground_t_onsets_array[2])
golden_onsets_2= array(ground_t_offsets_array[2])
golden_offsets_3 = array(ground_t_onsets_array[3])
golden_onsets_3 = array(ground_t_offsets_array[3])

m=1
windowSize = int(1024*m)
hopSize = int(512*m)
frameSize = windowSize

rmsCF, offsetCF, onsetCF= calculateOffsetOnset(raw_audio[0],0.1,frameSize,hopSize,90) # short inter note gap
onsetSOP = onset_SOP(audio_files[0])
threshold = 0.05
onsetEC, offsetEC,split_decision_func= myOnsetEnergyChecker(raw_audio[0],frameSize,hopSize, threshold)

matching_window_size= 0.15 #ms

precision1, recal1, f_measure_value1=    evaluate_accuracy(golden_onsets_0, onsetCF, matching_window_size)
precision2, recal2, f_measure_value2=    evaluate_accuracy(golden_onsets_0, onsetSOP, matching_window_size)
precision3, recal3, f_measure_value3=    evaluate_accuracy(golden_onsets_0, onsetEC, matching_window_size)

print("Results for 002.wav  precision , recal1, f_measure_value")
print("Accuracy for Onset: Colms method")
print(round( precision1,3), round(recal1,3), round(f_measure_value1,3))
print("Accuracy for Onset: Ramon SOP method")
print(round(precision2,3), round(recal2,3), round(f_measure_value2,3))
print("Accuracy for Onset: Ramon EC smethod")
print(round(precision3,3), round(recal3,3), round(f_measure_value3,3))

