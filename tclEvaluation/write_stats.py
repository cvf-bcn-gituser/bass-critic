import madmom
from essentia.standard import *
from essentia import Pool, array
import essentia.standard as es
import matplotlib.pyplot as plt
import numpy as np
import IPython.display as ipd
import pandas as pd
import os

import IPython
import pickle
from pickle import load
from scipy.signal import find_peaks
import ipywidgets as widgets
from scipy import signal
from lxml import etree

import os
import numpy as np
import essentia.standard as ess
import vamp
import simmusic
#from simmusic.dtw import dtw
from joblib import load
from simmusic import constants
from scipy.spatial.distance import cosine
import matplotlib.pyplot as plt
from collections import Counter
import csv 
import re

import plotly.express as px
import scipy
import csv  
from math import sqrt
from  statistics  import *
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')

import os

import matplotlib.pyplot as plt

def hist_and_stats(deviations,title_text):
    a = np.array(deviations)
    #plt.title(title_text)
    #plt.hist(a)
    #plt.show()
    m, s = mean(a), sqrt(mean(a*a))
    #print("Mean: %f, Deviation from zero: %f" %(m, s))
    return m, s


def aggregate_hist_and_stats(deviationArrays,title_text):
    all_deviations = []
    for d in deviationArrays:
        all_deviations.extend(d)
        # presentation of individual songs, if you need it
        #hist_and_stats(onset_deviationsArray[i])
    hist_and_stats(all_deviations,title_text)

import plotly.express as px

def write_stats(deviationsArray1,deviationsArray2,title_text1,title_text2,student_grades,sp,sr,sf,song):
  header = ["Student","precision","recall","f_measure_value","Onset ABS Mean","Onset Mean","Onset Std",
         "Duration ABS Mean","Duration Mean","Duration Std","onsetMark"," DurationMark"," articulationMark ","soundQualityMark","volumeControlMark"," finalMark"]
      
  ##TODO add a song name as directory here.	  
  fname = '../data/StudentStatistics_IEC_'+ song + '.csv'
  with open(fname, 'w', encoding='UTF8') as f:
     writer = csv.writer(f)
     # write the header
     writer.writerow(header)

     studentStatistics = []
     onset_X = []  # Martis mark
     onset_amean = []
     onset_mean = []
     onset_std= []

     duration_X = [] # Martis mark
     duration_amean = []
     duration_mean = []
     duration_std= []
     #print("******************************student_grades******************************")
     #print(len(student_grades))
     jin=0
     for k in range(len(student_grades)):
        studentStatistics.append(str(k+1))
        student_stats1 = [] # onsets
        student_stats2 = [] # durations

        a = np.array(deviationsArray1[k])
        #print(a[0:11])
        onset_m, onset_s = mean(a), sqrt(mean(a*a))
        onset_am= mean(abs(a))
        onset_summary= "Onset ABS  Mean: %f,Onset Mean: %f, Dev. from 0: %f" %(onset_am,onset_m, onset_s)
        #print("onset_summary: ",onset_summary)
        title =   "Student " + str(k+1)+ title_text1

        onset_X.append( student_grades[k][0])  # Martis mark
        onset_mean.append(onset_m)
        onset_amean.append(onset_am)
        onset_std.append(onset_s)

        #plt.title(title)
        #plt.figure(1, figsize=(9.5, 6))
        #plt.hist(a)


        #fig = px.histogram(a, x="title")
        #fig.write_image("images/fig1.png")
        #fig.show()
		
		
        ##plt.subplot(2,2,2)
        a = np.array(deviationsArray2[k])
        duration_m, duration_s = mean(a), sqrt(mean(a*a))
        duration_am= mean(abs(a))
        duration_summary= "Offset Mean: %f, Dev. from 0: %f" %(duration_m, duration_s)
        title =   "Student " + str(k+1)+ title_text2
        #print("duration_summary: ",duration_summary)
        duration_X.append( student_grades[k][0])  # Martis mark
        duration_mean.append(duration_m)
        duration_amean.append(duration_am)
        duration_std.append(duration_s)

        #plt.title(title)
        #plt.figure(1, figsize=(9.5, 6))
        #plt.hist(a)

        #plt.show()

        studentStatistics = []
        studentStatistics.append(str(k+1))
        studentStatistics.append(round(sp[k],3))
        studentStatistics.append(round(sr[k],3))
        studentStatistics.append(round(sf[k],3))
        studentStatistics.append(round(onset_am,3))
        studentStatistics.append(round(onset_m,3))
        studentStatistics.append(round(onset_s,3))   
        studentStatistics.append(round(duration_am,3))                   
        studentStatistics.append(round(duration_m,3)) 
        studentStatistics.append(round(duration_s,3))   
        studentStatistics.append(student_grades[k][0])
        studentStatistics.append(student_grades[k][1])
        studentStatistics.append(student_grades[k][2])
        studentStatistics.append(student_grades[k][3])
        studentStatistics.append(student_grades[k][4])
        studentStatistics.append(student_grades[k][5])
        # write the data
        writer.writerow(studentStatistics)

  return(onset_X, onset_mean, onset_std, duration_X, duration_mean, duration_std)
  
