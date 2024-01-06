# Append text to a file and display the text:

with open('file.txt', 'a') as file:
    file.write('\nLine 2 : Other Text')
    
with open('file.txt', 'r') as file:
    data = file.read()
    print(data)