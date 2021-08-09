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

from pitch_melody import *
#############
############# Ground truth filenames on arrays for holding annotated onsets, "muted" markings and offsets
############# 




# Filenames of the trinity ground truth stems
audio_files = ['audio/abesser/002.wav','audio/abesser/004.wav','audio/abesser/010.wav','audio/abesser/012.wav']


# To Colm: consider converting them to .csv
annotation_files = [
 'audio/abesser/002.xml',
 'audio/abesser/004.xml',
 'audio/abesser/010.xml',
 'audio/abesser/012.xml']


def extract_onsets_offsets_from_xml(xml_filename):
  with open(xml_filename, "rb") as f:
    tree = etree.parse(f)
  ground_t_offsets = []
  ground_t_onsets = []
  for x in tree.getroot().xpath("//offsetSec"):
    ground_t_offsets.append(float(x.text))
  for x in tree.getroot().xpath("//onsetSec"):
    ground_t_onsets.append(float(x.text))
  return ground_t_onsets, ground_t_offsets


fs = 44100
assert(len(audio_files) == len(annotation_files))

ground_t_offsets_array = []
ground_t_onsets_array = []
for xml_file in annotation_files:
    ground_t_onsets, ground_t_offsets = extract_onsets_offsets_from_xml(xml_file)
    ground_t_offsets_array.append(ground_t_offsets)
    ground_t_onsets_array.append(ground_t_onsets)


f1= open("onsets_iec.txt", "w")

stem_index=0
while stem_index <len(annotation_files):

  audio_file = stem_filenames[stem_index]
  raw = MonoLoader(filename = audio_file, sampleRate = fs)()
  raw = raw / np.max(np.abs(raw))
  # Capture the Energy Island of (0) Yello (1) Billie Jean

  onsetStemIndex, offsetStemIndex = onsetPitchMelody(raw)

  precision, recal, f_measure_value = evaluate_accuracy(ground_t_onsets_array[stem_index], onsetStemIndex, matching_window_size)

  print("Results ",audio_files[stem_index],"  precision , recal1, f_measure_value")
  print("Accuracy for Offset: Colms method")
  print(round(precision, 3), round(recall, 3), round(f_measure_value, 3))
  stem_index+=1
