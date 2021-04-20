import os
import numpy as np
import json
import collections
import essentia.standard as ess
import sys
from pychord_tools import symbolic_analysis
sys.path.append('../..')
from utils import visualize_picking
from utils import visualize_strumming
from simmusic.onset_detection import GuitarOnsetDetector

def devs(anno_file, audio_file, sample_rate = 44100):
    events = np.array(symbolic_analysis.events_for_file(anno_file))
    beats = np.array(symbolic_analysis.beats_for_file(anno_file))

    audio = ess.MonoLoader(filename=audio_file)()
    duration = float(len(audio)) / sample_rate
    half_ibi = (beats[1:]-beats[:-1]).mean() / 2
    start = max(events[0] - half_ibi, 0)
    end = min(events[-1] + half_ibi, duration)
    onsets = np.array(GuitarOnsetDetector(2500).predict(audio_file, start, end))
    filtered_actual = onsets[(onsets >= start) & (onsets < end)]
    devs = []
    for x in filtered_actual:
        i = np.searchsorted(events, x)
        if i >= len(events) or (0 < i and x - events[i - 1] < events[i] - x):
            x1 = events[i - 1]
            x2 = x
            attack_dev = x2 - x1
        else:
            x1 = x
            x2 = events[i]
            attack_dev = x2 - x1
        devs.append(abs(attack_dev))
    return devs


def guess_latency(submissions, anno_file, sample_rate = 44100):
    l2_list = []
    for s in submissions:
        l1 = latencies[s['session_id']]
        l2 = 2 * l1
        audio = ess.MonoLoader(filename=s['path'])()
        frames1 = int(l1 * sample_rate)
        audio_file1 = 'q.wav'
        ess.MonoWriter(filename=audio_file1, format='wav')(audio[frames1:])
        frames2 = int(l2 * sample_rate)
        audio_file2 = 'qq.wav'
        ess.MonoWriter(filename=audio_file2, format='wav')(audio[frames2:])
        devs1 = devs(anno_file, audio_file1)
        devs2 = devs(anno_file, audio_file2)
        print(np.mean(devs1), np.mean(devs2))
        if (np.mean(devs1) > np.mean(devs2)):
            l2_list.append(s)
            s['latency'] = l2
            print('l2:', s['id'])
        else:
            s['latency'] = l1
            print('l1:', s['id'])
    return l2_list

def process_exercise(ex_id, anno_filename, json_filename, visualize_func, sample_rate = 44100):
    ex_subs = [s for s in submissions if s['exercise_id'] == ex_id]
    backing_track = [b for b in backing_tracks if b['exercise_id'] == ex_id][0]['path']
    backing_audio = ess.MonoLoader(filename=backing_track)()
    l2 = guess_latency(ex_subs, anno_filename)
    print(l2)
    # generate mixes
    mix_dir = 'mixes'
    if not os.path.exists(mix_dir):
        os.makedirs(mix_dir)

    for s in ex_subs:
        audio = ess.MonoLoader(filename=s['path'])()
        latency = s['latency']
        frames = int(latency * sample_rate)
        audio = audio[frames:]
        l = min(len(audio), len(backing_audio))
        mix = 0.7 * audio[:l] + 0.3 * backing_audio[:l]
        mix_path, _ = os.path.splitext(os.path.basename(s['path']))
        mix_path = os.path.join(mix_dir, mix_path + '.mp3')
        s['mix_path'] = mix_path
        ess.MonoWriter(filename=mix_path, format='mp3')(mix)
        print(mix_path)

    # generate visualization
    pics_dir = 'pics'
    if not os.path.exists(pics_dir):
        os.makedirs(pics_dir)

    for s in ex_subs:
        audio = ess.MonoLoader(filename=s['path'])()
        latency = s['latency']
        frames = int(latency * sample_rate)
        audio = audio[frames:]
        audio_file = 'q.wav'
        ess.MonoWriter(filename=audio_file, format='wav')(audio)
        png_name = visualize_func(anno_file, audio_file)
        pic_path, _ = os.path.splitext(os.path.basename(s['path']))
        pic_path = os.path.join(pics_dir, pic_path + '.png')
        os.rename(png_name, pic_path)
        s['pic_path'] = pic_path
        print(pic_path)

    with open(json_filename, 'w') as outfile:
        json.dump(ex_subs, outfile, indent=4)


with open('backing_tracks.json') as outfile:
    backing_tracks = json.load(outfile)

with open('submissions.json') as outfile:
    submissions = json.load(outfile)

with open('session_latencies.json') as outfile:
    latencies = json.load(outfile)

# some statistics per exercise.

vanishing_sessions = set()
vanishing_sessions.add('71g99by3sqr27rrg2wq2x6fdudawrzfj')
vanishing_sessions.add('mk9duavb8f9vqc6cm7drnx8orj6lpstt')
vanishing_sessions.add('ouo4cx2wqmq3laxlbwtu78awxwxnc0en')

submissions = [s for s in submissions if s['session_id'] not in vanishing_sessions]
exercises = {}
exercise_duration = {}
session_duration = {}

for s in submissions:
    c = exercises.get(s['exercise_id'])
    if c is None:
        c = collections.Counter()
        exercises[s['exercise_id']] = c
    c.update([s['session_id']])
    if s['exercise_id'] not in exercise_duration:
        d = 0
    else:
        d = exercise_duration[s['exercise_id']] + s['duration']
    exercise_duration[s['exercise_id']] = d
    if s['session_id'] not in session_duration:
        d = 0
    else:
        d = session_duration[s['session_id']] + s['duration']
    session_duration[s['session_id']] = d

total_duration = sum(session_duration.values())
print(total_duration)
#30 01. Latency Calibration I
#31 02. Latency Calibration II
#26 03. Strumming (L1Ex1)
#20 04. Picking (L2Ex1)
#17 05. More Strumming (L2Ex2)
#16 06. First String Picking (session_idL3Ex1)
#27 07. G Chromatic Scale (L4Ex1)
#25 08. Chord Sequence (L5Ex1)

pysim_chords_test_data_dir = os.path.abspath(os.path.join(os.getcwd(), '../../data'))
anno_file = os.path.join(
    pysim_chords_test_data_dir,
    'exercises/Leah17Dec2018/Lesson02Ex1/l2ex1.json')
process_exercise(20, anno_file, 'l2ex1_to_google.json', visualize_picking)

anno_file = os.path.join(
    pysim_chords_test_data_dir,
    'exercises/Leah17Dec2018/Lesson01Ex1/l1ex1.json')
process_exercise(26, anno_file, 'l1ex1_to_google.json', visualize_strumming)

anno_file = os.path.join(
    pysim_chords_test_data_dir,
    'exercises/Leah17Dec2018/Lesson02Ex2/l2ex2.json')
process_exercise(17, anno_file, 'l2ex2_to_google.json', visualize_strumming)

anno_file = os.path.join(
    pysim_chords_test_data_dir,
    'exercises/Leah17Dec2018/Lesson03Ex1/l3ex1.json')
process_exercise(16, anno_file, 'l3ex1_to_google.json', visualize_picking)

anno_file = os.path.join(
    pysim_chords_test_data_dir,
    'exercises/Leah17Dec2018/Lesson04Ex1/l4ex1.json')
process_exercise(27, anno_file, 'l4ex1_to_google.json', visualize_picking)

anno_file = os.path.join(
    pysim_chords_test_data_dir,
    'exercises/Leah17Dec2018/Lesson05Ex1/l5ex1.json')
process_exercise(25, anno_file, 'l5ex1_to_google.json', visualize_strumming)
