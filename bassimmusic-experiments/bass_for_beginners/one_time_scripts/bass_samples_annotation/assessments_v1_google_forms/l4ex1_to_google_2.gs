
    function createForm() {
       // create Form
      var item = "Lesson 4 - Playing Scales #2 0:09:19 (hh:mm:ss)";
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

       
        submissionName = "Sample #262"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1U0c8UoxpZmcps30NNj4gbthW4ZwkbOVk/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#262)'
        rhythmItem = 'Rhythm (#262)'
        tuningItem = 'Guitar tuning (#262)'
        overallItem = 'Overall (#262)'
        image_file_id = "1Dx9H3x2itlup5B05hs1m1OQz1ZZENqfM"
        visualizationTitle = "Visualization (#262)"
        visualizationUseful = "Is visualization useful? (#262)"
        commentsTitle = "Comments, if any. (#262)"

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
          
        submissionName = "Sample #269"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1BKINkQ0gDv4dneuICMMBVcjoEqtn3Wk5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#269)'
        rhythmItem = 'Rhythm (#269)'
        tuningItem = 'Guitar tuning (#269)'
        overallItem = 'Overall (#269)'
        image_file_id = "126yWp3oTMsmOEvmJweAwD_C7L_jpE1Th"
        visualizationTitle = "Visualization (#269)"
        visualizationUseful = "Is visualization useful? (#269)"
        commentsTitle = "Comments, if any. (#269)"

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
          
        submissionName = "Sample #280"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/16rKwbtaseXEzHTfih6WRBFuIgKwJFTC2/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#280)'
        rhythmItem = 'Rhythm (#280)'
        tuningItem = 'Guitar tuning (#280)'
        overallItem = 'Overall (#280)'
        image_file_id = "1UiQ2ReatARJDTawhO2zT6SlfLivsuc0z"
        visualizationTitle = "Visualization (#280)"
        visualizationUseful = "Is visualization useful? (#280)"
        commentsTitle = "Comments, if any. (#280)"

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
          
        submissionName = "Sample #290"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Ke5v2Hl6phb9jNdzK0VHf33NiQLovS0r/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#290)'
        rhythmItem = 'Rhythm (#290)'
        tuningItem = 'Guitar tuning (#290)'
        overallItem = 'Overall (#290)'
        image_file_id = "1mCS-EaZoSO-bSHvmY_hiXn9_JoXl55E2"
        visualizationTitle = "Visualization (#290)"
        visualizationUseful = "Is visualization useful? (#290)"
        commentsTitle = "Comments, if any. (#290)"

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
          
        submissionName = "Sample #300"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Fb-lnocWJsE-2piv83eZ8xgNQcmXbtSV/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#300)'
        rhythmItem = 'Rhythm (#300)'
        tuningItem = 'Guitar tuning (#300)'
        overallItem = 'Overall (#300)'
        image_file_id = "15yCGj1lKw1-16M3SmZklAesEuBjqNjWw"
        visualizationTitle = "Visualization (#300)"
        visualizationUseful = "Is visualization useful? (#300)"
        commentsTitle = "Comments, if any. (#300)"

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
          
        submissionName = "Sample #311"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1nhagZY9fb4DHpNa1pe7pyMd1nNELWJPQ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#311)'
        rhythmItem = 'Rhythm (#311)'
        tuningItem = 'Guitar tuning (#311)'
        overallItem = 'Overall (#311)'
        image_file_id = "1654L8UpdCF67-iqQ0SeMrE6nh2KOiAv5"
        visualizationTitle = "Visualization (#311)"
        visualizationUseful = "Is visualization useful? (#311)"
        commentsTitle = "Comments, if any. (#311)"

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
          
        submissionName = "Sample #319"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1uMoMn-EMTrVxLA4X11aIKiSXT83aGuM1/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#319)'
        rhythmItem = 'Rhythm (#319)'
        tuningItem = 'Guitar tuning (#319)'
        overallItem = 'Overall (#319)'
        image_file_id = "1icsz5uAa3uWQmFu09atQ44Di7XII9RkE"
        visualizationTitle = "Visualization (#319)"
        visualizationUseful = "Is visualization useful? (#319)"
        commentsTitle = "Comments, if any. (#319)"

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
          
        submissionName = "Sample #320"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1arzsiv4YD-b8m292hyjtZpHCtAURc_EN/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#320)'
        rhythmItem = 'Rhythm (#320)'
        tuningItem = 'Guitar tuning (#320)'
        overallItem = 'Overall (#320)'
        image_file_id = "1Nkjo-Za9bkII28KTZprSoiwvdPgPhZ1q"
        visualizationTitle = "Visualization (#320)"
        visualizationUseful = "Is visualization useful? (#320)"
        commentsTitle = "Comments, if any. (#320)"

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
          
        submissionName = "Sample #335"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1UVPg9ZDhK_Xu-63OM18TVG8YVIxSzTzM/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#335)'
        rhythmItem = 'Rhythm (#335)'
        tuningItem = 'Guitar tuning (#335)'
        overallItem = 'Overall (#335)'
        image_file_id = "1czVstulyDwcsjyJn_38ulmY0hJdb8jwU"
        visualizationTitle = "Visualization (#335)"
        visualizationUseful = "Is visualization useful? (#335)"
        commentsTitle = "Comments, if any. (#335)"

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
          
        submissionName = "Sample #343"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1ZsV04XFefCvvQT6Pzw_dAl2_2BbKJe2x/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#343)'
        rhythmItem = 'Rhythm (#343)'
        tuningItem = 'Guitar tuning (#343)'
        overallItem = 'Overall (#343)'
        image_file_id = "1J5JY_ChghZS3WLvIVsNySfDP_OXjGL1V"
        visualizationTitle = "Visualization (#343)"
        visualizationUseful = "Is visualization useful? (#343)"
        commentsTitle = "Comments, if any. (#343)"

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
    