# Get a single string from two given strings, separate with a space, and swap the first two characters
string1 = input("Enter the first string: ")
string2 = input("Enter the second string: ")

result = string2[:2] + string1[2:] + " " + string1[:2] + string2[2:]
print("Result:", result)
