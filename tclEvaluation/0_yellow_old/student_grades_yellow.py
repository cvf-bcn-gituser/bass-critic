############# Library section
############# 
"""
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

from math import sqrt
"""
import math
import pandas as pd
import sys
import csv  

numOfStudents = 6 # Number of graded Students

data= pd.read_csv (r'../data/G0_YellowReview.csv')
#A Marca de temps
DateStamp= 'Marca de temps'
#B
nameofTrack = 'Name of Student Track'
#C

###################################################################
onsetColumn = "Q1. Note Onset Security. Did the student hit the note at exactly the right time, not too early, too late? (consider syncopation, stylisitic elements the tied notes, is there any required legato?) [Onset ]"

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
techFocus2ColumnL1 = "Fulfilled to a very high degree"
techFocus2ColumnL2 = "Fullfilled"
techFocus2ColumnL3 = "Largely fulfilled (ocassion lapse)"
techFocus2ColumnL4 = "Generally fulfilled"
techFocus2ColumnL5 = "Often not fullfiulled"


#Q3. Sound Quality                  soundQualityColumn                           
soundQualityColumnL1 = "Excellent"
soundQualityColumnL2 = "Very Good"
soundQualityColumnL3 = "Largely good (ocassion lapse)"
soundQualityColumnL4 = "A few blemishes"
soundQualityColumnL5 = "Often not fullfiulled"


data_top = data.head() 
    
# display 
# iterating the columns

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
	
    print(index, " ******************DEBUG**************************")
    print(dfo.loc[index, onsetColumn])
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
	    print("PROBLEM 1!")
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
	    print("PROBLEM 2!")    
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
	    print("PROBLEM 3!")    
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
    else:
        print("PROBLEM 4!")    

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

def returnGradesYellow():
    print("<<Prcoessing grades >>")
    the_student_grades = []
    index=0
    for i in range (numOfStudents):
       individual_grade = []
       individual_grade.append(student_onsetMark_Array[i])
       individual_grade.append(student_DurationMark_Array[i])
       individual_grade.append(student_techFocus1Mark_Array[i])
       individual_grade.append(student_soundQualityMark_Array[i])
       individual_grade.append(student_techFocus2Mark_Array[i])
       individual_grade.append(student_finalMark_Array[i])
       the_student_grades.append(individual_grade)
       index+=1
    return the_student_grades

