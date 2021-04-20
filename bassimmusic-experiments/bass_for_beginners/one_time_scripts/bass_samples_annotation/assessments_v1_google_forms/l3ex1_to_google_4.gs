
    function createForm() {
       // create Form
      var item = "Lesson 3 - Playing Notes #4 0:02:39 (hh:mm:ss)";
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

       
        submissionName = "Sample #349"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1OPuoVrwd0zmW9fVBHfsMnshVbjYff0tz/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#349)'
        rhythmItem = 'Rhythm (#349)'
        tuningItem = 'Guitar tuning (#349)'
        overallItem = 'Overall (#349)'
        image_file_id = "18iCBfMYPdo4tkSPR3vsnEvKJW8uNky_-"
        visualizationTitle = "Visualization (#349)"
        visualizationUseful = "Is visualization useful? (#349)"
        commentsTitle = "Comments, if any. (#349)"

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
          
        submissionName = "Sample #350"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Bq5bg34-bjjLOFTAK4pVZpCYIkgwm2LE/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#350)'
        rhythmItem = 'Rhythm (#350)'
        tuningItem = 'Guitar tuning (#350)'
        overallItem = 'Overall (#350)'
        image_file_id = "1SHuHBrteP68o903VZ9gB7JVTJWaLnQqi"
        visualizationTitle = "Visualization (#350)"
        visualizationUseful = "Is visualization useful? (#350)"
        commentsTitle = "Comments, if any. (#350)"

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
          
        submissionName = "Sample #357"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1W95ouSkRm2oRTjYO1UHJkTjnmqQtoIDK/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#357)'
        rhythmItem = 'Rhythm (#357)'
        tuningItem = 'Guitar tuning (#357)'
        overallItem = 'Overall (#357)'
        image_file_id = "1To9JWGU0EyOvErioqqboGYonTkggzcdE"
        visualizationTitle = "Visualization (#357)"
        visualizationUseful = "Is visualization useful? (#357)"
        commentsTitle = "Comments, if any. (#357)"

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
          
        submissionName = "Sample #358"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1tVqYCjc_CUHpOjXqtUlulZWLrWOAAbZL/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#358)'
        rhythmItem = 'Rhythm (#358)'
        tuningItem = 'Guitar tuning (#358)'
        overallItem = 'Overall (#358)'
        image_file_id = "1LuPqzvSajc--uc99XJhbRhHTm1BLYkTS"
        visualizationTitle = "Visualization (#358)"
        visualizationUseful = "Is visualization useful? (#358)"
        commentsTitle = "Comments, if any. (#358)"

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
          
        submissionName = "Sample #366"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/12DQz5QONBjPHvAU-e_UJ5V6hlJxW2HU5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#366)'
        rhythmItem = 'Rhythm (#366)'
        tuningItem = 'Guitar tuning (#366)'
        overallItem = 'Overall (#366)'
        image_file_id = "1dJu5sGvU7hr3NZVNMjaBD6iz1DpaA1Yo"
        visualizationTitle = "Visualization (#366)"
        visualizationUseful = "Is visualization useful? (#366)"
        commentsTitle = "Comments, if any. (#366)"

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
          
        submissionName = "Sample #374"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1YtozT_X937SyJMe8SpyZYGTHfNDHDSvL/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#374)'
        rhythmItem = 'Rhythm (#374)'
        tuningItem = 'Guitar tuning (#374)'
        overallItem = 'Overall (#374)'
        image_file_id = "1pZcBwpY08v0pwEKPbIKHEwGTVp8OVOLW"
        visualizationTitle = "Visualization (#374)"
        visualizationUseful = "Is visualization useful? (#374)"
        commentsTitle = "Comments, if any. (#374)"

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
          
        submissionName = "Sample #378"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1-WNtyyRg7RKQO5TLmNvn71OuupLmEdUZ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#378)'
        rhythmItem = 'Rhythm (#378)'
        tuningItem = 'Guitar tuning (#378)'
        overallItem = 'Overall (#378)'
        image_file_id = "1ocleJJOLLpghO0jhgoSQZJiQqnKSF5ho"
        visualizationTitle = "Visualization (#378)"
        visualizationUseful = "Is visualization useful? (#378)"
        commentsTitle = "Comments, if any. (#378)"

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
          
        submissionName = "Sample #379"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1cFjmex0AmD6ASKk9Ew8xRFbjfxoWGNQp/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#379)'
        rhythmItem = 'Rhythm (#379)'
        tuningItem = 'Guitar tuning (#379)'
        overallItem = 'Overall (#379)'
        image_file_id = "1F21wNVatdACIdKBORakXh5TniJ4CfZWk"
        visualizationTitle = "Visualization (#379)"
        visualizationUseful = "Is visualization useful? (#379)"
        commentsTitle = "Comments, if any. (#379)"

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
          
        submissionName = "Sample #386"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1BriJddGlJzC5bNgdwBsHy-fX_pxp7PoJ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#386)'
        rhythmItem = 'Rhythm (#386)'
        tuningItem = 'Guitar tuning (#386)'
        overallItem = 'Overall (#386)'
        image_file_id = "190Ub86cXv1yu11LemBH4q-qqwFqMbmuG"
        visualizationTitle = "Visualization (#386)"
        visualizationUseful = "Is visualization useful? (#386)"
        commentsTitle = "Comments, if any. (#386)"

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
          
        submissionName = "Sample #410"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1fzzVby7Zttz8nyldb9HOcombNsltPuot/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#410)'
        rhythmItem = 'Rhythm (#410)'
        tuningItem = 'Guitar tuning (#410)'
        overallItem = 'Overall (#410)'
        image_file_id = "1i-OimlHLjcx9jL5AYLw2_OIang9b8Nsx"
        visualizationTitle = "Visualization (#410)"
        visualizationUseful = "Is visualization useful? (#410)"
        commentsTitle = "Comments, if any. (#410)"

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
    