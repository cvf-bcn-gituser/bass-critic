
    function createForm() {
       // create Form
      var item = "Lesson 2 - Picking #2 0:02:32 (hh:mm:ss)";
      var description = "\nFor this exercise, you will pick each open string in tempo according to the diagram above.\nUse downstrokes to play each string and play 1 string per beat. When you press he record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\n\nExample: https://drive.google.com/open?id=1Zqu3EuhTgw3P5gUx71qfA7--l99_-57t\n";

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

       
        submissionName = "Sample #236"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1SYd3spPJZh_efUe7rOLHZNYRDbQAnfed/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#236)'
        rhythmItem = 'Rhythm (#236)'
        tuningItem = 'Guitar tuning (#236)'
        overallItem = 'Overall (#236)'
        image_file_id = "1ne7LpaG_4u-FLB9WyDQ7_Rph6jkHIlSi"
        visualizationTitle = "Visualization (#236)"
        visualizationUseful = "Is visualization useful? (#236)"
        commentsTitle = "Comments, if any. (#236)"

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
          
        submissionName = "Sample #243"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Pt-qvUwW5YzhXmTqStI03AILzLWjHwGj/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#243)'
        rhythmItem = 'Rhythm (#243)'
        tuningItem = 'Guitar tuning (#243)'
        overallItem = 'Overall (#243)'
        image_file_id = "18OlmHjG3x4Kbf2UHtv6nW-o__QM1_xNq"
        visualizationTitle = "Visualization (#243)"
        visualizationUseful = "Is visualization useful? (#243)"
        commentsTitle = "Comments, if any. (#243)"

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
          
        submissionName = "Sample #252"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1xHmPpKDyrpzwmQytm7HHvjKNA9-IR1px/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#252)'
        rhythmItem = 'Rhythm (#252)'
        tuningItem = 'Guitar tuning (#252)'
        overallItem = 'Overall (#252)'
        image_file_id = "1PRrNOA30YGsCHHCMJz1rrXdCRsKEFDf3"
        visualizationTitle = "Visualization (#252)"
        visualizationUseful = "Is visualization useful? (#252)"
        commentsTitle = "Comments, if any. (#252)"

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
          
        submissionName = "Sample #256"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Pbq4-_oljeOzvLH7Q1l7TwpfY3SAU6UM/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#256)'
        rhythmItem = 'Rhythm (#256)'
        tuningItem = 'Guitar tuning (#256)'
        overallItem = 'Overall (#256)'
        image_file_id = "1zRFiQAAKT7tEwscCs7-GcoDy_Qh6miHV"
        visualizationTitle = "Visualization (#256)"
        visualizationUseful = "Is visualization useful? (#256)"
        commentsTitle = "Comments, if any. (#256)"

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
          
        submissionName = "Sample #257"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1tQkDujsvRSgF2KRc3SpDJH6lIYj4PAID/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#257)'
        rhythmItem = 'Rhythm (#257)'
        tuningItem = 'Guitar tuning (#257)'
        overallItem = 'Overall (#257)'
        image_file_id = "1rzkFS7_--gj95JTDBVmSa4rkm5aP9_Ke"
        visualizationTitle = "Visualization (#257)"
        visualizationUseful = "Is visualization useful? (#257)"
        commentsTitle = "Comments, if any. (#257)"

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
          
        submissionName = "Sample #266"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1WJb6FPo4u9B7ZyZpZndjShB5oFDqHI_d/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#266)'
        rhythmItem = 'Rhythm (#266)'
        tuningItem = 'Guitar tuning (#266)'
        overallItem = 'Overall (#266)'
        image_file_id = "1WgKy3pQF46IXbpi5WgWVgi9WnAKG2mzu"
        visualizationTitle = "Visualization (#266)"
        visualizationUseful = "Is visualization useful? (#266)"
        commentsTitle = "Comments, if any. (#266)"

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
          
        submissionName = "Sample #274"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1S7UPy9ESYn0E-AcCXX-iKGm3P_r-Si_o/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#274)'
        rhythmItem = 'Rhythm (#274)'
        tuningItem = 'Guitar tuning (#274)'
        overallItem = 'Overall (#274)'
        image_file_id = "1GRt4V8kE76oH5g2B5E0I6_kkfbLyBUSE"
        visualizationTitle = "Visualization (#274)"
        visualizationUseful = "Is visualization useful? (#274)"
        commentsTitle = "Comments, if any. (#274)"

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
          
        submissionName = "Sample #275"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1miGcxN6eIhb9hC0O7hu8JRdmV_X4OsnR/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#275)'
        rhythmItem = 'Rhythm (#275)'
        tuningItem = 'Guitar tuning (#275)'
        overallItem = 'Overall (#275)'
        image_file_id = "14ZZ0wdUhFKAey5EmH93LcIKmtcBDkGsx"
        visualizationTitle = "Visualization (#275)"
        visualizationUseful = "Is visualization useful? (#275)"
        commentsTitle = "Comments, if any. (#275)"

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
          
        submissionName = "Sample #285"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/11AQVMEhBaOfM6R02jpaknTi5OZeM6td7/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#285)'
        rhythmItem = 'Rhythm (#285)'
        tuningItem = 'Guitar tuning (#285)'
        overallItem = 'Overall (#285)'
        image_file_id = "1vC3WmG24uIbOeyNL-bqC2FGaHzlwl_kE"
        visualizationTitle = "Visualization (#285)"
        visualizationUseful = "Is visualization useful? (#285)"
        commentsTitle = "Comments, if any. (#285)"

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
          
        submissionName = "Sample #286"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1gYdh8KVu0i6Ca8DvrS7pKvmf_6MHiuk4/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#286)'
        rhythmItem = 'Rhythm (#286)'
        tuningItem = 'Guitar tuning (#286)'
        overallItem = 'Overall (#286)'
        image_file_id = "1HWtgatfvUxBGDBgNwUwK4FDyPBdp3FhG"
        visualizationTitle = "Visualization (#286)"
        visualizationUseful = "Is visualization useful? (#286)"
        commentsTitle = "Comments, if any. (#286)"

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
    