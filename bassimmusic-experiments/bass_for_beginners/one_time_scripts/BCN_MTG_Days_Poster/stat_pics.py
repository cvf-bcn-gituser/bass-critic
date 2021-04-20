import matplotlib.pyplot as plt
import sys
import json
from simmusic.extractors.guitar import assess_picking_exercise, assess_strumming_exercise
import os
from sklearn.metrics import mean_absolute_error
import numpy as np

def extract_grades(ids, grades):
    overall = np.array([int(grades[id][0]['Overall']) for id in ids])
    pitch = np.array([int(grades[id][0]['Pitch']) for id in ids])
    rhythm = np.array([int(grades[id][0]['Rhythm']) for id in ids])
    tuning = np.array([int(grades[id][0]['Tuning']) for id in ids])
    return overall, pitch, rhythm, tuning

def extract_autogrades(ids, grades):
    overall =np.array([int(grades[id]['Overall']) for id in ids])
    pitch =  np.array([int(grades[id]['Pitch']) for id in ids])
    rhythm = np.array([int(grades[id]['Rhythm']) for id in ids])
    tuning = np.array([int(grades[id]['Tuning']) for id in ids])
    return overall, pitch, rhythm, tuning

submissions_dir = os.path.abspath(os.path.join(os.getcwd(), '../guitar_samples_annotation'))
pysim_chords_test_data_dir = os.path.abspath(os.path.join(os.getcwd(), '../../data'))
result_dir = 'results'

with open(os.path.join(submissions_dir, "assessments_v1.json")) as js:
    assessments = json.load(js)
with open(os.path.join(submissions_dir, "assessments_leah.json")) as js:
    leahs = json.load(js)
with open("autogrades.json") as js:
    autogrades = json.load(js)

# for exercises where Leah's grade exists

ids = leahs.keys()

leahs_overall, leahs_pitch, leahs_rhythm, leahs_tuning = extract_grades(ids, leahs)
sevas_overall, sevas_pitch, sevas_rhythm, sevas_tuning = extract_grades(ids, assessments)
auto_overall, auto_pitch, auto_rhythm, auto_tuning = extract_autogrades(ids, autogrades)

print(mean_absolute_error(auto_overall, sevas_overall))
print(mean_absolute_error(auto_overall, leahs_overall))
print(mean_absolute_error(sevas_overall, leahs_overall))
print()
print(mean_absolute_error( auto_pitch, sevas_pitch))
print(mean_absolute_error( auto_pitch, leahs_pitch))
print(mean_absolute_error(sevas_pitch, leahs_pitch))
print()
print(mean_absolute_error( auto_rhythm, sevas_rhythm))
print(mean_absolute_error( auto_rhythm, leahs_rhythm))
print(mean_absolute_error(sevas_rhythm, leahs_rhythm))
print()
print(mean_absolute_error( auto_tuning, sevas_tuning))
print(mean_absolute_error( auto_tuning, leahs_tuning))
print(mean_absolute_error(sevas_tuning, leahs_tuning))

print()

print(mean_absolute_error(auto_overall, np.mean((leahs_overall, sevas_overall), axis=0)))
print(mean_absolute_error(auto_pitch, np.mean((leahs_pitch, sevas_pitch), axis=0)))
print(mean_absolute_error(auto_rhythm, np.mean((leahs_rhythm, sevas_rhythm), axis=0)))
print(mean_absolute_error(auto_tuning, np.mean((leahs_tuning, sevas_tuning), axis=0)))

plt.style.use('seaborn-deep')
bins = np.linspace(-3, 3, 7)
plt.hist([auto_overall-sevas_overall, auto_overall-leahs_overall, sevas_overall-leahs_overall], bins, label=['auto-human1', 'auto-human2', 'human1-human2'])
plt.legend(loc='upper left')
plt.title("Overall grade confusions")
plt.show()

plt.style.use('seaborn-deep')
bins = np.linspace(-3, 3, 7)
plt.hist(
    [auto_pitch-sevas_pitch,
     auto_pitch-leahs_pitch,
    sevas_pitch-leahs_pitch],
    bins,
    label=['auto-human1', 'auto-human2', 'human1-human2'])
plt.legend(loc='upper left')
plt.title("Pitch grade confusions")
plt.show()

plt.style.use('seaborn-deep')
bins = np.linspace(-3, 3, 7)
plt.hist(
    [auto_rhythm-sevas_rhythm,
     auto_rhythm-leahs_rhythm,
    sevas_rhythm-leahs_rhythm],
    bins,
    label=['auto-human1', 'auto-human2', 'human1-human2'])
plt.legend(loc='upper left')
plt.title("Rhythm grade confusions")
plt.show()

plt.style.use('seaborn-deep')
bins = np.linspace(-3, 3, 7)
plt.hist(
    [auto_tuning-sevas_tuning,
     auto_tuning-leahs_tuning,
    sevas_tuning-leahs_tuning],
    bins,
    label=['auto-human1', 'auto-human2', 'human1-human2'])
plt.legend(loc='upper left')
plt.title("Tuning grade confusions")
plt.show()