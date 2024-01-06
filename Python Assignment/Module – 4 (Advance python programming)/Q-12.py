# Copy the contents of a file to another file:

with open('file.txt', 'r') as file:
    data = file.read()

with open('copy_file.txt', 'w') as copy_file:
    copy_file.write(data)