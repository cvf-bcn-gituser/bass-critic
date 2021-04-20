
    function createForm() {
       // create Form
      var item = "Lesson 2 - Picking #4 0:02:32 (hh:mm:ss)";
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

       
        submissionName = "Sample #355"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1E3Dehmzp1dTL8QblW4ajSyzOP0wfMZ3U/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#355)'
        rhythmItem = 'Rhythm (#355)'
        tuningItem = 'Guitar tuning (#355)'
        overallItem = 'Overall (#355)'
        image_file_id = "1T1Jw2QfN-YIMyttCKV5qo0SkB27nQ4dT"
        visualizationTitle = "Visualization (#355)"
        visualizationUseful = "Is visualization useful? (#355)"
        commentsTitle = "Comments, if any. (#355)"

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
          
        submissionName = "Sample #364"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1raPB77aTiGY4y5JCsIMVOzzKBtM72pDL/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#364)'
        rhythmItem = 'Rhythm (#364)'
        tuningItem = 'Guitar tuning (#364)'
        overallItem = 'Overall (#364)'
        image_file_id = "1ljDkUUh0gDFM79dsDVm2DqtzhK25WHLb"
        visualizationTitle = "Visualization (#364)"
        visualizationUseful = "Is visualization useful? (#364)"
        commentsTitle = "Comments, if any. (#364)"

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
          
        submissionName = "Sample #370"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1BMuOGHCJZrXWgTMTnYQx9owP5euSgT5D/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#370)'
        rhythmItem = 'Rhythm (#370)'
        tuningItem = 'Guitar tuning (#370)'
        overallItem = 'Overall (#370)'
        image_file_id = "1I3yhH5h0EmP1iZoaXU1kOKQSBVDVmScm"
        visualizationTitle = "Visualization (#370)"
        visualizationUseful = "Is visualization useful? (#370)"
        commentsTitle = "Comments, if any. (#370)"

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
          
        submissionName = "Sample #371"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/14KGF9LtdI8B6J2wchJaVGTg2Z4fTkzpp/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#371)'
        rhythmItem = 'Rhythm (#371)'
        tuningItem = 'Guitar tuning (#371)'
        overallItem = 'Overall (#371)'
        image_file_id = "1ZyvYYYftsqc0JrBLj-ush3Lj7OWxy3eN"
        visualizationTitle = "Visualization (#371)"
        visualizationUseful = "Is visualization useful? (#371)"
        commentsTitle = "Comments, if any. (#371)"

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
          
        submissionName = "Sample #376"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1skja6XpsM_eP9nISqdnaarqq9fqlVaUO/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#376)'
        rhythmItem = 'Rhythm (#376)'
        tuningItem = 'Guitar tuning (#376)'
        overallItem = 'Overall (#376)'
        image_file_id = "1zHjpF10lwHhkjB6K8TypetCtibcgKxnp"
        visualizationTitle = "Visualization (#376)"
        visualizationUseful = "Is visualization useful? (#376)"
        commentsTitle = "Comments, if any. (#376)"

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
          
        submissionName = "Sample #384"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1jjQ4NcxTptbX7FcmdFGNfH3qfIo5dM7r/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#384)'
        rhythmItem = 'Rhythm (#384)'
        tuningItem = 'Guitar tuning (#384)'
        overallItem = 'Overall (#384)'
        image_file_id = "1eLTFP6v0j-ZpcOMKZxB1-cQsDdLHnS6D"
        visualizationTitle = "Visualization (#384)"
        visualizationUseful = "Is visualization useful? (#384)"
        commentsTitle = "Comments, if any. (#384)"

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
          
        submissionName = "Sample #408"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1FYC-uB-rmwwoKXlBdrBX2p5qbw0tYsEq/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#408)'
        rhythmItem = 'Rhythm (#408)'
        tuningItem = 'Guitar tuning (#408)'
        overallItem = 'Overall (#408)'
        image_file_id = "1rJhNYWtkaq_7bSOZ3iYu3m8DuSBAGfx2"
        visualizationTitle = "Visualization (#408)"
        visualizationUseful = "Is visualization useful? (#408)"
        commentsTitle = "Comments, if any. (#408)"

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
          
        submissionName = "Sample #415"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1Bncl94hNEDIXzxD2mQKnwZkkByu-x9y3/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#415)'
        rhythmItem = 'Rhythm (#415)'
        tuningItem = 'Guitar tuning (#415)'
        overallItem = 'Overall (#415)'
        image_file_id = "1YTxJzIljhHpmP78rTzQLxutIRC02yqnd"
        visualizationTitle = "Visualization (#415)"
        visualizationUseful = "Is visualization useful? (#415)"
        commentsTitle = "Comments, if any. (#415)"

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
          
        submissionName = "Sample #421"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1H8GIW8MuyyaaT1ghr-X1RKb6vYUvu_em/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#421)'
        rhythmItem = 'Rhythm (#421)'
        tuningItem = 'Guitar tuning (#421)'
        overallItem = 'Overall (#421)'
        image_file_id = "1rArpb2-7bciFRWhLhYx4woMMEOp_v99q"
        visualizationTitle = "Visualization (#421)"
        visualizationUseful = "Is visualization useful? (#421)"
        commentsTitle = "Comments, if any. (#421)"

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
          
        submissionName = "Sample #422"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1XpyRqKnLNG5alSEKFw7udDAuo0OYI5u2/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#422)'
        rhythmItem = 'Rhythm (#422)'
        tuningItem = 'Guitar tuning (#422)'
        overallItem = 'Overall (#422)'
        image_file_id = "1zlq_U1jPvspHjYc4PdGv1bpNeyPbtiDj"
        visualizationTitle = "Visualization (#422)"
        visualizationUseful = "Is visualization useful? (#422)"
        commentsTitle = "Comments, if any. (#422)"

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
    