
    function createForm() {
       // create Form
      var item = "Lesson 2 - Strumming #2 0:02:37 (hh:mm:ss)";
      var description = "\nPlease, use headphones while recording. For this exercise, you will strum an A minor\nchord for 1 measure (one downstroke per beat) and an E Major chord for 1 measure\n(one downstroke per beat), alternating between these 2 chords for 4 measures in tempo.\nWhen you press the record button, you will hear 4 clicks, this is your 4-beat count in.\nOnce the count in has played, you may begin playing.\n\nExample: https://drive.google.com/open?id=1o0utAI7e7E_zudQX6CnFBe8YJRaUHgyW\n";

       var image_file_id = "1ROAx7UzO6MVh_3ryR6TDZyIwYu-cmiCr"

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

       
        submissionName = "Sample #251"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1qXln6MAG6CbaDjaUHWDByH-qVIKM4UW7/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#251)'
        rhythmItem = 'Rhythm (#251)'
        tuningItem = 'Guitar tuning (#251)'
        overallItem = 'Overall (#251)'
        image_file_id = "1zMNJbFYEgoHm9STOcOPErqcR8EbfWgGB"
        visualizationTitle = "Visualization (#251)"
        visualizationUseful = "Is visualization useful? (#251)"
        commentsTitle = "Comments, if any. (#251)"

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
          
        submissionName = "Sample #258"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1zsuqs0t1bM3EA8QzqM9vdFGcDhODoi-f/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#258)'
        rhythmItem = 'Rhythm (#258)'
        tuningItem = 'Guitar tuning (#258)'
        overallItem = 'Overall (#258)'
        image_file_id = "1w1ONQZ1vsoZs-5pzjZ2owbHRTsWKs91x"
        visualizationTitle = "Visualization (#258)"
        visualizationUseful = "Is visualization useful? (#258)"
        commentsTitle = "Comments, if any. (#258)"

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
          
        submissionName = "Sample #267"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1bP9GMNJ3HHDG4m3tqaNHB7VDDWahBqmX/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#267)'
        rhythmItem = 'Rhythm (#267)'
        tuningItem = 'Guitar tuning (#267)'
        overallItem = 'Overall (#267)'
        image_file_id = "1TV9xZGT1eW-iAhQ1AFyCEwyPRgcw1K9m"
        visualizationTitle = "Visualization (#267)"
        visualizationUseful = "Is visualization useful? (#267)"
        commentsTitle = "Comments, if any. (#267)"

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
          
        submissionName = "Sample #276"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/15AsAVm3ll03MTNsnHra3zPaB0b5oQLjr/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#276)'
        rhythmItem = 'Rhythm (#276)'
        tuningItem = 'Guitar tuning (#276)'
        overallItem = 'Overall (#276)'
        image_file_id = "11Z-UtGMbbIe2lb4ICwkUOw9Krz9lBYIm"
        visualizationTitle = "Visualization (#276)"
        visualizationUseful = "Is visualization useful? (#276)"
        commentsTitle = "Comments, if any. (#276)"

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
          
        submissionName = "Sample #277"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/19qANrzcS2ak2YgLHIRCtmC2Q5ZPBw9WE/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#277)'
        rhythmItem = 'Rhythm (#277)'
        tuningItem = 'Guitar tuning (#277)'
        overallItem = 'Overall (#277)'
        image_file_id = "1xRIwWfHdQtFLFTayr8Zvg7DWdhuV2JLX"
        visualizationTitle = "Visualization (#277)"
        visualizationUseful = "Is visualization useful? (#277)"
        commentsTitle = "Comments, if any. (#277)"

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
          
        submissionName = "Sample #278"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1aNuhpWuy9jlOntVmAlRQ7-g0GccmIQVf/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#278)'
        rhythmItem = 'Rhythm (#278)'
        tuningItem = 'Guitar tuning (#278)'
        overallItem = 'Overall (#278)'
        image_file_id = "16dTlu7KvalHf2yx3Pbt9BILrVe_pClHU"
        visualizationTitle = "Visualization (#278)"
        visualizationUseful = "Is visualization useful? (#278)"
        commentsTitle = "Comments, if any. (#278)"

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
          
        submissionName = "Sample #287"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1_cTci66OjdfheWxDqo4T84sk7RwO0aDJ/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#287)'
        rhythmItem = 'Rhythm (#287)'
        tuningItem = 'Guitar tuning (#287)'
        overallItem = 'Overall (#287)'
        image_file_id = "1Q_IrYtM7_GABdM-JC3KDju4hTDwWCxVl"
        visualizationTitle = "Visualization (#287)"
        visualizationUseful = "Is visualization useful? (#287)"
        commentsTitle = "Comments, if any. (#287)"

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
          
        submissionName = "Sample #296"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1qzQk02wHB2EW4-X1KmdtIKzZuVo4KWiK/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#296)'
        rhythmItem = 'Rhythm (#296)'
        tuningItem = 'Guitar tuning (#296)'
        overallItem = 'Overall (#296)'
        image_file_id = "1evxE-4qCyYI5Clu9CXOyp8TUm91Ui3s0"
        visualizationTitle = "Visualization (#296)"
        visualizationUseful = "Is visualization useful? (#296)"
        commentsTitle = "Comments, if any. (#296)"

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
          
        submissionName = "Sample #297"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1y6v2-UlmViwhCqNuL8nd5Hi3v9OeZi1i/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#297)'
        rhythmItem = 'Rhythm (#297)'
        tuningItem = 'Guitar tuning (#297)'
        overallItem = 'Overall (#297)'
        image_file_id = "1EvyIe9cbBRxtjN0b9QqT1XGSIe8tB0m9"
        visualizationTitle = "Visualization (#297)"
        visualizationUseful = "Is visualization useful? (#297)"
        commentsTitle = "Comments, if any. (#297)"

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
          
        submissionName = "Sample #305"
        description = "Listen to this sample: https://drive.google.com/a/upf.edu/file/d/1KRgz4PoFsBMotH2kLeTn_zX7I6Ayxfgd/view?usp=drivesdk\nGive your grades."
        pitchIntonationItem = 'Pitch/Intonation (#305)'
        rhythmItem = 'Rhythm (#305)'
        tuningItem = 'Guitar tuning (#305)'
        overallItem = 'Overall (#305)'
        image_file_id = "1ub9PHW_g4yBzQ5oUeVlFCZaLQNfUSJHZ"
        visualizationTitle = "Visualization (#305)"
        visualizationUseful = "Is visualization useful? (#305)"
        commentsTitle = "Comments, if any. (#305)"

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
    