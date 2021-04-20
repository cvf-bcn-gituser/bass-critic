
    function createForm() {
       // create Form
      var item = "Lesson 1 - Getting Started #5 0:01:40 (hh:mm:ss)";
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

       
        submissionName = "Sample #363"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1f7Fzh_5f0etGhTkfeGxoAou75tAUxKMp/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#363)'
        rhythmItem = 'Rhythm (#363)'
        tuningItem = 'Guitar tuning (#363)'
        overallItem = 'Overall (#363)'
        image_file_id = "16FEOYW6MjJMVa5Twn2vY9rzr4D1PLJtu"
        visualizationTitle = "Visualization (#363)"
        visualizationUseful = "Is visualization useful? (#363)"
        commentsTitle = "Comments, if any. (#363)"

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
          
        submissionName = "Sample #369"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1cNQx2vOJxedmpR1YsWWixrdBFUVpjvys/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#369)'
        rhythmItem = 'Rhythm (#369)'
        tuningItem = 'Guitar tuning (#369)'
        overallItem = 'Overall (#369)'
        image_file_id = "150ZUl7U7OHJKfKm2nR8XXe4VJC5wKQiC"
        visualizationTitle = "Visualization (#369)"
        visualizationUseful = "Is visualization useful? (#369)"
        commentsTitle = "Comments, if any. (#369)"

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
          
        submissionName = "Sample #375"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1B50l6z1XAKETAfSkCO8C6VesUK8DXoyp/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#375)'
        rhythmItem = 'Rhythm (#375)'
        tuningItem = 'Guitar tuning (#375)'
        overallItem = 'Overall (#375)'
        image_file_id = "1hcd1Sszgt4LCMpiw4EbAlh0ShIUomy28"
        visualizationTitle = "Visualization (#375)"
        visualizationUseful = "Is visualization useful? (#375)"
        commentsTitle = "Comments, if any. (#375)"

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
          
        submissionName = "Sample #383"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1ostcHtPwwArXy8DKDlyW9CMwt0Huets3/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#383)'
        rhythmItem = 'Rhythm (#383)'
        tuningItem = 'Guitar tuning (#383)'
        overallItem = 'Overall (#383)'
        image_file_id = "1nDTmf8jFUuakv4t1VGR2r43fBjgMz6Zr"
        visualizationTitle = "Visualization (#383)"
        visualizationUseful = "Is visualization useful? (#383)"
        commentsTitle = "Comments, if any. (#383)"

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
          
        submissionName = "Sample #407"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1FHrLWuh6ZKWAF5rqwbTbgHpUBj7AqInO/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#407)'
        rhythmItem = 'Rhythm (#407)'
        tuningItem = 'Guitar tuning (#407)'
        overallItem = 'Overall (#407)'
        image_file_id = "1bAtMJYkCSs44r22343qcxJ7SbJWc_BSE"
        visualizationTitle = "Visualization (#407)"
        visualizationUseful = "Is visualization useful? (#407)"
        commentsTitle = "Comments, if any. (#407)"

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
          
        submissionName = "Sample #414"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1-jd_oxgyA_AgGPx8Df9-z2545EnAQEEm/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#414)'
        rhythmItem = 'Rhythm (#414)'
        tuningItem = 'Guitar tuning (#414)'
        overallItem = 'Overall (#414)'
        image_file_id = "18k2kEoICF6VbusVIXi_pIV39L1tFr66m"
        visualizationTitle = "Visualization (#414)"
        visualizationUseful = "Is visualization useful? (#414)"
        commentsTitle = "Comments, if any. (#414)"

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
          
        submissionName = "Sample #420"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1pNsG8Xw1mACWdJ2DErDHnCqsG_J7c1EH/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#420)'
        rhythmItem = 'Rhythm (#420)'
        tuningItem = 'Guitar tuning (#420)'
        overallItem = 'Overall (#420)'
        image_file_id = "1sIGe3jNKYwU6q3NT6zlw1SR-3aM0Y8qD"
        visualizationTitle = "Visualization (#420)"
        visualizationUseful = "Is visualization useful? (#420)"
        commentsTitle = "Comments, if any. (#420)"

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
    