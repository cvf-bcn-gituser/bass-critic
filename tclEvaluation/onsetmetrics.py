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
    
def evaluate_energy_accuracy(gt_onsets, audio):



    return precision, recall, f_measure_value
	
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


