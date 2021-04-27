import essentia.standard as ess
import json
import os


###

def process(s, sample_rate = 44100):
    backing_track = [b for b in backing_tracks if b['exercise_id'] == s['exercise_id']][0]['path']
    backing_audio = ess.MonoLoader(filename=backing_track)()
    mix_dir = 'mixes'
    if not os.path.exists(mix_dir):
        os.makedirs(mix_dir)
    audio = ess.MonoLoader(filename=s['path'])()
    latency = s['latency']
    frames = int(latency * sample_rate)
    audio = audio[frames:]
    l = min(len(audio), len(backing_audio))
    # TODO: align proportion
    mix = 0.8 * audio[:l] + 0.2 * backing_audio[:l]
    mix_path, _ = os.path.splitext(os.path.basename(s['path']))
    mix_path = os.path.join(mix_dir, mix_path + '.mp3')
    s['mix_path'] = mix_path
    ess.MonoWriter(filename=mix_path, format='mp3')(mix)
    print(mix_path)

###

with open('submissions.json') as outfile:
    submissions = json.load(outfile)

with open('backing_tracks.json') as outfile:
    backing_tracks = json.load(outfile)

# TODO: optimize by exercise (load backing track once)
process(submissions[100])

