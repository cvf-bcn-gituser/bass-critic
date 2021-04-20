import json
import numpy as np
from datetime import timedelta
# reference https://drive.google.com/open?id=1Zqu3EuhTgw3P5gUx71qfA7--l99_-57t
# pic https://drive.google.com/open?id=1PYnuJaL0RhzBP3Tz8oS9aFPMvf07Rod4


def write_create_script(submissions, title, description, score_image_id, file_name):
    start_params = {
        'title':title,
        'description':description.replace("\n", "\\n"),
        'score_image_id' : score_image_id}

    text = '''
    function createForm() {{
       // create Form
      var item = "{title}";
      var description = "{description}";

       var image_file_id = "{score_image_id}"

       var form = FormApp.create(item)
           .setTitle(item).setShowLinkToRespondAgain(false).setProgressBar(true);
      form.setCollectEmail(true)
      form.setDescription(description)
      var file = DriveApp.getFileById(image_file_id)
      form.addImageItem()
        .setTitle('Score')
        .setHelpText('Score') // The help text is the image description
        .setImage(file);
    '''.format(**start_params)

    text += '''
      // Submissions

      var submissionName;
      var submission;
      var pitchIntonationItem;
      var rhythmItem;
      var tuningItem;
      var overallItem;
      var image;
      var visualizationTitle;
      var visualizationUseful;
      var commentsTitle;

       '''
    for s in submissions:
        submission_params = {'id':s['id'], 'sound_url': s['mix_sharerd_path'], 'image_id':s['pic_google_id']}
        text += '''
        submissionName = "Sample #{id}"
        description = "Listen to this sample: {sound_url}\\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#{id})'
        rhythmItem = 'Rhythm (#{id})'
        tuningItem = 'Guitar tuning (#{id})'
        overallItem = 'Overall (#{id})'
        image_file_id = "{image_id}"
        visualizationTitle = "Visualization (#{id})"
        visualizationUseful = "Is visualization useful? (#{id})"
        commentsTitle = "Comments, if any. (#{id})"

        submission = form.addPageBreakItem().setTitle(submissionName);
        submission.setHelpText(description)

        form.addScaleItem().setTitle(pitchIntonationItem)
          .setBounds(1, 4).setRequired(true);
        form.addScaleItem().setTitle(rhythmItem)
          .setBounds(1, 4).setRequired(true);
        form.addScaleItem().setTitle(tuningItem)
          .setBounds(1, 4).setRequired(true);
        form.addScaleItem().setTitle(overallItem)
          .setBounds(1, 4).setRequired(true);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues(["The visualization is wrong"]);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues(["To Leah"]);
        form.addParagraphTextItem().setTitle(commentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          '''.format(**submission_params)
    text += '''
    }
    '''

    # save gs
    with open(file_name, 'w') as outfile:
        outfile.write(text)

def process_exercise(
        submissions,
        title_prefix,
        file_prefix,
        description,
        image_score_google_id,
        batch_size = 10):
    counter = 0
    for i in range(0, len(submissions), batch_size):
        counter += 1
        end = min(len(submissions), i + batch_size)
        time = np.sum([s['duration'] for s in submissions[i:end]])
        write_create_script(
            submissions[i:end],
            title_prefix + " #{counter} {time} (hh:mm:ss)".format(
                counter=counter,
                time=str(timedelta(seconds=int(time)))),
            description,
            image_score_google_id,
            file_prefix + str(counter) + ".gs")

###################################################################################
with open('l2ex1_to_google.json') as outfile:
    submissions = json.load(outfile)
description = """
For this exercise, you will pick each open string in tempo according to the diagram above.
Use downstrokes to play each string and play 1 string per beat. When you press he record button, you will hear 4 clicks, this is your 4-beat count in.
Once the count in has played, you may begin playing.

Example: https://drive.google.com/open?id=1Zqu3EuhTgw3P5gUx71qfA7--l99_-57t
"""
process_exercise(
    submissions, "Lesson 2 - Picking", "l2ex1_to_google_", description,
"1PYnuJaL0RhzBP3Tz8oS9aFPMvf07Rod4")

##################################################################################
with open('l1ex1_to_google.json') as outfile:
    submissions = json.load(outfile)
description = """
Please, use headphones while recording. For this exercise, you will strum
an A minor chord for 4 beats (one downstroke per beat) and an E Major chord
for 4 beats (one downstroke per beat) in tempo. When you press the record button,
you will hear 4 clicks, this is your 4-beat count in.
Once the count in has played, you may begin playing.

Example: https://drive.google.com/open?id=14uwxR8jRfi0qIsz5XQqrmgfUVCaI-wRV
"""
process_exercise(
    submissions, "Lesson 1 - Getting Started", "l1ex1_to_google_", description,
"11jCI6fmRn6krv0adTWn9sCafhlFXyH_6")
##################################################################################
with open('l2ex2_to_google.json') as outfile:
    submissions = json.load(outfile)
