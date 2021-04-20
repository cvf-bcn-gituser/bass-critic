
    function createForm() {
       // create Form
      var item = "Lesson 2 - Strumming #3 0:02:37 (hh:mm:ss)";
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

       
        submissionName = "Sample #306"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1R4ztTybaRUp1jnGc1zxJ3MM1aSCyM47m/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#306)'
        rhythmItem = 'Rhythm (#306)'
        tuningItem = 'Guitar tuning (#306)'
        overallItem = 'Overall (#306)'
        image_file_id = "1BvAkMCRqO7a5-fsNFUwwBGSNUGtknUa4"
        visualizationTitle = "Visualization (#306)"
        visualizationUseful = "Is visualization useful? (#306)"
        commentsTitle = "Comments, if any. (#306)"

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
          
        submissionName = "Sample #307"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1zISSSjuTuoFruhb3nQnqub1j_4XVBiJT/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#307)'
        rhythmItem = 'Rhythm (#307)'
        tuningItem = 'Guitar tuning (#307)'
        overallItem = 'Overall (#307)'
        image_file_id = "17gcpJFQ6FvfQ6DNUuxyblZq8v3ExhwBq"
        visualizationTitle = "Visualization (#307)"
        visualizationUseful = "Is visualization useful? (#307)"
        commentsTitle = "Comments, if any. (#307)"

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
          
        submissionName = "Sample #315"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1DkaGvsQod64fq_Xd_gXG5WqYEmnyvXro/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#315)'
        rhythmItem = 'Rhythm (#315)'
        tuningItem = 'Guitar tuning (#315)'
        overallItem = 'Overall (#315)'
        image_file_id = "1FmA2vzaAOF7x5KGawEOFCRDTu1Rqbq4l"
        visualizationTitle = "Visualization (#315)"
        visualizationUseful = "Is visualization useful? (#315)"
        commentsTitle = "Comments, if any. (#315)"

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
          
        submissionName = "Sample #316"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1dNXpUAntvScdJYCC8jMBu3vsKIkJ7-bq/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#316)'
        rhythmItem = 'Rhythm (#316)'
        tuningItem = 'Guitar tuning (#316)'
        overallItem = 'Overall (#316)'
        image_file_id = "1h2o5ynHZVyH15Xa1j-YMOstZk3vKTitX"
        visualizationTitle = "Visualization (#316)"
        visualizationUseful = "Is visualization useful? (#316)"
        commentsTitle = "Comments, if any. (#316)"

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
          
        submissionName = "Sample #326"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/16jdq6EmShhqB8SyChf70Hc7GE8GQCyHv/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#326)'
        rhythmItem = 'Rhythm (#326)'
        tuningItem = 'Guitar tuning (#326)'
        overallItem = 'Overall (#326)'
        image_file_id = "1JXjEz1Wz7lVYgvGFF0FpJ2VnjzForf0U"
        visualizationTitle = "Visualization (#326)"
        visualizationUseful = "Is visualization useful? (#326)"
        commentsTitle = "Comments, if any. (#326)"

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
          
        submissionName = "Sample #333"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/185KSMDXffDpEYE5IxGAjzqd5Hoff98eF/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#333)'
        rhythmItem = 'Rhythm (#333)'
        tuningItem = 'Guitar tuning (#333)'
        overallItem = 'Overall (#333)'
        image_file_id = "1r1XnGV4qIrvlbJ8Pe3npcUntVmhMmsOz"
        visualizationTitle = "Visualization (#333)"
        visualizationUseful = "Is visualization useful? (#333)"
        commentsTitle = "Comments, if any. (#333)"

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
          
        submissionName = "Sample #339"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1G3m2aXeeYguHL34oqiJsOLtRe4U6So3M/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#339)'
        rhythmItem = 'Rhythm (#339)'
        tuningItem = 'Guitar tuning (#339)'
        overallItem = 'Overall (#339)'
        image_file_id = "1Q2lHBeRS4sqg7KTZHGt8x8LRRBowLONF"
        visualizationTitle = "Visualization (#339)"
        visualizationUseful = "Is visualization useful? (#339)"
        commentsTitle = "Comments, if any. (#339)"

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
          
        submissionName = "Sample #348"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1t-PBxDDtuJZky87RZ1eVee7z1p5tiOgx/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#348)'
        rhythmItem = 'Rhythm (#348)'
        tuningItem = 'Guitar tuning (#348)'
        overallItem = 'Overall (#348)'
        image_file_id = "1KEmKOdea525wwAbkYYEeJP_5o_A2S0v_"
        visualizationTitle = "Visualization (#348)"
        visualizationUseful = "Is visualization useful? (#348)"
        commentsTitle = "Comments, if any. (#348)"

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
          
        submissionName = "Sample #356"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1xx0312l-7HDVJp410Oz4phAkcEyXRnQ_/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#356)'
        rhythmItem = 'Rhythm (#356)'
        tuningItem = 'Guitar tuning (#356)'
        overallItem = 'Overall (#356)'
        image_file_id = "1CdbS-23R8WAtXOC8ZkAlHjcQRi8hwEz0"
        visualizationTitle = "Visualization (#356)"
        visualizationUseful = "Is visualization useful? (#356)"
        commentsTitle = "Comments, if any. (#356)"

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
          
        submissionName = "Sample #365"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1lqwQ8oDI3zZCxWe1rBrIpb_b4vUgNlH0/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#365)'
        rhythmItem = 'Rhythm (#365)'
        tuningItem = 'Guitar tuning (#365)'
        overallItem = 'Overall (#365)'
        image_file_id = "19SC_r8CI6lQxy3tlzmtKn5p3dpLam-Rt"
        visualizationTitle = "Visualization (#365)"
        visualizationUseful = "Is visualization useful? (#365)"
        commentsTitle = "Comments, if any. (#365)"

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
    