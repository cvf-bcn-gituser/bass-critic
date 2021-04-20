
    function createForm() {
       // create Form
      var item = "Lesson 1 - Getting Started #2 0:02:51 (hh:mm:ss)";
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

       
        submissionName = "Sample #178"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1D7dVWCGsrca8o1lQnf3iu3WPXJag_7ET/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#178)'
        rhythmItem = 'Rhythm (#178)'
        tuningItem = 'Guitar tuning (#178)'
        overallItem = 'Overall (#178)'
        image_file_id = "1kfWtj2pJilB12-8Uonc6Ic9DPM9R9FYe"
        visualizationTitle = "Visualization (#178)"
        visualizationUseful = "Is visualization useful? (#178)"
        commentsTitle = "Comments, if any. (#178)"

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
          
        submissionName = "Sample #179"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Lj84Sr5a_T5nJdI5hjryOmn_VCkVxotF/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#179)'
        rhythmItem = 'Rhythm (#179)'
        tuningItem = 'Guitar tuning (#179)'
        overallItem = 'Overall (#179)'
        image_file_id = "1F3xY2tEF5cwzjJwtOX9KTBdSQvhBTTEm"
        visualizationTitle = "Visualization (#179)"
        visualizationUseful = "Is visualization useful? (#179)"
        commentsTitle = "Comments, if any. (#179)"

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
          
        submissionName = "Sample #180"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1W0E1esLv0OWKGfd3xUJ-doTcPPdnq-Ri/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#180)'
        rhythmItem = 'Rhythm (#180)'
        tuningItem = 'Guitar tuning (#180)'
        overallItem = 'Overall (#180)'
        image_file_id = "1aRzcDXkAuZ920lEUVle9dnlcPCEFNsf5"
        visualizationTitle = "Visualization (#180)"
        visualizationUseful = "Is visualization useful? (#180)"
        commentsTitle = "Comments, if any. (#180)"

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
          
        submissionName = "Sample #181"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1oK2pDrybzFxNmflm-LtnYfNON6bp0qW5/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#181)'
        rhythmItem = 'Rhythm (#181)'
        tuningItem = 'Guitar tuning (#181)'
        overallItem = 'Overall (#181)'
        image_file_id = "1aLLyyvuuZxrgbr0EGf-_7YJuTpIgxddf"
        visualizationTitle = "Visualization (#181)"
        visualizationUseful = "Is visualization useful? (#181)"
        commentsTitle = "Comments, if any. (#181)"

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
          
        submissionName = "Sample #198"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1bG-hoeM3-RInztN4pc6LzvlRL9sjxlKT/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#198)'
        rhythmItem = 'Rhythm (#198)'
        tuningItem = 'Guitar tuning (#198)'
        overallItem = 'Overall (#198)'
        image_file_id = "1LUlBJPwCGdvrETWmhs8u_iA6xet0rg2S"
        visualizationTitle = "Visualization (#198)"
        visualizationUseful = "Is visualization useful? (#198)"
        commentsTitle = "Comments, if any. (#198)"

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
          
        submissionName = "Sample #205"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/15NmcODszTodBOMwI_pzn_kHDbuj0zqYm/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#205)'
        rhythmItem = 'Rhythm (#205)'
        tuningItem = 'Guitar tuning (#205)'
        overallItem = 'Overall (#205)'
        image_file_id = "1ZjGssurtQHH08q9EttwYuGe_o_89HgTs"
        visualizationTitle = "Visualization (#205)"
        visualizationUseful = "Is visualization useful? (#205)"
        commentsTitle = "Comments, if any. (#205)"

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
          
        submissionName = "Sample #229"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/10WojFe7FSLkAGYgnPC81cNjJl_hm9ZDJ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#229)'
        rhythmItem = 'Rhythm (#229)'
        tuningItem = 'Guitar tuning (#229)'
        overallItem = 'Overall (#229)'
        image_file_id = "1jrRI-z2-AA_eJk9oTElI9qxGvQBdzJsH"
        visualizationTitle = "Visualization (#229)"
        visualizationUseful = "Is visualization useful? (#229)"
        commentsTitle = "Comments, if any. (#229)"

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
          
        submissionName = "Sample #235"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1s_1KbzU9vXIrkGOgtVLd_8O9t4CLcI4B/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#235)'
        rhythmItem = 'Rhythm (#235)'
        tuningItem = 'Guitar tuning (#235)'
        overallItem = 'Overall (#235)'
        image_file_id = "1mpTW7MBKxFgmpMlB2qNMHeWYfozcsRrr"
        visualizationTitle = "Visualization (#235)"
        visualizationUseful = "Is visualization useful? (#235)"
        commentsTitle = "Comments, if any. (#235)"

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
          
        submissionName = "Sample #242"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1GR0BpWbvF2O_na2ZyeoXzOrDAWIfP79E/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#242)'
        rhythmItem = 'Rhythm (#242)'
        tuningItem = 'Guitar tuning (#242)'
        overallItem = 'Overall (#242)'
        image_file_id = "1Umku8wHLmsezhdO-X3pAb-SdXnfUyXig"
        visualizationTitle = "Visualization (#242)"
        visualizationUseful = "Is visualization useful? (#242)"
        commentsTitle = "Comments, if any. (#242)"

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
          
        submissionName = "Sample #248"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1m1xBqvrQyqxepnZgMCeenz27GhoPTOQ4/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#248)'
        rhythmItem = 'Rhythm (#248)'
        tuningItem = 'Guitar tuning (#248)'
        overallItem = 'Overall (#248)'
        image_file_id = "1jp-sdX-MCPAAETey7f9TXHKRP5Swi4zo"
        visualizationTitle = "Visualization (#248)"
        visualizationUseful = "Is visualization useful? (#248)"
        commentsTitle = "Comments, if any. (#248)"

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
    