import random

f = open("file.txt", "r")

random_line = random.choice(f.readlines())
print("Random line from file:", random_line)
