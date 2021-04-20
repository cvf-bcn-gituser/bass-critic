
    function createForm() {
       // create Form
      var item = "Lesson 5 - Playing Chords #3 0:06:39 (hh:mm:ss)";
      var description = "\nPlease, use headphones while recording. For this exercise, you will strum each chord above for 1 measure \n(one downstroke per beat) each in tempo. Play the chords in open position, using a simple downstroke pattern\n(one downstroke per beat) and in order working from left to right, top to bottom\n(A Major, A Minor, C Major, D Major, D Minor, E Major, E Minor, F Major, G Major).\nWhen you press the record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\n\nExample: https://drive.google.com/open?id=13BWydHxLqn9ti-OBOi22dv8jS-xXeua9\n";

       var image_file_id = "1POV2pJAND8_haBqcWZc8_NOUcp8TLerJ"

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

       
        submissionName = "Sample #353"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1wN6rJKxhm-ti_GuHklzFbNjjuGkNkGHP/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#353)'
        rhythmItem = 'Rhythm (#353)'
        tuningItem = 'Guitar tuning (#353)'
        overallItem = 'Overall (#353)'
        image_file_id = "1MWjNjjjbG9w8d5SdYIYgE5XzsWbkaPuw"
        visualizationTitle = "Visualization (#353)"
        visualizationUseful = "Is visualization useful? (#353)"
        commentsTitle = "Comments, if any. (#353)"

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
          
        submissionName = "Sample #361"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1qFTAf67asrb6qeIwtWd0kGrXTEmmwNnA/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#361)'
        rhythmItem = 'Rhythm (#361)'
        tuningItem = 'Guitar tuning (#361)'
        overallItem = 'Overall (#361)'
        image_file_id = "1jq069u7O3a4bWXqXY1YJQTp6d_G7-mK0"
        visualizationTitle = "Visualization (#361)"
        visualizationUseful = "Is visualization useful? (#361)"
        commentsTitle = "Comments, if any. (#361)"

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
          
        submissionName = "Sample #362"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Hogocnr7r4WNbZQUAA2sGhtPOM1NqC81/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#362)'
        rhythmItem = 'Rhythm (#362)'
        tuningItem = 'Guitar tuning (#362)'
        overallItem = 'Overall (#362)'
        image_file_id = "10xWqn5LP6-YQxTcL-ItmcbKnddWJtR96"
        visualizationTitle = "Visualization (#362)"
        visualizationUseful = "Is visualization useful? (#362)"
        commentsTitle = "Comments, if any. (#362)"

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
          
        submissionName = "Sample #368"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/13Iw2juSh_Td8ju9o7bE4tqEpSK7uLM79/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#368)'
        rhythmItem = 'Rhythm (#368)'
        tuningItem = 'Guitar tuning (#368)'
        overallItem = 'Overall (#368)'
        image_file_id = "1nw_t1Eh_Z6aJP471fKk4zbuZlxP-D6k9"
        visualizationTitle = "Visualization (#368)"
        visualizationUseful = "Is visualization useful? (#368)"
        commentsTitle = "Comments, if any. (#368)"

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
          
        submissionName = "Sample #381"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1TLWxsqt2t7ixx5-2J3-GWR4B4JgxBlEf/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#381)'
        rhythmItem = 'Rhythm (#381)'
        tuningItem = 'Guitar tuning (#381)'
        overallItem = 'Overall (#381)'
        image_file_id = "1O5QhiNCtN7ppVjR24jFKFI-CQ5XC0CNQ"
        visualizationTitle = "Visualization (#381)"
        visualizationUseful = "Is visualization useful? (#381)"
        commentsTitle = "Comments, if any. (#381)"

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
          
        submissionName = "Sample #382"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/18uIVCNkWVRllcayJN5SlW8FvNAmx1Qrx/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#382)'
        rhythmItem = 'Rhythm (#382)'
        tuningItem = 'Guitar tuning (#382)'
        overallItem = 'Overall (#382)'
        image_file_id = "1KzS9sj_A-fiIBgpgnLdk9GyafkLB2PHk"
        visualizationTitle = "Visualization (#382)"
        visualizationUseful = "Is visualization useful? (#382)"
        commentsTitle = "Comments, if any. (#382)"

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
          
        submissionName = "Sample #389"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1gCbA6LjNVCkzydFv4_mG_3Rp57OCnpeG/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#389)'
        rhythmItem = 'Rhythm (#389)'
        tuningItem = 'Guitar tuning (#389)'
        overallItem = 'Overall (#389)'
        image_file_id = "1PT6Q_dPOl8Y5q7Ls7-7V2Hy7n9o89aaG"
        visualizationTitle = "Visualization (#389)"
        visualizationUseful = "Is visualization useful? (#389)"
        commentsTitle = "Comments, if any. (#389)"

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
          
        submissionName = "Sample #393"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1RteFtusLrtSMSbSfdCbKBIeIJ9IucKFR/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#393)'
        rhythmItem = 'Rhythm (#393)'
        tuningItem = 'Guitar tuning (#393)'
        overallItem = 'Overall (#393)'
        image_file_id = "1KWcoBUMF4knzbpinauLgoW0hCgTbRB5C"
        visualizationTitle = "Visualization (#393)"
        visualizationUseful = "Is visualization useful? (#393)"
        commentsTitle = "Comments, if any. (#393)"

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
          
        submissionName = "Sample #413"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/14V1OSHWrDyCOvc4IZ_tx3_acB2fs_lbj/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#413)'
        rhythmItem = 'Rhythm (#413)'
        tuningItem = 'Guitar tuning (#413)'
        overallItem = 'Overall (#413)'
        image_file_id = "1_qZ_gx9TIwzGySdy_j2ivZ8uPOnzIaWK"
        visualizationTitle = "Visualization (#413)"
        visualizationUseful = "Is visualization useful? (#413)"
        commentsTitle = "Comments, if any. (#413)"

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
          
        submissionName = "Sample #427"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1OR4i5jhuDgDSmKjHpJqr1wkOEbjzB4QY/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#427)'
        rhythmItem = 'Rhythm (#427)'
        tuningItem = 'Guitar tuning (#427)'
        overallItem = 'Overall (#427)'
        image_file_id = "1o8D5AOLyoMm3SNClcBGm3Q4HM-OdiEyb"
        visualizationTitle = "Visualization (#427)"
        visualizationUseful = "Is visualization useful? (#427)"
        commentsTitle = "Comments, if any. (#427)"

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
    