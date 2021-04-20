import matplotlib.pyplot as plt
import sys
import json
from simmusic.extractors.guitar import assess_picking_exercise, assess_strumming_exercise, attack_rgba
from simmusic.latency import remove_latency
from pychord_tools.low_level_features import AnnotatedBeatChromaEstimator
from pychord_tools.third_party import NNLSChromaEstimator, ChromaEstimator,nnls_chroma_from_audio
import os
from sklearn.metrics import mean_absolute_error
import numpy as np
from scipy.stats import norm
import matplotlib.gridspec as gridspec
import matplotlib.cm as cm
from matplotlib.colors import LinearSegmentedColormap
from pychord_tools.low_level_features import AnnotatedChromaSegments, SegmentChromaEstimator, smooth
from pychord_tools.low_level_features import AudioPathExtractor, UidExtractor
from simmusic.feature_extraction import AdaptiveChromaEstimator, GuitarLabelTranslator, my_nnls_chroma_from_audio
from pychord_tools.models import CosineSimilarityBinaryPatternModel, CorrectnessLogNormBalanceModel, IndependentPDFModel, IndependentIntegralModel
from sklearn import preprocessing
from scipy.stats import beta
from pychord_tools.labels import DEGREES
import pychord_tools.compositional_data as cd
from sklearn.mixture import GaussianMixture
from pychord_tools.plots import ternary_plot, plot_labels
from matplotlib.ticker import MultipleLocator, FormatStrFormatter, FuncFormatter
from simmusic.feature_extraction import interval_deviations_from_equal_tempered, sample_deviations, calculate_statistics_for_deviation_from_equal_temperament, load_spectrum_and_peaks
import scipy.stats as stats

submissions_dir = os.path.abspath(os.path.join(os.getcwd(), '../guitar_samples_annotation'))

def signed_attack_deviations(reference_events, actual_onsets, start, end):
    """
    Calculates deviations of actual onsets from reference ones.
    Only the segment between 'start' and 'end' is processed.

    :param reference_events: reference event times (in seconds)
    :param actual_onsets:  actual onsts times
    :param start: start time
    :param end: end time
    :return: deviations array
    """
    actual_onsets = np.array(actual_onsets)
    filtered_actual = actual_onsets[(actual_onsets >= start) & (actual_onsets < end)]
    devs = []
    for x in filtered_actual:
        i = np.searchsorted(reference_events, x)
        if i >= len(reference_events) or (0 < i and x - reference_events[i - 1] < reference_events[i] - x):
            attack_dev = x -reference_events[i - 1]
        else:
            attack_dev = x - reference_events[i]
        devs.append(attack_dev)
    return devs


with open(os.path.join(submissions_dir, "assessments_v1.json")) as js:
    assessments = json.load(js)
with open(os.path.join(submissions_dir, "assessments_leah.json")) as js:
    leahs = json.load(js)
with open("../../timing.json") as outfile:
    id2timing = json.load(outfile)
for v in id2timing.values():
    v['signed_devs'] = signed_attack_deviations(v['events'], v['onsets'], v['start'], v['end'])

with open(os.path.join(submissions_dir, "submissions.json")) as js:
    all_submissions = json.load(js)

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
    4: 'attack: not detected (false negative)'
}

# Rhythm

with_grades = []
for s in all_submissions:
    sid = str(s['id'])
    if sid in assessments:
        ass = assessments[sid][0]
        error = False
        for i in ass['Comments']:
            try:
                if issue_to_category[i] in rhythm_issues:
                    print("rejected:", i)
                    error = True
                    break
            except KeyError:
                print('category "{0}" not found'.format(i))
        if not error:
            s['Grades'] = [ass]
            if sid in leahs:
                s['Grades'].append(leahs[sid][0])
            with_grades.append(s)


def all4s(gs, rubric):
    for g in gs:
        if g[rubric] != '4':
            return False
    return True

def with_predominant_grade(grade, gs, rubric):
    with_grade = False
    for g in gs:
        gr = int(g[rubric])
        if abs(grade - gr) > 1:
            return False
        if gr == grade:
            with_grade = True
    return with_grade