description = """
Please, use headphones while recording. For this exercise, you will strum an A minor
chord for 1 measure (one downstroke per beat) and an E Major chord for 1 measure
(one downstroke per beat), alternating between these 2 chords for 4 measures in tempo.
When you press the record button, you will hear 4 clicks, this is your 4-beat count in.
Once the count in has played, you may begin playing.

Example: https://drive.google.com/open?id=1o0utAI7e7E_zudQX6CnFBe8YJRaUHgyW
"""
process_exercise(
    submissions, "Lesson 2 - Strumming", "l2ex2_to_google_", description,
"1ROAx7UzO6MVh_3ryR6TDZyIwYu-cmiCr")
###################################################################################
with open('l3ex1_to_google.json') as outfile:
    submissions = json.load(outfile)
description = """
Please, use headphones while recording. For this exercise, you will play the exercise
above in tempo, one note per beat. You may use any picking combination.
When you press the record button, you will hear 4 clicks, this is your 4-beat count in.
Once the count in has played, you may begin playing.

Example: https://drive.google.com/open?id=1VaYAhmtKKN4jfTzJikbVqNS5hq9_YV9T
"""
process_exercise(
    submissions, "Lesson 3 - Playing Notes", "l3ex1_to_google_", description,
"1eW593Af0VIVh-qDRspjArM0yqpBUAufh")
###################################################################################
with open('l4ex1_to_google.json') as outfile:
    submissions = json.load(outfile)
description = """
Please, use headphones while recording. For this exercise, you will play 2 octaves of
the the G chromatic scale in tempo, one note per beat. You may use any picking 
combination. When you press the record button, you will hear 4 clicks, this is your 4-beat count in.
Once the count in has played, you may begin playing.

Example: https://drive.google.com/open?id=19iFONz7lrGVfjQrPhI82aZga_c_N-mYJ
"""
process_exercise(
    submissions, "Lesson 4 - Playing Scales", "l4ex1_to_google_", description,
"11j5Daw8Tolxg3mcKaY6r456QiRI3otlO")
###################################################################################
with open('l5ex1_to_google.json') as outfile:
    submissions = json.load(outfile)
description = """
Please, use headphones while recording. For this exercise, you will strum each chord above for 1 measure 
(one downstroke per beat) each in tempo. Play the chords in open position, using a simple downstroke pattern
(one downstroke per beat) and in order working from left to right, top to bottom
(A Major, A Minor, C Major, D Major, D Minor, E Major, E Minor, F Major, G Major).
When you press the record button, you will hear 4 clicks, this is your 4-beat count in.
Once the count in has played, you may begin playing.

Example: https://drive.google.com/open?id=13BWydHxLqn9ti-OBOi22dv8jS-xXeua9
"""
process_exercise(
    submissions, "Lesson 5 - Playing Chords", "l5ex1_to_google_", description,
"1POV2pJAND8_haBqcWZc8_NOUcp8TLerJ")


###################################################################################
# overall statisticsl1ex1_leah.json  l2ex1_leah.json  l2ex2_leah.json  l3ex1_leah.json  l4ex1_leah.json  l5ex1_leah.json

submissions = []
with open('l1ex1_to_google.json') as outfile:
    submissions.append(json.load(outfile))
with open('l2ex1_to_google.json') as outfile:
    submissions.append(json.load(outfile))
with open('l2ex2_to_google.json') as outfile:
    submissions.append(json.load(outfile))
with open('l3ex1_to_google.json') as outfile:
    submissions.append(json.load(outfile))
with open('l4ex1_to_google.json') as outfile:
    submissions.append(json.load(outfile))
with open('l5ex1_to_google.json') as outfile:
    submissions.append(json.load(outfile))

exercise_names = [
    "Lesson 1 - Getting Started",
    "Lesson 2 - Picking        ",
    "Lesson 2 - Strumming      ",
    "Lesson 3 - Playing Notes  ",
    "Lesson 4 - Playing Scales ",
    "Lesson 5 - Playing Chords "
]

totals = [(len(s), sum([ss['duration'] for ss in s])) for s in submissions]
all_time = 0
all_exercises = 0
print("samples time (hh:mm:ss)")
for i in range(len(exercise_names)):
    print("Ex. {0}: {1} {2}".format(exercise_names[i], totals[i][0], str(timedelta(seconds = totals[i][1]))))
    all_exercises += totals[i][0]
    all_time += totals[i][1]
print("total                         : {0} {1}".format(all_exercises, str(timedelta(seconds=all_time))))



