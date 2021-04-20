import os
import numpy as np
import json
from madmom.features.onsets import CNNOnsetProcessor
from madmom.features.onsets import SpectralOnsetProcessor
from madmom.audio.filters import LogarithmicFilterbank

from mcclient import set_token, get_all_metadata, set_hostname, get_contexts, get_full_context, _download_file

import essentia.standard as ess

def download_exercises(exercise_id, submissions, root_dir, meta):
    if not os.path.exists(root_dir):
        os.makedirs(root_dir)
    for s in submissions:
        if s['session_id'] is not None:
            m = {}
            m['exercise_id'] = exercise_id
            m['session_id']=s['session_id']
            m['created']=s['sounds'][0]['created']
            filename = os.path.join(root_dir, os.path.basename(s['sounds'][0]['download_url']))
            m['path'] = filename
            m['id'] = s['sounds'][0]['id']
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

set_token("256c9cc1a842c570f2e940039053d94ff9c31e81")#for staging site
set_hostname('staging.musiccritic.upf.edu')

gc = get_full_context(8)
ges = gc['exercises']

#17 05. More Strumming (L2Ex2)
#25 08. Chord Sequence (L5Ex1)
#16 06. First String Picking (L3Ex1)
#27 07. G Chromatic Scale (L4Ex1)
#20 04. Picking (L2Ex1)
#26 03. Strumming (L1Ex1)
#30 01. Latency Calibration I
#31 02. Latency Calibration II
#51 09. Latency Calibration III
#52 10. Latency Calibration IV

submissions = []
backing_tracks = []
for x in ges:
    download_backing_track(x['id'], x['backing_tracks'], 'backing_tracks', backing_tracks)
    download_exercises(x['id'], x['submissions'], 'submissions', submissions)

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


