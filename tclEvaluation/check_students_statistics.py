
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

numOfStudents = 6
#numOfStudents = 6
#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 
student_path = 'data/bass/'
yellowFilename  = student_path+'0_yellow'+'/'+'yellow'
#billieJeanFilename = student_path+'1_billiejean'+'/'+'billiejean'
billieJeanFilename = student_path+'1_billiejean'+'/'+'bj'
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
threshIndex = [0.049, 0.02, 0.1, 0.04505, 0.078, 0.1]
matching_window_size = 0.02 # MIREX reference
raw_audio = []
df_array= []

onsetStemIndexArray = []
offsetStemIndexArray = []
stem_index=0
global_onset_deviationsArray = []
global_offset_deviationsArray = []
global_precision = []
global_recall = []
global_fmeasure = []

# We just do two Tracks for now 
#0:  Yellow
#1:  Billie Jean


f0= open("onsets_sop.txt", "w")
f1= open("onsets_iec.txt", "w")
stem_index=0
while stem_index <1:

  sonset_deviationsArray=[]
  soffset_deviationsArray=[]
  sprecision_array = []
  srecall_array   = []
  sf_measure_value_array = []
  df = pd.read_csv(rhythm_filenames[stem_index], usecols=col_list)
  df_array.append(df)
  onset_list = df["onset"].tolist()   
  audio_file = stem_filenames[stem_index]
  raw = MonoLoader(filename = audio_file, sampleRate = fs)()
  raw = raw / np.max(np.abs(raw))
  # Capture the Energy Island of (0) Yellow (1) Billie Jean
  #onsetStemIndex0 = onset_SOP(audio_file)
  onsetStemIndex, offsetStemIndex,split_decision_func = myOnsetEnergyChecker(raw,frameSize,hopSize,threshIndex[stem_index])
  precision, recall, f_measure_value = evaluate_accuracy(onset_list, onsetStemIndex, matching_window_size)
 
  """
  n=0
  while n < len(onsetStemIndex0):
     f0.write(str(onsetStemIndex0[n]))
     f0.write("\n")
     n+=1
  n=0
  while n < len(onsetStemIndex):
     f1.write(str(onsetStemIndex[n]))
     f1.write("\n")
     n+=1
  """
  # Add stem statistic to array element 0
  sprecision_array.append(precision)
  srecall_array.append(recall)
  sf_measure_value_array.append(f_measure_value)
  sonset_deviationsArray.append(onsetStemIndex)
  soffset_deviationsArray.append(offsetStemIndex)
  print(songList[stem_index],"STEM  precision, recall, f_measure_value", precision, recall, f_measure_value)

  raw_audio.append(raw)
   
  student_index= 0

  while student_index < 1:
     studentAudioFilename  = studentFilenames[stem_index]+str(student_index+1)+'.wav'
     sraw = MonoLoader(filename = studentAudioFilename, sampleRate = fs)()
     sraw = sraw / np.max(np.abs(sraw))
     # Commenting out the version that is for the SOP
     #sonsetIndex = onset_SOP(studentAudioFilename)
     sonsetIndex, soffsetStemIndex,ssplit_decision_func = myOnsetEnergyChecker(sraw,frameSize,hopSize,threshIndex[stem_index])
     sprecision, srecall, sf_measure_value = evaluate_accuracy(onset_list, sonsetIndex, matching_window_size)
     print(student_index+1 ,"Student precision, recall, f_measure_value", sprecision, srecall, sf_measure_value)
     # Append Student onset/offsets
     sprecision_array.append(sprecision)
     srecall_array.append(srecall)
     sf_measure_value_array.append(sf_measure_value)
     sonset_deviationsArray.append(sonsetIndex)
     soffset_deviationsArray.append(soffsetStemIndex)
     student_index+=1     
  global_onset_deviationsArray.append(sonset_deviationsArray)
  global_offset_deviationsArray.append(soffset_deviationsArray)
  global_precision.append(sprecision_array)
  global_recall.append(srecall_array)
  global_fmeasure.append(sf_measure_value_array)
  stem_index+=1


