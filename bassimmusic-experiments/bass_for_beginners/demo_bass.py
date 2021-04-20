import matplotlib
matplotlib.use('Agg') # Must be before importing matplotlib.pyplot or pylab!
import simmusic.extractors.guitar as guitar
import simmusic.latency as ltncy

import os

# The path to the test data
pysim_chords_test_data_dir = os.path.abspath(
    os.path.join(os.path.dirname(__file__), 'data/bass'))


def demo_latency():
    # calculate reference onsets
    onsets = ltncy.onsets(os.path.join(pysim_chords_test_data_dir, '147_backing_track.mp3'))
    latency, _ = ltncy.latency(
        onsets,
        os.path.join(pysim_chords_test_data_dir,'227_recording-0-2019-03-20T10-22-36-312Z-0.wav'))
    print("Latency: ", latency)
    return latency


def demo_strumming(latency = 0.075):
    results =\
        guitar.assess_strumming_exercise(
            os.path.join(pysim_chords_test_data_dir, 'l2ex2.json'),
            os.path.join(pysim_chords_test_data_dir, 'l2ex2.ly'),
            latency,
            os.path.join(pysim_chords_test_data_dir, '237_recording-0-2019-03-20T10-42-59-548Z-0.wav'))
    print("#########################################################################")
    print("Strumming Grades: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open("strumming.png", "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("PNG is written to strumming.png")
    print("#########################################################################")

## use this call.TBD whne actual recording

def demo_picking(latency = 0.075):
    results =\
        guitar.assess_picking_exercise(
		
		# modify lilly and JSON to be 
            os.path.join(pysim_chords_test_data_dir, 'l3ex1.json'),
            os.path.join(pysim_chords_test_data_dir, 'l3ex1.ly'),
            latency,
            os.path.join(pysim_chords_test_data_dir, 
			#### Put bass recording here
			'288_recording-fgafggggf.wav'))
    print("#########################################################################")
    print("Picking Grades: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open("picking_bass.png", "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("PNG is written to picking_bass.png")
    print("#########################################################################")

	
## use this call.TBD whne actual recording
# REplace with pitch from Billie Jean
def demo_picking2(latency = 0.075):
    results =\
        guitar.assess_picking_exercise(
		
		# modify lilly and JSON to be 
            os.path.join(pysim_chords_test_data_dir, 'l3ex1.json'),
            os.path.join(pysim_chords_test_data_dir, 'l3ex1.ly'),
            latency,
            os.path.join(pysim_chords_test_data_dir, 
			#### Put bass recording here
			'288_recording-0-2019-03-20T11-49-56-632Z-0.wav'))
    print("#########################################################################")
    print("Picking Grades: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open("picking_bass2.png", "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("PNG is written to picking_bass.png")
    print("#########################################################################")

## use this call.TBD whne actual recording
# REplace with pitch from Billie Jean
def demo_billiejean(latency = 0.075):
    results =\
        guitar.assess_picking_exercise(
		
		# modify lilly and JSON to be 
            os.path.join(pysim_chords_test_data_dir, 'l3ex1.json'),
            os.path.join(pysim_chords_test_data_dir, 'l3ex1.ly'),
            latency,
            os.path.join(pysim_chords_test_data_dir, 
			#### Put bass recording here
			'2_bassX_Billie Jean_Michael Jackson_BassGr1.wav'))
    print("#########################################################################")
    print("Picking Grades: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open("billiejean.png", "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("PNG is written to billie jean.png")
    print("#####################")


def demo_walking(latency = 0.075):
    results =\
        guitar.assess_picking_exercise(
		
		# modify lilly and JSON to be 
            os.path.join(pysim_chords_test_data_dir, 'walk.json'),
            os.path.join(pysim_chords_test_data_dir, 'walk.ly'),
            latency,
            os.path.join(pysim_chords_test_data_dir, 
			#### Put bass recording here
			'2_bassX_Billie Jean_Michael Jackson_BassGr1.wav'))
    print("#########################################################################")
    print("Picking Grades: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open("walk.png", "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("PNG is written to walk.png")
    print("#####################")


def demo_excessive(latency = 0.075):
    results =\
        guitar.assess_picking_exercise(
            os.path.join(pysim_chords_test_data_dir, 'l2ex1.json'),
            os.path.join(pysim_chords_test_data_dir, 'l2ex1.ly'),
            latency,
            os.path.join(pysim_chords_test_data_dir, 'Billiejdemo.m4a'))
    print("#########################################################################")
    print("Picking Grades BILLY jean: Overall, Pitch, Rhythm, Tuning")
    print(results["Overall"], results["Pitch"], results["Rhythm"], results["Tuning"])
    with open("excessive.png", "wb") as out_file:
       out_file.write(results["ImageBytes"])
    print("PNG is written to excessive.png")
    print("#########################################################################")


# I commented out demo latency. It has no meaning here.
#latency = demo_latency()
latency = 0


#demo_strange(latency)
#demo_walking(latency)
#demo_strumming(latency)
#demo_picking(latency)
#demo_picking2(latency)
#demo_silence(latency)
demo_excessive(latency)