ideal = [x['id'] for x in with_grades if all4s(x['Grades'], 'Rhythm')]
ideal=set(ideal)
# remove outlier
# removed from the datafile
#ideal.remove(179)

set3 = [x['id'] for x in with_grades if with_predominant_grade(3, x['Grades'], 'Rhythm')]
set3=set(set3)
set2 = [x['id'] for x in with_grades if with_predominant_grade(2, x['Grades'], 'Rhythm')]
set2=set(set2)
set1 = [x['id'] for x in with_grades if with_predominant_grade(1, x['Grades'], 'Rhythm')]
set1=set(set1)

alldevs = np.concatenate([x['signed_devs'] for x in id2timing.values()])
all4devs = np.concatenate([v['signed_devs'] for k, v in id2timing.items() if int(k) in ideal])
all3devs = np.concatenate([v['signed_devs'] for k, v in id2timing.items() if int(k) in set3])
all2devs = np.concatenate([v['signed_devs'] for k, v in id2timing.items() if int(k) in set2])
all1devs = np.concatenate([v['signed_devs'] for k, v in id2timing.items() if int(k) in set1])

plt.hist(alldevs, bins=40)
plt.show()

# select outliers
threshold = 0.05
outlier_ids = set()
for i in ideal:
    if str(i) in id2timing:
        stats = id2timing[str(i)]
        for d in stats['devs']:
            if d >= threshold:
                outlier_ids.add(i)

color1=[0.64705882, 0, 0.14901961,1]
color2='orange'
color3=[0.99653979, 0.89273356, 0.56908881, 1]
color4=[0, 0.40784314, 0.21568627, 1]

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

x = np.linspace(-0.6, 0.6, 600)
gs = gridspec.GridSpec(2, 1,height_ratios=[7,1])
ax = np.empty(2, dtype=object)
ax[1] = plt.subplot(gs[1])
ax[0] = plt.subplot(gs[0], sharex=ax[1])
plt.setp(ax[0].get_xticklabels(), visible=False)

ax[0].hist(all1devs, bins=20, density=True, color=color1, alpha=0.7)
std1 = np.sqrt(np.mean(all1devs**2))
ax[0].plot(x, norm.pdf(x, 0, std1), lw=1, color=color1, label='1-grade (worst)')
ax[0].hist(all2devs, bins=20, density=True, color=color2, alpha=0.6)
std2 = np.sqrt(np.mean(all2devs**2))
ax[0].plot(x, norm.pdf(x, 0, std2), lw=1, color=color2, label='2-grade')
ax[0].hist(all3devs, bins=20, density=True, color=color3, alpha=0.7)
std3 = np.sqrt(np.mean(all3devs**2))
ax[0].plot(x, norm.pdf(x, 0, std3), lw=1, color=color3, label='3-grade')
ax[0].hist(all4devs, bins=20, density=True, color = color4, alpha=0.5)
std4 = np.sqrt(np.mean(all4devs**2))
ax[0].plot(x, norm.pdf(x, 0, std4), lw=1, color = color4, label='4-grade (best)')
ax[0].set_ylabel("Estimated density")
ax[0].set_title("Attacks deviation")
ax[0].legend(loc='upper left')

gradient = np.vstack((x, x))
for xi in x:
    ax[1].axvline(xi, color=my_rgba(xi)[0], lw=2)
ax[1].get_yaxis().set_visible(False)
ax[1].set_title("Attack visualization color map")
ax[1].set_xlabel("Attack deviation from ideal (milliseconds)")
ax[1].xaxis.set_major_locator(MultipleLocator(0.1))
ax[1].xaxis.set_major_formatter(FuncFormatter(lambda x, pos: "%2d" % round(1000 * x)))
ax[1].xaxis.set_minor_locator(MultipleLocator(0.05))
plt.show()

# Rhythms: f-measure

fmeasures4 = [v['f_measure'] for k, v in id2timing.items() if int(k) in ideal]
fmeasures3 = [v['f_measure'] for k, v in id2timing.items() if int(k) in set3]
fmeasures2 = [v['f_measure'] for k, v in id2timing.items() if int(k) in set2]
fmeasures1 = [v['f_measure'] for k, v in id2timing.items() if int(k) in set1]

