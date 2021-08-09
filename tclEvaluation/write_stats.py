from essentia.standard import *

import numpy as np

import csv  
from math import sqrt
from  statistics  import *

import matplotlib

from constantData import *


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

def write_stats(deviationsArray1,deviationsArray2,title_text1,title_text2,student_grades,sp,sr,sf,stem_index):

  if (stem_index==STEM_INDEX_BROWN) or (stem_index==STEM_INDEX_WOTM):
      header = header1TF
  else:
      header = header2TF

  fname = DATA_PATH + dash + songList[stem_index] + dash + 'StudentStatistics_'+ songList[stem_index]  + '.csv'
  testindex=0
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
        print("************************************************************", k)

        studentStatistics.append(str(k+1))
        student_stats1 = [] # onsets
        student_stats2 = [] # durations

        a = np.array(deviationsArray1[k])
        print(len(a))
        #print(a[0:11])
        onset_m = mean(a)
        onset_s=sqrt(mean(a*a))
        onset_am= mean(abs(a))
        onset_summary= "Onset ABS  Mean: %f,Onset Mean: %f, Dev. from 0: %f" %(onset_am,onset_m, onset_s)
        #print("onset_summary: ",onset_summary)
        title =   "Student " + str(k+1)+ title_text1

        onset_X.append( student_grades[k][0])  # Martis mark
        onset_mean.append(onset_m)
        onset_amean.append(onset_am)
        onset_std.append(onset_s)
        if (len(deviationsArray2[k])==0):
            a = np.array(deviationsArray2[k])
            duration_m = 0
            duration_s = 0
            duration_am = 0
        else:
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

        studentStatistics = []
        studentStatistics.append(str(k))
        studentStatistics.append(round(sp[k],3))
        studentStatistics.append(round(sr[k],3))
        studentStatistics.append(round(sf[k],3))
        studentStatistics.append(round(onset_am,3))
        studentStatistics.append(round(onset_m,3))
        studentStatistics.append(round(onset_s,3))   
        studentStatistics.append(round(duration_am,3))                   
        studentStatistics.append(round(duration_m,3)) 
        studentStatistics.append(round(duration_s,3))   
        studentStatistics.append(student_grades[k][0]) # Onset
        studentStatistics.append(student_grades[k][1]) # Duration
        studentStatistics.append(student_grades[k][2]) # Teschnical focus
        if (stem_index != STEM_INDEX_BROWN) and (stem_index != STEM_INDEX_WOTM) :
            studentStatistics.append(student_grades[k][3]) # Technical Focus 2
            studentStatistics.append(student_grades[k][4])  # Sound Quality
            studentStatistics.append(student_grades[k][5])  # Overall Grade
        else:
            studentStatistics.append(student_grades[k][3]) # Sound Quality
            studentStatistics.append(student_grades[k][4]) # Overall Grade
        # write the data
        writer.writerow(studentStatistics)

  return(onset_X, onset_mean, onset_std, duration_X, duration_mean, duration_std)

