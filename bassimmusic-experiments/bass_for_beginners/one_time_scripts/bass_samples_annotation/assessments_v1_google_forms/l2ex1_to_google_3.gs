
    function createForm() {
       // create Form
      var item = "Lesson 2 - Picking #3 0:02:32 (hh:mm:ss)";
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

       
        submissionName = "Sample #295"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1TT_0OXuxdwr26Q4dzOp5q5LLxpl1BzJ-/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#295)'
        rhythmItem = 'Rhythm (#295)'
        tuningItem = 'Guitar tuning (#295)'
        overallItem = 'Overall (#295)'
        image_file_id = "17n6qi4kbALvTe1JVqEoQt3j9PNH0YmNt"
        visualizationTitle = "Visualization (#295)"
        visualizationUseful = "Is visualization useful? (#295)"
        commentsTitle = "Comments, if any. (#295)"

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
          
        submissionName = "Sample #303"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1K8fxHMcoyJJq9IiB5SW5FKlX4zJuC_yG/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#303)'
        rhythmItem = 'Rhythm (#303)'
        tuningItem = 'Guitar tuning (#303)'
        overallItem = 'Overall (#303)'
        image_file_id = "1VdCVztK2037bRd8HppIJhsJYhfgIIQ0E"
        visualizationTitle = "Visualization (#303)"
        visualizationUseful = "Is visualization useful? (#303)"
        commentsTitle = "Comments, if any. (#303)"

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
          
        submissionName = "Sample #304"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1ZGj0J2B0j0xu2lEX2cEufVegUWfvSn_F/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#304)'
        rhythmItem = 'Rhythm (#304)'
        tuningItem = 'Guitar tuning (#304)'
        overallItem = 'Overall (#304)'
        image_file_id = "1KeLRTpm_m14_I6zzRdwISdHUdgJ9NKPw"
        visualizationTitle = "Visualization (#304)"
        visualizationUseful = "Is visualization useful? (#304)"
        commentsTitle = "Comments, if any. (#304)"

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
          
        submissionName = "Sample #314"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1mLBINgZCRD_5hA-jayPbsvOxQ4586qA7/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#314)'
        rhythmItem = 'Rhythm (#314)'
        tuningItem = 'Guitar tuning (#314)'
        overallItem = 'Overall (#314)'
        image_file_id = "1WbXKzsg3ls0wVleCLIIc5VtysIPUiw1b"
        visualizationTitle = "Visualization (#314)"
        visualizationUseful = "Is visualization useful? (#314)"
        commentsTitle = "Comments, if any. (#314)"

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
          
        submissionName = "Sample #324"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1bZowW5H5V-bUUWsAWQZM4OJ4RCM8jqsa/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#324)'
        rhythmItem = 'Rhythm (#324)'
        tuningItem = 'Guitar tuning (#324)'
        overallItem = 'Overall (#324)'
        image_file_id = "1SWCXCpFu8JEkvZ5kNhjzrfIE8O5Av4aS"
        visualizationTitle = "Visualization (#324)"
        visualizationUseful = "Is visualization useful? (#324)"
        commentsTitle = "Comments, if any. (#324)"

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
          
        submissionName = "Sample #325"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1OLajJcnGgeZzj3lKJmYPH2eyp2g4YQU_/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#325)'
        rhythmItem = 'Rhythm (#325)'
        tuningItem = 'Guitar tuning (#325)'
        overallItem = 'Overall (#325)'
        image_file_id = "12KyEQZBAOZ2iqQs6c36Qq7SudTGUVbhS"
        visualizationTitle = "Visualization (#325)"
        visualizationUseful = "Is visualization useful? (#325)"
        commentsTitle = "Comments, if any. (#325)"

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
          
        submissionName = "Sample #331"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/10Ymca7OxzqoXm9-JhG1sCS9S6z73UgmR/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#331)'
        rhythmItem = 'Rhythm (#331)'
        tuningItem = 'Guitar tuning (#331)'
        overallItem = 'Overall (#331)'
        image_file_id = "1VCXTlZAiaqTGdNb2AUNoMhDtge1PxY7D"
        visualizationTitle = "Visualization (#331)"
        visualizationUseful = "Is visualization useful? (#331)"
        commentsTitle = "Comments, if any. (#331)"

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
          
        submissionName = "Sample #332"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1w0gr9EBHlRdWF4l4VCSHDakU6PDfmIYu/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#332)'
        rhythmItem = 'Rhythm (#332)'
        tuningItem = 'Guitar tuning (#332)'
        overallItem = 'Overall (#332)'
        image_file_id = "1nQUFX-PjkOthVWKA22Eu3QCEfnZtoKoc"
        visualizationTitle = "Visualization (#332)"
        visualizationUseful = "Is visualization useful? (#332)"
        commentsTitle = "Comments, if any. (#332)"

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
          
        submissionName = "Sample #338"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/17WorYuAnW9Gyx0D64jTm3RMl_DClDq93/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#338)'
        rhythmItem = 'Rhythm (#338)'
        tuningItem = 'Guitar tuning (#338)'
        overallItem = 'Overall (#338)'
        image_file_id = "1LTeYFzrJ4J8wfCD8NAd7EKErjTnpJ1HD"
        visualizationTitle = "Visualization (#338)"
        visualizationUseful = "Is visualization useful? (#338)"
        commentsTitle = "Comments, if any. (#338)"

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
          
        submissionName = "Sample #347"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1L3R_CDeijjAi1lrQ6EQwAi_XOEMlq7OC/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#347)'
        rhythmItem = 'Rhythm (#347)'
        tuningItem = 'Guitar tuning (#347)'
        overallItem = 'Overall (#347)'
        image_file_id = "18262ZBfkfU3ETWTBVHRr_Td1HmHKFdog"
        visualizationTitle = "Visualization (#347)"
        visualizationUseful = "Is visualization useful? (#347)"
        commentsTitle = "Comments, if any. (#347)"

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
    