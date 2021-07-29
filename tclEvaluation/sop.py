# TODO 1 optimise imports
from essentia.standard import *
import numpy as np

import madmom

from scipy.signal import find_peaks

from mir_eval import *




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
    H = 40
    delta = 0.1

    din_th = np.zeros(len(det_function_norm))
    for m in range(H, len(det_function_norm)):
        din_th[m] = C_t*np.median(det_function_norm[m-H:m+H])+delta

    #Peak detection
    peaks, _ = find_peaks(det_function_norm, distance=fps/10, height = din_th)  
    onset_array = peaks/fps
    return onset_array
	
def onset_SOP_Ct(audiofile,C_t):
    #Detection function
    fps = 200
    sodf = madmom.features.onsets.SpectralOnsetProcessor('superflux', diff_frames=20)
    sodf.processors[-1]  # doctest: +ELLIPSIS
    det_function = sodf(audiofile, fps = fps)
    det_function_norm = det_function/(max(det_function))

    #Dynamic threashold
    #C_t = 0.99
    H = 100
    delta = 0.02
    print ("Ct is ", C_t)
    din_th = np.zeros(len(det_function_norm))
    for m in range(H, len(det_function_norm)):
        din_th[m] = C_t*np.median(det_function_norm[m-H:m+H])+delta

    #Peak detection
    peaks, _ = find_peaks(det_function_norm, distance=fps/10, height = din_th)  
    onset_array = peaks/fps
    return onset_array