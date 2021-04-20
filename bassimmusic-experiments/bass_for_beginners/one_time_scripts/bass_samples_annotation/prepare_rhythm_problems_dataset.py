import json
import numpy as np
import matplotlib.pyplot as plt

with open("submissions.json") as js:
    all_submissions = json.load(js)
with open("assessments_v1.json") as js:
    assessments = json.load(js)
with open("assessments_leah.json") as js:
    leahs = json.load(js)

categories = {
    1 : 'missing note is not penalized',
    2 : 'excessive note is not penalized',
    3 : 'attack: false positive',
    4 : 'attack: not detected (false negative)',
    5 : 'attack: minor deviation is penalized too much',
    6 : 'octave error',
    7 : 'pitch/chord colorization: error unrecognized',
    8 : 'pitch/chord colorization: false error',
    9 : 'pitch/chord colorization: noisy sound is not penalized',
    10 : 'pitch/chord colorization: unaccountable penalization',
    11 : 'latency detection error',
    12 : 'feedback reduction',
    13 : 'metronome on (bad example)'}

issue_to_category = {
    'missing missing' : 1,
    'missing-missing' : 1,
    'excessive missing' : 2,
    'excessive note visualization' : 2,
    'missing excessive' : 2,
    'False positives' : 3,
    'false positive' : 3,
    'false positive (and negative?)' : 3,
    'false positive: voice' : 3,
    'false positives' : 3,
    'false positives (cough)' : 3,
    '? false negatives' : 4,
    'False negatives' : 4,
    'false negatives' : 4,
    'false negatives (?)' : 4,
    'false negatives!' : 4,
    'false negatives(?)' : 4,
    'false negativs' : 4,
    'false negativs(?)' : 4,
    'false positive (and negative?)' : 4,
    'flase negatives(?)' : 4,
    'attack penalization' : 5,
    'attack too punitive' : 5,
    'attacks to punitive' : 5,
    'attacks too punitive' : 5,
    'penalization for attacks is to high' : 5,
    'octave error' : 6,
    'Octave error' : 6,
    'incorrect pitch unrecognized' : 7,
    'uncrecognized pitch error' : 7,
    'pitch error undetected' : 7,
    'background sound (E)' : 8,
    'pitch detection! (last E)' : 8,
    'unmuted' : 8,
    'unmuted(!)' : 8,
    'unmuted(?)' : 8,
    "unmuted(?) 'A' should be yellow" : 8,
   '(?) pitch detection silence threshold' : 8,
    'chord detection' : 8,
    'chord detection(!)' : 8,
    'chord detection(!) punitive' : 8,
    'chord detection(?)' : 8,
    'chord misrecognition' : 8,
    'chord misrecognition (Am' : 8,
    'chord misrecognition (Am)' : 8,
    'chord misrecognition (C)' : 8,
    'chord misrecognition (D)' : 8,
    'chord misrecognition (E)' : 8,
    'chord misrecognition (F last)' : 8,
    'chord misregocgnition (E)' : 8,
    'chord recognition' : 8,
    'chord recognition(!)' : 8,
    'chords detection' : 8,
    'chords detection(!)' : 8,
    'chords misrecognition' : 8,
    'Noisy chord is not penalized (Am)' : 9,
    'Noisy chord not penalized' : 9,
    'chords colorization' : 10,
    'colorisation' : 10,
    'colorization' : 10,
    'random colorization (unmuted)' : 10,
    'uneven chord colorization' : 10,
    'pitch colorization' : 10,
    'pitch detection artefacts' : 10,
    'latency error' : 11,
    'latency(?)' : 11,
    'feedback reduction' : 12,
    'metronome on (bad example)' : 13
}

rhythm_issues = {
    1: 'missing note is not penalized',
    2: 'excessive note is not penalized',
    3: 'attack: false positive',
    4: 'attack: not detected (false negative)',
    5: 'attack: minor deviation is penalized too much'
}

# Ranking:
# 4 ['attack: not detected (false negative)', 56, 24%],
# 3 ['attack: false positive',                49, 21%],
# 5 ['attack: minor deviation is penalized too much', 25, 11%],
# 1 ['missing note is not penalized', 11, 4%],
# 2 ['excessive note is not penalized', 6, 3%],

problematic = []

for s in all_submissions:
    sid = str(s['id'])
    if sid in assessments:
        ass = assessments[sid][0]
        errors = dict()
        for i in ass['Comments']:
            try:
                if issue_to_category[i] in rhythm_issues:
                    errors[issue_to_category[i]] = categories[issue_to_category[i]]
            except KeyError:
                print('category "{0}" not found'.format(i))
        if len(errors) > 0:
            s['Issues'] = errors
            s['Grades'] = [ass]
            if sid in leahs:
                s['Grades'].append(leahs[sid][0])
            problematic.append(s)


with open("attack_issues.json", "w") as af:
    json.dump(problematic, af, indent=4)

problematic = np.array(problematic)
gs = [len(x['Grades']) for x in problematic]

def all4s(gs):
    for g in gs:
        if g['Rhythm'] != '4' or g['Overall'] != '4':
            return False
    return True

ideal = [x for x in problematic if all4s(x['Grades'])]


#with open("attack_issues_ideal.json", "w") as af:
#    json.dump(problematic, af, indent=4)

with open("attack_issues_ideal.json") as af:
    ideal = json.load(af)

# add latencies

# read jsons
all_latencies = {}
latency_aware = [
   'l1ex1_to_google.json',
   'l2ex1_to_google.json',
   'l2ex2_to_google.json',
   'l3ex1_to_google.json',
   'l4ex1_to_google.json',
   'l5ex1_to_google.json'
]

for f in latency_aware:
    with open(f) as lf:
        for s in json.load(lf):
            all_latencies[s['id']] = s['latency']

for i in ideal:
    i['latency'] = all_latencies[i['id']]


with open("attack_issues_ideal.json", "w") as af:
    json.dump(ideal, af, indent=4)
