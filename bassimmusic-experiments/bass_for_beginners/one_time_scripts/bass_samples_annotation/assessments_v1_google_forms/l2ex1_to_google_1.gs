
    function createForm() {
       // create Form
      var item = "Lesson 2 - Picking #1 0:02:44 (hh:mm:ss)";
      var description = "\nFor this exercise, you will pick each open string in tempo according to the diagram above.\nUse downstrokes to play each string and play 1 string per beat. When you press he record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\n\nExample: https://drive.google.com/open?id=1Zqu3EuhTgw3P5gUx71qfA7--l99_-57t\n";

       var image_file_id = "1PYnuJaL0RhzBP3Tz8oS9aFPMvf07Rod4"

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

       
        submissionName = "Sample #156"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1HpcW5cuqOI_ftVqsxUYRQ_P5Ei6brhUR/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#156)'
        rhythmItem = 'Rhythm (#156)'
        tuningItem = 'Guitar tuning (#156)'
        overallItem = 'Overall (#156)'
        image_file_id = "1jnpxSwfFlg_7aF3jq93-WXCcSO7DlnSN"
        visualizationTitle = "Visualization (#156)"
        visualizationUseful = "Is visualization useful? (#156)"
        commentsTitle = "Comments, if any. (#156)"

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
          
        submissionName = "Sample #164"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1I57AbQPb6Ta8tGRIkFBt2pRfmAl9gSOg/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#164)'
        rhythmItem = 'Rhythm (#164)'
        tuningItem = 'Guitar tuning (#164)'
        overallItem = 'Overall (#164)'
        image_file_id = "1IcxiivmYrI8OVkshB7cRaPydCDThKJhH"
        visualizationTitle = "Visualization (#164)"
        visualizationUseful = "Is visualization useful? (#164)"
        commentsTitle = "Comments, if any. (#164)"

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
          
        submissionName = "Sample #182"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1htISZj7ymnohtHdQl9IG32J8_X2KX3hh/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#182)'
        rhythmItem = 'Rhythm (#182)'
        tuningItem = 'Guitar tuning (#182)'
        overallItem = 'Overall (#182)'
        image_file_id = "1GyBfkEjzPm3OYm-tzskijfKazH3PbnBY"
        visualizationTitle = "Visualization (#182)"
        visualizationUseful = "Is visualization useful? (#182)"
        commentsTitle = "Comments, if any. (#182)"

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
          
        submissionName = "Sample #183"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1jzuybaeKyIkUBlZfy6H-r9ozjGRAGxjO/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#183)'
        rhythmItem = 'Rhythm (#183)'
        tuningItem = 'Guitar tuning (#183)'
        overallItem = 'Overall (#183)'
        image_file_id = "1usOOSYAt0akWyq3fo2FqtUXGDc3fFtSV"
        visualizationTitle = "Visualization (#183)"
        visualizationUseful = "Is visualization useful? (#183)"
        commentsTitle = "Comments, if any. (#183)"

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
          
        submissionName = "Sample #184"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1hrfxQ-jCyqWIVcvcRdZ4cVAvWQIS4uVV/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#184)'
        rhythmItem = 'Rhythm (#184)'
        tuningItem = 'Guitar tuning (#184)'
        overallItem = 'Overall (#184)'
        image_file_id = "1RYEs_gECZ3mk27FrZcPC19-seIjFE-lO"
        visualizationTitle = "Visualization (#184)"
        visualizationUseful = "Is visualization useful? (#184)"
        commentsTitle = "Comments, if any. (#184)"

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
          
        submissionName = "Sample #185"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1n0sNi9ojLtkpUcLRzOMr43jp3_3KhkYk/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#185)'
        rhythmItem = 'Rhythm (#185)'
        tuningItem = 'Guitar tuning (#185)'
        overallItem = 'Overall (#185)'
        image_file_id = "14Hb-Xd1pRm5vbk1R5tw7MD40gycrB0NZ"
        visualizationTitle = "Visualization (#185)"
        visualizationUseful = "Is visualization useful? (#185)"
        commentsTitle = "Comments, if any. (#185)"

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
          
        submissionName = "Sample #186"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1caUDGoYkfMzuy__2Qy2igJJvZIM7gH_X/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#186)'
        rhythmItem = 'Rhythm (#186)'
        tuningItem = 'Guitar tuning (#186)'
        overallItem = 'Overall (#186)'
        image_file_id = "1_wy1m_oeuI66u0uXaggqezmbVkcPtgeX"
        visualizationTitle = "Visualization (#186)"
        visualizationUseful = "Is visualization useful? (#186)"
        commentsTitle = "Comments, if any. (#186)"

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
          
        submissionName = "Sample #199"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1jpfUXDqBK32nSSPxLE6pOULEHL9OCw1X/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#199)'
        rhythmItem = 'Rhythm (#199)'
        tuningItem = 'Guitar tuning (#199)'
        overallItem = 'Overall (#199)'
        image_file_id = "1D451KFdFZBFNk_OUC3kFlyWuJTyy5rfn"
        visualizationTitle = "Visualization (#199)"
        visualizationUseful = "Is visualization useful? (#199)"
        commentsTitle = "Comments, if any. (#199)"

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
          
        submissionName = "Sample #206"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1xrXWV9gQQ1CeiHZ0x5d6_eWGoHo54m9G/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#206)'
        rhythmItem = 'Rhythm (#206)'
        tuningItem = 'Guitar tuning (#206)'
        overallItem = 'Overall (#206)'
        image_file_id = "1_ABcfrdE3uDogcQwcp8fIhIeMkBi2Kn2"
        visualizationTitle = "Visualization (#206)"
        visualizationUseful = "Is visualization useful? (#206)"
        commentsTitle = "Comments, if any. (#206)"

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
          
        submissionName = "Sample #230"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/11bX5FwWYNKpNey-RLVy9q5WXDDl-GU-S/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#230)'
        rhythmItem = 'Rhythm (#230)'
        tuningItem = 'Guitar tuning (#230)'
        overallItem = 'Overall (#230)'
        image_file_id = "1q4nRNgR0C_8QAgXDAhI1FR5XwcQm7aVk"
        visualizationTitle = "Visualization (#230)"
        visualizationUseful = "Is visualization useful? (#230)"
        commentsTitle = "Comments, if any. (#230)"

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
    