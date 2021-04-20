import essentia.standard as estd
import json
import os
import sys
import simmusic
from pychord_tools.models import load_model
sys.path.append('../..')
from utils import load_ly_template
from simmusic.extractors.guitar import assess_guitar_exercise

def image_name(audio_file):
    name, ext = os.path.splitext(os.path.basename(audio_file))
    return name + '.png'


def demo_strumming(audio_file, anno_file, latency = 0.022):
    assessment_workflow = load_model(os.path.join(simmusic.__path__[0], 'extractors/guitar_models/strumming_workflow.pkl'))
    results =\
        assess_guitar_exercise(
            anno_file,
            os.path.join(*load_ly_template(anno_file)),
            latency,
            audio_file,
            assessment_workflow)
    png_filename = image_name(audio_file)
    print("#########################################################################")
    print("Strumming Grades: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open(png_filename, "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("PNG is written to %s" % png_filename)
    print("#########################################################################")


def demo_picking(audio_file, anno_file, latency = 0.022):
    assessment_workflow = load_model(os.path.join(simmusic.__path__[0], 'extractors/guitar_models/picking_workflow.pkl'))
    results =\
        assess_guitar_exercise(
            anno_file,
            os.path.join(*load_ly_template(anno_file)),
            latency,
            audio_file,
            assessment_workflow)
    png_filename = image_name(audio_file)
    print("#########################################################################")
    print("Picking Grades: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open(png_filename, "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("PNG is written to %s" % png_filename)
    print("#########################################################################")


with open('submissions.json') as outfile:
    submissions = json.load(outfile)

pysim_chords_test_data_dir = os.path.abspath(os.path.join(os.getcwd(), '../../data'))
exercise_anno = {
    164 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson01Ex1/l1ex1.json'),
    165 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson02Ex1/l2ex1.json'),
    166 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson02Ex2/l2ex2.json'),
    167 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson03Ex1/l3ex1.json'),
    168 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson04Ex1/l4ex1.json'),
    169 : os.path.join(
        pysim_chords_test_data_dir,
        'exercises/Leah17Dec2018/Lesson05Ex1/l5ex1.json')
}

strummings = set()
strummings.update((164, 166, 169))
pickings = set()
pickings.update((165, 167, 168))
for s in submissions:
    if s['exercise_id'] in exercise_anno:
        print(s['id'])
        anno_file = exercise_anno[s['exercise_id']]
        if s['exercise_id'] in strummings:
            demo_strumming(
                s['path'], anno_file, latency = s['latency'])
        elif s['exercise_id'] in pickings:
            demo_picking(
                s['path'], anno_file, latency = s['latency'])
