
    function createForm() {
       // create Form
      var item = "Lesson 2 - Strumming #1 0:03:02 (hh:mm:ss)";
      var description = "\nPlease, use headphones while recording. For this exercise, you will strum an A minor\nchord for 1 measure (one downstroke per beat) and an E Major chord for 1 measure\n(one downstroke per beat), alternating between these 2 chords for 4 measures in tempo.\nWhen you press the record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\n\nExample: https://drive.google.com/open?id=1o0utAI7e7E_zudQX6CnFBe8YJRaUHgyW\n";

       var image_file_id = "1ROAx7UzO6MVh_3ryR6TDZyIwYu-cmiCr"

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

       
        submissionName = "Sample #157"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1NeI0jrOs6lAyRdcFOqIFIO_QAAI0W6MK/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#157)'
        rhythmItem = 'Rhythm (#157)'
        tuningItem = 'Guitar tuning (#157)'
        overallItem = 'Overall (#157)'
        image_file_id = "126dPDYPWXFO2ahHffaKYYsCusuWelAbv"
        visualizationTitle = "Visualization (#157)"
        visualizationUseful = "Is visualization useful? (#157)"
        commentsTitle = "Comments, if any. (#157)"

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
          
        submissionName = "Sample #165"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1j1NdNab0lUKSXciBd4xoRFDs_WiRxI36/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#165)'
        rhythmItem = 'Rhythm (#165)'
        tuningItem = 'Guitar tuning (#165)'
        overallItem = 'Overall (#165)'
        image_file_id = "1krijSDvMUZYb_JrnkWniAut7iaC3hPxt"
        visualizationTitle = "Visualization (#165)"
        visualizationUseful = "Is visualization useful? (#165)"
        commentsTitle = "Comments, if any. (#165)"

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
          
        submissionName = "Sample #187"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1h7hhBA162maXKY7LYRhLPVEria6fZZNT/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#187)'
        rhythmItem = 'Rhythm (#187)'
        tuningItem = 'Guitar tuning (#187)'
        overallItem = 'Overall (#187)'
        image_file_id = "1dGu_YuX4RuI4mNCsJ1L5WAScSrdpOeAI"
        visualizationTitle = "Visualization (#187)"
        visualizationUseful = "Is visualization useful? (#187)"
        commentsTitle = "Comments, if any. (#187)"

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
          
        submissionName = "Sample #188"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1SFclYxPKxy0FYwteLZycH4JKhAYm6GSx/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#188)'
        rhythmItem = 'Rhythm (#188)'
        tuningItem = 'Guitar tuning (#188)'
        overallItem = 'Overall (#188)'
        image_file_id = "1uDqGzRbn0c8lzUKAMDDz1VRMeOJ_iAiW"
        visualizationTitle = "Visualization (#188)"
        visualizationUseful = "Is visualization useful? (#188)"
        commentsTitle = "Comments, if any. (#188)"

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
          
        submissionName = "Sample #200"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1UaM5t377NMxZt840B6nWBUiseJk1zqgw/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#200)'
        rhythmItem = 'Rhythm (#200)'
        tuningItem = 'Guitar tuning (#200)'
        overallItem = 'Overall (#200)'
        image_file_id = "1qwv6Qa5eqa-TQ3RAiqgXgg9w8kVdO95t"
        visualizationTitle = "Visualization (#200)"
        visualizationUseful = "Is visualization useful? (#200)"
        commentsTitle = "Comments, if any. (#200)"

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
          
        submissionName = "Sample #207"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1QNQKYnUb218wQwr4wnBM47qtZGpKZ_Oa/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#207)'
        rhythmItem = 'Rhythm (#207)'
        tuningItem = 'Guitar tuning (#207)'
        overallItem = 'Overall (#207)'
        image_file_id = "1EsewTy-ngcMs9etV7M4Iag8Ak6FOi4PS"
        visualizationTitle = "Visualization (#207)"
        visualizationUseful = "Is visualization useful? (#207)"
        commentsTitle = "Comments, if any. (#207)"

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
          
        submissionName = "Sample #231"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1G3klHosfRrltxSKIV8DG1GvjfoPVq8zF/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#231)'
        rhythmItem = 'Rhythm (#231)'
        tuningItem = 'Guitar tuning (#231)'
        overallItem = 'Overall (#231)'
        image_file_id = "1r97-tsykHpzs0zp6QQCbzRS_8t9wyXig"
        visualizationTitle = "Visualization (#231)"
        visualizationUseful = "Is visualization useful? (#231)"
        commentsTitle = "Comments, if any. (#231)"

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
          
        submissionName = "Sample #237"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1o_y2vgkJdTnPUcbR8cvvhLMmpkZZP8u9/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#237)'
        rhythmItem = 'Rhythm (#237)'
        tuningItem = 'Guitar tuning (#237)'
        overallItem = 'Overall (#237)'
        image_file_id = "1xo0DBqzAT_AT6AjyZIVHdFIcog7_ByOJ"
        visualizationTitle = "Visualization (#237)"
        visualizationUseful = "Is visualization useful? (#237)"
        commentsTitle = "Comments, if any. (#237)"

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
          
        submissionName = "Sample #238"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1f_PzHNj_xrU-5UKY1H94bi_harPLHI0i/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#238)'
        rhythmItem = 'Rhythm (#238)'
        tuningItem = 'Guitar tuning (#238)'
        overallItem = 'Overall (#238)'
        image_file_id = "1q00vSLhG_l1WV4vtwmEfxzqZtNhdL94N"
        visualizationTitle = "Visualization (#238)"
        visualizationUseful = "Is visualization useful? (#238)"
        commentsTitle = "Comments, if any. (#238)"

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
          
        submissionName = "Sample #244"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1vVnSRU_BRefnpVC_z3Ogg4vnWAAm1s0K/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#244)'
        rhythmItem = 'Rhythm (#244)'
        tuningItem = 'Guitar tuning (#244)'
        overallItem = 'Overall (#244)'
        image_file_id = "1Qleunc1ozRsELTJRiAo6gVL306vzoVee"
        visualizationTitle = "Visualization (#244)"
        visualizationUseful = "Is visualization useful? (#244)"
        commentsTitle = "Comments, if any. (#244)"

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
    