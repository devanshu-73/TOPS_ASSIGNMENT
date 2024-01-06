# Get a string made of the first 2 and the last 2 chars from a given string
string = input("Enter a string: ")

if len(string) < 2:
    result = "Empty string"
else:
    result = string[:2] + string[-2:]

print("Result:", result)
