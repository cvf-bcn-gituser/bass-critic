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

import plotly.express as px
import scipy
import csv  

from math import sqrt
def hist_and_stats(deviations,title_text):
    a = np.array(deviations)
    plt.title(title_text)
    plt.hist(a)
    plt.show()
    m, s = mean(a), sqrt(mean(a*a))
    print("Mean: %f, Deviation from zero: %f" %(m, s))
    return m, s


def aggregate_hist_and_stats(deviationArrays,title_text):
    all_deviations = []
    for d in deviationArrays:
        all_deviations.extend(d)
        # presentation of individual songs, if you need it
        #hist_and_stats(onset_deviationsArray[i])
    hist_and_stats(all_deviations,title_text)
def write_stats(deviationsArray1,deviationsArray2,title_text1,title_text2,student_grades,sp,sr,sf):
  header = ["Student","precision","recall","f_measure_value","Onset ABS Mean","Onset Mean","Onset Std",
         "Duration ABS Mean","Duration Mean","Duration Std","onsetMark"," DurationMark"," articulationMark ","soundQualityMark","volumeControlMark"," finalMark"]
  with open('drive/MyDrive/Bass/data/StudentStatistics.csv', 'w', encoding='UTF8') as f:
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

  for k in range(len(the_student_grades)):
      studentStatistics.append(str(k+1))
      student_stats1 = [] # onsets
      student_stats2 = [] # durations

      plt.subplot(2,2,1)
      a = np.array(deviationsArray1[k])
      onset_m, onset_s = mean(a), sqrt(mean(a*a))
      onset_am= mean(abs(a))
      onset_summary= "Onset ABS  Mean: %f,Onset Mean: %f, Dev. from 0: %f" %(onset_am,onset_m, onset_s)
      title =   "Student " + str(k+1)+ title_text1

      onset_X.append( student_grades[k][0])  # Martis mark
      onset_mean.append(onset_m)
      onset_amean.append(onset_am)
      onset_std.append(onset_s)

      plt.title(title)
      plt.figure(1, figsize=(9.5, 6))
      plt.hist(a)

      plt.subplot(2,2,2)
      a = np.array(deviationsArray2[k])
      duration_m, duration_s = mean(a), sqrt(mean(a*a))
      duration_am= mean(abs(a))
      duration_summary= "Offset Mean: %f, Dev. from 0: %f" %(duration_m, duration_s)
      title =   "Student " + str(k+1)+ title_text2

      duration_X.append( student_grades[k][0])  # Martis mark
      duration_mean.append(duration_m)
      duration_amean.append(duration_am)
      duration_std.append(duration_s)

      plt.title(title)
      plt.figure(1, figsize=(9.5, 6))
      plt.hist(a)

      plt.show()
      print("Onset Grade = ", student_grades[k][0],"\t" ,"Duration Grade = ", student_grades[k][1])
      print("\n")
      print(onset_summary)
      print("\n")
      print(duration_summary)
      print("\n")
      print("Articulation Grade = ", student_grades[k][2],"Sound Control Grade = ", student_grades[k][3], "Volume Control Grade = ", student_grades[0][4])
      print("Final Mark = ", student_grades[k][5])
      studentStatistics = []
      studentStatistics.append(str(k+1))
      studentStatistics.append(round(sp[k],3))
      studentStatistics.append(round(sp[k],3))
      studentStatistics.append(round(sp[k],3))
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