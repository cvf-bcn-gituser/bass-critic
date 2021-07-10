
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

#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 
student_path = 'data/bass/'
yellowFilename  = student_path+'0_yellow'+'/'+'yellow'
billieJeanFilename = student_path+'1_billiejean'+'/'+'billiejean'
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


threshIndex = [0.049, 0.049, 0.022, 0.04505, 0.078, 0.1]

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
threshIndex = [0.049, 0.049, 0.022, 0.04505, 0.078, 0.1]
matching_window_size = 0.05  # MIREX reference
raw_audio = []
df_array= []

onsetStemIndexArray = []
stem_index=0
sonset_deviationsArrayArray = []
while stem_index < 2:
  df = pd.read_csv(rhythm_filenames[stem_index], usecols=col_list)
  df_array.append(df)
  onset_list = df["onset"].tolist()   
  audio_file = stem_filenames[stem_index]
  raw = MonoLoader(filename = audio_file, sampleRate = fs)()
  raw = raw / np.max(np.abs(raw))
  #onsetStemIndex = onset_SOP(audio_file)
  onsetStemIndex, offsetStemIndex,split_decision_func = myOnsetEnergyChecker(raw,frameSize,hopSize,threshIndex[stem_index])
  precision, recall, f_measure_value = evaluate_accuracy(onset_list, onsetStemIndex, 0.05)
  print("\n")
  print(songList[stem_index],"STEM  precision, recall, f_measure_value", precision, recall, f_measure_value)
  onsetStemIndexArray.append(onsetStemIndex)
  raw_audio.append(raw)
   
  student_index= 0
  sonset_deviationsArray=[]
  while student_index < 4:
     studentAudioFilename  = studentFilenames[stem_index]+str(student_index+1)+'.wav'
     sraw = MonoLoader(filename = studentAudioFilename, sampleRate = fs)()
     sraw = sraw / np.max(np.abs(sraw))
     #sonsetIndex = onset_SOP(studentAudioFilename)
     sonsetStemIndex, soffsetStemIndex,ssplit_decision_func = myOnsetEnergyChecker(sraw,frameSize,hopSize,threshIndex[stem_index])
     sprecision, srecall, sf_measure_value = evaluate_accuracy(onset_list, sonsetStemIndex, 0.05)
     print(student_index+1 ,"Student precision, recall, f_measure_value", sprecision, srecall, sf_measure_value)
	 
     sonset_deviationsArray.append(sonsetStemIndex)
     student_index+=1     
  sonset_deviationsArrayArray.append(sonset_deviationsArray)
  stem_index+=1

data= pd.read_csv (r'data/G1_BilieJeanReview.csv')

#A Marca de temps
DateStamp= 'Marca de temps'
#B
nameofTrack = 'Name of Student Track'
#C
onsetColumn = "Q1. Note Onset Security. Did the student hit the note at exactly the right time, not too early, too late? (consider syncopation and stylisitic elements) [Onset ]"

onsetComment = " Please add comments regarding overall exactness of the musician to hit the note at the appropriate time from listening to the piece, justifying your grade and mentioning particular bars of interest."

durationColumn = 'Q2. Duration. Holding note for the required length (crotchers and quavers etc are given their correct duration). Consider also that Staccato will mean slighlty shorter duration  (and the opposite feel for legato). Consider the nuances of tied notes and the role syncopation has for the particular piece. [Duration]'

durationComment =" Please add comments regarding overall aspect of duration/ note length you have from listening to the piece justifying your grade and mentioning particular bars of interest."

articulationColumn ="Q1. Articulation & Coordination [Articulation]"

soundQualityColumn = "Q2. Sound Quality                                           [Sound Quality]"

volumeControlColumn = "Q3.  Dynamics (volume control) [Dynamics]"

techControlComment ="Please add additional comments on the above Technical Control aspects of the song, to justify your choice."

finalColumn = "Please add additional comments on stylistic understanding (eg mood and character),  listener engagement. Finally write a number between 5 (highly convincing) and 1 (unreliable) classify the overall impact of the song.                            "

#Onset  onsetColumn
onsetColumnL1 = "Exact "
onsetColumnL2 = "Very accurate, tiny deviations"
onsetColumnL3 = "Mostly accurate"
onsetColumnL4 = "Some noticeable deviations"
onsetColumnL5 = "A few deviations."
onsetColumnL6 = "No alignment with score"

