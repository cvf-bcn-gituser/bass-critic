
    function createForm() {
       // create Form
      var item = "Lesson 5 - Playing Chords #1 0:08:18 (hh:mm:ss)";
      var description = "\n\"For this exercise, you will strum each chord above for 1 measure \n(one downstroke per beat) each in tempo. Play the chords in open position, using a simple downstroke pattern\n(one downstroke per beat) and in order working from left to right, top to bottom\n(A Major, A Minor, C Major, D Major, D Minor, E Major, E Minor, F Major, G Major).\nWhen you press the record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\"\n\nExample: https://drive.google.com/open?id=13BWydHxLqn9ti-OBOi22dv8jS-xXeua9\n";

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

       
        submissionName = "Sample #210"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1GPM_sauuc_Ikuu0_trh65ZVEXSQo7ZOf/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#210)'
        rhythmItem = 'Rhythm (#210)'
        tuningItem = 'Guitar tuning (#210)'
        overallItem = 'Overall (#210)'
        image_file_id = "1WeAXLrM8eVqlbK9LNiyZOcztlsRLlren"
        visualizationTitle = "Visualization errors (#210)"
        commentsTitle = "Exercise Comments (#210)"
        visCommentsTitle = "Visualization Comments (#210)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #234"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1tVysdq3l3pHKbPeNeU_YHUHBqLiudrLu/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#234)'
        rhythmItem = 'Rhythm (#234)'
        tuningItem = 'Guitar tuning (#234)'
        overallItem = 'Overall (#234)'
        image_file_id = "1IRtM8sRpqS7oVeC4CRn0znMbCt1NAZmS"
        visualizationTitle = "Visualization errors (#234)"
        commentsTitle = "Exercise Comments (#234)"
        visCommentsTitle = "Visualization Comments (#234)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #241"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1ZC_bFjtE1TqPMXm-qwoKdPb9unBiErRh/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#241)'
        rhythmItem = 'Rhythm (#241)'
        tuningItem = 'Guitar tuning (#241)'
        overallItem = 'Overall (#241)'
        image_file_id = "1EJJ1UsFuS2Pcmmwd_zeYsRtxKE1yaxj3"
        visualizationTitle = "Visualization errors (#241)"
        commentsTitle = "Exercise Comments (#241)"
        visCommentsTitle = "Visualization Comments (#241)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
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
        visualizationTitle = "Visualization errors (#270)"
        commentsTitle = "Exercise Comments (#270)"
        visCommentsTitle = "Visualization Comments (#270)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
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
        visualizationTitle = "Visualization errors (#281)"
        commentsTitle = "Exercise Comments (#281)"
        visCommentsTitle = "Visualization Comments (#281)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
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
        visualizationTitle = "Visualization errors (#321)"
        commentsTitle = "Exercise Comments (#321)"
        visCommentsTitle = "Visualization Comments (#321)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
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
        visualizationTitle = "Visualization errors (#345)"
        commentsTitle = "Exercise Comments (#345)"
        visCommentsTitle = "Visualization Comments (#345)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
        submissionName = "Sample #353"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1wN6rJKxhm-ti_GuHklzFbNjjuGkNkGHP/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#353)'
        rhythmItem = 'Rhythm (#353)'
        tuningItem = 'Guitar tuning (#353)'
        overallItem = 'Overall (#353)'
        image_file_id = "1MWjNjjjbG9w8d5SdYIYgE5XzsWbkaPuw"
        visualizationTitle = "Visualization errors (#353)"
        commentsTitle = "Exercise Comments (#353)"
        visCommentsTitle = "Visualization Comments (#353)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
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
        visualizationTitle = "Visualization errors (#361)"
        commentsTitle = "Exercise Comments (#361)"
        visCommentsTitle = "Visualization Comments (#361)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
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
        visualizationTitle = "Visualization errors (#362)"
        commentsTitle = "Exercise Comments (#362)"
        visCommentsTitle = "Visualization Comments (#362)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
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
        visualizationTitle = "Visualization errors (#381)"
        commentsTitle = "Exercise Comments (#381)"
        visCommentsTitle = "Visualization Comments (#381)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
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
        visualizationTitle = "Visualization errors (#413)"
        commentsTitle = "Exercise Comments (#413)"
        visCommentsTitle = "Visualization Comments (#413)"

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
        form.addParagraphTextItem().setTitle(commentsTitle);

        file = DriveApp.getFileById(image_file_id);
        form.addImageItem()
          .setHelpText('Please, check the visualization below.') // The help text is the image description
          .setImage(file);
        form.addCheckboxItem().setTitle(visualizationTitle).setChoiceValues([
            "attack: false positive",
            "attack: not detected (false negative)",
            "attack: minor deviation is penalized too much",
            "missing note is not penalized",
            "excessive note is not penalized",
            "octave error",
            "pitch/chord colorization: error unrecognized",
            "pitch/chord colorization: false error",
            "pitch/chord colorization: noisy sound is not penalized",
            "pitch/chord colorization: unaccountable penalization",
            "latency detection error",
            "other",
        ]);
        form.addParagraphTextItem().setTitle(visCommentsTitle);
        //item = form.addMultipleChoiceItem();
        //item.setChoices([
        //      item.createChoice("Skip the rest and submit", FormApp.PageNavigationType.SUBMIT)
        //   ])
          
    }
    