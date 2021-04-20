
    function createForm() {
       // create Form
      var item = "Lesson 1 - Getting Started #1 0:02:23 (hh:mm:ss)";
      var description = "\nPlease, use headphones while recording. For this exercise, you will strum\nan A minor chord for 4 beats (one downstroke per beat) and an E Major chord\nfor 4 beats (one downstroke per beat) in tempo. When you press the record button,\nyou will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\n\nExample: https://drive.google.com/open?id=14uwxR8jRfi0qIsz5XQqrmgfUVCaI-wRV\n";

       var image_file_id = "11jCI6fmRn6krv0adTWn9sCafhlFXyH_6"

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

       
        submissionName = "Sample #174"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1GPhx6RK484TnlWiUcERhOLxmwHEt-jZz/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#174)'
        rhythmItem = 'Rhythm (#174)'
        tuningItem = 'Guitar tuning (#174)'
        overallItem = 'Overall (#174)'
        image_file_id = "1GOpzxDZA_F6SIGeGoFdb5NF8Sm7bJRw_"
        visualizationTitle = "Visualization (#174)"
        visualizationUseful = "Is visualization useful? (#174)"
        commentsTitle = "Comments, if any. (#174)"

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
          
        submissionName = "Sample #175"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1htjKrJM35wV79NqKalIHcWthEjDOfpoO/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#175)'
        rhythmItem = 'Rhythm (#175)'
        tuningItem = 'Guitar tuning (#175)'
        overallItem = 'Overall (#175)'
        image_file_id = "1JxbE10NQ9PJvGMeLqos46_oZ81VqzFY9"
        visualizationTitle = "Visualization (#175)"
        visualizationUseful = "Is visualization useful? (#175)"
        commentsTitle = "Comments, if any. (#175)"

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
          
        submissionName = "Sample #176"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/11tH3EuqhOMmCuQ86AGUtYrYh0s-A8ybR/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#176)'
        rhythmItem = 'Rhythm (#176)'
        tuningItem = 'Guitar tuning (#176)'
        overallItem = 'Overall (#176)'
        image_file_id = "1O1IHKe8QuLJ4EH-bUryK6EgWN7sBZcqS"
        visualizationTitle = "Visualization (#176)"
        visualizationUseful = "Is visualization useful? (#176)"
        commentsTitle = "Comments, if any. (#176)"

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
          
        submissionName = "Sample #145"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1HFD08wN-RZRLtEpyWsrYOAGunnHptkSG/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#145)'
        rhythmItem = 'Rhythm (#145)'
        tuningItem = 'Guitar tuning (#145)'
        overallItem = 'Overall (#145)'
        image_file_id = "1J4yB-gNIRssLn8qo7-fXE8TpVrrf-spg"
        visualizationTitle = "Visualization (#145)"
        visualizationUseful = "Is visualization useful? (#145)"
        commentsTitle = "Comments, if any. (#145)"

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
          
        submissionName = "Sample #155"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1bKU2Vmry83lD088Nfsm243U4rnWoOUok/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#155)'
        rhythmItem = 'Rhythm (#155)'
        tuningItem = 'Guitar tuning (#155)'
        overallItem = 'Overall (#155)'
        image_file_id = "1MeFLw1l_U0f9I_Lgjkn4tjy-TdzETrfd"
        visualizationTitle = "Visualization (#155)"
        visualizationUseful = "Is visualization useful? (#155)"
        commentsTitle = "Comments, if any. (#155)"

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
          
        submissionName = "Sample #163"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1R2_-qqjLbBpcLGrASQTVHJQQuSx6K3hO/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#163)'
        rhythmItem = 'Rhythm (#163)'
        tuningItem = 'Guitar tuning (#163)'
        overallItem = 'Overall (#163)'
        image_file_id = "1Bwn5LaXqKZaMebPLvIPb3scicXxqHVHj"
        visualizationTitle = "Visualization (#163)"
        visualizationUseful = "Is visualization useful? (#163)"
        commentsTitle = "Comments, if any. (#163)"

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
          
        submissionName = "Sample #171"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1xM6PmgJVWWs1Yo1Z8QvvszOGS7jESmsb/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#171)'
        rhythmItem = 'Rhythm (#171)'
        tuningItem = 'Guitar tuning (#171)'
        overallItem = 'Overall (#171)'
        image_file_id = "1aFDnGJ1493_kYfP9f1Ko6omqJkxcphFA"
        visualizationTitle = "Visualization (#171)"
        visualizationUseful = "Is visualization useful? (#171)"
        commentsTitle = "Comments, if any. (#171)"

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
          
        submissionName = "Sample #172"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1sM_tWKHqRvBcXfrqMjmuSGv4SNqW6K2s/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#172)'
        rhythmItem = 'Rhythm (#172)'
        tuningItem = 'Guitar tuning (#172)'
        overallItem = 'Overall (#172)'
        image_file_id = "1xo_rZvPc6ReUyL3rqjnnp26JSCrHakW_"
        visualizationTitle = "Visualization (#172)"
        visualizationUseful = "Is visualization useful? (#172)"
        commentsTitle = "Comments, if any. (#172)"

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
          
        submissionName = "Sample #173"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/12fvm2GK_2leW22taE38p6rz6wUt8SOUV/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#173)'
        rhythmItem = 'Rhythm (#173)'
        tuningItem = 'Guitar tuning (#173)'
        overallItem = 'Overall (#173)'
        image_file_id = "1ZKMtYBVqEChK1x4b0ngM6Z63bDWQ06Bo"
        visualizationTitle = "Visualization (#173)"
        visualizationUseful = "Is visualization useful? (#173)"
        commentsTitle = "Comments, if any. (#173)"

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
          
        submissionName = "Sample #177"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1xXm3CXNHolZJN9suil3VMhbaWL2nMuhF/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#177)'
        rhythmItem = 'Rhythm (#177)'
        tuningItem = 'Guitar tuning (#177)'
        overallItem = 'Overall (#177)'
        image_file_id = "1NY-v09zfVUCSkAwycyfoOWD1JZx-679t"
        visualizationTitle = "Visualization (#177)"
        visualizationUseful = "Is visualization useful? (#177)"
        commentsTitle = "Comments, if any. (#177)"

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
    