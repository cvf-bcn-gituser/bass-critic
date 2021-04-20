# fix column names first
#sed -i -E "s/\"Visualization (\(#[[:digit:]]+\))\",\"Visualization (\(#[[:digit:]]+\))\"/\"Wrong \1\",\"Leah \2\"/g" *.csv

import csv
import os
import re
import json

all_submissions = {}

for f in os.listdir(path = "assessments_miguel"):
    if not f.endswith('.csv'):
        continue
    with open('assessments_miguel/' + f) as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            if row['Username'] != "miguel.garciac@upf.edu":
                continue
            submissions = {}
            ids = set()
            for k in row.keys():
                r = re.search("\(#(\d+)\)", k)
                if r is not None:
                    ids.add(r.group(1))
            for id in ids:
                did = '(#' + id + ')'
                entry = submissions.get(id)
                if entry is None:
                    entry = {}
                    submissions[id] = entry
                entry['Timestamp'] = row['Timestamp']
                entry['Username'] = row['Username']
                entry['Pitch'] = row['Pitch/Intonation ' + did]
                entry['Rhythm'] = row['Rhythm ' + did]
                entry['Tuning'] = row['Guitar tuning ' + did]
                entry['Overall'] = row['Overall ' + did]
                entry['Comments'] = row['Comments, if any. ' + did]
                entry['Wrong Visualization'] = row['Wrong ' + did]
                if len(entry['Comments']) > 0:
                    print(id, entry['Comments'])
            for k in submissions.keys():
                entries = all_submissions.get(k)
                if entries is None:
                    entries = []
                    all_submissions[k] = entries
                entries.append(submissions[k])


with open("assessments_miguel.json", 'w') as outfile:
    json.dump(all_submissions, outfile, indent=4)