ax = plt.subplot()
ax.hist(fmeasures1, bins=10, density=True, color = color1, alpha=0.7, label="1-grade (worst)")
ax.hist(fmeasures2, bins=10, density=True, color = color2, alpha=0.6, label="2-grade")
ax.hist(fmeasures3, bins=10, density=True, color = color3, alpha=0.7, label="3-grade")
ax.hist(fmeasures4, bins=10, density=True, color = color4, alpha=0.5, label="4-grade (best)")
ax.set_ylabel("Estimated density")
ax.set_xlabel("F-measure")
ax.set_title("F-measure between actual and expected qunatized onset vectors")
ax.legend(loc='upper left')
plt.show()

# All rhythm
gs = gridspec.GridSpec(2, 2, height_ratios=[7,1])
ax = np.empty(3, dtype=object)
ax[1] = plt.subplot(gs[1, 0])
ax[0] = plt.subplot(gs[0, 0], sharex=ax[1])
plt.setp(ax[0].get_xticklabels(), visible=False)

ax[0].hist(all1devs, bins=20, density=True, color=color1, alpha=0.7)
std1 = np.sqrt(np.mean(all1devs**2))
ax[0].plot(x, norm.pdf(x, 0, std1), lw=1, color=color1, label='1-grade (worst)')
ax[0].hist(all2devs, bins=20, density=True, color=color2, alpha=0.6)
std2 = np.sqrt(np.mean(all2devs**2))
ax[0].plot(x, norm.pdf(x, 0, std2), lw=1, color=color2, label='2-grade')
ax[0].hist(all3devs, bins=20, density=True, color=color3, alpha=0.7)
std3 = np.sqrt(np.mean(all3devs**2))
ax[0].plot(x, norm.pdf(x, 0, std3), lw=1, color=color3, label='3-grade')
ax[0].hist(all4devs, bins=20, density=True, color = color4, alpha=0.5)
std4 = np.sqrt(np.mean(all4devs**2))
ax[0].plot(x, norm.pdf(x, 0, std4), lw=1, color = color4, label='4-grade (best)')
ax[0].set_ylabel("Estimated density")
ax[0].set_title("Attacks deviation")
ax[0].legend(loc='upper left')

gradient = np.vstack((x, x))
for xi in x:
    ax[1].axvline(xi, color=my_rgba(xi)[0], lw=2)
ax[1].get_yaxis().set_visible(False)
ax[1].set_title("Attack visualization color map")
ax[1].set_xlabel("Attack deviation from ideal (milliseconds)")
ax[1].xaxis.set_major_locator(MultipleLocator(0.1))
ax[1].xaxis.set_major_formatter(FuncFormatter(lambda x, pos: "%2d" % round(1000 * x)))
ax[1].xaxis.set_minor_locator(MultipleLocator(0.05))

ax[2] = plt.subplot(gs[0:, 1])
ax[2].hist(fmeasures1, bins=10, density=True, color = color1, alpha=0.7, label="1-grade (worst)")
ax[2].hist(fmeasures2, bins=10, density=True, color = color2, alpha=0.6, label="2-grade")
ax[2].hist(fmeasures3, bins=10, density=True, color = color3, alpha=0.7, label="3-grade")
ax[2].hist(fmeasures4, bins=10, density=True, color = color4, alpha=0.5, label="4-grade (best)")
ax[2].set_ylabel("Estimated density")
ax[2].set_xlabel("F-measure")
ax[2].set_title("F-measure between actual and expected qunatized onset vectors")
ax[2].legend(loc='upper left')
plt.show()

# chroma

pitch_issues = {
    7 : 'pitch/chord colorization: error unrecognized',
    8 : 'pitch/chord colorization: false error',
    9 : 'pitch/chord colorization: noisy sound is not penalized'}

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


pysim_chords_test_data_dir = os.path.abspath(os.path.join(os.getcwd(), '../../data'))
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

