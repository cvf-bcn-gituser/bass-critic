# Scripts and datafiles for processing manual assessment of the guitar exercisest

Basic workflow:
 * Download audio samples and metadata from MusicCritic: download.py
    * submissions.json - exercises metadata
    * submissions - exercises audio
    * backing_tracks - backing tracks
    * backing_tracks.json - backing tracks metadata
 * Calculate latency for sessions: latency.py
    * session_latencies.json
 * Prepare data (visualization, mixes, basic statistics)
   for questionary form generation: prepare_for_annotations.py
    * mixes
    * pics
 * Results:
    * l1ex1_to_google.json
    * l2ex1_to_google.json
    * l2ex2_to_google.json
    * l3ex1_to_google.json
    * l4ex1_to_google.json
    * l5ex1_to_google.json
  * Subset of the results for Leah:
    * l1ex1_leah.json
    * l2ex1_leah.json
    * l2ex2_leah.json
    * l3ex1_leah.json
    * l4ex1_leah.json
    * l5ex1_leah.json
  * Upload files to google drive: google_drive.py        
     * credentials.json - is required to connect to google drive
  * reupload_images.py -for occasional generated images reupload
  * Generate google scripts:
     * gen_google_script_v1.py -> assessments_v1_google_forms
     * gen_google_script_leah.py -> assessment_leah_google_forms
  * Scripts are manually executed, e.g. from Google Form's Script page.
  * csv results must be manually downloaded:
     * assessments_v1
  * process csv results: process_assessment_csvs.py
     * assessments_v1.json - seva's initial assessment
     * assessments_leah.json - Leah's assessment (for selected subset)
  * analyse assessment in json file: analyse_assessments.py
     * report.txt
 
Also, files with chroma patterns model should be copied for visualizations generations,
e.g.:
   * ind_pdf.pkl
   * solo_picking15_pdf.pkl
   * solo_picking_pdf.pkl

token.pickle will be generated by google after the first login to the google drive.
