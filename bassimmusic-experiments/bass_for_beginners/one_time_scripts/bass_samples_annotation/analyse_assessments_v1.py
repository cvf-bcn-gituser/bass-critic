import os
import re
import json
import collections
import numpy as np

def filter_exercise(ex_id, ls):
    return [s for s in submissions if s['exercise_id'] == ex_id and s['id'] in ls]


with open('submissions.json') as outfile:
    submissions = json.load(outfile)

with open("assessments_v1.json") as infile:
    all_submissions = json.load(infile)

#30 01. Latency Calibration I
#31 02. Latency Calibration II
#26 03. Strumming (L1Ex1)
#20 04. Picking (L2Ex1)
#17 05. More Strumming (L2Ex2)
#16 06. First String Picking (session_idL3Ex1)
#27 07. G Chromatic Scale (L4Ex1)
#25 08. Chord Sequence (L5Ex1)

ls = set()
for k in all_submissions.keys():
    for s in all_submissions[k]:
        if s['L']:
            ls.add(int(k))

wrong = set()
for k in all_submissions.keys():
    for s in all_submissions[k]:
        if s['Wrong Visualization']:
            wrong.add(int(k))
print(len(wrong), len(all_submissions), len(wrong)/len(all_submissions)*100.0)

issues = set()
for k in all_submissions.keys():
    for s in all_submissions[k]:
        for i in s['Comments']:
            issues.add(i)

filtered_exercises = {}
exercise_ids = [26, 20, 17, 16, 27, 25]
total_counter = 0
total_duration = 0
for id in exercise_ids:
    filtered_exercises[id] = filter_exercise(id, ls)
    c = len(filtered_exercises[id])
    d = sum([f['duration'] for f in filtered_exercises[id]])
    total_counter += c
    total_duration += d
    print(id, c, d)
print(total_counter, total_duration)


# systematized issues.
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

errors_by_categories = collections.defaultdict(set)
for k in all_submissions.keys():
    for s in [s for s in all_submissions[k] if s['Wrong Visualization']]:
        for i in s['Comments']:
            try:
                errors_by_categories[issue_to_category[i]].add(int(k))
            except KeyError:
                print('category "{0}" not found'.format(i))

popularity = sorted(
    [(categories[k], len(errors_by_categories[k])) for k in categories.keys()],
    key = lambda s: s[1],
    reverse = True)

objects = categories.values()
y_pos = np.arange(len(objects))
size = [len(errors_by_categories[k]) for k in categories.keys()]

plt.bar(y_pos, size, align='center', alpha=0.5)
plt.xticks(y_pos, objects)
plt.ylabel('Frequency')
plt.show()

# by exercise (temporary). Make selection for Leah.

with open("assessments_v1.json") as infile:
    all_submissions = json.load(infile)

#30 01. Latency Calibration I
#31 02. Latency Calibration II
#26 03. Strumming (L1Ex1)
#20 04. Picking (L2Ex1)
#17 05. More Strumming (L2Ex2)
#16 06. First String Picking (session_idL3Ex1)
#27 07. G Chromatic Scale (L4Ex1)
#25 08. Chord Sequence (L5Ex1)

ls = set()
for k in all_submissions.keys():
    for s in all_submissions[k]:
        if s['L']:
            x = re.search("\d+", k)
            ls.add(int(x.group(0)))
with open('l2ex2_to_google.json') as outfile:
    submissions = [s for s in json.load(outfile) if s['id'] in ls]

print(len(submissions))
print(sum([s['duration'] for s in submissions]))
print(sorted([s['id'] for s in submissions]))

with open('l2ex2_leah.json', 'w') as outfile:
    json.dump(submissions, outfile, indent=4)

pic_folder_id = create_folder('LeahPics')
print("pic_folder_id: ", pic_folder_id)

ex_folder_id = create_folder('LeahExercises')
print("ex_folder_id: ", ex_folder_id)

upload_mixes_and_pics_to_google_drive('l2ex2_leah.json')