data= pd.read_csv (r'data/G0_YellowReview.csv')
#data= pd.read_csv (r'data/G1_BilieJeanReview.csv')
#A Marca de temps
DateStamp= 'Marca de temps'
#B
nameofTrack = 'Name of Student Track'
#C
###################################################################
"""
onsetColumn = "Q1. Note Onset Security. Did the student hit the note at exactly the right time, not too early, too late? (consider syncopation and stylisitic elements) [Onset ]"

onsetComment = " Please add comments regarding overall exactness of the musician to hit the note at the appropriate time from listening to the piece, justifying your grade and mentioning particular bars of interest."

durationColumn = 'Q2. Duration. Holding note for the required length (crotchers and quavers etc are given their correct duration). Consider also that Staccato will mean slighlty shorter duration  (and the opposite feel for legato). Consider the nuances of tied notes and the role syncopation has for the particular piece. [Duration]'

durationComment =" Please add comments regarding overall aspect of duration/ note length you have from listening to the piece justifying your grade and mentioning particular bars of interest."

techFocus1Column ="Q1. Articulation & Coordination [Articulation]"

soundQualityColumn = "Q2. Sound Quality                                           [Sound Quality]"

techFocus2Column = "Q3.  Dynamics (volume control) [Dynamics]"

techControlComment ="Please add additional comments on the above Technical Control aspects of the song, to justify your choice."

finalColumn = "Please add additional comments on stylistic understanding (eg mood and character),  listener engagement. Finally write a number between 5 (highly convincing) and 1 (unreliable) classify the overall impact of the song.      

"""
###################################################################
onsetColumn = "Q1. Note Onset Security. Did the student hit the note at exactly the right time, not too early, too late? (consider syncopation, stylisitic elements the tied notes, is there any required legato?) [Onset ]	 "

onsetComment = "Please add comments regarding overall exactness of the musician to hit the note at the appropriate time from listening to the piece, justifying your grade and mentioning particular bars of interest."

durationColumn = 'Q2. Duration. Holding note for the required length, look for evenness, no rused feel when playing. [Duration]'

durationComment = "Please add comments regarding overall aspect of duration/ note length you have from listening to the piece justifying your grade and mentioning particular bars of interest."

techFocus1Column ="Q1. Repeated Notes [Repeated note evenness]"

techFocus2Column ='Q2. Syncopation [ Syncopation accuracy]'

soundQualityColumn = "Q3. Sound Quality                                           [Sound Quality]"

soundQualityComment="Please add additional comments on the above Technical Control aspects of the song, to justify your choice."

finalColumn = "Please add additional comments on stylistic understanding (eg mood and character),  listener engagement. Finally write a number between 5 (highly convincing) and 1 (unreliable) classify the overall impact of the song.                            "   

###################################################################                             

#Onset  onsetColumn
#onsetColumnL1 = "Exact "
onsetColumnL1 = "Exact"
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

#Q1. Articulation & Coordination    techFocus1
techFocus1ColumnL1 = "Fulfilled to a very high degree"
techFocus1ColumnL2 = "Fullfilled"
techFocus1ColumnL3 = "Largely fulfilled (ocassion lapse)"
techFocus1ColumnL4 = "Generally fulfilled"
techFocus1ColumnL5 = "Often not fullfiulled"

#Q2.  Dynamics (volume control)      techFocus2
techFocus2ColumnL1 = "Excellent"
techFocus2ColumnL2 = "Very Good control"
techFocus2ColumnL3 = "Some dynamics noted"
techFocus2ColumnL4 = "Dull"
techFocus2ColumnL5 = "Absent"


#Q3. Sound Quality                  soundQualityColumn                           
soundQualityColumnL1 = "Excellent"
soundQualityColumnL2 = "Very Good"
soundQualityColumnL3 = "Largely good (ocassion lapse)"
soundQualityColumnL4 = "A few blemishes"
soundQualityColumnL5 = "Often not fullfiulled"


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
student_techFocus1Mark=0
student_soundQualityMark=0
student_techFocus2Mark=0
student_finalMark=0

