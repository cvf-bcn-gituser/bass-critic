
    function createForm() {
       // create Form
      var item = "Lesson 3 - Playing Notes #3 0:02:39 (hh:mm:ss)";
      var description = "\nPlease, use headphones while recording. For this exercise, you will play the exercise\nabove in tempo, one note per beat. You may use any picking combination.\nWhen you press the record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\n\nExample: https://drive.google.com/open?id=1VaYAhmtKKN4jfTzJikbVqNS5hq9_YV9T\n";

       var image_file_id = "1eW593Af0VIVh-qDRspjArM0yqpBUAufh"

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

       
        submissionName = "Sample #310"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1SABeZIOfPesP2DeHrfIKsV-1jdXPx4UQ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#310)'
        rhythmItem = 'Rhythm (#310)'
        tuningItem = 'Guitar tuning (#310)'
        overallItem = 'Overall (#310)'
        image_file_id = "1Xqa4acHxv1_RcMxgoGl-FveMQr8d0Hik"
        visualizationTitle = "Visualization (#310)"
        visualizationUseful = "Is visualization useful? (#310)"
        commentsTitle = "Comments, if any. (#310)"

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
          
        submissionName = "Sample #317"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1BLA-X0aWDpPEgPiyGzOClNqKVLm6534a/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#317)'
        rhythmItem = 'Rhythm (#317)'
        tuningItem = 'Guitar tuning (#317)'
        overallItem = 'Overall (#317)'
        image_file_id = "13KohiAAuoD3LuFcVTV4QhWLP_vrvWgf8"
        visualizationTitle = "Visualization (#317)"
        visualizationUseful = "Is visualization useful? (#317)"
        commentsTitle = "Comments, if any. (#317)"

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
          
        submissionName = "Sample #318"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1SAbMnjzZy3hExYR49SuVh4kmZ7-lWol0/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#318)'
        rhythmItem = 'Rhythm (#318)'
        tuningItem = 'Guitar tuning (#318)'
        overallItem = 'Overall (#318)'
        image_file_id = "1mwiIU_P3KXfPdMwR7S3Nk07wQNaaMX0I"
        visualizationTitle = "Visualization (#318)"
        visualizationUseful = "Is visualization useful? (#318)"
        commentsTitle = "Comments, if any. (#318)"

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
          
        submissionName = "Sample #327"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1XeX0eihFHNWq9m-dWivFfmAlSCtGew43/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#327)'
        rhythmItem = 'Rhythm (#327)'
        tuningItem = 'Guitar tuning (#327)'
        overallItem = 'Overall (#327)'
        image_file_id = "1kP4ox2jL0fJbbphUJpJNxXSu0Tfl6bfd"
        visualizationTitle = "Visualization (#327)"
        visualizationUseful = "Is visualization useful? (#327)"
        commentsTitle = "Comments, if any. (#327)"

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
          
        submissionName = "Sample #328"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1zNBKbz34AM_b-I3Fxn09PpwoEzxqg443/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#328)'
        rhythmItem = 'Rhythm (#328)'
        tuningItem = 'Guitar tuning (#328)'
        overallItem = 'Overall (#328)'
        image_file_id = "1TtsyQhS6U03lxyoQPsMdJ5W57EDlBxje"
        visualizationTitle = "Visualization (#328)"
        visualizationUseful = "Is visualization useful? (#328)"
        commentsTitle = "Comments, if any. (#328)"

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
          
        submissionName = "Sample #329"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1czkuVrlpKjCLaLkSUzywBtuwN36Ndtk2/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#329)'
        rhythmItem = 'Rhythm (#329)'
        tuningItem = 'Guitar tuning (#329)'
        overallItem = 'Overall (#329)'
        image_file_id = "1X8Fz34i-kIvgFGyIrSsrJ2d_1VcYJ8zo"
        visualizationTitle = "Visualization (#329)"
        visualizationUseful = "Is visualization useful? (#329)"
        commentsTitle = "Comments, if any. (#329)"

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
          
        submissionName = "Sample #334"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1If4_Q7wJXw4m4cA_SvUnYfdU7hFItraC/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#334)'
        rhythmItem = 'Rhythm (#334)'
        tuningItem = 'Guitar tuning (#334)'
        overallItem = 'Overall (#334)'
        image_file_id = "1VtmAajPkwRKNbVEcj--2eerHkK8x60M8"
        visualizationTitle = "Visualization (#334)"
        visualizationUseful = "Is visualization useful? (#334)"
        commentsTitle = "Comments, if any. (#334)"

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
          
        submissionName = "Sample #340"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/13MMXcYyjUJqZEzxVgPZNEimTVvdlh3Ew/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#340)'
        rhythmItem = 'Rhythm (#340)'
        tuningItem = 'Guitar tuning (#340)'
        overallItem = 'Overall (#340)'
        image_file_id = "164YCPWt5_8lYKVkpsQecR4pOlNFF3-F6"
        visualizationTitle = "Visualization (#340)"
        visualizationUseful = "Is visualization useful? (#340)"
        commentsTitle = "Comments, if any. (#340)"

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
          
        submissionName = "Sample #341"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1LadCNw5tDcbPyUxMvWq7XFuWywXIQjJc/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#341)'
        rhythmItem = 'Rhythm (#341)'
        tuningItem = 'Guitar tuning (#341)'
        overallItem = 'Overall (#341)'
        image_file_id = "1LL73bxsBLTjhfc3GZcDmVehnH3-EHU7P"
        visualizationTitle = "Visualization (#341)"
        visualizationUseful = "Is visualization useful? (#341)"
        commentsTitle = "Comments, if any. (#341)"

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
          
        submissionName = "Sample #342"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1qcw1Jri_QV-RLvNf4jkI-0fEG9oCRYY4/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#342)'
        rhythmItem = 'Rhythm (#342)'
        tuningItem = 'Guitar tuning (#342)'
        overallItem = 'Overall (#342)'
        image_file_id = "159hQT9obn1KQEarEpdXTByto0vT04FB_"
        visualizationTitle = "Visualization (#342)"
        visualizationUseful = "Is visualization useful? (#342)"
        commentsTitle = "Comments, if any. (#342)"

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
    