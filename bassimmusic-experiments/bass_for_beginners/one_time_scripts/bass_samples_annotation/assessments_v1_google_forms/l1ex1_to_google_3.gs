
    function createForm() {
       // create Form
      var item = "Lesson 1 - Getting Started #3 0:02:23 (hh:mm:ss)";
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

       
        submissionName = "Sample #254"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1tXKfZDA_16Pd89E-vmp1-vkpbRtph-lD/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#254)'
        rhythmItem = 'Rhythm (#254)'
        tuningItem = 'Guitar tuning (#254)'
        overallItem = 'Overall (#254)'
        image_file_id = "1a9DGN-agdJcZ-LxgxY1khWgX5aIeAubw"
        visualizationTitle = "Visualization (#254)"
        visualizationUseful = "Is visualization useful? (#254)"
        commentsTitle = "Comments, if any. (#254)"

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
          
        submissionName = "Sample #255"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1I_7e3uUUg8dX_IZH6vt02mYx9bMQIIMW/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#255)'
        rhythmItem = 'Rhythm (#255)'
        tuningItem = 'Guitar tuning (#255)'
        overallItem = 'Overall (#255)'
        image_file_id = "152WDUwOOu9cUpAYEcHcN69DRqUEciDQl"
        visualizationTitle = "Visualization (#255)"
        visualizationUseful = "Is visualization useful? (#255)"
        commentsTitle = "Comments, if any. (#255)"

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
          
        submissionName = "Sample #264"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1uOvJZwqwc08HYUDgPnd_dkRYDxjgghi-/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#264)'
        rhythmItem = 'Rhythm (#264)'
        tuningItem = 'Guitar tuning (#264)'
        overallItem = 'Overall (#264)'
        image_file_id = "1BmqkqXGybCAlGFhOu-X6hH8tTtnt4lOD"
        visualizationTitle = "Visualization (#264)"
        visualizationUseful = "Is visualization useful? (#264)"
        commentsTitle = "Comments, if any. (#264)"

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
          
        submissionName = "Sample #265"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1-VWcGarUyCCO5_NOhed33aWJwiZtiach/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#265)'
        rhythmItem = 'Rhythm (#265)'
        tuningItem = 'Guitar tuning (#265)'
        overallItem = 'Overall (#265)'
        image_file_id = "14Xvnm_HJ7uxyDpx46Ua7LduHMhhwqXiG"
        visualizationTitle = "Visualization (#265)"
        visualizationUseful = "Is visualization useful? (#265)"
        commentsTitle = "Comments, if any. (#265)"

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
          
        submissionName = "Sample #272"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1SzIUs8FKKwXE8SzdhVS8SexgSY2fPMMH/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#272)'
        rhythmItem = 'Rhythm (#272)'
        tuningItem = 'Guitar tuning (#272)'
        overallItem = 'Overall (#272)'
        image_file_id = "12jRsysTXy2SVvGp6kEzP9h-DOMObFvdj"
        visualizationTitle = "Visualization (#272)"
        visualizationUseful = "Is visualization useful? (#272)"
        commentsTitle = "Comments, if any. (#272)"

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
          
        submissionName = "Sample #273"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1-noT5ew2zvJAbY1Ur1LW19vwmb56KCnc/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#273)'
        rhythmItem = 'Rhythm (#273)'
        tuningItem = 'Guitar tuning (#273)'
        overallItem = 'Overall (#273)'
        image_file_id = "1joo2LZaGLrMOxoTgjjnJNDGvQbKZhjqF"
        visualizationTitle = "Visualization (#273)"
        visualizationUseful = "Is visualization useful? (#273)"
        commentsTitle = "Comments, if any. (#273)"

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
          
        submissionName = "Sample #283"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1jCns8cqmmwZhg1BHY5QanJnw1VOjG129/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#283)'
        rhythmItem = 'Rhythm (#283)'
        tuningItem = 'Guitar tuning (#283)'
        overallItem = 'Overall (#283)'
        image_file_id = "1REozqjPnQL7xWGhFSTBjEzUj_5V6hTiQ"
        visualizationTitle = "Visualization (#283)"
        visualizationUseful = "Is visualization useful? (#283)"
        commentsTitle = "Comments, if any. (#283)"

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
          
        submissionName = "Sample #284"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1dHsn3OXm2l8xYlDIXjfY9syxD99C2Z4s/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#284)'
        rhythmItem = 'Rhythm (#284)'
        tuningItem = 'Guitar tuning (#284)'
        overallItem = 'Overall (#284)'
        image_file_id = "1X3XjTzl_UEaIiwFThBb-w14FBc5T_SFM"
        visualizationTitle = "Visualization (#284)"
        visualizationUseful = "Is visualization useful? (#284)"
        commentsTitle = "Comments, if any. (#284)"

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
          
        submissionName = "Sample #293"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1C5pHaPiYRBDH8faqqfxpkT78p0TMHNde/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#293)'
        rhythmItem = 'Rhythm (#293)'
        tuningItem = 'Guitar tuning (#293)'
        overallItem = 'Overall (#293)'
        image_file_id = "1irDDX5pV17rgijZCRQvp32oddn4zgUVR"
        visualizationTitle = "Visualization (#293)"
        visualizationUseful = "Is visualization useful? (#293)"
        commentsTitle = "Comments, if any. (#293)"

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
          
        submissionName = "Sample #294"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1dZJ1-GHKL4v4XR8JS6JjWDpHz-GUXEZV/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#294)'
        rhythmItem = 'Rhythm (#294)'
        tuningItem = 'Guitar tuning (#294)'
        overallItem = 'Overall (#294)'
        image_file_id = "1-TNmf8xbBqzwqqfhJRPcAxwaYjIUhZOW"
        visualizationTitle = "Visualization (#294)"
        visualizationUseful = "Is visualization useful? (#294)"
        commentsTitle = "Comments, if any. (#294)"

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
    