def write_sop_stats(deviationsArray1,title_text1,student_grades,sp,sr,sf,song):
  header = ["Student","precision","recall","f_measure_value","Onset ABS Mean","Onset Mean","Onset Std",
         "Duration ABS Mean","Duration Mean","Duration Std","onsetMark"," DurationMark"," articulationMark ","soundQualityMark","volumeControlMark"," finalMark"]
         
  fname = '../data/StudentStatistics_SOP_'+ song + '.csv'
  with open(fname, 'w', encoding='UTF8') as f:
     writer = csv.writer(f)
     # write the header
     writer.writerow(header)

     studentStatistics = []
     onset_X = []  # Martis mark
     onset_amean = []
     onset_mean = []
     onset_std= []


     #print("******************************student_grades******************************")
     #print(len(student_grades))
     jin=0
     for k in range(len(student_grades)):
        studentStatistics.append(str(k+1))
        student_stats1 = [] # onsets
        student_stats2 = [] # durations
		
        a = np.array(deviationsArray1[k])
        #print(a[0:11])
        onset_m, onset_s = mean(a), sqrt(mean(a*a))
        onset_am= mean(abs(a))
        onset_summary= "Onset ABS  Mean: %f,Onset Mean: %f, Dev. from 0: %f" %(onset_am,onset_m, onset_s)
        #print("onset_summary: ",onset_summary)
        title =   "Student " + str(k+1)+ title_text1

        onset_X.append( student_grades[k][0])  # Martis mark
        onset_mean.append(onset_m)
        onset_amean.append(onset_am)
        onset_std.append(onset_s)

        #plt.show()
        studentStatistics = []
        studentStatistics.append(str(k+1))
        studentStatistics.append(round(sp[k],3))
        studentStatistics.append(round(sr[k],3))
        studentStatistics.append(round(sf[k],3))
        studentStatistics.append(round(onset_am,3))
        studentStatistics.append(round(onset_m,3))
        studentStatistics.append(round(onset_s,3))    
        studentStatistics.append(student_grades[k][0])
        studentStatistics.append(student_grades[k][1])
        studentStatistics.append(student_grades[k][2])
        studentStatistics.append(student_grades[k][3])
        studentStatistics.append(student_grades[k][4])
        studentStatistics.append(student_grades[k][5])
        # write the data
        writer.writerow(studentStatistics)

  return(onset_mean, onset_amean, onset_std)
  
