# Read first n lines of a file:

n = int(input("Enter How many lines do u want (only numbers) ? : ")) 

with open('file.txt', 'r') as file:
    print(file.readlines()[:n])

