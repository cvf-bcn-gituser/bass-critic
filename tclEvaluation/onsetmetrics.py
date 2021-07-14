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
# The match_events function returns results of matching pairs,deviations of thos pairs and the missing_notes
def match_events(gt_onsets, onsets, matching_window_size):
    """
    Finds best matching pairs so
       - distance between elements is no greater than matching_window_size
       - sum of all distances is minimized
    """
    # In case of performance issues for big piecs,
    # we could try to use simpler/faster local algorithm.
    m = scipy.spatial.distance_matrix([[x] for x in gt_onsets], [[x] for x in onsets])
    # don't consider events which are out of matching window size
    big_distance = 10 ** 6
    m[m > matching_window_size] = big_distance
    
    row_ind, col_ind = scipy.optimize.linear_sum_assignment(m)
    result = []
    missing_notes= 0
    deviations = []
    for (x, y) in zip(row_ind, col_ind):
        if abs(onsets[y]-gt_onsets[x]) <= matching_window_size:
            result.append((x, y))
            deviations.append(gt_onsets[x] - onsets[y])
        else:
            missing_notes+=1
    return result,deviations,missing_notes
#
# Helper function of f_measure
#
def f_measure(precision, recall):
    if precision == 0 and recall == 0:
        return 0.0
    return 2.0 * precision*recall / (precision + recall)
#    
# Helper function of evaluate accuracy
#
def evaluate_accuracy(gt_onsets, onsets, matching_window_size):
    matching,_,_= match_events(
        gt_onsets,
        onsets,
        matching_window_size)
    #print("DBG4")
    precision = float(len(matching)) / len(onsets)
    recall = float(len(matching)) / len(gt_onsets)
    f_measure_value = f_measure(precision, recall)
    return precision, recall, f_measure_value
    
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
    return (start_indexes, stop_indexes,split_decision_func)

def multiple_hist(deviationsArray1,title_text1):
    a = np.array(deviationsArray1)
    m, s = mean(a), sqrt(mean(a*a))
    am = mean(abs(a))

    summary= title_text1+"ABS Mean: %f, Mean: %f, Dev. from 0: %f" %(am, m, s)
    print(summary)
    title =   title_text1

    #plt.title(title)
    #plt.figure(1, figsize=(9.5, 6))
    #plt.hist(a)

def match_rhythm(df, onsets, offsets, matching_window_size):
    """
    Finds best matching pairs so
       - distance between elements is no greater than matching_window_size
       - sum of all distances is is minimized
       - also returns the fidelity ( conformance to 100% hit notes)
    """
    result = []
    missing_onset_notes= 0
    onset_deviation_array = []
    offset_deviation_array = []
    rhythm_deviation_array = []

    gt_onsets = df["onset"].tolist()
    gt_offsets = df["offset"].tolist()
    gt_muted= df["muted"].tolist()

    m = scipy.spatial.distance_matrix([[x] for x in gt_onsets], [[x] for x in onsets])
    # don't consider events which are out of matching window size
    big_distance = 10 ** 6
    m[m > matching_window_size] = big_distance

    row_ons, col_ons = scipy.optimize.linear_sum_assignment(m)
    jindex=-1
    for (xn, yn) in zip(row_ons, col_ons):
        jindex+=1
        if abs((onsets[yn]) - gt_onsets[xn]) <= matching_window_size:
            onset_deviation_array.append((onsets[yn]) - gt_onsets[xn]) 
            # We are within margin
            # Check if Muted
            if gt_muted[xn]=='Y':
              if abs((offsets[yn]) - gt_offsets[xn]) <= matching_window_size*2:
                 offset_deviation_array.append(offsets[yn] - gt_offsets[xn])
            else:
              if (xn+1 <len (row_ons)):
                 offset_deviation_array.append(offsets[yn] - gt_onsets[xn+1])
        else:
            missing_onset_notes+=1
    return onset_deviation_array,offset_deviation_array,missing_onset_notes
### TBD rename this
### This works using the stoeln onsets principle
def match_onset1(gt_onsets, onsets, gt_offsets, offsets, matching_window_size):
    """
    Finds best matching pairs so
       - distance between elements is no greater than matching_window_size
       - sum of all distances is is minimized
       - also returns the fidelity ( conformance to 100% hit notes)
    """
    result = []
    missing_onset_notes= 0
    missing_offset_notes= 0
    stolen_onsets= 0
    onset_deviation_array = []
    offset_deviation_array = []
    duration_deviation_array = []

    m = scipy.spatial.distance_matrix([[x] for x in gt_onsets], [[x] for x in onsets])
    # don't consider events which are out of matching window size
    big_distance = 10 ** 6
    m[m > matching_window_size] = big_distance

    row_ons, col_ons = scipy.optimize.linear_sum_assignment(m)

    for (xn, yn) in zip(row_ons, col_ons):
        if abs(onsets[yn] - gt_onsets[xn]) <= matching_window_size:
            if offsets[yn-1]>=onsets[yn]:
                offsets[yn-1]=onsets[yn]
                stolen_onsets+=1
            if abs(offsets[yn] - gt_offsets[xn]) <= matching_window_size*1.5:
                onset_deviation_array.append(onsets[yn] - gt_onsets[xn]) 
                offset_deviation_array.append(offsets[yn] - gt_offsets[xn])
            else:
                missing_offset_notes+=1
        else:
            missing_onset_notes+=1  
    return onset_deviation_array,offset_deviation_array,missing_onset_notes,missing_offset_notes,stolen_onsets
	
	
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