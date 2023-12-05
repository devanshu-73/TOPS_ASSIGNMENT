# Get input string from the user
str1 = input("Enter a string: ")

if len(str1) >= 3:
    if str1.endswith('ing'):
        modified_str = str1 + 'ly'
    else:
        modified_str = str1 + 'ing'
else:
    modified_str = str1

print("Modified string:", modified_str)
