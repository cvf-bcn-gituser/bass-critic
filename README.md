# bass-critic

The requirements.txt file in the main folder shows all the packages required to run the software in a docker environment.

This repository consists of two main sections. They are still work in progress. Not fully tested yet.

The first section contains python code that is used for extending Music Critic software to implement performance assessment of electric bass guitar.


## Overview.
This software allows you to calculate the onset and offset points in a isolated bass recordings of given songs from the TCL syllabus.
In the Data section there are ground truth files which contain the ideal onset and offset position of the ground truth recording  a given song.
There are a set of algorithms provided to do the onset, offset calculations of the ideal ground truth recording and statistical output is provided to show the effectiveness of these algorithms. The main algorithms are denoted IEC (Indexed Energy Checker) and SOP (Sound Onset Processor).
They are based on work done by Ramon Romeu. https://github.com/RamoonRoomeu. There have been some adjustments to make the original code to make it suitable for the context of capturing onsets and offsets for outputs into CSV file and for processing with P, R F measures.
There are evaluation helper functions to help with gathering statistics on the onset, offset deviations and the P,R, F measures.

There are a comprehensive set of subfolders for to allow capture of the data on a song by song basis and also to be able to capture the data of the Student Recordings.

IEC and SOP are the main algorithms, but  they are not the only ones. There is also methods using Essentia libraries based on Salamon/Gomez melody extractor for capturing segments of pitch with onset and duration information and there is an original algorithm also based on Energy measurement I developed prior to coming across Ramoon Roomeu. 
The idea is to make the code extendable so that new algorithms can be plugged when requried.

There is some experiments required to obtain optimum parameters within the SOP algorithm. In this research, "sweep" routines were applied to all of the 6 TCL songs so that the best set of parameters for each song could be obtained.

One of the major findings of the  research is that depending on duration length and inter-note intervals, different algorithms with different parameters are required to obtain optimum results.


## TBD. (the cleanup work in progress issues are)

stemStatistics CSV output for the SOP needs to be modified to include onsets only.

Harmonize suffices( bjean, billie,...??)
Move Energy Checker Algorithm out of the Metrics file.
Remove redundant functions.
Remove redundancy across the different songs.
Please appreciate that each of the grading sheets for each of the songs is unique, and in order to program something working it was necessary to write one grade processing file for each song (e.g. student_grades_yellow.py). You are probably asking why each song has a separate folder for processing, this is the main reason.
A Global main function is in the making, the bring this all together.
The software is built for reproduction of results. It is hoped that it can be expanded to be a useful software package where you can obtain onsets, offset from new student recordings.

It is intended to be extendible so that new algorithms for onset, offset detection can be added to reproduce the results within the framework

It is intended to be scalable to add new Student recordings and new TCL songs.

The refactoring cannot be done in one foul swoop. A manual will be made that will be described how to add a new Song, and an new set of Student files.
There are a lot of optimisations to remove bulk, but working software is the primary focus, then understandability, then reproducibility and then maintainability.


## Description of folders and contents

data - 

Folder where input grading data for each of the 6 songs (e.g. G0_YellowReview.csv), output data of the generated statistics for the stems (e.g.StemStatistics_IEC_yellow.csv). The Suffix "IEC" means algorithm "Indexed Energy Checker" was used, "SOP" refers to "Sound Onset Processor" from Madmom. The suffix used in the filename indicated the algorithm used to generate the data.

There are subfolders ( yellow, billieJean, etc) which contain all onset/offset deviation outputs from the stem, all the students and suffix marked indicated the algorithm used.

data/bass-- This is a major subfolder where all the audio (WAV format) is stored. first the main stem and the associated ground truths are marked in the "rhythm" files. (Billiejean_rhythm.csv, etc ). The sub folders here contain the student performances (0_yellow etc.


The sub folders (  0_yellow etc) each contain corresponding main function for each song  ( check_students_yellow.py etc.) 
Each of these main functions include the following local library functions as follows:

from student_grades_yellow import *

sys.path.insert(1, '../')

from constantData import *

from onsetmetrics import *

from sop import *
....

student_grades_yellow.py  - This file processes the exported Grade Data which is in CSV format. The input is the  dumped grade data files are called (G0_YellowReview.csv...etc) and the output are the Stem Statistics files and the Student Statistics files.

## Description of Files

constantData.py  - The is like a common header file that is included in all the individual main functions of each of the songs in each of the subfolders.

onsetmetrics.py - This contains the Indexed Energy Checker Function and measurements (functions for P, R F , deviations etc)

sop.py  - This is the wrapper for the Madmom Sound Onset Processor Algorithm

sop_test - Test file for the above.

check_sop_stems.py  - Test files for the SOP algorithm oj the stems

write_stats.py - Helper functions for writing statistics to files

energychecker_abesser_test.py - Comparison of Indexed Energy Checker and Abesser Function

extractors.py   - Helper Function for processing XML files.

pitch_melody.py - This contains the algorithm based on the Salamon /Gomez techniques-
check_melody.py - Test file for the above.

sweep_sop.py - Sweeping tests to optimise the parameters used in SOP algorithm

test_linear_regression.py .- ( This shall be moved to Noteboks)

The second  sections shall contain  Jupyter Notebooks for obtaining plots generated from first section.
