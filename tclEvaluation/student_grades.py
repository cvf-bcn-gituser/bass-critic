############# Library section
############# 
import math
import pandas as pd
import sys
import csv  

# My Librares
from gradeConstants import *
from constantData import *
from student_grades_headings import *
defaultNumOfStudents = 8 # Number of graded Students

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

def processGrades(stem_index):

    if stem_index == STEM_INDEX_YELLOW:
        data = pd.read_csv(r'data/G0_YellowReview.csv')
    elif stem_index == STEM_INDEX_BJEAN:
        data = pd.read_csv(r'data/G1_BillieJeanReview.csv')
    elif stem_index == STEM_INDEX_JUST:
        data = pd.read_csv(r'data/G1_JustLookingReview.csv')
    elif stem_index == STEM_INDEX_BROWN:
        data = pd.read_csv(r'data/G2_BrownEyedGirlReview.csv')
    elif stem_index == STEM_INDEX_ROAD:
        data = pd.read_csv(r'data/G3_RoadRunnerReview.csv')
    elif stem_index == STEM_INDEX_WOTM:
        data = pd.read_csv(r'data/G3_WalkingOnTheMoonReview.csv')
    else:
        data = pd.read_csv(r'data/G0_YellowReview.csv')

    data_top = data.head()

    index= 0
    numOfStudents = getNumberOfStudents(stem_index)
    while index < numOfStudents:
        print( index ,numOfStudents)
        # Default settings
        theOnsetColumn = onsetColumn
        theDurationColumn = durationColumn
        theTechFocus1Column = techFocus1Column
        theTechFocus2Column = techFocus2Column
        theSoundQualityColumn = soundQualityColumn

        if (stem_index == STEM_INDEX_BJEAN):
            theOnsetColumn = onsetColumnBillie
            theDurationColumn = durationColumnBjean
            theTechFocus1Column = techFocus1ColumnBjean
            theTechFocus2Column = techFocus2ColumnBjean
            print("******************BILLIE JEAN GRADES")
        elif (stem_index == STEM_INDEX_JUST):
            theOnsetColumn = onsetColumnJust
            theDurationColumn = durationColumnJust
            theTechFocus1Column = techFocus1ColumnJust
            theTechFocus2Column = techFocus2ColumnJust
        elif (stem_index == STEM_INDEX_BROWN):
            theOnsetColumn = onsetColumnBrown
            theDurationColumn = durationColumnBrown
            theTechFocus1Column = techFocus1ColumnBrown
            theSoundQualityColumn = soundQualityColumnBrown
        elif (stem_index == STEM_INDEX_ROAD):
            theOnsetColumn = onsetColumnRoad
            theDurationColumn = durationColumnRoad
            theTechFocus1Column = techFocus1ColumnRoad
            theTechFocus2Column = techFocus2ColumnRoad
        elif (stem_index == STEM_INDEX_WOTM):
            theOnsetColumn = onsetColumnWotm
            theDurationColumn = durationColumnWotm
            theTechFocus1Column = techFocus1ColumnWotm
            theSoundQualityColumn = soundQualityColumnWotm



        dfo = pd.DataFrame(data,columns= [nameofTrack,theOnsetColumn])

        if dfo.loc[index, theOnsetColumn] == onsetColumnL1:
            student_onsetMark=ExcellentScaled
        elif dfo.loc[index, theOnsetColumn] == onsetColumnL2:
            student_onsetMark=NotablePlusScaled
        elif dfo.loc[index, theOnsetColumn] == onsetColumnL3:
            student_onsetMark=NotableScaled
        elif dfo.loc[index, theOnsetColumn] == onsetColumnL4:
            student_onsetMark=PassScaled
        elif dfo.loc[index, theOnsetColumn] == onsetColumnL5:
            student_onsetMark=FailScaled
        else:
            print("PROBLEM 1!")
        student_onsetMark_Array.append(student_onsetMark)

        dfd = pd.DataFrame(data, columns=[nameofTrack, theDurationColumn])
        if dfd.loc[index, theDurationColumn] == durationColumnL1:
            student_DurationMark = ExcellentScaled
        elif dfd.loc[index, theDurationColumn] == durationColumnL2:
            student_DurationMark = NotablePlusScaled
        elif dfd.loc[index, theDurationColumn] == durationColumnL3:
            student_DurationMark = NotableScaled
        elif dfd.loc[index, theDurationColumn] == durationColumnL4:
            student_DurationMark = PassScaled
        elif dfd.loc[index, theDurationColumn] == durationColumnL5:
            student_DurationMark = FailScaled
        else:
            print("PROBLEM 2!")
        student_DurationMark_Array.append(student_DurationMark)

        dfa = pd.DataFrame(data,columns= [nameofTrack,theTechFocus1Column])

        if dfa.loc[index, theTechFocus1Column] == techFocus1ColumnL1:
            student_techFocus1Mark = ExcellentScaled
        elif dfa.loc[index, theTechFocus1Column] == techFocus1ColumnL2:
            student_techFocus1Mark = NotablePlusScaled
        elif dfa.loc[index, theTechFocus1Column] == techFocus1ColumnL3:
            student_techFocus1Mark = NotableScaled
        elif dfa.loc[index, theTechFocus1Column] == techFocus1ColumnL4:
            student_techFocus1Mark = PassScaled
        elif dfa.loc[index, theTechFocus1Column] == techFocus1ColumnL5:
            student_techFocus1Mark = FailScaled
        else:
            print("PROBLEM 3!")
        student_techFocus1Mark_Array.append(student_techFocus1Mark)

        if (stem_index != STEM_INDEX_BROWN) and (stem_index != STEM_INDEX_WOTM):
            if (stem_index == STEM_INDEX_BJEAN):
                dfvc = pd.DataFrame(data,columns= [nameofTrack,theTechFocus2Column])
                if dfvc.loc[index, theTechFocus2Column] == techFocusDynamicsColumnL1:
                    student_techFocus2Mark=ExcellentScaled
                elif dfvc.loc[index, theTechFocus2Column] == techFocusDynamicsColumnL2:
                    student_techFocus2Mark=NotablePlusScaled
                elif dfvc.loc[index, theTechFocus2Column] == techFocusDynamicsColumnL3:
                    student_techFocus2Mark=NotableScaled
                elif dfvc.loc[index, theTechFocus2Column] == techFocusDynamicsColumnL4:
                    student_techFocus2Mark=PassScaled
                else:
                    print("PROBLEM 4a!")
            else:
                dfvc = pd.DataFrame(data,columns= [nameofTrack,theTechFocus2Column])
                if dfvc.loc[index, theTechFocus2Column] == techFocus2ColumnL1:
                    student_techFocus2Mark=ExcellentScaled
                elif dfvc.loc[index, theTechFocus2Column] == techFocus2ColumnL2:
                    student_techFocus2Mark=NotablePlusScaled
                elif dfvc.loc[index, theTechFocus2Column] == techFocus2ColumnL3:
                    student_techFocus2Mark=NotableScaled
                elif dfvc.loc[index, theTechFocus2Column] == techFocus2ColumnL4:
                    student_techFocus2Mark=PassScaled
                elif dfvc.loc[index, theTechFocus2Column] == techFocus2ColumnL5:
                    student_techFocus2Mark=FailScaled
                else:
                    print("PROBLEM 4b!")
            student_techFocus2Mark_Array.append(student_techFocus2Mark)

        dfsq = pd.DataFrame(data, columns=[nameofTrack, theSoundQualityColumn])

        if dfsq.loc[index, theSoundQualityColumn] == soundQualityColumnL1:
            student_soundQualityMark = ExcellentScaled
        elif dfsq.loc[index, theSoundQualityColumn] == soundQualityColumnL2:
            student_soundQualityMark = NotablePlusScaled
        elif dfsq.loc[index, theSoundQualityColumn] == soundQualityColumnL3:
            student_soundQualityMark = NotableScaled
        elif dfsq.loc[index, theSoundQualityColumn] == soundQualityColumnL4:
            student_soundQualityMark = PassScaled
        elif dfsq.loc[index, theSoundQualityColumn] == soundQualityColumnL5:
            student_soundQualityMark = FailScaled
        else:
            print("PROBLEM 5!")
        student_soundQualityMark_Array.append(student_soundQualityMark)

        dffc = pd.DataFrame(data,columns= [nameofTrack,finalColumn])
        final_value = dffc.loc[index, finalColumn]
        if final_value == '4/5':
            the_final_Mark = 4.5*0.9
        else:
            the_final_Mark = float(final_value)*0.9
        student_finalMark_Array.append(the_final_Mark)
        index+=1

def returnGrades(stem_index):
    processGrades(stem_index)
    the_student_grades = []
    numOfStudents = getNumberOfStudents(stem_index)

    # Add the 100% Grade Stem first in Student ZERO slot
    individual_grade = []
    individual_grade.append("100")
    individual_grade.append("100")
    individual_grade.append("100")
    if (stem_index != STEM_INDEX_BROWN) and (stem_index != STEM_INDEX_WOTM):
        individual_grade.append("100")
    individual_grade.append("100")
    individual_grade.append("5")
    the_student_grades.append(individual_grade)

    i = 0
    while i < numOfStudents:
        individual_grade = []
        individual_grade.append(student_onsetMark_Array[i])
        individual_grade.append(student_DurationMark_Array[i])
        individual_grade.append(student_techFocus1Mark_Array[i])
        if (stem_index != STEM_INDEX_BROWN) and (stem_index != STEM_INDEX_WOTM):
            individual_grade.append(student_techFocus2Mark_Array[i])
        individual_grade.append(student_soundQualityMark_Array[i])
        individual_grade.append(student_finalMark_Array[i])
        the_student_grades.append(individual_grade)
        i += 1
    return the_student_grades


