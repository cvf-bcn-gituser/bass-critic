
    function createForm() {
       // create Form
      var item = "Lesson 1 - Getting Started #4 0:02:23 (hh:mm:ss)";
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

       
        submissionName = "Sample #301"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1S14hKvXjlqgcTqitfhc4eQ3004gQhgq5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#301)'
        rhythmItem = 'Rhythm (#301)'
        tuningItem = 'Guitar tuning (#301)'
        overallItem = 'Overall (#301)'
        image_file_id = "1Ixl4OOdYUaHF1q6eIUFZB7062ImRjuoL"
        visualizationTitle = "Visualization (#301)"
        visualizationUseful = "Is visualization useful? (#301)"
        commentsTitle = "Comments, if any. (#301)"

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
          
        submissionName = "Sample #302"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/15pyzi_-4V1BkyQkrPXpQeHixb0iMPUnu/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#302)'
        rhythmItem = 'Rhythm (#302)'
        tuningItem = 'Guitar tuning (#302)'
        overallItem = 'Overall (#302)'
        image_file_id = "10nlXeXzt8pn3nvZm0F8am2R4yPla-8YL"
        visualizationTitle = "Visualization (#302)"
        visualizationUseful = "Is visualization useful? (#302)"
        commentsTitle = "Comments, if any. (#302)"

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
          
        submissionName = "Sample #312"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1_tyG5d3c0oT3EjdYLVzinxbMfe5RulYO/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#312)'
        rhythmItem = 'Rhythm (#312)'
        tuningItem = 'Guitar tuning (#312)'
        overallItem = 'Overall (#312)'
        image_file_id = "1wENqxv5R3LS1UhqD24lXwjWp4lEoh2jI"
        visualizationTitle = "Visualization (#312)"
        visualizationUseful = "Is visualization useful? (#312)"
        commentsTitle = "Comments, if any. (#312)"

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
          
        submissionName = "Sample #313"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1PcVfwej38eHebtUJWXgLm7gukY6rJhVE/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#313)'
        rhythmItem = 'Rhythm (#313)'
        tuningItem = 'Guitar tuning (#313)'
        overallItem = 'Overall (#313)'
        image_file_id = "1jgQNw0WBdkb-SPBRxkRS4HyZrb0ctaQ_"
        visualizationTitle = "Visualization (#313)"
        visualizationUseful = "Is visualization useful? (#313)"
        commentsTitle = "Comments, if any. (#313)"

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
          
        submissionName = "Sample #322"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1MeJGGRaRk5sEX5Z_vhpFxD7oPfnQuw2w/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#322)'
        rhythmItem = 'Rhythm (#322)'
        tuningItem = 'Guitar tuning (#322)'
        overallItem = 'Overall (#322)'
        image_file_id = "1WbylCjKO9J-n-t0Ms5TiFNQ44WiYY-xL"
        visualizationTitle = "Visualization (#322)"
        visualizationUseful = "Is visualization useful? (#322)"
        commentsTitle = "Comments, if any. (#322)"

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
          
        submissionName = "Sample #323"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/13BiBfO_cPfg-nab2zQWWUkRuYQ2xPJo5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#323)'
        rhythmItem = 'Rhythm (#323)'
        tuningItem = 'Guitar tuning (#323)'
        overallItem = 'Overall (#323)'
        image_file_id = "1ZR8sT_xLZc1XVjtDcuRrLRD8p4vA7THe"
        visualizationTitle = "Visualization (#323)"
        visualizationUseful = "Is visualization useful? (#323)"
        commentsTitle = "Comments, if any. (#323)"

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
          
        submissionName = "Sample #330"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1EF4dpPCemqxYY1EKZLLBVMJsf8DfSg7D/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#330)'
        rhythmItem = 'Rhythm (#330)'
        tuningItem = 'Guitar tuning (#330)'
        overallItem = 'Overall (#330)'
        image_file_id = "1aSZZPdLB1WwJkSe48YBVxADmkUE5knN6"
        visualizationTitle = "Visualization (#330)"
        visualizationUseful = "Is visualization useful? (#330)"
        commentsTitle = "Comments, if any. (#330)"

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
          
        submissionName = "Sample #337"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/165qBmJEuxXAmFkvSVN77TrPzS_uBUTJX/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#337)'
        rhythmItem = 'Rhythm (#337)'
        tuningItem = 'Guitar tuning (#337)'
        overallItem = 'Overall (#337)'
        image_file_id = "1O2hY0THvc4I-pQCBnvgGvVEJvJolRmPl"
        visualizationTitle = "Visualization (#337)"
        visualizationUseful = "Is visualization useful? (#337)"
        commentsTitle = "Comments, if any. (#337)"

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
          
        submissionName = "Sample #346"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1RSSlh_rA0ABVb_fK4ZRZDWsHAzRqqB9Q/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#346)'
        rhythmItem = 'Rhythm (#346)'
        tuningItem = 'Guitar tuning (#346)'
        overallItem = 'Overall (#346)'
        image_file_id = "1s4YBkFFJbKQBPkQM13S8NDmseNrIGNC_"
        visualizationTitle = "Visualization (#346)"
        visualizationUseful = "Is visualization useful? (#346)"
        commentsTitle = "Comments, if any. (#346)"

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
          
        submissionName = "Sample #354"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1GLztN140zye4mcfCXc0Ii8BgFGCo4yy_/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#354)'
        rhythmItem = 'Rhythm (#354)'
        tuningItem = 'Guitar tuning (#354)'
        overallItem = 'Overall (#354)'
        image_file_id = "1z4WsRV1_tVPMH45jqhha7utcxYwjrX3z"
        visualizationTitle = "Visualization (#354)"
        visualizationUseful = "Is visualization useful? (#354)"
        commentsTitle = "Comments, if any. (#354)"

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
    