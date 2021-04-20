
    function createForm() {
       // create Form
      var item = "Lesson 4 - Playing Scales #1 0:09:46 (hh:mm:ss)";
      var description = "\nPlease, use headphones while recording. For this exercise, you will play 2 octaves of\nthe the G chromatic scale in tempo, one note per beat. You may use any picking \ncombination. When you press the record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\n\nExample: https://drive.google.com/open?id=19iFONz7lrGVfjQrPhI82aZga_c_N-mYJ\n";

       var image_file_id = "11j5Daw8Tolxg3mcKaY6r456QiRI3otlO"

       var form = FormApp.create(item)
           .setTitle(item).setShowLinkToRespondAgain(false).setProgressBar(true);
      form.setCollectEmail(true)
      form.setDescription(description)
      var file = DriveApp.getFileById(image_file_id)
      form.addImageItem()
        .setTitle('Score')
        .setHelpText('Score') // The help text is the image description
        .setImage(file);
    
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

       
        submissionName = "Sample #159"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/170Ciupu4TDhejhkmS6JXXWXC9Z8m8vqa/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#159)'
        rhythmItem = 'Rhythm (#159)'
        tuningItem = 'Guitar tuning (#159)'
        overallItem = 'Overall (#159)'
        image_file_id = "1_wyIyoVzg7MC6hsJYfEY-JkhDz8S-Ow5"
        visualizationTitle = "Visualization (#159)"
        visualizationUseful = "Is visualization useful? (#159)"
        commentsTitle = "Comments, if any. (#159)"

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
          
        submissionName = "Sample #167"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/13zu4zSUN9l-OTERrsGMbcxUO-1l_QkaG/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#167)'
        rhythmItem = 'Rhythm (#167)'
        tuningItem = 'Guitar tuning (#167)'
        overallItem = 'Overall (#167)'
        image_file_id = "1BGL06aKKue0-S7ZKliPWVyytX4takYGv"
        visualizationTitle = "Visualization (#167)"
        visualizationUseful = "Is visualization useful? (#167)"
        commentsTitle = "Comments, if any. (#167)"

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
          
        submissionName = "Sample #191"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/18FihtZKyCGoxDnKg3t0QOZd_iqS6VBAe/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#191)'
        rhythmItem = 'Rhythm (#191)'
        tuningItem = 'Guitar tuning (#191)'
        overallItem = 'Overall (#191)'
        image_file_id = "1XRRtIfgRy8My5zjCXIJGnoYAxKOOYa2D"
        visualizationTitle = "Visualization (#191)"
        visualizationUseful = "Is visualization useful? (#191)"
        commentsTitle = "Comments, if any. (#191)"

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
          
        submissionName = "Sample #202"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1lG3xmWF7SeAnU2iCmBGucvWQLjNa36WZ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#202)'
        rhythmItem = 'Rhythm (#202)'
        tuningItem = 'Guitar tuning (#202)'
        overallItem = 'Overall (#202)'
        image_file_id = "1jmtlDTAfncTAVWW1jKuanMge-61b-4R-"
        visualizationTitle = "Visualization (#202)"
        visualizationUseful = "Is visualization useful? (#202)"
        commentsTitle = "Comments, if any. (#202)"

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
          
        submissionName = "Sample #209"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/166iK0vBEtd62kHu1EZdvZsaj5HjgTanZ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#209)'
        rhythmItem = 'Rhythm (#209)'
        tuningItem = 'Guitar tuning (#209)'
        overallItem = 'Overall (#209)'
        image_file_id = "1YdFJCvx9r7_Sawda3fnDYVx1_GLIBLC7"
        visualizationTitle = "Visualization (#209)"
        visualizationUseful = "Is visualization useful? (#209)"
        commentsTitle = "Comments, if any. (#209)"

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
          
        submissionName = "Sample #233"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1ijOuwhFc6hsE900fFkbjV5ldiXx12wiX/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#233)'
        rhythmItem = 'Rhythm (#233)'
        tuningItem = 'Guitar tuning (#233)'
        overallItem = 'Overall (#233)'
        image_file_id = "1dvg-ob5CE_U4kkiMRIz_W9A8iQaSl-vy"
        visualizationTitle = "Visualization (#233)"
        visualizationUseful = "Is visualization useful? (#233)"
        commentsTitle = "Comments, if any. (#233)"

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
          
        submissionName = "Sample #240"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1PV7TzzDgVxaaqpS6JOPZCw5I1ZYsn3Zj/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#240)'
        rhythmItem = 'Rhythm (#240)'
        tuningItem = 'Guitar tuning (#240)'
        overallItem = 'Overall (#240)'
        image_file_id = "1QvfLzxrdcWcx2U4VtcrUw6znEndO4R64"
        visualizationTitle = "Visualization (#240)"
        visualizationUseful = "Is visualization useful? (#240)"
        commentsTitle = "Comments, if any. (#240)"

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
          
        submissionName = "Sample #246"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1-f5TKRBRVoAr9kT2QvsBYv98XBVq_Q4g/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#246)'
        rhythmItem = 'Rhythm (#246)'
        tuningItem = 'Guitar tuning (#246)'
        overallItem = 'Overall (#246)'
        image_file_id = "1Ki02b9K5i1fYj-z26Te4KEG-uAgYA_sU"
        visualizationTitle = "Visualization (#246)"
        visualizationUseful = "Is visualization useful? (#246)"
        commentsTitle = "Comments, if any. (#246)"

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
          
        submissionName = "Sample #249"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1R35UjNZU7RJvBa378a915xuhOqsfZLya/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#249)'
        rhythmItem = 'Rhythm (#249)'
        tuningItem = 'Guitar tuning (#249)'
        overallItem = 'Overall (#249)'
        image_file_id = "1QL-_pswpOThlU-MsWTjTRmCakdR_GJg3"
        visualizationTitle = "Visualization (#249)"
        visualizationUseful = "Is visualization useful? (#249)"
        commentsTitle = "Comments, if any. (#249)"

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
          
        submissionName = "Sample #261"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1LXr0gVHssaWKZspaWpduREdsioE8k3e5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#261)'
        rhythmItem = 'Rhythm (#261)'
        tuningItem = 'Guitar tuning (#261)'
        overallItem = 'Overall (#261)'
        image_file_id = "1lB2fDFovvGc96ZvF7UtfekCKh83tv4S8"
        visualizationTitle = "Visualization (#261)"
        visualizationUseful = "Is visualization useful? (#261)"
        commentsTitle = "Comments, if any. (#261)"

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
          
    }
    