#Duration durationColumn
durationColumnL1 = "Excellent fidelity to defined note duration"
durationColumnL2 = "very good fidelity"
durationColumnL3 = "good"
durationColumnL4 = "fair"
durationColumnL5 = "poor"

#Q1. Articulation & Coordination    articulationColumn
articulationColumnL1 = "Fulfilled to a very high degree"
articulationColumnL2 = "Fullfilled"
articulationColumnL3 = "Largely fulfilled (ocassion lapse)"
articulationColumnL4 = "Generally fulfilled"
articulationColumnL5 = "Often not fullfiulled"

#Q2. Sound Quality                  soundQualityColumn                           
soundQualityColumnL1 = "Excellent"
soundQualityColumnL2 = "Very Good"
soundQualityColumnL3 = "Largely good (ocassion lapse)"
soundQualityColumnL4 = "A few blemishes"
soundQualityColumnL5 = "Often not fullfiulled"

#Q3.  Dynamics (volume control)      volumeControlColumn
volumeControlColumnL1 = "Excellent"
volumeControlColumnL2 = "Very Good control"
volumeControlColumnL3 = "Some dynamics noted"
volumeControlColumnL4 = "Dull"
volumeControlColumnL5 = "Absent"

data_top = data.head() 
    
# display 
# iterating the columns


"""
#finalColumn

onset1 = df[onsetColumn]
print (onset1)
c1 = df.loc[index,onsetColumn]
print(c1)
index = df.index
number_of_rows = len(index)
print(number_of_rows)
"""
student1= [] # like billie1
student_onsetMark=0
student_DurationMark=0
student_articulationMark=0
student_soundQualityMark=0
student_volumeControlMark=0
student_finalMark=0


students = []
student_onsetMark_Array = []
student_DurationMark_Array = []
student_articulationMark_Array = []
student_soundQualityMark_Array = []
student_volumeControlMark_Array = []
student_finalMark_Array = []
student_finalMark=0

index= 0
while index < 8:
    dfo = pd.DataFrame(data,columns= [nameofTrack,onsetColumn])
    if dfo.loc[index, onsetColumn] == onsetColumnL1:
        student_onsetMark=100
    elif dfo.loc[index, onsetColumn] == onsetColumnL2:
        student_onsetMark=85
    elif dfo.loc[index, onsetColumn] == onsetColumnL3:    
        student_onsetMark=70
    elif dfo.loc[index, onsetColumn] == onsetColumnL4:
        student_onsetMark=55
    elif dfo.loc[index, onsetColumn] == onsetColumnL5:
        student_onsetMark=40
    student_onsetMark_Array.append(student_onsetMark)
        

    dfd = pd.DataFrame(data,columns= [nameofTrack,durationColumn])
    if dfd.loc[index, durationColumn] == durationColumnL1:
        student_DurationMark=100
    elif dfd.loc[index, durationColumn] == durationColumnL2:
        student_DurationMark=85
    elif dfd.loc[index, durationColumn] == durationColumnL3:    
        student_DurationMark=70
    elif dfd.loc[index, durationColumn] == durationColumnL4:
        student_DurationMark=55
    elif dfd.loc[index, durationColumn] == durationColumnL5:
        student_DurationMark=40
        
    student_DurationMark_Array.append(student_DurationMark)
    
    dfa = pd.DataFrame(data,columns= [nameofTrack,articulationColumn])
        
    if dfa.loc[index, articulationColumn] == articulationColumnL1:
        student_articulationMark=100
    elif dfa.loc[index, articulationColumn] == articulationColumnL2:
        student_articulationMark=85
    elif dfa.loc[index, articulationColumn] == articulationColumnL3:    
        student_articulationMark=70
    elif dfa.loc[index, articulationColumn] == articulationColumnL4:
        student_articulationMark=55
    elif dfa.loc[index, articulationColumn] == articulationColumnL5:
        student_articulationMark=40

    student_articulationMark_Array.append(student_articulationMark)    
    
    dfsq = pd.DataFrame(data,columns= [nameofTrack,soundQualityColumn])

    if dfsq.loc[index, soundQualityColumn] == soundQualityColumnL1:
        student_soundQualityMark=100
    elif dfsq.loc[index, soundQualityColumn] == soundQualityColumnL2:
        student_soundQualityMark=85
    elif dfsq.loc[index, soundQualityColumn] == soundQualityColumnL3:    
        student_soundQualityMark=70
    elif dfsq.loc[index, soundQualityColumn] == soundQualityColumnL4:
        student_soundQualityMark=55
    elif dfsq.loc[index, soundQualityColumn] == soundQualityColumnL5:
        student_soundQualityMark=40
        
    student_soundQualityMark_Array.append(student_soundQualityMark)
    
    dfvc = pd.DataFrame(data,columns= [nameofTrack,volumeControlColumn])
    
    if dfvc.loc[index, volumeControlColumn] == volumeControlColumnL1:
        student_volumeControlMark=100
    elif dfvc.loc[index, volumeControlColumn] == volumeControlColumnL2:
        student_volumeControlMark=85
    elif dfvc.loc[index, volumeControlColumn] == volumeControlColumnL3:    
        student_volumeControlMark=70
    elif dfvc.loc[index, volumeControlColumn] == volumeControlColumnL4:
        student_volumeControlMark=55
    elif dfvc.loc[index, volumeControlColumn] == volumeControlColumnL5:
        student_volumeControlMark=40

    student_volumeControlMark_Array.append(student_volumeControlMark)    
    dffc = pd.DataFrame(data,columns= [nameofTrack,finalColumn])
    final_value = dffc.loc[index, finalColumn]
    if final_value == '4/5':
        the_final_Mark = 4.5
    else:
        the_final_Mark = float(final_value)
    student_finalMark_Array.append(the_final_Mark)    
    index+=1
        
