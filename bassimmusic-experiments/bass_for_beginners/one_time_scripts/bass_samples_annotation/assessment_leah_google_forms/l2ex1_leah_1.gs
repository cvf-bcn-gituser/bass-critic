
    function createForm() {
       // create Form
      var item = "Lesson 2 - Picking #1 0:02:32 (hh:mm:ss)";
      var description = "\n\"For this exercise, you will pick each open string in tempo according to the diagram above.\nUse downstrokes to play each string and play 1 string per beat. When you press he record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\"\n\nExample: https://drive.google.com/open?id=1Zqu3EuhTgw3P5gUx71qfA7--l99_-57t\n";

       var image_file_id = "1PYnuJaL0RhzBP3Tz8oS9aFPMvf07Rod4"

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

       
        submissionName = "Sample #156"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1HpcW5cuqOI_ftVqsxUYRQ_P5Ei6brhUR/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#156)'
        rhythmItem = 'Rhythm (#156)'
        tuningItem = 'Guitar tuning (#156)'
        overallItem = 'Overall (#156)'
        image_file_id = "1jnpxSwfFlg_7aF3jq93-WXCcSO7DlnSN"
        visualizationTitle = "Visualization errors (#156)"
        commentsTitle = "Exercise Comments (#156)"
        visCommentsTitle = "Visualization Comments (#156)"

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
          
        submissionName = "Sample #184"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1hrfxQ-jCyqWIVcvcRdZ4cVAvWQIS4uVV/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#184)'
        rhythmItem = 'Rhythm (#184)'
        tuningItem = 'Guitar tuning (#184)'
        overallItem = 'Overall (#184)'
        image_file_id = "1RYEs_gECZ3mk27FrZcPC19-seIjFE-lO"
        visualizationTitle = "Visualization errors (#184)"
        commentsTitle = "Exercise Comments (#184)"
        visCommentsTitle = "Visualization Comments (#184)"

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
          
        submissionName = "Sample #257"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1tQkDujsvRSgF2KRc3SpDJH6lIYj4PAID/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#257)'
        rhythmItem = 'Rhythm (#257)'
        tuningItem = 'Guitar tuning (#257)'
        overallItem = 'Overall (#257)'
        image_file_id = "1rzkFS7_--gj95JTDBVmSa4rkm5aP9_Ke"
        visualizationTitle = "Visualization errors (#257)"
        commentsTitle = "Exercise Comments (#257)"
        visCommentsTitle = "Visualization Comments (#257)"

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
          
        submissionName = "Sample #266"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1WJb6FPo4u9B7ZyZpZndjShB5oFDqHI_d/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#266)'
        rhythmItem = 'Rhythm (#266)'
        tuningItem = 'Guitar tuning (#266)'
        overallItem = 'Overall (#266)'
        image_file_id = "1WgKy3pQF46IXbpi5WgWVgi9WnAKG2mzu"
        visualizationTitle = "Visualization errors (#266)"
        commentsTitle = "Exercise Comments (#266)"
        visCommentsTitle = "Visualization Comments (#266)"

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
          
        submissionName = "Sample #324"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1bZowW5H5V-bUUWsAWQZM4OJ4RCM8jqsa/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#324)'
        rhythmItem = 'Rhythm (#324)'
        tuningItem = 'Guitar tuning (#324)'
        overallItem = 'Overall (#324)'
        image_file_id = "1SWCXCpFu8JEkvZ5kNhjzrfIE8O5Av4aS"
        visualizationTitle = "Visualization errors (#324)"
        commentsTitle = "Exercise Comments (#324)"
        visCommentsTitle = "Visualization Comments (#324)"

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
          
        submissionName = "Sample #325"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1OLajJcnGgeZzj3lKJmYPH2eyp2g4YQU_/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#325)'
        rhythmItem = 'Rhythm (#325)'
        tuningItem = 'Guitar tuning (#325)'
        overallItem = 'Overall (#325)'
        image_file_id = "12KyEQZBAOZ2iqQs6c36Qq7SudTGUVbhS"
        visualizationTitle = "Visualization errors (#325)"
        commentsTitle = "Exercise Comments (#325)"
        visCommentsTitle = "Visualization Comments (#325)"

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
          
        submissionName = "Sample #338"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/17WorYuAnW9Gyx0D64jTm3RMl_DClDq93/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#338)'
        rhythmItem = 'Rhythm (#338)'
        tuningItem = 'Guitar tuning (#338)'
        overallItem = 'Overall (#338)'
        image_file_id = "1LTeYFzrJ4J8wfCD8NAd7EKErjTnpJ1HD"
        visualizationTitle = "Visualization errors (#338)"
        commentsTitle = "Exercise Comments (#338)"
        visCommentsTitle = "Visualization Comments (#338)"

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
          
        submissionName = "Sample #376"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1skja6XpsM_eP9nISqdnaarqq9fqlVaUO/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#376)'
        rhythmItem = 'Rhythm (#376)'
        tuningItem = 'Guitar tuning (#376)'
        overallItem = 'Overall (#376)'
        image_file_id = "1zHjpF10lwHhkjB6K8TypetCtibcgKxnp"
        visualizationTitle = "Visualization errors (#376)"
        commentsTitle = "Exercise Comments (#376)"
        visCommentsTitle = "Visualization Comments (#376)"

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
          
        submissionName = "Sample #415"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Bncl94hNEDIXzxD2mQKnwZkkByu-x9y3/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#415)'
        rhythmItem = 'Rhythm (#415)'
        tuningItem = 'Guitar tuning (#415)'
        overallItem = 'Overall (#415)'
        image_file_id = "1YTxJzIljhHpmP78rTzQLxutIRC02yqnd"
        visualizationTitle = "Visualization errors (#415)"
        commentsTitle = "Exercise Comments (#415)"
        visCommentsTitle = "Visualization Comments (#415)"

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
          
        submissionName = "Sample #422"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1XpyRqKnLNG5alSEKFw7udDAuo0OYI5u2/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#422)'
        rhythmItem = 'Rhythm (#422)'
        tuningItem = 'Guitar tuning (#422)'
        overallItem = 'Overall (#422)'
        image_file_id = "1zlq_U1jPvspHjYc4PdGv1bpNeyPbtiDj"
        visualizationTitle = "Visualization errors (#422)"
        commentsTitle = "Exercise Comments (#422)"
        visCommentsTitle = "Visualization Comments (#422)"

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
    