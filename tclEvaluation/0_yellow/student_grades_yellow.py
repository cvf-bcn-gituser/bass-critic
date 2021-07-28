############# Library section
############# 
import math
import pandas as pd
import sys
import csv  


# My Librares
sys.path.insert(1, '../')
from gradeConstants import *

numOfStudents = 8# Number of graded Students

data= pd.read_csv (r'data/G0_YellowReview.csv')
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

student_onsetMark_Array = []
student_DurationMark_Array = []
student_techFocus1Mark_Array = []
student_soundQualityMark_Array = []
student_techFocus2Mark_Array = []
student_finalMark_Array = []
student_finalMark=0

def returnGradesYellow():
    the_student_grades = []
    index=0

	
	# Add the 100% Grade Stem first in Student ZERO slot
    individual_grade = []
    individual_grade.append("100")
    individual_grade.append("100")
    individual_grade.append("100")
    individual_grade.append("100")
    individual_grade.append("100")
    individual_grade.append("5")
    the_student_grades.append(individual_grade)
	
	
    for i in range (numOfStudents):
       individual_grade = []
       individual_grade.append(student_onsetMark_Array[i])
       individual_grade.append(student_DurationMark_Array[i])
       individual_grade.append(student_techFocus1Mark_Array[i])
       individual_grade.append(student_techFocus2Mark_Array[i])
       individual_grade.append(student_soundQualityMark_Array[i])
       individual_grade.append(student_finalMark_Array[i])
       the_student_grades.append(individual_grade)
       index+=1
    return the_student_grades

index= 0
while index < numOfStudents:
    print( index ,numOfStudents)
    dfo = pd.DataFrame(data,columns= [nameofTrack,onsetColumn])
	
    print(index, " ******************DEBUG**************************")
    print(dfo.loc[index, onsetColumn])
    if dfo.loc[index, onsetColumn] == onsetColumnL1:
        student_onsetMark=ExcellentScaled
    elif dfo.loc[index, onsetColumn] == onsetColumnL2:
        student_onsetMark=NotablePlusScaled
    elif dfo.loc[index, onsetColumn] == onsetColumnL3:
        student_onsetMark=NotableScaled
    elif dfo.loc[index, onsetColumn] == onsetColumnL4:
        student_onsetMark=PassScaled
    elif dfo.loc[index, onsetColumn] == onsetColumnL5:
        student_onsetMark=FailScaled
    else:
	    print("PROBLEM 1!")
    student_onsetMark_Array.append(student_onsetMark)

    dfd = pd.DataFrame(data, columns=[nameofTrack, durationColumn])
    if dfd.loc[index, durationColumn] == durationColumnL1:
        student_DurationMark = ExcellentScaled
    elif dfd.loc[index, durationColumn] == durationColumnL2:
        student_DurationMark = NotablePlusScaled
    elif dfd.loc[index, durationColumn] == durationColumnL3:
        student_DurationMark = NotableScaled
    elif dfd.loc[index, durationColumn] == durationColumnL4:
        student_DurationMark = PassScaled
    elif dfd.loc[index, durationColumn] == durationColumnL5:
        student_DurationMark = FailScaled
    else:
        print("PROBLEM 2!")
    student_DurationMark_Array.append(student_DurationMark)
    
    dfa = pd.DataFrame(data,columns= [nameofTrack,techFocus1Column])

    if dfa.loc[index, techFocus1Column] == techFocus1ColumnL1:
        student_techFocus1Mark = ExcellentScaled
    elif dfa.loc[index, techFocus1Column] == techFocus1ColumnL2:
        student_techFocus1Mark = NotablePlusScaled
    elif dfa.loc[index, techFocus1Column] == techFocus1ColumnL3:
        student_techFocus1Mark = NotableScaled
    elif dfa.loc[index, techFocus1Column] == techFocus1ColumnL4:
        student_techFocus1Mark = PassScaled
    elif dfa.loc[index, techFocus1Column] == techFocus1ColumnL5:
        student_techFocus1Mark = FailScaled
    else:
        print("PROBLEM 3!")
    student_techFocus1Mark_Array.append(student_techFocus1Mark)

    dfvc = pd.DataFrame(data,columns= [nameofTrack,techFocus2Column])
    
    if dfvc.loc[index, techFocus2Column] == techFocus2ColumnL1:
        student_techFocus2Mark=ExcellentScaled
    elif dfvc.loc[index, techFocus2Column] == techFocus2ColumnL2:
        student_techFocus2Mark=NotablePlusScaled
    elif dfvc.loc[index, techFocus2Column] == techFocus2ColumnL3:
        student_techFocus2Mark=NotableScaled
    elif dfvc.loc[index, techFocus2Column] == techFocus2ColumnL4:
        student_techFocus2Mark=PassScaled
    elif dfvc.loc[index, techFocus2Column] == techFocus2ColumnL5:
        student_techFocus2Mark=FailScaled
    else:
        print("PROBLEM 4!")

    student_techFocus2Mark_Array.append(student_techFocus2Mark)

    dfsq = pd.DataFrame(data, columns=[nameofTrack, soundQualityColumn])

    if dfsq.loc[index, soundQualityColumn] == soundQualityColumnL1:
        student_soundQualityMark = ExcellentScaled
    elif dfsq.loc[index, soundQualityColumn] == soundQualityColumnL2:
        student_soundQualityMark = NotablePlusScaled
    elif dfsq.loc[index, soundQualityColumn] == soundQualityColumnL3:
        student_soundQualityMark = NotableScaled
    elif dfsq.loc[index, soundQualityColumn] == soundQualityColumnL4:
        student_soundQualityMark = PassScaled
    elif dfsq.loc[index, soundQualityColumn] == soundQualityColumnL5:
        student_soundQualityMark = FailScaled
    else:
        print(dfo.loc[index, soundQualityColumn])
    student_soundQualityMark_Array.append(student_soundQualityMark)
		
    dffc = pd.DataFrame(data,columns= [nameofTrack,finalColumn])
    final_value = dffc.loc[index, finalColumn]
    if final_value == '4/5':
        the_final_Mark = 4.5*0.9
    else:
        the_final_Mark = float(final_value)*0.9
    student_finalMark_Array.append(the_final_Mark)    
    index+=1
print("The six grade areas")
print(student_onsetMark_Array[0])
print(student_DurationMark_Array[0])
print(student_techFocus1Mark_Array[0])
print(student_soundQualityMark_Array[0])
print(student_techFocus2Mark_Array[0])
print(student_finalMark_Array[0])


