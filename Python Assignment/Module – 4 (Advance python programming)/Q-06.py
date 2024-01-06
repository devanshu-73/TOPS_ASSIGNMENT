# Read a file line by line and store it into a list:

list_1 = []

with open('file.txt', 'r') as file:
    for line in file:
        list_1.append(line.strip())

print(list_1)