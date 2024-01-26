# What is File function in python? 
# What is keywords to create and write file.

# Answer :

# ---> open() function is used to work with files in Python.

# Way 1

file = open('file.txt', 'w')
file.write("Hello Devanshu Full Stack Developer")

# Way 2

with open('file.txt', 'w') as file:
    file.write("Hello Devanshu Full Stack Developer")
    