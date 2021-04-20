import os
import fileinput

text_to_search = '}%'
replacement_text = '%}'
rootDir = '.'


def process(filename):
    with fileinput.FileInput(filename, inplace=True, backup='.bak') as file:
        for line in file:
            print(line.replace(text_to_search, replacement_text), end='')


for dirName, subdirList, fileList in os.walk(rootDir):
    # print('Found directory: %s' % dirName)
    for fname in fileList:
        name, ext = os.path.splitext(fname)
        if (ext.lower() == '.ly'):
            fullname = os.path.join(dirName, fname)
            print('\t%s "%s"' % (fullname, ext))
            process(fullname)