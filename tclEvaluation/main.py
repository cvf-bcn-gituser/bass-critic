#!/usr/bin/env python3

print("Pick a song 0: Yellow, 1: Billie Jean")
num= int(input())
if (num ==0):
	exec(open("./0_yellow/check_students_yellow.py").read())
else:
	exec(open("./1_bjean/check_students_billie.py").read())