print(student_onsetMark_Array[0])
print(student_DurationMark_Array[0])
print(student_articulationMark_Array[0])
print(student_soundQualityMark_Array[0])
print(student_volumeControlMark_Array[0])
print(student_finalMark_Array[0])

the_student_grades = []

for i in range (8):
  individual_grade = []
  individual_grade.append(student_onsetMark_Array[i])
  individual_grade.append(student_DurationMark_Array[i])
  individual_grade.append(student_articulationMark_Array[i])
  individual_grade.append(student_soundQualityMark_Array[i])
  individual_grade.append(student_volumeControlMark_Array[i])
  individual_grade.append(student_finalMark_Array[i])
  the_student_grades.append(individual_grade)

soffset_deviationsArray=[]
onset_X, onset_mean, onset_std, duration_X, duration_mean, duration_std= write_stats(sonset_deviationsArrayArray[1],soffset_deviationsArray," onsets", " offset",the_student_grades,sp,sr,sf)


aggregate_hist_and_stats(sduration_deviationsArray,"Student Deviations")


std1_note_onset_grade = 85 


std1_note_duration = 85 
std1_note_articulate = 70
std1_sound_quality = 85 # 'very good'
std1_note_dynamics  = 85
std1_note_global = 80

import pandas as pd
print(len(duration_deviationsArray))

data_timing_duration0= { 'durations0' :duration_deviationsArray[0]}
data_timing_onset0= { 'onsets0' :duration_deviationsArray[0]}

"""
df = pd.DataFrame(data_timing_onset0,columns=['onsets0'])
fig = px.histogram(df, x="onsets0")
fig.show()
"""


import numpy as np
#from sklearn.linear_model import LinearRegression

import matplotlib.pyplot as plt
import numpy as np
from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error, r2_score

Y    = np.array([100,    85,    55,    70,    70,    85,    85,    85,    55] )

Student    = [0,1,2,3,4,5,6,7,8]
x_precision        = [0.996,0.802,0.885,0.488,0.44,0.553,0.759,0.482,0.617]
x_recall        = [0.958,0.802,0.885,0.488,0.44,0.553,0.759,0.482,0.617]
x_f_measure_value        = [0.977,0.802,0.885,0.488,0.44,0.553,0.759,0.482,0.617]
x_Onset_ABS_Mean    = [    0.027407,0.026,0.016,0.026,0.034,0.023,0.027,0.031,0.025]
x_Onset_Mean    = [    0.027407,0.017,0.003,-0.018,0.005,-0.001,0.027,-0.029,-0.001]
x_Onset_Std        = [0.031882,0.031,0.022,0.031,0.037,0.028,0.032,0.036,0.029]
x_Duration_ABS_Mean        = [0.038446,0.027,0.04,0.036,0.041,0.033,0.038,0.051,0.04]
x_Duration_Mean    =[    0.00571,0.014,-0.033,-0.023,-0.02,-0.017,0.006,-0.02,-0.01]
x_Duration_Std        = [0.045769,0.035,0.046,0.043,0.048,0.04,0.046,0.054,0.047]


