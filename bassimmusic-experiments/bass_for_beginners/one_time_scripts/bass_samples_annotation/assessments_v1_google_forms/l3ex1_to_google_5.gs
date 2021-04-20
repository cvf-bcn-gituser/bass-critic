
    function createForm() {
       // create Form
      var item = "Lesson 3 - Playing Notes #5 0:01:03 (hh:mm:ss)";
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

       
        submissionName = "Sample #411"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1IT5hl1jS2BFDQj9iewBGDkn4aSbqJPds/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#411)'
        rhythmItem = 'Rhythm (#411)'
        tuningItem = 'Guitar tuning (#411)'
        overallItem = 'Overall (#411)'
        image_file_id = "197lXDl4bUbgFbJLKxLVJ4aFuvi1HUPOI"
        visualizationTitle = "Visualization (#411)"
        visualizationUseful = "Is visualization useful? (#411)"
        commentsTitle = "Comments, if any. (#411)"

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
          
        submissionName = "Sample #418"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1kYS0esdzhnGNmKmHnBww4zI-TcZnakaG/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#418)'
        rhythmItem = 'Rhythm (#418)'
        tuningItem = 'Guitar tuning (#418)'
        overallItem = 'Overall (#418)'
        image_file_id = "1qVG4ACpxY_3vTWRkQJMo7RzWPyXRb2Rr"
        visualizationTitle = "Visualization (#418)"
        visualizationUseful = "Is visualization useful? (#418)"
        commentsTitle = "Comments, if any. (#418)"

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
          
        submissionName = "Sample #419"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1kdRV10SrXPDl-wz33IAp2cKAJ0dK_gqx/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#419)'
        rhythmItem = 'Rhythm (#419)'
        tuningItem = 'Guitar tuning (#419)'
        overallItem = 'Overall (#419)'
        image_file_id = "1TSqhpB9d5fS_YNi8CZerPgZtda9hqB82"
        visualizationTitle = "Visualization (#419)"
        visualizationUseful = "Is visualization useful? (#419)"
        commentsTitle = "Comments, if any. (#419)"

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
          
        submissionName = "Sample #424"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1rg7OndGQSH-HEqvPTCD40BHR6FL0xUV7/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#424)'
        rhythmItem = 'Rhythm (#424)'
        tuningItem = 'Guitar tuning (#424)'
        overallItem = 'Overall (#424)'
        image_file_id = "1KbN7P6X0z10mZe_JxTkl0bPdUa5-xJG6"
        visualizationTitle = "Visualization (#424)"
        visualizationUseful = "Is visualization useful? (#424)"
        commentsTitle = "Comments, if any. (#424)"

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
    