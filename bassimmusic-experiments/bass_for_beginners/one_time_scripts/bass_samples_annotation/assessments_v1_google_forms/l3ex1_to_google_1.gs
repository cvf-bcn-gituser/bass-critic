
    function createForm() {
       // create Form
      var item = "Lesson 3 - Playing Notes #1 0:03:05 (hh:mm:ss)";
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

       
        submissionName = "Sample #158"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1pdaMrFKmnbb31GyRjIDHv13nDjSBhUe0/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#158)'
        rhythmItem = 'Rhythm (#158)'
        tuningItem = 'Guitar tuning (#158)'
        overallItem = 'Overall (#158)'
        image_file_id = "1sKDzypkQxXpGzX_lzJV8Flwf_05DzWHp"
        visualizationTitle = "Visualization (#158)"
        visualizationUseful = "Is visualization useful? (#158)"
        commentsTitle = "Comments, if any. (#158)"

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
          
        submissionName = "Sample #166"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1kG6adtylqrtNlOl0YndtOJiTVyD7Aknp/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#166)'
        rhythmItem = 'Rhythm (#166)'
        tuningItem = 'Guitar tuning (#166)'
        overallItem = 'Overall (#166)'
        image_file_id = "17zy8E4vYE9F9tdCk0JSyRt4QMU39hMNg"
        visualizationTitle = "Visualization (#166)"
        visualizationUseful = "Is visualization useful? (#166)"
        commentsTitle = "Comments, if any. (#166)"

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
          
        submissionName = "Sample #189"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1G5Gn_KDv4O28QWkUu5ffuy8rOvph2XDD/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#189)'
        rhythmItem = 'Rhythm (#189)'
        tuningItem = 'Guitar tuning (#189)'
        overallItem = 'Overall (#189)'
        image_file_id = "1_n498YvZHukuf_4e0ziJGjBrooIYrnJ1"
        visualizationTitle = "Visualization (#189)"
        visualizationUseful = "Is visualization useful? (#189)"
        commentsTitle = "Comments, if any. (#189)"

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
          
        submissionName = "Sample #190"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1UgvlwrcnX3cUTzK93wBAMZ1M18C4FVVk/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#190)'
        rhythmItem = 'Rhythm (#190)'
        tuningItem = 'Guitar tuning (#190)'
        overallItem = 'Overall (#190)'
        image_file_id = "16LXZxk4pw8SrkyZIYN6U71o_3Vqya5fO"
        visualizationTitle = "Visualization (#190)"
        visualizationUseful = "Is visualization useful? (#190)"
        commentsTitle = "Comments, if any. (#190)"

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
          
        submissionName = "Sample #201"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/10oDU8d68lfAYbswwwTtcA5RpW_9WL3Vi/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#201)'
        rhythmItem = 'Rhythm (#201)'
        tuningItem = 'Guitar tuning (#201)'
        overallItem = 'Overall (#201)'
        image_file_id = "1lhnIxa0e_8QXi_eunEeBGdhvIvAFkNpN"
        visualizationTitle = "Visualization (#201)"
        visualizationUseful = "Is visualization useful? (#201)"
        commentsTitle = "Comments, if any. (#201)"

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
          
        submissionName = "Sample #208"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1XxZTKk5NTscOC-VarVc17Sghkmudqkwt/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#208)'
        rhythmItem = 'Rhythm (#208)'
        tuningItem = 'Guitar tuning (#208)'
        overallItem = 'Overall (#208)'
        image_file_id = "1j1jVheoRny4KeC3Tm2Qtkl--xHOIJ0fc"
        visualizationTitle = "Visualization (#208)"
        visualizationUseful = "Is visualization useful? (#208)"
        commentsTitle = "Comments, if any. (#208)"

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
          
        submissionName = "Sample #232"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1kfHItgK7NM4dAdx3FaW1GnBMorfj-3s-/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#232)'
        rhythmItem = 'Rhythm (#232)'
        tuningItem = 'Guitar tuning (#232)'
        overallItem = 'Overall (#232)'
        image_file_id = "1KXzvtAYft2f5jPsIdNJBPTG4K-dR2ki3"
        visualizationTitle = "Visualization (#232)"
        visualizationUseful = "Is visualization useful? (#232)"
        commentsTitle = "Comments, if any. (#232)"

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
          
        submissionName = "Sample #239"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1fLececkLdUMLKtFj37t-3TKVb9EkotWT/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#239)'
        rhythmItem = 'Rhythm (#239)'
        tuningItem = 'Guitar tuning (#239)'
        overallItem = 'Overall (#239)'
        image_file_id = "1ADOTdY9jdLybfbeLmZguwjjHFYas_eFA"
        visualizationTitle = "Visualization (#239)"
        visualizationUseful = "Is visualization useful? (#239)"
        commentsTitle = "Comments, if any. (#239)"

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
          
        submissionName = "Sample #245"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1dlCfgcn1RSXX8zqmgklTIryBS7wjWcaA/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#245)'
        rhythmItem = 'Rhythm (#245)'
        tuningItem = 'Guitar tuning (#245)'
        overallItem = 'Overall (#245)'
        image_file_id = "18Y66jMm3xkbsnwf3PxnSdlf2XPpE4A89"
        visualizationTitle = "Visualization (#245)"
        visualizationUseful = "Is visualization useful? (#245)"
        commentsTitle = "Comments, if any. (#245)"

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
          
        submissionName = "Sample #250"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1pu50KdbAj_uJcWD3TIN14KLKmLDrM4WZ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#250)'
        rhythmItem = 'Rhythm (#250)'
        tuningItem = 'Guitar tuning (#250)'
        overallItem = 'Overall (#250)'
        image_file_id = "145PleVkwB3sYUauXIQzV_kNrSsvi0fZQ"
        visualizationTitle = "Visualization (#250)"
        visualizationUseful = "Is visualization useful? (#250)"
        commentsTitle = "Comments, if any. (#250)"

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
    