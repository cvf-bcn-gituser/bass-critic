
    function createForm() {
       // create Form
      var item = "Lesson 4 - Playing Scales #1 0:09:19 (hh:mm:ss)";
      var description = "\n\"For this exercise, you will play 2 octaves of\nthe the G chromatic scale in tempo, one note per beat. You may use any picking \ncombination. When you press the record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\"\n\nExample: https://drive.google.com/open?id=19iFONz7lrGVfjQrPhI82aZga_c_N-mYJ\n";

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

       
        submissionName = "Sample #159"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/170Ciupu4TDhejhkmS6JXXWXC9Z8m8vqa/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#159)'
        rhythmItem = 'Rhythm (#159)'
        tuningItem = 'Guitar tuning (#159)'
        overallItem = 'Overall (#159)'
        image_file_id = "1_wyIyoVzg7MC6hsJYfEY-JkhDz8S-Ow5"
        visualizationTitle = "Visualization errors (#159)"
        commentsTitle = "Exercise Comments (#159)"
        visCommentsTitle = "Visualization Comments (#159)"

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
          
        submissionName = "Sample #191"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/18FihtZKyCGoxDnKg3t0QOZd_iqS6VBAe/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#191)'
        rhythmItem = 'Rhythm (#191)'
        tuningItem = 'Guitar tuning (#191)'
        overallItem = 'Overall (#191)'
        image_file_id = "1XRRtIfgRy8My5zjCXIJGnoYAxKOOYa2D"
        visualizationTitle = "Visualization errors (#191)"
        commentsTitle = "Exercise Comments (#191)"
        visCommentsTitle = "Visualization Comments (#191)"

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
          
        submissionName = "Sample #233"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1ijOuwhFc6hsE900fFkbjV5ldiXx12wiX/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#233)'
        rhythmItem = 'Rhythm (#233)'
        tuningItem = 'Guitar tuning (#233)'
        overallItem = 'Overall (#233)'
        image_file_id = "1dvg-ob5CE_U4kkiMRIz_W9A8iQaSl-vy"
        visualizationTitle = "Visualization errors (#233)"
        commentsTitle = "Exercise Comments (#233)"
        visCommentsTitle = "Visualization Comments (#233)"

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
          
        submissionName = "Sample #249"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1R35UjNZU7RJvBa378a915xuhOqsfZLya/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#249)'
        rhythmItem = 'Rhythm (#249)'
        tuningItem = 'Guitar tuning (#249)'
        overallItem = 'Overall (#249)'
        image_file_id = "1QL-_pswpOThlU-MsWTjTRmCakdR_GJg3"
        visualizationTitle = "Visualization errors (#249)"
        commentsTitle = "Exercise Comments (#249)"
        visCommentsTitle = "Visualization Comments (#249)"

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
          
        submissionName = "Sample #311"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1nhagZY9fb4DHpNa1pe7pyMd1nNELWJPQ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#311)'
        rhythmItem = 'Rhythm (#311)'
        tuningItem = 'Guitar tuning (#311)'
        overallItem = 'Overall (#311)'
        image_file_id = "1654L8UpdCF67-iqQ0SeMrE6nh2KOiAv5"
        visualizationTitle = "Visualization errors (#311)"
        commentsTitle = "Exercise Comments (#311)"
        visCommentsTitle = "Visualization Comments (#311)"

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
          
        submissionName = "Sample #344"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1t9uQ1Vw4vW8OqStEirfsMYJYjQZlLBB_/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#344)'
        rhythmItem = 'Rhythm (#344)'
        tuningItem = 'Guitar tuning (#344)'
        overallItem = 'Overall (#344)'
        image_file_id = "1EqSnWbHGfxhCdoIFjRnfa-Fa5l0Ij2Eq"
        visualizationTitle = "Visualization errors (#344)"
        commentsTitle = "Exercise Comments (#344)"
        visCommentsTitle = "Visualization Comments (#344)"

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
          
        submissionName = "Sample #359"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1nfEkSdJl1v_j2s64gOkkQ0Om-qTwzjCD/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#359)'
        rhythmItem = 'Rhythm (#359)'
        tuningItem = 'Guitar tuning (#359)'
        overallItem = 'Overall (#359)'
        image_file_id = "1bw4ZMvR9hVEDvUWn0fHdLlfO-xiSCIQp"
        visualizationTitle = "Visualization errors (#359)"
        commentsTitle = "Exercise Comments (#359)"
        visCommentsTitle = "Visualization Comments (#359)"

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
          
        submissionName = "Sample #380"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1lA1B4oaJ3BqcEx9GSeNsqi2QZlM7ORh5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#380)'
        rhythmItem = 'Rhythm (#380)'
        tuningItem = 'Guitar tuning (#380)'
        overallItem = 'Overall (#380)'
        image_file_id = "146aaD7PGnQ4_9pBMgwkBrXbN-cgFNq3f"
        visualizationTitle = "Visualization errors (#380)"
        commentsTitle = "Exercise Comments (#380)"
        visCommentsTitle = "Visualization Comments (#380)"

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
          
        submissionName = "Sample #388"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1p2ICdnDQ5ywatD4ePkJUVD5P8RQIrYEu/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#388)'
        rhythmItem = 'Rhythm (#388)'
        tuningItem = 'Guitar tuning (#388)'
        overallItem = 'Overall (#388)'
        image_file_id = "1I3QQf54w1CTsdVFgtj_8Nf7O2sPX0rrv"
        visualizationTitle = "Visualization errors (#388)"
        commentsTitle = "Exercise Comments (#388)"
        visCommentsTitle = "Visualization Comments (#388)"

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
          
        submissionName = "Sample #426"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Elu1cWZCz6v2jjR6NOIlXr05n9g6ABbg/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#426)'
        rhythmItem = 'Rhythm (#426)'
        tuningItem = 'Guitar tuning (#426)'
        overallItem = 'Overall (#426)'
        image_file_id = "1tIzIeIGg36-gV9g2-kwAansrS9mYiFzy"
        visualizationTitle = "Visualization errors (#426)"
        commentsTitle = "Exercise Comments (#426)"
        visCommentsTitle = "Visualization Comments (#426)"

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
    