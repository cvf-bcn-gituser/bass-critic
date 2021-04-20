
    function createForm() {
       // create Form
      var item = "Lesson 2 - Strumming #1 0:02:06 (hh:mm:ss)";
      var description = "\n\"For this exercise, you will strum an A minor\nchord for 1 measure (one downstroke per beat) and an E Major chord for 1 measure\n(one downstroke per beat), alternating between these 2 chords for 4 measures in tempo.\nWhen you press the record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\"\n\nExample: https://drive.google.com/open?id=1o0utAI7e7E_zudQX6CnFBe8YJRaUHgyW\n";

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

       
        submissionName = "Sample #237"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1o_y2vgkJdTnPUcbR8cvvhLMmpkZZP8u9/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#237)'
        rhythmItem = 'Rhythm (#237)'
        tuningItem = 'Guitar tuning (#237)'
        overallItem = 'Overall (#237)'
        image_file_id = "1xo0DBqzAT_AT6AjyZIVHdFIcog7_ByOJ"
        visualizationTitle = "Visualization errors (#237)"
        commentsTitle = "Exercise Comments (#237)"
        visCommentsTitle = "Visualization Comments (#237)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #306"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1R4ztTybaRUp1jnGc1zxJ3MM1aSCyM47m/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#306)'
        rhythmItem = 'Rhythm (#306)'
        tuningItem = 'Guitar tuning (#306)'
        overallItem = 'Overall (#306)'
        image_file_id = "1BvAkMCRqO7a5-fsNFUwwBGSNUGtknUa4"
        visualizationTitle = "Visualization errors (#306)"
        commentsTitle = "Exercise Comments (#306)"
        visCommentsTitle = "Visualization Comments (#306)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #307"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1zISSSjuTuoFruhb3nQnqub1j_4XVBiJT/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#307)'
        rhythmItem = 'Rhythm (#307)'
        tuningItem = 'Guitar tuning (#307)'
        overallItem = 'Overall (#307)'
        image_file_id = "17gcpJFQ6FvfQ6DNUuxyblZq8v3ExhwBq"
        visualizationTitle = "Visualization errors (#307)"
        commentsTitle = "Exercise Comments (#307)"
        visCommentsTitle = "Visualization Comments (#307)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #333"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/185KSMDXffDpEYE5IxGAjzqd5Hoff98eF/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#333)'
        rhythmItem = 'Rhythm (#333)'
        tuningItem = 'Guitar tuning (#333)'
        overallItem = 'Overall (#333)'
        image_file_id = "1r1XnGV4qIrvlbJ8Pe3npcUntVmhMmsOz"
        visualizationTitle = "Visualization errors (#333)"
        commentsTitle = "Exercise Comments (#333)"
        visCommentsTitle = "Visualization Comments (#333)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #339"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1G3m2aXeeYguHL34oqiJsOLtRe4U6So3M/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#339)'
        rhythmItem = 'Rhythm (#339)'
        tuningItem = 'Guitar tuning (#339)'
        overallItem = 'Overall (#339)'
        image_file_id = "1Q2lHBeRS4sqg7KTZHGt8x8LRRBowLONF"
        visualizationTitle = "Visualization errors (#339)"
        commentsTitle = "Exercise Comments (#339)"
        visCommentsTitle = "Visualization Comments (#339)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #348"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1t-PBxDDtuJZky87RZ1eVee7z1p5tiOgx/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#348)'
        rhythmItem = 'Rhythm (#348)'
        tuningItem = 'Guitar tuning (#348)'
        overallItem = 'Overall (#348)'
        image_file_id = "1KEmKOdea525wwAbkYYEeJP_5o_A2S0v_"
        visualizationTitle = "Visualization errors (#348)"
        commentsTitle = "Exercise Comments (#348)"
        visCommentsTitle = "Visualization Comments (#348)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #356"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1xx0312l-7HDVJp410Oz4phAkcEyXRnQ_/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#356)'
        rhythmItem = 'Rhythm (#356)'
        tuningItem = 'Guitar tuning (#356)'
        overallItem = 'Overall (#356)'
        image_file_id = "1CdbS-23R8WAtXOC8ZkAlHjcQRi8hwEz0"
        visualizationTitle = "Visualization errors (#356)"
        commentsTitle = "Exercise Comments (#356)"
        visCommentsTitle = "Visualization Comments (#356)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #372"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1DNHR7EfB4thb_QDRpTmkajeaUOydNom4/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#372)'
        rhythmItem = 'Rhythm (#372)'
        tuningItem = 'Guitar tuning (#372)'
        overallItem = 'Overall (#372)'
        image_file_id = "19QiQ08k5nBjSG4LEurO4myLeip4Mc34s"
        visualizationTitle = "Visualization errors (#372)"
        commentsTitle = "Exercise Comments (#372)"
        visCommentsTitle = "Visualization Comments (#372)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
    }
    