strumming_ids=set()
strumming_ids.update([26, 17, 25])

with open("../guitar_samples_annotation/chroma_pattern_dataset.json") as af:
    ideal = json.load(af)
ideal = set([i['id'] for i in ideal])

with_grades = []
for s in all_submissions:
    sid = str(s['id'])
    if sid in assessments:
        ass = assessments[sid][0]
        error = False
        for i in ass['Comments']:
            try:
                if issue_to_category[i] in pitch_issues:
                    print("rejected:", i)
                    error = True
                    break
            except KeyError:
                print('category "{0}" not found'.format(i))
        if not error:
            s['Grades'] = [ass]
            if sid in leahs:
                s['Grades'].append(leahs[sid][0])
            with_grades.append(s)

set3 = [x['id'] for x in with_grades if with_predominant_grade(3, x['Grades'], 'Pitch')]
set3=set(set3)
set2 = [x['id'] for x in with_grades if with_predominant_grade(2, x['Grades'], 'Pitch')]
set2=set(set2)
set1 = [x['id'] for x in with_grades if with_predominant_grade(1, x['Grades'], 'Pitch')]
set1=set(set1)

segments1 = AnnotatedChromaSegments(
    labels=np.array([], dtype='object'),
    pitches=np.array([], dtype='int'),
    kinds=np.array([], dtype='object'),
    chromas=np.zeros((0, 12), dtype='float32'),
    uids=np.array([], dtype='object'),
    start_times=np.array([], dtype='float32'),
    durations=np.array([], dtype='float32'))

segments2 = AnnotatedChromaSegments(
    labels=np.array([], dtype='object'),
    pitches=np.array([], dtype='int'),
    kinds=np.array([], dtype='object'),
    chromas=np.zeros((0, 12), dtype='float32'),
    uids=np.array([], dtype='object'),
    start_times=np.array([], dtype='float32'),
    durations=np.array([], dtype='float32'))

segments3 = AnnotatedChromaSegments(
    labels=np.array([], dtype='object'),
    pitches=np.array([], dtype='int'),
    kinds=np.array([], dtype='object'),
    chromas=np.zeros((0, 12), dtype='float32'),
    uids=np.array([], dtype='object'),
    start_times=np.array([], dtype='float32'),
    durations=np.array([], dtype='float32'))

segments4 = AnnotatedChromaSegments(
    labels=np.array([], dtype='object'),
    pitches=np.array([], dtype='int'),
    kinds=np.array([], dtype='object'),
    chromas=np.zeros((0, 12), dtype='float32'),
    uids=np.array([], dtype='object'),
    start_times=np.array([], dtype='float32'),
    durations=np.array([], dtype='float32'))

class ExerciseAudioPathExtractor(AudioPathExtractor, UidExtractor):
    def set(self, audio_path, uid_value):
        self.audio_path = audio_path
        self.uid_value = uid_value

    def audio_path_name(self, uid):
        return self.audio_path

    def uid(self, annotation_file_name):
        return self.uid_value

path_extractor = ExerciseAudioPathExtractor()

chromaEstimator = AnnotatedBeatChromaEstimator(
    chroma_estimator=NNLSChromaEstimator(audio_path_extractor=path_extractor),
    segment_chroma_estimator=AdaptiveChromaEstimator(),
    label_translator=GuitarLabelTranslator(),
    uid_extractor=path_extractor)

def add2segments(segments, chunk):
    segments.chromas = np.concatenate((segments.chromas, chunk.chromas))
    segments.labels = np.concatenate((segments.labels, chunk.labels))
    segments.pitches = np.concatenate((segments.pitches, chunk.pitches))
    segments.kinds = np.concatenate((segments.kinds, chunk.kinds))
    segments.uids = np.concatenate((segments.uids, chunk.uids))
    segments.start_times = np.concatenate((segments.start_times, chunk.start_times))
    segments.durations = np.concatenate((segments.durations, chunk.durations))