def write_stem_stats(deviationsArray1,deviationsArray2,title_text1,title_text2,precision,recall,fmeasure,song):
  header = ["Stem","precision","recall","f_measure_value","Onset ABS Mean","Onset Mean","Onset Std",
         "Duration ABS Mean","Duration Mean","Duration Std","onsetMark"," DurationMark"," articulationMark ","soundQualityMark","volumeControlMark"," finalMark"]
         
  fname = '../data/StemStatistics_IEC_'+ song + '.csv'
  with open(fname, 'w', encoding='UTF8') as f:
    writer = csv.writer(f)
    # write the header
    writer.writerow(header)

    onset_X = []  # Martis mark
    onset_amean = []
    onset_mean = []
    onset_std= []

    duration_X = [] # Martis mark
    duration_amean = []
    duration_mean = []
    duration_std= []
    #print("******************************stem grade******************************")
    jin=0
 
    student_stats1 = [] # onsets
    student_stats2 = [] # durations

    a = np.array(deviationsArray1)
    onset_m, onset_s = mean(a), sqrt(mean(a*a))
    onset_am= mean(abs(a))
    onset_summary= "Onset ABS  Mean: %f,Onset Mean: %f, Dev. from 0: %f" %(onset_am,onset_m, onset_s)
    #print("onset_summary: ",onset_summary)

    onset_X.append("100")  # Martis mark
    onset_mean.append(onset_m)
    onset_amean.append(onset_am)
    onset_std.append(onset_s)

    #plt.title(title)
	#plt.figure(1, figsize=(9.5, 6))
	#plt.hist(a)

	##plt.subplot(2,2,2)
    a = np.array(deviationsArray2)
    duration_m, duration_s = mean(a), sqrt(mean(a*a))
    duration_am= mean(abs(a))
    duration_summary= "Offset Mean: %f, Dev. from 0: %f" %(duration_m, duration_s)

    #print("duration_summary: ",duration_summary)
    duration_X.append("100")  # Martis mark
    duration_mean.append(duration_m)
    duration_amean.append(duration_am)
    duration_std.append(duration_s)

	#plt.title(title)
	#plt.figure(1, figsize=(9.5, 6))
	#plt.hist(a)
	#plt.show()

    groundTruthStatistics = []
    groundTruthStatistics.append("0")
    groundTruthStatistics.append(str(precision))
    groundTruthStatistics.append(str(recall))
    groundTruthStatistics.append(str(fmeasure))
    groundTruthStatistics.append(str(onset_am))
    groundTruthStatistics.append(str(onset_m))
    groundTruthStatistics.append(str(onset_s)   )
    groundTruthStatistics.append(str(duration_am))               
    groundTruthStatistics.append(str(duration_m)) 
    groundTruthStatistics.append(str(duration_s))   
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("5")
    # write the data
    writer.writerow(groundTruthStatistics)

  return(onset_X, onset_mean, onset_std, duration_X, duration_mean, duration_std)
  
def write_sop_stem_stats(deviationsArray1,title_text1,precision,recall,fmeasure,song):
  header = ["Stem","precision","recall","f_measure_value","Onset ABS Mean","Onset Mean","Onset Std",
         "Duration ABS Mean","Duration Mean","Duration Std","onsetMark"," DurationMark"," articulationMark ","soundQualityMark","volumeControlMark"," finalMark"]
         
  fname = '../data/StemStatistics_SOP_'+ song + '.csv'
  with open(fname, 'w', encoding='UTF8') as f:
    writer = csv.writer(f)
    # write the header
    writer.writerow(header)

    onset_X = []  # Martis mark
    onset_amean = []
    onset_mean = []
    onset_std= []

    #print("******************************stem grade******************************")
    jin=0
 
    student_stats1 = [] # onsets
    student_stats2 = [] # durations

    a = np.array(deviationsArray1)
    onset_m, onset_s = mean(a), sqrt(mean(a*a))
    onset_am= mean(abs(a))
    onset_summary= "Onset ABS  Mean: %f,Onset Mean: %f, Dev. from 0: %f" %(onset_am,onset_m, onset_s)
    #print("onset_summary: ",onset_summary)

    onset_X.append("100")  # Martis mark
    onset_mean.append(onset_m)
    onset_amean.append(onset_am)
    onset_std.append(onset_s)

    #plt.title(title)
	#plt.figure(1, figsize=(9.5, 6))
	#plt.hist(a)

	#plt.title(title)
	#plt.figure(1, figsize=(9.5, 6))
	#plt.hist(a)
	#plt.show()

    groundTruthStatistics = []
    groundTruthStatistics.append("0")

    groundTruthStatistics.append(str(precision))
    groundTruthStatistics.append(str(recall))
    groundTruthStatistics.append(str(fmeasure))
    groundTruthStatistics.append(str(onset_am))
    groundTruthStatistics.append(str(onset_m))
    groundTruthStatistics.append(str(onset_s)   )   
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("100")
    groundTruthStatistics.append("5")
    # write the data
    writer.writerow(groundTruthStatistics)

  return(onset_mean, onset_amean, onset_std)