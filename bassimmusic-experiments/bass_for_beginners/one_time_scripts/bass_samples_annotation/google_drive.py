from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.http import MediaFileUpload
import json

# If modifying these scopes, delete the file token.pickle.
SCOPES = [
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive']

def drive_service():
    """Shows basic usage of the Drive v3 API.
    Prints the names and ids of the first 10 files the user has access to.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server()
        # Save the credentials 1_v2dFDh2G4xIrsc3tAjYG4EwY-CR9JVVG6vFNxDDZPgfor the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    return build('drive', 'v3', credentials=creds)

service = drive_service()

def create_folder(name):
    file_metadata = {
        'name': name,
        'mimeType': 'application/vnd.google-apps.folder'
    }
    file = service.files().create(body=file_metadata, fields='id').execute()
    print('Folder ID: %s' % file.get('id'))
    return file.get('id')


def upload_file(folder_id, localpath, mimetype):
    """
    :param folder_id:
    :param localpath:
    :return: (google file_id, sharable link)
    """

    file_metadata = {
        'name': os.path.basename(localpath),
        'parents': [folder_id]
    }
    media = MediaFileUpload(localpath,
                            mimetype=mimetype,
                            resumable=True)
    file = service.files().create(body=file_metadata,
                                        media_body=media,
                                        fields='id, webViewLink').execute()

    user_permission = {
        'type': 'anyone',
        'role': 'reader'}
    service.permissions().create(
        fileId=file.get('id'),
        body=user_permission,
        fields='id').execute()

    return file.get('id'), file.get('webViewLink')

def upload_mixes_and_pics_to_google_drive(submissions_file):
    with open(submissions_file) as outfile:
        submissions = json.load(outfile)

    for s in submissions:
        mix_google_id, mix_sharerd_path = upload_file(ex_folder_id, s['mix_path'], mimetype='audio/mpeg')
        pic_google_id, pic_sharerd_path = upload_file(pic_folder_id, s['pic_path'], mimetype='image/png')
        s['mix_google_id'] = mix_google_id
        s['mix_sharerd_path'] = mix_sharerd_path
        s['pic_google_id'] = pic_google_id
        s['pic_sharerd_path'] = pic_sharerd_path
        print(s['id'])

    with open(submissions_file, 'w') as outfile:
        json.dump(submissions, outfile, indent=4)

#pic_folder_id = create_folder('GuitarPics')
pic_folder_id = '1tH5Xj1dPija78wEi5chqmNRAkVJCvk6N'
print("pic_folder_id: ", pic_folder_id)

#ex_folder_id = create_folder('GuitarExercises')
ex_folder_id = '1NK1l344Qrds56JXwxiTDH_S05uB_lwb7'
print("ex_folder_id: ", ex_folder_id)

upload_mixes_and_pics_to_google_drive('l1ex1_to_google.json')
upload_mixes_and_pics_to_google_drive('l2ex1_to_google.json')
upload_mixes_and_pics_to_google_drive('l2ex2_to_google.json')
upload_mixes_and_pics_to_google_drive('l3ex1_to_google.json')
upload_mixes_and_pics_to_google_drive('l4ex1_to_google.json')
upload_mixes_and_pics_to_google_drive('l5ex1_to_google.json')