############# Library section
import madmom
from essentia.standard import *
from essentia import Pool, array
import essentia.standard as es
import matplotlib.pyplot as plt
import numpy as np
import os
from statistics import mean
import math
from math import sqrt
import pandas as pd
import sys
import csv  
# My Librares
from student_grades import *
from constantData import *
from onsetmetrics import *
from energy_checker import *
from write_stats import *
from sop  import *



#############################################################################################################################

audio_files = [
'drive/MyDrive/Bass/002.wav',
'drive/MyDrive/Bass/004.wav',
'drive/MyDrive/Bass/010.wav',
'drive/MyDrive/Bass/012.wav']

# To Colm: consider converting them to .csv
annotation_files = [
 'drive/MyDrive/Bass/002.xml',
 'drive/MyDrive/Bass/004.xml',
 'drive/MyDrive/Bass/010.xml',
 'drive/MyDrive/Bass/012.xml']

 
 
 
assert(len(audio_files) == len(annotation_files))

ground_t_offsets_array = []
ground_t_onsets_array = []
 
def extract_onsets_offsets_from_xml(xml_filename):
    with open(xml_filename, "rb") as f:
        tree = etree.parse(f)
    ground_t_offsets= []
    ground_t_onsets= []
    for x in tree.getroot().xpath("//offsetSec"):
        ground_t_offsets.append(float(x.text))
    for x in tree.getroot().xpath("//onsetSec"):
        ground_t_onsets.append(float(x.text))
    return ground_t_onsets, ground_t_offsets

for xml_file in annotation_files:
    ground_t_onsets, ground_t_offsets = extract_onsets_offsets_from_xml(xml_file)  
    ground_t_offsets_array.append(ground_t_offsets) 
    ground_t_onsets_array.append(ground_t_onsets) 

	
	
# 2. Load the audio for the Dataset
raw_audio = []
fs = 44100
for audio_file in audio_files:
    raw = MonoLoader(filename = audio_file, sampleRate = fs)()
    raw = raw / np.max(np.abs(raw))
    raw_audio.append(raw)	
	
#Setting the parameters try *2 also
windowSize = 1024*2
hopSize = 512*2
startIndexes = np.arange(0, raw_audio[0].size - windowSize, hopSize, dtype = int)#frame/window start indexes
numWindows = startIndexes.size

golden_offsets_0 = array(ground_t_onsets_array[0])
golden_onsets_0 = array(ground_t_offsets_array[0])
golden_offsets_1 = array(ground_t_onsets_array[1])
golden_onsets_1 = array(ground_t_offsets_array[1])
golden_offsets_2 = array(ground_t_onsets_array[2])
golden_onsets_2= array(ground_t_offsets_array[2])
golden_offsets_3 = array(ground_t_onsets_array[3])
golden_onsets_3 = array(ground_t_offsets_array[3])


































new_onset_stem_array, new_offset_stem_array, new_effective_durs = blend_iec_sop(audio_file, str(0), stem_index)

if (len(new_onset_stem_array)==0) or (len(new_offset_stem_array)==0):
    print("WARNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, empty deviations returned")
else:
    print("OK deviations")
    print("OK deviations")
    print("OK deviations")
#print(energy_signal_stem_array,energy_signal_stem_array_time,ratio_array )

# Build and array of pandas data frames for all the annotations
if os.path.isfile(rhythm_filenames[stem_index])==True:
    df = pd.read_csv(rhythm_filenames[stem_index], usecols=col_list)
    onset_list = df["onset"].tolist()
    offset_list = df["offset"].tolist()
else:
    print("File",rhythm_filenames[stem_index], "Does not exist")

# We get the PRF of the GT STEM
if  len(onset_list) == 0 or len(offset_list) == 0:
    print("ERROR IN READING THE ONSET AND OFFSET LISTS")
else:
    precision, recall, f_measure_value = evaluate_accuracy(onset_list, new_onset_stem_array, matching_window_size)

print(songList[stem_index],"STEM  precision, recall, f_measure_value", precision, recall, f_measure_value)

# APPEND THE "STUDENT 0" OR STEM TO THE "S ARRAYS".. Remember array position 0 for Student 0 represent the STEM
sprecision_array.append(precision)
srecall_array.append(recall)
sf_measure_value_array.append(f_measure_value)

# WE CALCULATE THE DEVIATIONS OF THE STEM
onset_deviations, offset_deviations, missing_onset_notes = match_rhythm(df, new_onset_stem_array, new_offset_stem_array,matching_window_size)
sonset_deviationsArray.append(onset_deviations)
soffset_deviationsArray.append(onset_deviations)

########################## WRITE THE DEVIATIONS FOR STUDENT 0 OR STEM 
# Save the deviations in a file for the stem

theFilePath = DATA_PATH + dash + songList[stem_index] + dash + songList[stem_index] + '_devs_student0'+'.csv'
f1 = open(theFilePath, "w")
print(theFilePath)
f1.write("onset dev")
f1.write(",")
f1.write("offset dev")
f1.write("\n")
index=0
while index < len(onset_deviations):
    f1.write(str(onset_deviations[index]))
    f1.write(",")
    if index < len(offset_deviations):
        f1.write(str(offset_deviations[index]))
    else:
        f1.write(str(0.0))   
    f1.write("\n")
    index+=1
f1.close


write_stats(sonset_deviationsArray,soffset_deviationsArray," onsets", " offset",the_student_grades,sprecision_array,srecall_array,sf_measure_value_array,stem_index)



