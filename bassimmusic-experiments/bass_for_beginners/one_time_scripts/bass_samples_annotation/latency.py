import numpy as np
import json
import collections
import matplotlib.pyplot as plt
from essentia.standard import *
from scipy.signal import find_peaks
from simmusic.latency import latency, onsets

with open('backing_tracks.json') as outfile:
    backing_tracks = json.load(outfile)

with open('submissions.json') as outfile:
    submissions = json.load(outfile)

vanishing_sessions = set()
vanishing_sessions.add('71g99by3sqr27rrg2wq2x6fdudawrzfj')
vanishing_sessions.add('mk9duavb8f9vqc6cm7drnx8orj6lpstt')
vanishing_sessions.add('ouo4cx2wqmq3laxlbwtu78awxwxnc0en')

#30 01. Latency Calibration I
#31 02. Latency Calibration II
#26 03. Strumming (L1Ex1)
#20 04. Picking (L2Ex1)
#17 05. More Strumming (L2Ex2)
#16 06. First String Picking (L3Ex1)
#27 07. G Chromatic Scale (L4Ex1)
#25 08. Chord Sequence (L5Ex1)

# some statistics per exercise.

submissions = [s for s in submissions if s['session_id'] not in vanishing_sessions]

exercises = {}
for s in submissions:
    c = exercises.get(s['exercise_id'])
    if c is None:
        c = collections.Counter()
        exercises[s['exercise_id']] = c
    c.update([s['session_id']])

reference_clicks_file = [x['path'] for x in backing_tracks if x['exercise_id'] == 30][0]
session_clicks_files = collections.defaultdict(list)
for s in submissions:
    if s['exercise_id'] == 30 or s['exercise_id'] == 31:
        session_clicks_files[s['session_id']].append(s['path'])


def process_session_latencies(session_id, fps=1000):
    cf=session_clicks_files[session_id]
    ref_onsets = onsets(reference_clicks_file, fps=fps)
    for f in cf:
        l, x = latency(ref_onsets, f, fps=fps)
        print('latency: ', l)
        plt.plot(x)
    plt.show()

process_session_latencies('oc16cdndabgedcltfbczcow4lahd4jm3', fps=500)

process_session_latencies('4d9ubcb6hg99v8qm7d2qnim243r242gs', fps=500)
process_session_latencies('6u7or8e3dd52ux17nbub7cuubztqai2f', fps=500)
process_session_latencies('i24drlkkqpwclr4uraka4rpktm06fs79', fps=500)
process_session_latencies('lef1jw8pcapet97u458i2qqa5y5nnqvw', fps=500)
process_session_latencies('xm604qeaywejnoiof7vuipujj8elyxpu', fps=500)
process_session_latencies('ywyzv949q96w1pewtbwxe9gmvrjyeebu', fps=500)

# two peaked sessions
ref_onsets = onsets(reference_clicks_file, fps=500)
cf = ['submissions/196_recording-0-2019-03-15T16-41-44-842Z-0.wav',
      'submissions/197_recording-0-2019-03-15T16-44-36-831Z-0.wav',
      'submissions/161_recording-0-2019-03-13T12-15-54-345Z-0.wav']
for f in cf:
    l, x = latency(ref_onsets, f, fps=500)
    x = np.array(x) / max(x)
    peaks, _ = find_peaks(x, height=0.09)
    plt.plot(x)
    plt.plot(peaks, x[peaks], "x")
    print('latency: ', l)
plt.show()

# recalculate without "wrong" files
vanishing_files=set()
vanishing_files.add(292)
vanishing_files.add(162)
reference_clicks_file = [x['path'] for x in backing_tracks if x['exercise_id'] == 30][0]
session_clicks_files = collections.defaultdict(list)
for s in submissions:
    if (s['exercise_id'] == 30 or s['exercise_id'] == 31) and s['id'] not in vanishing_files:
        session_clicks_files[s['session_id']].append(s['path'])

ref_onsets = onsets(reference_clicks_file, fps=500)
latencies = {}
for session_id in session_clicks_files.keys():
    ls = [latency(ref_onsets, f, fps=500) for f in session_clicks_files[session_id]]
    latencies[session_id] = np.mean(ls)
    print(session_id, ' latency: ', latencies[session_id])

with open('session_latencies.json', 'w') as outfile:
    json.dump(latencies, outfile, indent=4)
# Form generation
# https://developers.googleblog.com/2016/06/auto-generating-google-forms.html
