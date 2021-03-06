import os
import numpy as np
import json
from madmom.features.onsets import CNNOnsetProcessor
from madmom.features.onsets import SpectralOnsetProcessor
from madmom.audio.filters import LogarithmicFilterbank
import collections
from simmusic.latency import latency, onsets

from mcclient import set_token, get_all_metadata, set_hostname, get_contexts, get_full_context, _download_file
import matplotlib.pyplot as plt
from datetime import datetime

import essentia.standard as ess

LATENCY_EXERCISE_ID = 182
BASS_IDS = set([203, 204, 205, 206, 207, 208])

def download_exercises(exercise_id, submissions, root_dir, meta):
    if not os.path.exists(root_dir):
        os.makedirs(root_dir)
    for s in submissions:
        if s['session_id'] is not None:
            m = {}
            m['exercise_id'] = exercise_id
            m['session_id']=s['session_id']
            m['session_id']=s['session_id']
            m['created']=s['sounds'][0]['created']
            filename = os.path.join(root_dir, os.path.basename(s['sounds'][0]['download_url']))
            m['path'] = filename
            m['id'] = s['sounds'][0]['id']
            m['grades'] = s['sounds'][0]['grades']
            m['user_agent'] = s['user_agent']
            _download_file(s['sounds'][0]['id'], filename)
            meta.append(m)

def download_backing_track(exercise_id, backing_tracks, root_dir, meta):
    if not os.path.exists(root_dir):
        os.makedirs(root_dir)
    s = backing_tracks[0]
    m = {}
    m['exercise_id'] = exercise_id
    filename = os.path.join(root_dir, os.path.basename(s['download_url']))
    m['path'] = filename
    _download_file(s['id'], filename)
    meta.append(m)

set_token("dd1cedac9ba20dc53d4040a2ffa397d43432ce33")
set_hostname('musiccritic.upf.edu')

gc = get_full_context(422)
ges = np.array(gc['exercises'])
ges = [x for x in ges if x['id'] == LATENCY_EXERCISE_ID or x['id'] in BASS_IDS]

relevant_sessions = set()
for x in ges:
    if x['id'] in BASS_IDS:
        relevant_sessions.update([s['session_id'] for s in x['submissions']])

submissions = []
backing_tracks = []
for x in ges:
    download_backing_track(x['id'], x['backing_tracks'], 'backing_tracks', backing_tracks)
    download_exercises(
        x['id'],
        [s for s in x['submissions'] if s['session_id'] in relevant_sessions],
        'submissions', submissions)

# calculate duration
for s in submissions:
    audio = ess.MonoLoader(filename=s['path'])()
    duration = float(len(audio)) / 44100.0
    s['duration']=duration
    print(s['path'], s['duration'])

with open('backing_tracks.json', 'w') as outfile:
    json.dump(backing_tracks, outfile, indent=4)

with open('submissions.json', 'w') as outfile:
    json.dump(submissions, outfile, indent=4)

with open('backing_tracks.json') as outfile:
    backing_tracks = json.load(outfile)
with open('submissions.json') as outfile:
    submissions = json.load(outfile)


reference_clicks_file = [x['path'] for x in backing_tracks if x['exercise_id'] == LATENCY_EXERCISE_ID][0]
user_clicks_files = collections.defaultdict(list)
for s in submissions:
    if s['exercise_id'] == LATENCY_EXERCISE_ID:
        user_clicks_files[s['session_id']].append((s['path'], s['created']))

def process_session_latencies(session_id, fps=1000):
    cf=user_clicks_files[session_id]
    ref_onsets = onsets(reference_clicks_file, fps=fps)
    ls = []
    for f in cf:
        l, x = latency(ref_onsets, f[0], fps=fps)
        ls.append((f[1], l))
        print('latency: ', l, ' at ', f[1])
        #plt.plot(x)
        #plt.title = session_id
        #plt.show()
    if len(ls) > 0:
        nums = [x[1] for x in ls]
        print('mean: ', np.mean(nums), ' std: ', np.std(nums))
        return ls
    else:
        return [('2020-01-01T01:01:01.000000Z', 0.07)]


FMT = '%Y-%m-%dT%H:%M:%S.%fZ'
def closest_latency(latencies, created):
    time_c = datetime.strptime(created, FMT)
    deltas = [abs(datetime.strptime(x[0], FMT) - time_c) for x in latencies]
    return latencies[np.argmin(deltas)][1]


uid2latencies = {}
for s in submissions:
    if (s['session_id'] not in uid2latencies):
        print(s['session_id'], s['user_agent'], 'Counting...')
        uid2latencies[s['session_id']] = process_session_latencies(s['session_id'], fps=500)

for s in submissions:
    s['latency']=closest_latency(uid2latencies[s['session_id']], s['created'])

with open('submissions.json', 'w') as outfile:
    json.dump(submissions, outfile, indent=4)
