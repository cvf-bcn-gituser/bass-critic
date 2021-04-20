import matplotlib
matplotlib.use('Agg') # Must be before importing matplotlib.pyplot or pylab!

import sys
import json
from simmusic.extractors.guitar import assess_picking_exercise, assess_strumming_exercise
sys.path.append('../..')
from utils import load_ly_template
import os
import numpy as np
import matplotlib.cm as cm
from matplotlib.colors import LinearSegmentedColormap
import matplotlib.pyplot as plt

submissions_dir = os.path.abspath(os.path.join(os.getcwd(), '../guitar_samples_annotation'))
pysim_chords_test_data_dir = os.path.abspath(os.path.join(os.getcwd(), '../../data'))
result_dir = 'results_misses_exc'


def my_rgba(attack_dev):
    cdict = {'red': [(0.0, 0.0, 0.0),
                     (0.04, 0.0, 0.0),
                     (0.07, 0.99653979, 0.99653979),
                     (0.24, 0.64705882, 0.64705882),
                     (1, 0.64705882, 0.64705882)],

             'green': [(0.0, 0.40784314, 0.40784314),
                       (0.04, 0.40784314, 0.40784314),
                       (0.07, 0.89273356, 0.89273356),
                       (0.24, 0, 0),
                       (1, 0, 0)],

             'blue': [(0.0, 0.21568627, 0.21568627),
                      (0.04, 0.21568627, 0.21568627),
                      (0.07, 0.56908881, 0.56908881),
                      (0.24, 0.14901961, 0.14901961),
                      (1, 0.14901961,0.14901961)]}
    attacks_cm = LinearSegmentedColormap("attack_colors", cdict)
    sm = cm.ScalarMappable(
        norm=plt.Normalize(0, 1, clip=True), cmap=attacks_cm)
    if type(attack_dev) is not np.ndarray:
        attack_dev = np.array([attack_dev])
    abs_devs = np.abs(attack_dev)
    return sm.to_rgba(abs_devs)


def get_assessment_string(id, amap):
    id = str(id)
    if id in amap:
        grades = amap[id][0]
        return str(grades['Overall']) + str(grades['Pitch']) + str(grades['Rhythm']) + str(grades['Tuning'])
    else:
        return 'XXXX'

def image_name(id, overall, pitch, rhythm, tuning):
    if not os.path.exists(result_dir):
        os.makedirs(result_dir)
        print("Directory ", result_dir, " Created ")
    else:
        print("Directory ", result_dir, " already exists")
    sevas_string = get_assessment_string(id, assessments)
    leahs_string = get_assessment_string(id, leahs)
    name = str(int(overall)) + str(int(pitch)) + str(int(rhythm)) + str(int(tuning)) + '_' +\
        leahs_string + '_' +\
        sevas_string + '_' + str(id)
    return os.path.join(result_dir, name + '.pdf')


with open(os.path.join(submissions_dir, 'submissions.json')) as outfile:
    submissions = json.load(outfile)

with open(os.path.join(submissions_dir, "assessments_v1.json")) as js:
    assessments = json.load(js)
with open(os.path.join(submissions_dir, "assessments_leah.json")) as js:
    leahs = json.load(js)

exercise_anno = {
    26 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson01Ex1/l1ex1.json'),
    20 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson02Ex1/l2ex1.json'),
    17 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson02Ex2/l2ex2.json'),
    16 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson03Ex1/l3ex1.json'),
    27 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson04Ex1/l4ex1.json'),
    25 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson05Ex1/l5ex1.json')
}

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
    with open(os.path.join(submissions_dir, f)) as lf:
        for s in json.load(lf):
            all_latencies[s['id']] = s['latency']


def demo_strumming(id, grades_map):
    s =  [s for s in submissions if s['id'] == id][0]
    latency = all_latencies[id]
    audio_file = os.path.join(submissions_dir, s['path'])
    anno_file = os.path.join(pysim_chords_test_data_dir, exercise_anno[s['exercise_id']])

    results = assess_strumming_exercise(
            anno_file,
            os.path.join(*load_ly_template(anno_file)),
            latency,
            audio_file,
            image_format='pdf',
            attack_color_func=my_rgba)
    grades_map[id] = {
        "Overall":int(results["Overall"]),
        "Pitch":(results["Pitch"]),
        "Rhythm":int(results["Rhythm"]),
        "Tuning":int(results["Tuning"])}
    print("#########################################################################")
    print("Strumming Grades: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    f = image_name(id, results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open(f, "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("Image is written to ", f)
    print("#########################################################################")



def demo_picking(id, grades_map):
    s =  [s for s in submissions if s['id'] == id][0]
    latency = all_latencies[id]
    audio_file = os.path.join(submissions_dir, s['path'])
    anno_file = os.path.join(pysim_chords_test_data_dir, exercise_anno[s['exercise_id']])
    results =\
        assess_picking_exercise(
            anno_file,
            os.path.join(*load_ly_template(anno_file)),
            latency,
            audio_file,
            image_format='pdf',
            attack_color_func=my_rgba)
    grades_map[id] = {
        "Overall":int(results["Overall"]),
        "Pitch":(results["Pitch"]),
        "Rhythm":int(results["Rhythm"]),
        "Tuning":int(results["Tuning"])}
    print("#########################################################################")
    print("Picking Grades: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    f = image_name(id, results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open(f, "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("Image is written to ", f)
    print("#########################################################################")


picking_ids=set([16, 27, 20])
strumming_ids=set([17, 25, 26])


autogrades = {}
for s in submissions:
    if s['exercise_id'] in strumming_ids:
        demo_strumming(s['id'], autogrades)
    elif s['exercise_id'] in picking_ids:
        demo_picking(s['id'], autogrades)

with open('autogrades.json', 'w') as f:
    json.dump(autogrades, f, indent=4)