students = []
student_onsetMark_Array = []
student_DurationMark_Array = []
student_techFocus1Mark_Array = []
student_soundQualityMark_Array = []
student_techFocus2Mark_Array = []
student_finalMark_Array = []
student_finalMark=0

index= 0
while index < numOfStudents:
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
    else:
	    print(dfo.loc[index, onsetColumn])
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
    else:
	    print(dfo.loc[index, durationColumn])      
    student_DurationMark_Array.append(student_DurationMark)
    
    dfa = pd.DataFrame(data,columns= [nameofTrack,techFocus1Column])
        
    if dfa.loc[index, techFocus1Column] == techFocus1ColumnL1:
        student_techFocus1Mark=100
    elif dfa.loc[index, techFocus1Column] == techFocus1ColumnL2:
        student_techFocus1Mark=85
    elif dfa.loc[index, techFocus1Column] == techFocus1ColumnL3:    
        student_techFocus1Mark=70
    elif dfa.loc[index, techFocus1Column] == techFocus1ColumnL4:
        student_techFocus1Mark=55
    elif dfa.loc[index, techFocus1Column] == techFocus1ColumnL5:
        student_techFocus1Mark=40
    else:
	    print(dfo.loc[index, techFocus1Column])
    student_techFocus1Mark_Array.append(student_techFocus1Mark)    
  
    dfvc = pd.DataFrame(data,columns= [nameofTrack,techFocus2Column])
    
    if dfvc.loc[index, techFocus2Column] == techFocus2ColumnL1:
        student_techFocus2Mark=100
    elif dfvc.loc[index, techFocus2Column] == techFocus2ColumnL2:
        student_techFocus2Mark=85
    elif dfvc.loc[index, techFocus2Column] == techFocus2ColumnL3:    
        student_techFocus2Mark=70
    elif dfvc.loc[index, techFocus2Column] == techFocus2ColumnL4:
        student_techFocus2Mark=55
    elif dfvc.loc[index, techFocus2Column] == techFocus2ColumnL5:
        student_techFocus2Mark=40
   

    student_techFocus2Mark_Array.append(student_techFocus2Mark) 
		
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
    else:
	    print(dfo.loc[index, soundQualityColumn])      
    student_soundQualityMark_Array.append(student_soundQualityMark)
		
    dffc = pd.DataFrame(data,columns= [nameofTrack,finalColumn])
    final_value = dffc.loc[index, finalColumn]
    if final_value == '4/5':
        the_final_Mark = 4.5
    else:
        the_final_Mark = float(final_value)
    student_finalMark_Array.append(the_final_Mark)    
    index+=1
print("The six grade areas")
print(student_onsetMark_Array[0])
print(student_DurationMark_Array[0])
print(student_techFocus1Mark_Array[0])
print(student_soundQualityMark_Array[0])
print(student_techFocus2Mark_Array[0])
print(student_finalMark_Array[0])

the_student_grades = []

for i in range (numOfStudents):
  individual_grade = []
  individual_grade.append(student_onsetMark_Array[i])
  individual_grade.append(student_DurationMark_Array[i])
  individual_grade.append(student_techFocus1Mark_Array[i])
  individual_grade.append(student_soundQualityMark_Array[i])
  individual_grade.append(student_techFocus2Mark_Array[i])
  individual_grade.append(student_finalMark_Array[i])
  the_student_grades.append(individual_grade)

  
 # Write Statistics for  

  
soffset_deviationsArray=[]
onset_X, onset_mean, onset_std, duration_X, duration_mean, duration_std= write_stats(global_onset_deviationsArray[0],global_offset_deviationsArray[0]," onsets", " offset",the_student_grades,global_precision[0],global_recall[0],global_fmeasure[0],"yellow")

#onset_X, onset_mean, onset_std, duration_X, duration_mean, duration_std= write_stats(global_onset_deviationsArray[1],global_offset_deviationsArray[1]," onsets", " offset",the_student_grades,global_precision[1],global_recall[1],global_fmeasure[1],"bjean")
