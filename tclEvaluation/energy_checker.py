#####################################################################################33
#
#	There are two algorithms here
#   1. Indexed Energy Checker-Based o Ramon Romeus research
#   2. calculateOffsetOnset- An adhoc energy measurment for extracting onsets and offsets
#

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
##########################
#include local libs
from sop  import *
from constantData import *
def pullEnergy(raw,startFrame,endFrame):
    signal_snipbit = raw[startFrame:endFrame]
    energy_signal_snipbit = es.Energy()(signal_snipbit) 
    ed = EffectiveDuration() (raw[startFrame:endFrame])
    d = Duration() (raw[startFrame:endFrame])
    if (d!=0):
        ratio = float(ed/d)
    else:
        ratio = 0
    return energy_signal_snipbit,ratio

def blend_iec_sop(audio_file,file_suffix,stem_index):
    fs = 44100
    raw = MonoLoader(filename = audio_file, sampleRate = fs)()
    raw = raw / np.max(np.abs(raw))
    # Save the IEC  onsets in a file for the stem
    theFilePath10 = DATA_PATH + dash + OSETS_TAG + dash + songList[stem_index]+file_suffix+'_onsets.csv'
    f10 = open(theFilePath10, "w")
    theFilePath11 = DATA_PATH + dash + OSETS_TAG + dash + songList[stem_index]+file_suffix+'_offsets.csv'
    f11 = open(theFilePath11, "w")

    # Capture the SOP
    onsetStemSOP = onset_SOP(audio_file)

    index=0

    new_onset_stem_array = []
    new_offset_stem_array = []
    energy_signal_snipbit_array = []
    ratio_array = []
    energy_signal_snipbit_array_time = []

    while index < len(onsetStemSOP)-1:   #  This is like a hard code, we know thi is the greater value
        startFrame = int( fs*(onsetStemSOP[index]))
        endFrame =   int( fs*(onsetStemSOP[index+1]))    
        ####################################		
        energy_signal_snipbit,ratio = pullEnergy(raw,startFrame,endFrame)
        energy_signal_snipbit_array.append(round(energy_signal_snipbit,2))
        ratio_array.append(round(ratio,3))
        if (stem_index==STEM_INDEX_YELLOW):
            if onsetStemSOP[index] > 17.0: # No music before this point
                energy_signal_snipbit_array_time.append(onsetStemSOP[index])
                f10.write(str(onsetStemSOP[index]))
                new_onset_stem_array.append(onsetStemSOP[index])
                f10.write("\n")
                f11.write(str(onsetStemSOP[index+1]))
                new_offset_stem_array.append(onsetStemSOP[index+1])
                f11.write("\n")
        index+=1

    f10.close
    return (new_onset_stem_array, new_offset_stem_array,energy_signal_snipbit_array,energy_signal_snipbit_array_time,ratio_array)


   
def myOnsetEnergyChecker(x,theFrameSize,theHopSize,thresh):
    """
    Calculates the energy of an input audio signal
    The energy of a discrete time signal can be computed as:
    begin{equation}
        energy = \sum_{n = 0}^{N-1} |x[n]|^2
    end{equation}
    where x[n] refers to the discrete time signal sample at index n
    """
    fs=44100
    NRG = [];
    #Main windowing and feature extraction loop
    for frame in FrameGenerator(x, frameSize = theFrameSize, hopSize = theHopSize):
        NRG.append(es.Energy()(frame))
    NRG = np.array(NRG)
    NRG = NRG / np.max(NRG)
    #Applying energy threshold to decide wave split boundaries
    split_decision_func = np.zeros_like(NRG)
    split_decision_func[NRG > thresh] = 1 # was 0.005
    #Setting segment boundaries
    #Inserting a zero at the beginning since we will decide the transitions using a diff function
    split_decision_func = np.insert(split_decision_func, 0, 0)
    diff_split_decision = np.diff(split_decision_func)
    #Start indexes: transition from 0 to 1
    start_indexes = np.nonzero(diff_split_decision > 0)[0] * theHopSize/fs
    #Stop indexes: transition from 1 to 0
    stop_indexes = np.nonzero(diff_split_decision < 0)[0] * theHopSize/fs
    return (start_indexes, stop_indexes,split_decision_func,NRG)


def calculateOffsetOnset(x,threshold,frameSize,hopSize,hopSizeScaleFactor):
  od1 = OnsetDetection(method='complex')#hfc
  rms_bands = []
  w = Windowing(type = 'hann')
  fft = FFT() # this gives us a complex FFT
  c2p = CartesianToPolar() # and this turns it into a pair (magnitude, phase)
  pool = essentia.Pool()
  for fstart in range(0, len(x)-frameSize, hopSize):
    frame = x[fstart:fstart+frameSize]
    rms_output= RMS()(frame)
    rms_bands.append(rms_output) # ONSET PART OF LOOP
    mag, phase, = c2p(fft(w(frame))) # ONSET PART OF LOOP
    pool.add('features.hfc', od1(mag, phase)) # ONSET PART OF LOOP
  #### ONSET CODE SECTION
  # Phase 2: compute the actual onsets locations
  onsets = Onsets()

  onsets_hfc = onsets(# this algo expects a matrix, not a vector
                      essentia.array([ pool['features.hfc'] ]),
                      # you need to specify weights, but as there is only a single
                      # function, it doesn't actually matter which weight you give it
                      [ 2 ])
  #### END ONSET CODE SECTION
  index= 0
  array_of_time_offsets= []
  flag = False
  last_index=0
  while index < len(rms_bands):
    if (abs(rms_bands[index])<threshold) and flag == False  and  (index!=0):
      # Skip very first
      array_of_time_offsets.append(index)
      flag = True
      last_index=index
    index+=1
    #We set flag back to false after determined time epriod
    increment_factor= int(hopSize/hopSizeScaleFactor)
    if index > last_index+increment_factor:
      flag = False
  a= array(array_of_time_offsets)
  fs=44100
  the_len= int(len(x)/hopSize)
  rms_bands1 = rms_bands[:the_len]
  b= (a*hopSize)/44100
  return(rms_bands1,b,onsets_hfc)