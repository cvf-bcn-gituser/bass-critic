
    function createForm() {
       // create Form
      var item = "Lesson 5 - Playing Chords #1 0:07:10 (hh:mm:ss)";
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

       
        submissionName = "Sample #160"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/13pS8DqrXnnESqFfot02P-6KPQiwVvjmh/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#160)'
        rhythmItem = 'Rhythm (#160)'
        tuningItem = 'Guitar tuning (#160)'
        overallItem = 'Overall (#160)'
        image_file_id = "1uh1NxmPb-hEm4OJsgfbrB1nL3U8R-6bh"
        visualizationTitle = "Visualization (#160)"
        visualizationUseful = "Is visualization useful? (#160)"
        commentsTitle = "Comments, if any. (#160)"

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
          
        submissionName = "Sample #168"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/11uyiIvWloOG7Z7Ciszlz9e0NyGvuVAWj/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#168)'
        rhythmItem = 'Rhythm (#168)'
        tuningItem = 'Guitar tuning (#168)'
        overallItem = 'Overall (#168)'
        image_file_id = "1QRsyxJ8GPPKq8yGDwaLFHwwyyIBAxh1S"
        visualizationTitle = "Visualization (#168)"
        visualizationUseful = "Is visualization useful? (#168)"
        commentsTitle = "Comments, if any. (#168)"

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
          
        submissionName = "Sample #192"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1qOmOhiXivmyRlnSx-W-If4BS7zIBYbtc/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#192)'
        rhythmItem = 'Rhythm (#192)'
        tuningItem = 'Guitar tuning (#192)'
        overallItem = 'Overall (#192)'
        image_file_id = "1TN6SPfD0PXWfVBvXvlRyBCw1xJazfUIX"
        visualizationTitle = "Visualization (#192)"
        visualizationUseful = "Is visualization useful? (#192)"
        commentsTitle = "Comments, if any. (#192)"

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
          
        submissionName = "Sample #203"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1vwzklzFKSuizNDSg9rSRglc0VgvEFM0g/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#203)'
        rhythmItem = 'Rhythm (#203)'
        tuningItem = 'Guitar tuning (#203)'
        overallItem = 'Overall (#203)'
        image_file_id = "1t_yrPJm15QCeTiorG95V5ab_nzIxCWzt"
        visualizationTitle = "Visualization (#203)"
        visualizationUseful = "Is visualization useful? (#203)"
        commentsTitle = "Comments, if any. (#203)"

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
          
        submissionName = "Sample #204"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Yw9IDgPIenvyYJUkCO-COdi2EcRTiAK1/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#204)'
        rhythmItem = 'Rhythm (#204)'
        tuningItem = 'Guitar tuning (#204)'
        overallItem = 'Overall (#204)'
        image_file_id = "1m3eEhHQr8NCc3u7oH3vDH5ioGQ97Zqgm"
        visualizationTitle = "Visualization (#204)"
        visualizationUseful = "Is visualization useful? (#204)"
        commentsTitle = "Comments, if any. (#204)"

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
          
        submissionName = "Sample #210"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1GPM_sauuc_Ikuu0_trh65ZVEXSQo7ZOf/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#210)'
        rhythmItem = 'Rhythm (#210)'
        tuningItem = 'Guitar tuning (#210)'
        overallItem = 'Overall (#210)'
        image_file_id = "1WeAXLrM8eVqlbK9LNiyZOcztlsRLlren"
        visualizationTitle = "Visualization (#210)"
        visualizationUseful = "Is visualization useful? (#210)"
        commentsTitle = "Comments, if any. (#210)"

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
          
        submissionName = "Sample #234"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1tVysdq3l3pHKbPeNeU_YHUHBqLiudrLu/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#234)'
        rhythmItem = 'Rhythm (#234)'
        tuningItem = 'Guitar tuning (#234)'
        overallItem = 'Overall (#234)'
        image_file_id = "1IRtM8sRpqS7oVeC4CRn0znMbCt1NAZmS"
        visualizationTitle = "Visualization (#234)"
        visualizationUseful = "Is visualization useful? (#234)"
        commentsTitle = "Comments, if any. (#234)"

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
          
        submissionName = "Sample #241"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1ZC_bFjtE1TqPMXm-qwoKdPb9unBiErRh/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#241)'
        rhythmItem = 'Rhythm (#241)'
        tuningItem = 'Guitar tuning (#241)'
        overallItem = 'Overall (#241)'
        image_file_id = "1EJJ1UsFuS2Pcmmwd_zeYsRtxKE1yaxj3"
        visualizationTitle = "Visualization (#241)"
        visualizationUseful = "Is visualization useful? (#241)"
        commentsTitle = "Comments, if any. (#241)"

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
          
        submissionName = "Sample #247"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1otdRanSsBnQEtppz5HfE7M_9-dPq6DV0/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#247)'
        rhythmItem = 'Rhythm (#247)'
        tuningItem = 'Guitar tuning (#247)'
        overallItem = 'Overall (#247)'
        image_file_id = "1XykS-si0DW5Xj1IrZgchmI5HfdYMoONa"
        visualizationTitle = "Visualization (#247)"
        visualizationUseful = "Is visualization useful? (#247)"
        commentsTitle = "Comments, if any. (#247)"

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
          
        submissionName = "Sample #253"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/11M2YeBbbA5ypmQYv4Ss92h-UduVv352U/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#253)'
        rhythmItem = 'Rhythm (#253)'
        tuningItem = 'Guitar tuning (#253)'
        overallItem = 'Overall (#253)'
        image_file_id = "1zwi_75DCW4x9bLXy7m0m5SD2oVFR-7cI"
        visualizationTitle = "Visualization (#253)"
        visualizationUseful = "Is visualization useful? (#253)"
        commentsTitle = "Comments, if any. (#253)"

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
    