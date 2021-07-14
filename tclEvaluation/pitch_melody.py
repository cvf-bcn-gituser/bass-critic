import pandas as pd
import sys
import madmom
# TODO 1 optimise imports
from essentia.standard import *
from essentia import Pool, array
    
import essentia.standard as es
import matplotlib.pyplot as plt
import numpy as np
import IPython.display as ipd
import pandas as pd
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

def onsetPitchMelody(sample):

    # In this example we will extract predominant melody given an audio file by
    # running a chain of algorithms.
     
    # First, create our algorithms:
    hopSize = 128
    frameSize = 2048
    sampleRate = 44100
    guessUnvoiced = True
    re_sample = Resample(inputSampleRate =44100,outputSampleRate=sampleRate)
    lpf= LowPass(cutoffFrequency =3000)
    run_windowing = Windowing(type='hann', zeroPadding=3*frameSize) # Hann window with x4 zero padding
    run_spectrum = Spectrum(size=frameSize * 4)
    run_spectral_peaks = SpectralPeaks(minFrequency=25,
                                       maxFrequency=340,
                                       maxPeaks=100,
                                       sampleRate=sampleRate,
                                       magnitudeThreshold=0,
                                       orderBy="magnitude")
    run_pitch_salience_function = PitchSalienceFunction()
    run_pitch_salience_function_peaks = PitchSalienceFunctionPeaks()
    run_pitch_contours = PitchContours(hopSize=hopSize,timeContinuity=14,minDuration =112)
    run_pitch_contours_melody = PitchContoursMelody(sampleRate =sampleRate,voicingTolerance = -1.0,voiceVibrato =True,binResolution =10,
                                                    guessUnvoiced=guessUnvoiced,minFrequency =24,maxFrequency=280,hopSize=hopSize,referenceFrequency =40)

    # ... and create a Pool
    pool = Pool();

    # Now we are ready to start processing.
    # 1. Load audio and pass it through the equal-loudness filter

    ################  !!!!!!!!!!!!!!!!!!!!!!!!1
    audio = lpf(sample)#raw_audio[0]
    audio = EqualLoudness()(audio)

    # 2. Cut audio into frames and compute for each frame:
    #    spectrum -> spectral peaks -> pitch salience function -> pitch salience function peaks
    for frame in FrameGenerator(audio, frameSize=frameSize, hopSize=hopSize):
        frame = run_windowing(frame)
        spectrum = run_spectrum(frame)
        peak_frequencies, peak_magnitudes = run_spectral_peaks(spectrum)
        
        salience = run_pitch_salience_function(peak_frequencies, peak_magnitudes)
        salience_peaks_bins, salience_peaks_saliences = run_pitch_salience_function_peaks(salience)
        
        pool.add('allframes_salience_peaks_bins', salience_peaks_bins)
        pool.add('allframes_salience_peaks_saliences', salience_peaks_saliences)

    # 3. Now, as we have gathered the required per-frame data, we can feed it to the contour 
    #    tracking and melody detection algorithms:
    contours_bins, contours_saliences, contours_start_times, duration = run_pitch_contours(
            pool['allframes_salience_peaks_bins'],
            pool['allframes_salience_peaks_saliences'])
    pitch, confidence = run_pitch_contours_melody(contours_bins,
                                                  contours_saliences,
                                                  contours_start_times,
                                                  duration)

    # NOTE that we can avoid the majority of intermediate steps by using a composite algorithm
    #      PredominantMelody (see extractor_predominant_melody.py). This script will be usefull 
    #      if you want to get access to pitch salience function and pitch contours.

    n_frames = len(pitch)
    print("number of frames: %d" % n_frames)


    onset_flag=False
    offset_flag=False
    onset_array_pitch= []
    offset_array_pitch= []
    index=0
    while (index < len(pitch)):
        if onset_flag==True:
            if (pitch[index]==0):
                timestamp = hopSize*float(index/sampleRate)
                offset_array_pitch.append(timestamp)
                onset_flag=False
        if pitch[index]!=0 and onset_flag==False:
            timestamp = hopSize*float(index/sampleRate)
            onset_array_pitch.append(timestamp)
            onset_flag=True
        index+=1
    print(len(onset_array_pitch))
    print(len(offset_array_pitch))
    index= 0
    t_field = []
    while index<len(sample):
        x=index/sampleRate
        t_field.append(x)
        index+=1
    return(onset_array_pitch,offset_array_pitch)
