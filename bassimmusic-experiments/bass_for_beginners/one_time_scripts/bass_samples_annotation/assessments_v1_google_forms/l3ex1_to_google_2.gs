
    function createForm() {
       // create Form
      var item = "Lesson 3 - Playing Notes #2 0:02:39 (hh:mm:ss)";
      var description = "\nPlease, use headphones while recording. For this exercise, you will play the exercise\nabove in tempo, one note per beat. You may use any picking combination.\nWhen you press the record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\n\nExample: https://drive.google.com/open?id=1VaYAhmtKKN4jfTzJikbVqNS5hq9_YV9T\n";

       var image_file_id = "1eW593Af0VIVh-qDRspjArM0yqpBUAufh"

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

       
        submissionName = "Sample #259"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1TN-YyG9ya6iZp3m94zX_0XTPqz6qtD9P/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#259)'
        rhythmItem = 'Rhythm (#259)'
        tuningItem = 'Guitar tuning (#259)'
        overallItem = 'Overall (#259)'
        image_file_id = "1yMQo_CSDqzTeQBy2bScSRFUBUtCWbTqD"
        visualizationTitle = "Visualization (#259)"
        visualizationUseful = "Is visualization useful? (#259)"
        commentsTitle = "Comments, if any. (#259)"

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
          
        submissionName = "Sample #260"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1g_Rkyn7P1Hu2fghx-Bq42Tm5HGzZaxtq/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#260)'
        rhythmItem = 'Rhythm (#260)'
        tuningItem = 'Guitar tuning (#260)'
        overallItem = 'Overall (#260)'
        image_file_id = "1lQNkzhEXi9WJrJmnhmK1uFpRBP3KYAww"
        visualizationTitle = "Visualization (#260)"
        visualizationUseful = "Is visualization useful? (#260)"
        commentsTitle = "Comments, if any. (#260)"

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
          
        submissionName = "Sample #268"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1jLNU5mBZQKC94HKT-IpLgfmtAkdWWQX7/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#268)'
        rhythmItem = 'Rhythm (#268)'
        tuningItem = 'Guitar tuning (#268)'
        overallItem = 'Overall (#268)'
        image_file_id = "1osX5GxiqZr_SbfITY_T5u_zK_76LpALV"
        visualizationTitle = "Visualization (#268)"
        visualizationUseful = "Is visualization useful? (#268)"
        commentsTitle = "Comments, if any. (#268)"

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
          
        submissionName = "Sample #279"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1wP78hzNzsuFJrnTh7iqGtwRIFkXzMGX6/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#279)'
        rhythmItem = 'Rhythm (#279)'
        tuningItem = 'Guitar tuning (#279)'
        overallItem = 'Overall (#279)'
        image_file_id = "139yAeo_U0j0bLsmgOXs8O6wBqJOWwMLj"
        visualizationTitle = "Visualization (#279)"
        visualizationUseful = "Is visualization useful? (#279)"
        commentsTitle = "Comments, if any. (#279)"

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
          
        submissionName = "Sample #288"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1B5zLHePBuo0psbnQ0YQHIk-XLYvwlYwQ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#288)'
        rhythmItem = 'Rhythm (#288)'
        tuningItem = 'Guitar tuning (#288)'
        overallItem = 'Overall (#288)'
        image_file_id = "1SKOALz0DYgU-95Wc1BAXrY9SGKmfI91U"
        visualizationTitle = "Visualization (#288)"
        visualizationUseful = "Is visualization useful? (#288)"
        commentsTitle = "Comments, if any. (#288)"

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
          
        submissionName = "Sample #289"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1iGlIzYbLeGMoIRsr8abmJzlG5o1B_ncL/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#289)'
        rhythmItem = 'Rhythm (#289)'
        tuningItem = 'Guitar tuning (#289)'
        overallItem = 'Overall (#289)'
        image_file_id = "18VsdjpOrqjJ4pwSgLZUmYOab4NPezSL4"
        visualizationTitle = "Visualization (#289)"
        visualizationUseful = "Is visualization useful? (#289)"
        commentsTitle = "Comments, if any. (#289)"

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
          
        submissionName = "Sample #298"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Z9UZYVL6dJifhi6-BmbaFpbnpzWnrFnA/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#298)'
        rhythmItem = 'Rhythm (#298)'
        tuningItem = 'Guitar tuning (#298)'
        overallItem = 'Overall (#298)'
        image_file_id = "1RVZ91DPVZDKXImOhfto29KkpIZLLSk3V"
        visualizationTitle = "Visualization (#298)"
        visualizationUseful = "Is visualization useful? (#298)"
        commentsTitle = "Comments, if any. (#298)"

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
          
        submissionName = "Sample #299"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1WvIk_1HxBfBLx3Iwi3SifTt0umV0O39q/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#299)'
        rhythmItem = 'Rhythm (#299)'
        tuningItem = 'Guitar tuning (#299)'
        overallItem = 'Overall (#299)'
        image_file_id = "1KmeRmvLT6G2iK5mTNzRSFt1zbUCHC2sT"
        visualizationTitle = "Visualization (#299)"
        visualizationUseful = "Is visualization useful? (#299)"
        commentsTitle = "Comments, if any. (#299)"

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
          
        submissionName = "Sample #308"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1TxNm5cRmy_ZlWhDvD-QiUtfsxHACc0w3/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#308)'
        rhythmItem = 'Rhythm (#308)'
        tuningItem = 'Guitar tuning (#308)'
        overallItem = 'Overall (#308)'
        image_file_id = "14mUneGxY2V6fgJUWbV-NwN5g6NxKEK_4"
        visualizationTitle = "Visualization (#308)"
        visualizationUseful = "Is visualization useful? (#308)"
        commentsTitle = "Comments, if any. (#308)"

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
          
        submissionName = "Sample #309"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1hcUsRLWpWae_0Gk2UXrOsjls3NdARRqC/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#309)'
        rhythmItem = 'Rhythm (#309)'
        tuningItem = 'Guitar tuning (#309)'
        overallItem = 'Overall (#309)'
        image_file_id = "1ZCPkE1XI53quTu78mPDHPg-r8Yndxzwj"
        visualizationTitle = "Visualization (#309)"
        visualizationUseful = "Is visualization useful? (#309)"
        commentsTitle = "Comments, if any. (#309)"

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
    