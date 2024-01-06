# Write a list to a file:

list_1 = [1, 2, 3, 4, 5]

with open('file.txt', 'w') as file:
    for i in list_1:
        file.write(str(i) + '\n')