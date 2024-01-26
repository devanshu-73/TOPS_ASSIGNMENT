# Count the number of lines in a text file:

with open('file.txt', 'r') as file:
    count = len(file.readlines())
    print("Number of lines:", count)