for s in all_submissions:
    # filter exercise
    if s['exercise_id'] in strumming_ids:
        audio_file = os.path.join(submissions_dir, s['path'])
        latency = all_latencies[s['id']]
        anno_file = exercise_anno[s['exercise_id']]
        temp_audio = "q.wav"
        remove_latency(audio_file, temp_audio, latency)
        path_extractor.set(temp_audio, s['id'])
        print(audio_file)
        chunk = chromaEstimator.load_chromas_for_annotation_file(anno_file)
        if (s['id'] in set1):
            add2segments(segments1, chunk)
        elif (s['id'] in set2):
            add2segments(segments2, chunk)
        elif (s['id'] in set3):
            add2segments(segments3, chunk)
        elif (s['id'] in ideal):
            add2segments(segments4, chunk)
        else :
            print(s['id'], "not found")
        print(s['id'])


def visualize_ratio(ax, color, label, segments, alpha=0.7):
    maj_min = CorrectnessLogNormBalanceModel({'maj': ['I', 'III', 'V'], 'min': ['I', 'IIIb', 'V']})
    maj_min.fit(segments)
    # maj_min.save_model('maj_min_1.pkl')

    dmaj = preprocessing.normalize(cd.substitute_zeros(segments.chromas[segments.kinds == 'maj']), norm='l1')
    dmin = preprocessing.normalize(cd.substitute_zeros(segments.chromas[segments.kinds == 'min']), norm='l1')

    majPartition = [
        [DEGREES.index('I'), DEGREES.index('III'), DEGREES.index('V')],
        [DEGREES.index('II'), DEGREES.index('VII'), DEGREES.index('IIb'), DEGREES.index('IIIb'), DEGREES.index('IV'),
         DEGREES.index('Vb'), DEGREES.index('VIb'), DEGREES.index('VI'), DEGREES.index('VIIb')]]
    pmaj = cd.amalgamate(majPartition, dmaj).transpose()[0]

    minPartition = [
        [DEGREES.index('I'), DEGREES.index('IIIb'), DEGREES.index('V')],
        [DEGREES.index('II'), DEGREES.index('VII'), DEGREES.index('IIb'), DEGREES.index('III'), DEGREES.index('IV'),
         DEGREES.index('Vb'), DEGREES.index('VIb'), DEGREES.index('VI'), DEGREES.index('VIIb')]]

    pmin = cd.amalgamate(minPartition, dmin).transpose()[0]

    # "Tone selection" Beta-distribution training
    allChords = np.concatenate((pmaj, pmin))
    ax.hist(allChords, 12, density=True, color=color, alpha=alpha)
    rv = beta(*maj_min.betaParams)
    x = np.linspace(0, 1)
    ax.plot(x, rv.pdf(x), lw=2, color=color, label=label)

segments12 = add2segments(segments1, segments2)
segments12 = segments1

fig, ax = plt.subplots(1, 4)
# ratio
visualize_ratio(ax[0], color1, '1&2-grades (worst)', segments12)
visualize_ratio(ax[0], color3, '3-grade', segments3)
visualize_ratio(ax[0], color4, '4-grade (best)', segments4)
ax[0].set_xlabel("In-chord/out-of-chord tones ratio")
ax[0].set_ylabel("Estimated density")
ax[0].legend(loc='upper left')

# balance

def plot_maj_chord_balance(ax, segments, title):
    dmaj = preprocessing.normalize(cd.substitute_zeros(segments.chromas[segments.kinds == 'maj']), norm='l1')
    chordChroma = cd.subcomposition([[DEGREES.index('I')], [DEGREES.index('III')], [DEGREES.index('V')]], dmaj)
    gmm = GaussianMixture(
        n_components=1,
        covariance_type='full',
        max_iter=200)
    gmm.fit(np.apply_along_axis(cd.alr, 1, chordChroma))
    ax.set_title(title)
    ax.set_xlabel("Maj. chord balance")
    ternary_plot(ax, chordChroma, 24)
    plot_labels(ax, ['I', 'III', 'V'])


plot_maj_chord_balance(ax[1], segments12, "1&2-grades (worst)")
plot_maj_chord_balance(ax[2], segments3, "3-grade")
plot_maj_chord_balance(ax[3], segments4, "4-grades (best)")
plt.show()

