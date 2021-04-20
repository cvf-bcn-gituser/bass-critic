
    function createForm() {
       // create Form
      var item = "Lesson 5 - Playing Chords #2 0:06:39 (hh:mm:ss)";
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

       
        submissionName = "Sample #263"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1TE-_7LDhdazZsfZNJCUPv92s3eEMfOtm/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#263)'
        rhythmItem = 'Rhythm (#263)'
        tuningItem = 'Guitar tuning (#263)'
        overallItem = 'Overall (#263)'
        image_file_id = "1aNhR2EkT9kjVlAGS_yls8WJz3WiT4vFF"
        visualizationTitle = "Visualization (#263)"
        visualizationUseful = "Is visualization useful? (#263)"
        commentsTitle = "Comments, if any. (#263)"

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
          
        submissionName = "Sample #270"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1FthBNeRafSX85LslJIWsJz20ZrOgTnk8/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#270)'
        rhythmItem = 'Rhythm (#270)'
        tuningItem = 'Guitar tuning (#270)'
        overallItem = 'Overall (#270)'
        image_file_id = "1CkDZ6wcHYuLRuoRuW7c62eKH2n_dhBz-"
        visualizationTitle = "Visualization (#270)"
        visualizationUseful = "Is visualization useful? (#270)"
        commentsTitle = "Comments, if any. (#270)"

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
          
        submissionName = "Sample #271"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1zgUDKupjLncsjl6AKAz-fD1ofiurxHg3/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#271)'
        rhythmItem = 'Rhythm (#271)'
        tuningItem = 'Guitar tuning (#271)'
        overallItem = 'Overall (#271)'
        image_file_id = "10yZ8Dwiqw8PKSIg5DkmxwSgdKHGZXTRM"
        visualizationTitle = "Visualization (#271)"
        visualizationUseful = "Is visualization useful? (#271)"
        commentsTitle = "Comments, if any. (#271)"

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
          
        submissionName = "Sample #281"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1c7Kg1Zyn4sysPds24JOO0WVNc8W-OeSV/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#281)'
        rhythmItem = 'Rhythm (#281)'
        tuningItem = 'Guitar tuning (#281)'
        overallItem = 'Overall (#281)'
        image_file_id = "1RWoV6r48BEngt0iFWGgkax5qwFNmHYtC"
        visualizationTitle = "Visualization (#281)"
        visualizationUseful = "Is visualization useful? (#281)"
        commentsTitle = "Comments, if any. (#281)"

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
          
        submissionName = "Sample #282"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1LrMtT4pt_6HfNzgSomdxvWhlysfMtd_q/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#282)'
        rhythmItem = 'Rhythm (#282)'
        tuningItem = 'Guitar tuning (#282)'
        overallItem = 'Overall (#282)'
        image_file_id = "1tBnShFbvVKgcxBUjuI8wDNSSVZlNyXwa"
        visualizationTitle = "Visualization (#282)"
        visualizationUseful = "Is visualization useful? (#282)"
        commentsTitle = "Comments, if any. (#282)"

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
          
        submissionName = "Sample #291"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1H68chOfqss9a7haVLueDBfTGXvn9Xvbw/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#291)'
        rhythmItem = 'Rhythm (#291)'
        tuningItem = 'Guitar tuning (#291)'
        overallItem = 'Overall (#291)'
        image_file_id = "1fbX4lBvHPtvq0WMB6GRqGGp2h9jAMDaz"
        visualizationTitle = "Visualization (#291)"
        visualizationUseful = "Is visualization useful? (#291)"
        commentsTitle = "Comments, if any. (#291)"

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
          
        submissionName = "Sample #321"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1MXe_US2MagCBSE0zslUM4GLb_dyidTGh/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#321)'
        rhythmItem = 'Rhythm (#321)'
        tuningItem = 'Guitar tuning (#321)'
        overallItem = 'Overall (#321)'
        image_file_id = "1oh1o8G0FLA9g0JS1SpDvdpYHkb107XXR"
        visualizationTitle = "Visualization (#321)"
        visualizationUseful = "Is visualization useful? (#321)"
        commentsTitle = "Comments, if any. (#321)"

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
          
        submissionName = "Sample #336"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1WKk4wv4jf6md2oKElm5rX-Tkfjnqvlu6/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#336)'
        rhythmItem = 'Rhythm (#336)'
        tuningItem = 'Guitar tuning (#336)'
        overallItem = 'Overall (#336)'
        image_file_id = "1f7c4ZxUcan0DPExQfA31iHsouvNfE_l9"
        visualizationTitle = "Visualization (#336)"
        visualizationUseful = "Is visualization useful? (#336)"
        commentsTitle = "Comments, if any. (#336)"

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
          
        submissionName = "Sample #345"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1GzPY9DX5o2uhdGWB9VdZK-Gxk20biBDu/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#345)'
        rhythmItem = 'Rhythm (#345)'
        tuningItem = 'Guitar tuning (#345)'
        overallItem = 'Overall (#345)'
        image_file_id = "1Tl7GgeS3raNwW3heYYQnkUV4DZ53xEP-"
        visualizationTitle = "Visualization (#345)"
        visualizationUseful = "Is visualization useful? (#345)"
        commentsTitle = "Comments, if any. (#345)"

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
          
        submissionName = "Sample #352"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1AawhAb6kNlNbDvFwLeLZC1sxGrcGqiww/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#352)'
        rhythmItem = 'Rhythm (#352)'
        tuningItem = 'Guitar tuning (#352)'
        overallItem = 'Overall (#352)'
        image_file_id = "1pN25zz_6wBJdZ71lH6UZUsnODLtwupk_"
        visualizationTitle = "Visualization (#352)"
        visualizationUseful = "Is visualization useful? (#352)"
        commentsTitle = "Comments, if any. (#352)"

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
    