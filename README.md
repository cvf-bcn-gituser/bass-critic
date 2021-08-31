# bass-critic
(Please note this repo will be made public as soon as copyrighted audio stems are replaced)

The requirements.txt file in the main folder shows all the packages required to run the software in a docker environment.

This repository consists of two main sections. 

The first section contains python code that is used for extending Music Critic software to implement performance assessment of electric bass guitar int tclEvaluation. The second section is the "notebooks_for_plots" folder for producing the plots.
You need to import generated data from tclEvaluation into your google drive environment for this.

In the tclEvaluation/ folder there is an audio and a data folder.

The audio folder contains all the stems for analysis and the data the input and output meta-data

The main file for reproducing results is "osets_song.py".

When you run python3 osets_song.py, you will get a menu with the following options:

0 Yellow
1 Billie Jean
2 Just Looking
3 Brown Eyed Girl
4 Roadrunner
5 Walking in the moon.


When you choose the option it will generate the associate data to the song in the data folder.

The data comes "precooked" with the code,if you want to jump ahead and run notebooks for plots.



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

## Description of folders and contents

data - 

Folder where input grading data for each of the 6 songs (e.g. G0_YellowReview.csv), output data of the generated statistics for the stems.
There are subfolders ( yellow, billieJean, etc) which contain all onset/offset deviation outputs from the stem, all the students and suffix marked indicated the algorithm used.

"StudentStatisics" is important, that cotnains grade vs audio feature stats.
Then the files with "devs" in the name are the deviations for onset sna offsets.
The "Review" files are the Teacher Grade Inputs.






## Description of Files


osets_song.py - Main file for running Hybrid algorithms of the TCL songs.

constantData.py  - The is like a common header file that is included in all the individual main functions of each of the songs in each of the subfolders.

onsetmetrics.py - This contains the Indexed Energy Checker Function and measurements (functions for P, R F , deviations etc)

sop.py  - This is the wrapper for the Madmom Sound Onset Processor Algorithm

sop_test - Test file for the above.

check_sop_stems.py  - Test files for the SOP algorithm oj the stems

write_stats.py - Helper functions for writing statistics to files

energychecker_abesser_test.py - Comparison of Indexed Energy Checker and Abesser Function

extractors.py   - Helper Function for processing XML files.

pitch_melody.py - This contains the algorithm based on the Salamon /Gomez techniques.
check_melody.py - Test file for the above.

sweep_sop.py - Sweeping tests to optimise the parameters used in SOP algorithm

test_linear_regression.py .- ( This shall be moved to Noteboks)

The second  sections shall contain  Jupyter Notebooks for obtaining plots generated from first section.
