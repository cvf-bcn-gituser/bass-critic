
    function createForm() {
       // create Form
      var item = "Lesson 4 - Playing Scales #4 0:03:43 (hh:mm:ss)";
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

       
        submissionName = "Sample #392"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1BkoLwvi2l0ByYFtkSS0tmmcqsmMjTi91/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#392)'
        rhythmItem = 'Rhythm (#392)'
        tuningItem = 'Guitar tuning (#392)'
        overallItem = 'Overall (#392)'
        image_file_id = "1o6JSnk7I1N1D_G60j3Kzf2QXBXHma2So"
        visualizationTitle = "Visualization (#392)"
        visualizationUseful = "Is visualization useful? (#392)"
        commentsTitle = "Comments, if any. (#392)"

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
          
        submissionName = "Sample #412"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1_Ibo9wKvt65ksZnpCSYNbYSHZl0gcGGn/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#412)'
        rhythmItem = 'Rhythm (#412)'
        tuningItem = 'Guitar tuning (#412)'
        overallItem = 'Overall (#412)'
        image_file_id = "1Wb7rnQ8cTBNvsYTu9pE05rd-y9M8f3aU"
        visualizationTitle = "Visualization (#412)"
        visualizationUseful = "Is visualization useful? (#412)"
        commentsTitle = "Comments, if any. (#412)"

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
          
        submissionName = "Sample #425"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Ncc5hRIK08g9tDDnHUTEHKmP3AgOihyn/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#425)'
        rhythmItem = 'Rhythm (#425)'
        tuningItem = 'Guitar tuning (#425)'
        overallItem = 'Overall (#425)'
        image_file_id = "18IrdBVI1w0LRonzpodDSCa7rsC935Wr2"
        visualizationTitle = "Visualization (#425)"
        visualizationUseful = "Is visualization useful? (#425)"
        commentsTitle = "Comments, if any. (#425)"

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
          
        submissionName = "Sample #426"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Elu1cWZCz6v2jjR6NOIlXr05n9g6ABbg/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#426)'
        rhythmItem = 'Rhythm (#426)'
        tuningItem = 'Guitar tuning (#426)'
        overallItem = 'Overall (#426)'
        image_file_id = "1tIzIeIGg36-gV9g2-kwAansrS9mYiFzy"
        visualizationTitle = "Visualization (#426)"
        visualizationUseful = "Is visualization useful? (#426)"
        commentsTitle = "Comments, if any. (#426)"

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
    