import pandas as pd
import sys
# TODO 1 optimise imports
from essentia.standard import *
from essentia import Pool, array
import essentia.standard as es
import matplotlib.pyplot as plt
import numpy as np
import IPython.display as ipd
import pandas as pd
import os
import madmom
import IPython
import pickle
from pickle import load
from scipy.signal import find_peaks
import ipywidgets as widgets
from scipy import signal
from lxml import etree
import mir_eval
from mir_eval import *
import plotly.express as px



### THIS IS RAMONS ONSET. I HAVE NO STRATEGY FOR BLENDING ONSET AND OFFSET HERE
### THIS FUNCITON IS NOT INVOKED IN THIS NOTEBOOK
def onset_SOP(audiofile):
    #Detection function
    fps = 200
    sodf = madmom.features.onsets.SpectralOnsetProcessor('superflux', diff_frames=20)
    sodf.processors[-1]  # doctest: +ELLIPSIS
    det_function = sodf(audiofile, fps = fps)
    det_function_norm = det_function/(max(det_function))

    #Dynamic threashold
    C_t = 0.99
    H = 100
    delta = 0.1

    din_th = np.zeros(len(det_function_norm))
    for m in range(H, len(det_function_norm)):
        din_th[m] = C_t*np.median(det_function_norm[m-H:m+H])+delta

    #Peak detection
    peaks, _ = find_peaks(det_function_norm, distance=fps/10, height = din_th)  
    onset_array = peaks/fps
    return onset_array