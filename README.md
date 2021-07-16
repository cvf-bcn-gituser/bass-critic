# bass-critic

The requirements.txt file in the main folder shows all the packages required to run the software in a docker environment.

This repository consists of two main sections. They are still work in progress. Not fully tested yet.

The first section contains python code that is used for extending Music Critic software to implement performance assessment of electric bass guitar.

## TBD. (the cleanup work in progress issues are)

stemStatistics output for the SOP needs to be modified to include onsets only.

Harmonize suffices( bjean, billie,...??)
Move Energy Checker Algorithm out of the Metrics file.
Remove redundant functions.
Remove redundancy across the different songs.
Please appreciate that each of the grading sheets for each of the songs is unique, and in order to program something working it was necessary to write one grade processing file for each song (e.g. student_grades_yellow.py). You are probably asking why each song has a separate folder for processing, this is the main reason.
A Global main function is in themaking, the bring this all together.
The software is built for reproduction of results. It is hoped that it can be expanded to be a useful software package where you can obtain onsets, offset from new student recordings.

It is intended to be extendible so that new algorithms for onset, offset detection can be added to reproduce the the results within the framework

It is intended to be scaleable to add new Student recordings and new TCL songs.

The refactoring cannot be done in one foul swoop. A manual will be made that will be described how to add a new Song, and an new set of Student files.
There are a lot of optimisations to remove bulk, but working software is the primaary focus, then understandability, then reproducability and then maintainability.

## Description of folders and contents

data - 

Folder where input grading data for each of the 6 songs (e.g. G0_YellowReview.csv), output data of the generated stattistics for the stems (e.g.StemStatistics_IEC_yellow.csv). The Suffix "IEC" means algorithm "Indexed Energy Checker" was used, "SOP" referes to "Sound Onset Processoer" from Madmdom. The sufffix used in the filename indicated the algorithm used to generate the data.

There are subfolders ( yellow, billieJean, etc) which contain all onset/offset deviation outputs from the stem, all the students and suffix marked indicated the algorithm used.

data/bass-- This is a major subfolder where all the audio (WAV format) is stored. first the main stesm and the associated ground truths are marked in the "rhythm" files. (Billiejean_rhythm.csv, etc ). The sub folders here contain the student perfromandces (0_yellow etc.


The sub folders (  0_yellow etc) each contain correspongin meain fucntion for each song  ( check_students_yellow.py etc.) 
Each of these main functions include the following local library functions as follows:

from student_grades_yellow import *

sys.path.insert(1, '../')

from constantData import *

from onsetmetrics import *

from sop import *
....

student_grades_yellow.py  - This file processes the exported Grade Data which is in CSV format. The input is thje  dumped grade data files are called (G0_YellowReview.csv...etc) and the output are the Stem Statistics files and the Student Statistics files.

## Description of Files

constantData.py  - The is like a common header file that is included in all the individual main functions of each of the songs in each of the subfolders.

onsetmetrics.py - This contains the Indexed Energy Checker Function and measurements (functions for P, R F , deviations etc)

sop.py  - This is the wrapper for the Madmom Soudn Onset Processor Algorithm

sop_test - Test foile for the above.

check_sop_stems.py  - Test files for the SOP algorithm oj the stems

write_stats.py - Helper functions ofor writing statistics to files

energychecker_abesser_test.py - Comparison of Indexed Energy Checker anad Abesser Function

extractors.py   - Helper Function for processing XML files.

pitch_melody.py - This contains the algorithm based on the Salamon /Gomez techniques-
check_melody.py - Test file for the above.

sweep_sop.py - Sweeping tests to optimise the parameters used in SOP algorithm

test_linear_regression.py .- ( This shall be moved to Noteboks)

The second  sections shall contains Jupyter Notebooks for obtaining plots generated from first section.