y_onsetMark        =array( [100,85,55,70,70,85,85,85,55])
y_DurationMark        =array( [100,85,70,85,85,85,100,85,70])
y_articulationMark    =array( [100,70,70,85,85,70,100,85,85])
y_soundQualityMark        = array([100,85,70,85,85,85,85,55,70])
y_volumeControlMark        = array([100,85,70,100,85,85,100,70,85])
y_finalMark        =  array([5,4,3,4,4,3,4.5,2,3])
X= array([x_precision,    x_recall    ,x_f_measure_value    ,x_Onset_ABS_Mean,x_Onset_Mean,x_Onset_Std,x_Duration_ABS_Mean,x_Duration_Mean,x_Duration_Std])
print(X.shape)
Xnew= X.transpose()



y = y_onsetMark
# Split the data into training/testing sets
X_train = X[:-5]
X_test = X[-5:]

# Split the targets into training/testing sets
y_train = y[:-5]
y_test = y[-5:]

# Create linear regression object
regr = linear_model.LinearRegression()
print(X_train.shape,y_train.shape)
# Train the model using the training sets
regr.fit(X_train, y_train)

# Make predictions using the testing set
y_pred = regr.predict(X_test)
# The coefficients
print('Coefficients: \n', regr.coef_)
# The mean squared error
print('Mean absolute error: %.2f'
      % mean_absolute_error(y_test, y_pred))
# The coefficient of determination: 1 is perfect prediction
print('Coefficient of determination: %.2f'
      % r2_score(y_test, y_pred))

# Plot outputs
plt.scatter(X_test, y_test,  color='black')
plt.plot(X_test, y_pred, color='blue', linewidth=3)

#plt.xticks(())
#plt.yticks(())
plt.show()

reg = LinearRegression().fit(Xnew, Y)
print(reg)
##################### Load the diabetes dataset
######################################
#regr.fit(diabetes_X_train, diabetes_y_train)
regr.fit(X, Y)
y_pred = regr.predict(X)
plt.plot(X,Y, 'x')
plt.show()
                                    
# The coefficients
print('Coefficients: \n', regr.coef_)
# The mean absolute error
print('Mean abs  error: %.2f'      % mean_absolute_error(Y, y_pred))

# The coefficient of determination: 1 is perfect prediction
print('Coefficient of determination: %.2f'
      % r2_score(Y, y_pred))
plt.plot(X2,Y, 'x')
plt.show()
plt.xticks(())
plt.yticks(())
plt.show()

print(X.shape)
X_new = X.transpose()
print(X_new.shape)

from sklearn.model_selection import LeaveOneOut
#X = np.array([[1, 2], [3, 4]])
X= array([x_precision,    x_recall    ,x_f_measure_value    ,x_Onset_ABS_Mean,x_Onset_Std,x_Duration_ABS_Mean,x_Duration_Std])

y = y_finalMark #np.array([1, 2])
loo = LeaveOneOut()
loo.get_n_splits(X)

print(loo)
for train_index, test_index in loo.split(X):
     print("TRAIN:", train_index, "TEST:", test_index)
     X_train, X_test = X[train_index], X[test_index]
     y_train, y_test = y[train_index], y[test_index]
     print(X_train, X_test, y_train, y_test)
     
#X = dataset[['P', 'R', 'F',  ' ABS Mean Onset','Mean  Onset','Std Onset',' ABS Mean Duration','Mean Duration','Std Duration']]
X = dataset[['P', 'R', 'F',  ' ABS Mean Onset','Mean  Onset','Std Onset']]
print(X.shape)
y = array([200    ,165    ,115    ,150    ,150    ,145    ,175    ,125    ,115])
print(y_onset_total.shape)

from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train, y_train)

coeff_df = pd.DataFrame(regressor.coef_, X.columns, columns=['Coefficient'])

y_pred = regressor.predict(X_test)

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)

from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train, y_train)

y_pred = regressor.predict(X_test)

df = pd.DataFrame({'Actual': y_test, 'Predicted': y_pred})
from sklearn import metrics
print('Mean Absolute Error:', metrics.mean_absolute_error(y_test, y_pred))
print('Mean Squared Error:', metrics.mean_squared_error(y_test, y_pred))
print('Root Mean Squared Error:', np.sqrt(metrics.mean_squared_error(y_test, y_pred)))

