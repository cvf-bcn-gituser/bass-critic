
    function createForm() {
       // create Form
      var item = "Lesson 4 - Playing Scales #3 0:09:19 (hh:mm:ss)";
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

       
        submissionName = "Sample #344"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1t9uQ1Vw4vW8OqStEirfsMYJYjQZlLBB_/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#344)'
        rhythmItem = 'Rhythm (#344)'
        tuningItem = 'Guitar tuning (#344)'
        overallItem = 'Overall (#344)'
        image_file_id = "1EqSnWbHGfxhCdoIFjRnfa-Fa5l0Ij2Eq"
        visualizationTitle = "Visualization (#344)"
        visualizationUseful = "Is visualization useful? (#344)"
        commentsTitle = "Comments, if any. (#344)"

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
          
        submissionName = "Sample #351"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/152OG4w6JK5d4_bNzT19D1aMtl-aWN0ha/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#351)'
        rhythmItem = 'Rhythm (#351)'
        tuningItem = 'Guitar tuning (#351)'
        overallItem = 'Overall (#351)'
        image_file_id = "1GrOma0yPSuWRDEaeo3jjLcqomlHTV0IW"
        visualizationTitle = "Visualization (#351)"
        visualizationUseful = "Is visualization useful? (#351)"
        commentsTitle = "Comments, if any. (#351)"

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
          
        submissionName = "Sample #359"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1nfEkSdJl1v_j2s64gOkkQ0Om-qTwzjCD/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#359)'
        rhythmItem = 'Rhythm (#359)'
        tuningItem = 'Guitar tuning (#359)'
        overallItem = 'Overall (#359)'
        image_file_id = "1bw4ZMvR9hVEDvUWn0fHdLlfO-xiSCIQp"
        visualizationTitle = "Visualization (#359)"
        visualizationUseful = "Is visualization useful? (#359)"
        commentsTitle = "Comments, if any. (#359)"

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
          
        submissionName = "Sample #360"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Do2MOV551DBcFxWAfdgQdAPwBS8YrdjQ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#360)'
        rhythmItem = 'Rhythm (#360)'
        tuningItem = 'Guitar tuning (#360)'
        overallItem = 'Overall (#360)'
        image_file_id = "124T3en3X7LNf5YOsGJxc-BNb6k6wemiS"
        visualizationTitle = "Visualization (#360)"
        visualizationUseful = "Is visualization useful? (#360)"
        commentsTitle = "Comments, if any. (#360)"

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
          
        submissionName = "Sample #367"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/10_KKIQqgh4Lu6E4EnbYL-PefRC9QiNnI/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#367)'
        rhythmItem = 'Rhythm (#367)'
        tuningItem = 'Guitar tuning (#367)'
        overallItem = 'Overall (#367)'
        image_file_id = "1UXLAUOB3zmfW0lvbag-sSjUzNBp-Lu0b"
        visualizationTitle = "Visualization (#367)"
        visualizationUseful = "Is visualization useful? (#367)"
        commentsTitle = "Comments, if any. (#367)"

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
          
        submissionName = "Sample #380"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1lA1B4oaJ3BqcEx9GSeNsqi2QZlM7ORh5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#380)'
        rhythmItem = 'Rhythm (#380)'
        tuningItem = 'Guitar tuning (#380)'
        overallItem = 'Overall (#380)'
        image_file_id = "146aaD7PGnQ4_9pBMgwkBrXbN-cgFNq3f"
        visualizationTitle = "Visualization (#380)"
        visualizationUseful = "Is visualization useful? (#380)"
        commentsTitle = "Comments, if any. (#380)"

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
          
        submissionName = "Sample #387"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Hzl8wyqRD8dW-DZIsRUmzose7JLtWCru/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#387)'
        rhythmItem = 'Rhythm (#387)'
        tuningItem = 'Guitar tuning (#387)'
        overallItem = 'Overall (#387)'
        image_file_id = "16W7qQYyP18g7jNt47FDeYkhrPVS1KODF"
        visualizationTitle = "Visualization (#387)"
        visualizationUseful = "Is visualization useful? (#387)"
        commentsTitle = "Comments, if any. (#387)"

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
          
        submissionName = "Sample #388"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1p2ICdnDQ5ywatD4ePkJUVD5P8RQIrYEu/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#388)'
        rhythmItem = 'Rhythm (#388)'
        tuningItem = 'Guitar tuning (#388)'
        overallItem = 'Overall (#388)'
        image_file_id = "1I3QQf54w1CTsdVFgtj_8Nf7O2sPX0rrv"
        visualizationTitle = "Visualization (#388)"
        visualizationUseful = "Is visualization useful? (#388)"
        commentsTitle = "Comments, if any. (#388)"

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
          
        submissionName = "Sample #390"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/16ZeVJZYkvgHu_GjcafIpUK7EpDVQ7HL_/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#390)'
        rhythmItem = 'Rhythm (#390)'
        tuningItem = 'Guitar tuning (#390)'
        overallItem = 'Overall (#390)'
        image_file_id = "1QlRwiXUWiH0_SZQghpRO1UDC3V0g7AC7"
        visualizationTitle = "Visualization (#390)"
        visualizationUseful = "Is visualization useful? (#390)"
        commentsTitle = "Comments, if any. (#390)"

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
          
        submissionName = "Sample #391"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1cM6ugMybIk5ZKK5Jj1MYE8Zk7MAjxq4s/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#391)'
        rhythmItem = 'Rhythm (#391)'
        tuningItem = 'Guitar tuning (#391)'
        overallItem = 'Overall (#391)'
        image_file_id = "1Sydg2Jm8krR8xHfGILb2Q9cun1jg6DDC"
        visualizationTitle = "Visualization (#391)"
        visualizationUseful = "Is visualization useful? (#391)"
        commentsTitle = "Comments, if any. (#391)"

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
    