# tuning

def process_frames2(ax, title, indices, peaks, mags, max_frame_peaks=10):
    all_delta = sample_deviations(peaks[indices], mags[indices], max_frame_peaks)
    ax.hist(all_delta * 50.0)
    ax.set_xlim(-50, 50)
    ax.set_xlabel("Deviation in cents")
    ax.set_ylabel("Density estimation")
    ax.get_yaxis().set_visible(False)
    var = np.mean(all_delta * all_delta) #np.var(all_delta)
    kurtosis = stats.kurtosis(all_delta)
    ax.plot([], [], ' ', label='variance:' + str(var))
    ax.plot([], [], ' ', label='kurtosis:' + str(kurtosis))
    ax.legend(loc='upper left')
    ax.set_title(title)
    return var, kurtosis


filename = os.path.join(pysim_chords_test_data_dir, 'audio/berklee_demo.mp3')
spectra, peaks, mags = load_spectrum_and_peaks(filename, min_frequency=100, max_frequency=1000)
#plot_peaks(peaks, mags, max_peaks=1)

gs = gridspec.GridSpec(1, 3, width_ratios=[1,1,2])

ax = plt.subplot(gs[0])
#process_frames("good single notes ac.", range(len(tempered)), peaks[tempered], mags[tempered])
process_frames2(ax, "good tuning example", range(len(peaks)), peaks, mags)

filename = os.path.join(pysim_chords_test_data_dir, 'audio/211611__qubodup__guitar-thrumming.flac')
spectra, peaks, mags = load_spectrum_and_peaks(filename, min_frequency=100, max_frequency=1000)
#plot_peaks(peaks, mags)
ax = plt.subplot(gs[1])
#process_frames("bad single notes", range(len(tempered)), peaks[tempered], mags[tempered])
process_frames2(ax, "bad tuning example", range(len(peaks)), peaks, mags)

with open("../../tune_statistics_1.json") as outfile:
    id2tuning = json.load(outfile)
with open(os.path.join(submissions_dir, "tuning_addon.json")) as infile:
    addon = json.load(infile)

# TODO: uniform storage for gradres:
# all grades as array. Single file!

with_grades = []
for s in all_submissions:
    sid = str(s['id'])
    if sid in assessments:
        ass = assessments[sid][0]
        error = False
        for i in ass['Comments']:
            s['Grades'] = [ass]
            if sid in leahs:
                s['Grades'].append(leahs[sid][0])
            with_grades.append(s)

with_grades.extend([{'id':k, "Grades":v} for k, v in addon.items()])


ideal = set([str(x['id']) for x in with_grades if all4s(x['Grades'], 'Tuning')])

set3 = [str(x['id']) for x in with_grades if with_predominant_grade(3, x['Grades'], 'Tuning')]
set3=set(set3)
set2 = [str(x['id']) for x in with_grades if with_predominant_grade(2, x['Grades'], 'Tuning')]
set2=set(set2)
set1 = [str(x['id']) for x in with_grades if with_predominant_grade(1, x['Grades'], 'Tuning')]
set1=set(set1)

variances4 = [v['variance0'] for k, v in id2tuning.items() if k in ideal]
variances4 = [v['variance0'] for k, v in id2tuning.items() if k in set3]
variances2 = [v['variance0'] for k, v in id2tuning.items() if k in set2]
variances1 = [v['variance0'] for k, v in id2tuning.items() if k in set1]

variances43 = np.concatenate((variances4, variances4))
ax = plt.subplot(gs[2])
ax.hist(variances1, bins=10, density=True, color = color1, alpha=0.7, label="1-grade (worst)")
ax.hist(variances2, bins=10, density=True, color = color2, alpha=0.6, label="2-grade")
ax.hist(variances43, bins=10, density=True, color = color4, alpha=0.5, label="4&3-grades (best)")
ax.set_ylabel("Estimated density")
ax.set_xlabel("Variance of the deviation from equal-temperament grid (after scaling)")
ax.legend(loc='upper left')

plt.show()