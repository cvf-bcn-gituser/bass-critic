import json

with open("submissions.json") as js:
    all_submissions = json.load(js)
with open("assessments_v1.json") as js:
    assessments = json.load(js)
with open("assessments_leah.json") as js:
    leahs = json.load(js)

dataset = []
for s in all_submissions:
    sid = str(s['id'])
    if sid in assessments:
        ass = assessments[sid][0]
        s['Grades'] = [ass]
        if ass['Pitch'] == '4' and ass['Overall'] == '4' and ass['Tuning'] == '4':
            dataset.append(s)

all_latencies = {}
latency_aware = [
   'l1ex1_to_google.json',
   'l2ex1_to_google.json',
   'l2ex2_to_google.json',
   'l3ex1_to_google.json',
   'l4ex1_to_google.json',
   'l5ex1_to_google.json'
]

for f in latency_aware:
    with open(f) as lf:
        for s in json.load(lf):
            all_latencies[s['id']] = s['latency']

for i in dataset:
    i['latency'] = all_latencies[i['id']]


with open("chroma_pattern_dataset.json", "w") as af:
    json.dump(dataset, af, indent=4)
print(len(dataset))