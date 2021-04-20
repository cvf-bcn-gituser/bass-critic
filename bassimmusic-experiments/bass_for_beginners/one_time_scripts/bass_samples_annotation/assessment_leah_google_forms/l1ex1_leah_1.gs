
    function createForm() {
       // create Form
      var item = "Lesson 1 - Getting Started #1 0:02:52 (hh:mm:ss)";
      var description = "\n\"For this exercise, you will strum\nan A minor chord for 4 beats (one downstroke per beat) and an E Major chord\nfor 4 beats (one downstroke per beat) in tempo. When you press the record button,\nyou will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\"\n\nExample: https://drive.google.com/open?id=14uwxR8jRfi0qIsz5XQqrmgfUVCaI-wRV\n";

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

       
        submissionName = "Sample #174"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1GPhx6RK484TnlWiUcERhOLxmwHEt-jZz/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#174)'
        rhythmItem = 'Rhythm (#174)'
        tuningItem = 'Guitar tuning (#174)'
        overallItem = 'Overall (#174)'
        image_file_id = "1GOpzxDZA_F6SIGeGoFdb5NF8Sm7bJRw_"
        visualizationTitle = "Visualization errors (#174)"
        commentsTitle = "Exercise Comments (#174)"
        visCommentsTitle = "Visualization Comments (#174)"

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
          
        submissionName = "Sample #175"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1htjKrJM35wV79NqKalIHcWthEjDOfpoO/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#175)'
        rhythmItem = 'Rhythm (#175)'
        tuningItem = 'Guitar tuning (#175)'
        overallItem = 'Overall (#175)'
        image_file_id = "1JxbE10NQ9PJvGMeLqos46_oZ81VqzFY9"
        visualizationTitle = "Visualization errors (#175)"
        commentsTitle = "Exercise Comments (#175)"
        visCommentsTitle = "Visualization Comments (#175)"

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
          
        submissionName = "Sample #179"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Lj84Sr5a_T5nJdI5hjryOmn_VCkVxotF/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#179)'
        rhythmItem = 'Rhythm (#179)'
        tuningItem = 'Guitar tuning (#179)'
        overallItem = 'Overall (#179)'
        image_file_id = "1F3xY2tEF5cwzjJwtOX9KTBdSQvhBTTEm"
        visualizationTitle = "Visualization errors (#179)"
        commentsTitle = "Exercise Comments (#179)"
        visCommentsTitle = "Visualization Comments (#179)"

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
          
        submissionName = "Sample #181"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1oK2pDrybzFxNmflm-LtnYfNON6bp0qW5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#181)'
        rhythmItem = 'Rhythm (#181)'
        tuningItem = 'Guitar tuning (#181)'
        overallItem = 'Overall (#181)'
        image_file_id = "1aLLyyvuuZxrgbr0EGf-_7YJuTpIgxddf"
        visualizationTitle = "Visualization errors (#181)"
        commentsTitle = "Exercise Comments (#181)"
        visCommentsTitle = "Visualization Comments (#181)"

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
          
        submissionName = "Sample #242"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1GR0BpWbvF2O_na2ZyeoXzOrDAWIfP79E/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#242)'
        rhythmItem = 'Rhythm (#242)'
        tuningItem = 'Guitar tuning (#242)'
        overallItem = 'Overall (#242)'
        image_file_id = "1Umku8wHLmsezhdO-X3pAb-SdXnfUyXig"
        visualizationTitle = "Visualization errors (#242)"
        commentsTitle = "Exercise Comments (#242)"
        visCommentsTitle = "Visualization Comments (#242)"

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
          
        submissionName = "Sample #294"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1dZJ1-GHKL4v4XR8JS6JjWDpHz-GUXEZV/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#294)'
        rhythmItem = 'Rhythm (#294)'
        tuningItem = 'Guitar tuning (#294)'
        overallItem = 'Overall (#294)'
        image_file_id = "1-TNmf8xbBqzwqqfhJRPcAxwaYjIUhZOW"
        visualizationTitle = "Visualization errors (#294)"
        commentsTitle = "Exercise Comments (#294)"
        visCommentsTitle = "Visualization Comments (#294)"

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
          
        submissionName = "Sample #301"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1S14hKvXjlqgcTqitfhc4eQ3004gQhgq5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#301)'
        rhythmItem = 'Rhythm (#301)'
        tuningItem = 'Guitar tuning (#301)'
        overallItem = 'Overall (#301)'
        image_file_id = "1Ixl4OOdYUaHF1q6eIUFZB7062ImRjuoL"
        visualizationTitle = "Visualization errors (#301)"
        commentsTitle = "Exercise Comments (#301)"
        visCommentsTitle = "Visualization Comments (#301)"

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
          
        submissionName = "Sample #312"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1_tyG5d3c0oT3EjdYLVzinxbMfe5RulYO/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#312)'
        rhythmItem = 'Rhythm (#312)'
        tuningItem = 'Guitar tuning (#312)'
        overallItem = 'Overall (#312)'
        image_file_id = "1wENqxv5R3LS1UhqD24lXwjWp4lEoh2jI"
        visualizationTitle = "Visualization errors (#312)"
        commentsTitle = "Exercise Comments (#312)"
        visCommentsTitle = "Visualization Comments (#312)"

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
          
        submissionName = "Sample #313"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1PcVfwej38eHebtUJWXgLm7gukY6rJhVE/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#313)'
        rhythmItem = 'Rhythm (#313)'
        tuningItem = 'Guitar tuning (#313)'
        overallItem = 'Overall (#313)'
        image_file_id = "1jgQNw0WBdkb-SPBRxkRS4HyZrb0ctaQ_"
        visualizationTitle = "Visualization errors (#313)"
        commentsTitle = "Exercise Comments (#313)"
        visCommentsTitle = "Visualization Comments (#313)"

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
          
        submissionName = "Sample #323"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/13BiBfO_cPfg-nab2zQWWUkRuYQ2xPJo5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#323)'
        rhythmItem = 'Rhythm (#323)'
        tuningItem = 'Guitar tuning (#323)'
        overallItem = 'Overall (#323)'
        image_file_id = "1ZR8sT_xLZc1XVjtDcuRrLRD8p4vA7THe"
        visualizationTitle = "Visualization errors (#323)"
        commentsTitle = "Exercise Comments (#323)"
        visCommentsTitle = "Visualization Comments (#323)"

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
          
        submissionName = "Sample #354"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1GLztN140zye4mcfCXc0Ii8BgFGCo4yy_/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#354)'
        rhythmItem = 'Rhythm (#354)'
        tuningItem = 'Guitar tuning (#354)'
        overallItem = 'Overall (#354)'
        image_file_id = "1z4WsRV1_tVPMH45jqhha7utcxYwjrX3z"
        visualizationTitle = "Visualization errors (#354)"
        commentsTitle = "Exercise Comments (#354)"
        visCommentsTitle = "Visualization Comments (#354)"

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
          
        submissionName = "Sample #414"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1-jd_oxgyA_AgGPx8Df9-z2545EnAQEEm/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#414)'
        rhythmItem = 'Rhythm (#414)'
        tuningItem = 'Guitar tuning (#414)'
        overallItem = 'Overall (#414)'
        image_file_id = "18k2kEoICF6VbusVIXi_pIV39L1tFr66m"
        visualizationTitle = "Visualization errors (#414)"
        commentsTitle = "Exercise Comments (#414)"
        visCommentsTitle = "Visualization Comments (#414)"

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
    