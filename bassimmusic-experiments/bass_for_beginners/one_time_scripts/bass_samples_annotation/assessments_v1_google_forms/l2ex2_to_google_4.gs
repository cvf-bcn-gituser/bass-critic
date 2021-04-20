
    function createForm() {
       // create Form
      var item = "Lesson 2 - Strumming #4 0:02:06 (hh:mm:ss)";
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

       
        submissionName = "Sample #372"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1DNHR7EfB4thb_QDRpTmkajeaUOydNom4/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#372)'
        rhythmItem = 'Rhythm (#372)'
        tuningItem = 'Guitar tuning (#372)'
        overallItem = 'Overall (#372)'
        image_file_id = "19QiQ08k5nBjSG4LEurO4myLeip4Mc34s"
        visualizationTitle = "Visualization (#372)"
        visualizationUseful = "Is visualization useful? (#372)"
        commentsTitle = "Comments, if any. (#372)"

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
          
        submissionName = "Sample #373"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1-YorXKARC1FK-7hxMOdKW_a1jh1atpr4/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#373)'
        rhythmItem = 'Rhythm (#373)'
        tuningItem = 'Guitar tuning (#373)'
        overallItem = 'Overall (#373)'
        image_file_id = "1NmuqvAfgh4Ud8bCdHuluaqHyXzKQHMfa"
        visualizationTitle = "Visualization (#373)"
        visualizationUseful = "Is visualization useful? (#373)"
        commentsTitle = "Comments, if any. (#373)"

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
          
        submissionName = "Sample #377"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1pyJNWasqVSu0YDZxOUqsUeuNhENz_Cvx/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#377)'
        rhythmItem = 'Rhythm (#377)'
        tuningItem = 'Guitar tuning (#377)'
        overallItem = 'Overall (#377)'
        image_file_id = "1Ee4aSzrn34YSZrSENla4xegwnmkh97tV"
        visualizationTitle = "Visualization (#377)"
        visualizationUseful = "Is visualization useful? (#377)"
        commentsTitle = "Comments, if any. (#377)"

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
          
        submissionName = "Sample #385"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1uqcmX-WtLjP12glj-vQak_tYtfsy09lR/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#385)'
        rhythmItem = 'Rhythm (#385)'
        tuningItem = 'Guitar tuning (#385)'
        overallItem = 'Overall (#385)'
        image_file_id = "1oWpDcFgAEyvlnhYEHy13wfFmmDHtDxTM"
        visualizationTitle = "Visualization (#385)"
        visualizationUseful = "Is visualization useful? (#385)"
        commentsTitle = "Comments, if any. (#385)"

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
          
        submissionName = "Sample #409"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1tvCcVRW4VD1O1sYwWpTRXrif-DC-ZTTk/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#409)'
        rhythmItem = 'Rhythm (#409)'
        tuningItem = 'Guitar tuning (#409)'
        overallItem = 'Overall (#409)'
        image_file_id = "1pIwkqDUs7wE93frB95ay-YjhvlW0YcIZ"
        visualizationTitle = "Visualization (#409)"
        visualizationUseful = "Is visualization useful? (#409)"
        commentsTitle = "Comments, if any. (#409)"

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
          
        submissionName = "Sample #416"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1FJ3YLpJBsBfruMu9VqLB3vlcVsirALgF/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#416)'
        rhythmItem = 'Rhythm (#416)'
        tuningItem = 'Guitar tuning (#416)'
        overallItem = 'Overall (#416)'
        image_file_id = "1BySPbFKsguyESC3WoTSiR_EfA0NEbemN"
        visualizationTitle = "Visualization (#416)"
        visualizationUseful = "Is visualization useful? (#416)"
        commentsTitle = "Comments, if any. (#416)"

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
          
        submissionName = "Sample #417"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1ubgaeyNPT_A9DxdR0zctHsPZoYGm19jB/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#417)'
        rhythmItem = 'Rhythm (#417)'
        tuningItem = 'Guitar tuning (#417)'
        overallItem = 'Overall (#417)'
        image_file_id = "1tgxkv_LeMofzveZFfJu0sufgXpyRFioV"
        visualizationTitle = "Visualization (#417)"
        visualizationUseful = "Is visualization useful? (#417)"
        commentsTitle = "Comments, if any. (#417)"

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
          
        submissionName = "Sample #423"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1QTe7GVo8e6qbPBdN0ALegV0xtPiCQUK3/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#423)'
        rhythmItem = 'Rhythm (#423)'
        tuningItem = 'Guitar tuning (#423)'
        overallItem = 'Overall (#423)'
        image_file_id = "1poBNL_orAVtmRT0clPF9mv0W-RcBaMun"
        visualizationTitle = "Visualization (#423)"
        visualizationUseful = "Is visualization useful? (#423)"
        commentsTitle = "Comments, if any. (#423)"

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
    