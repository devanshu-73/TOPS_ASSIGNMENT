# Get the input string from the user
string = input("Enter a string: ")

# Find the indices of 'not' and 'poor'
index_not = string.find('not')
index_poor = string.find('poor')

# Check if 'not' appears before 'poor' and replace the substring if true
if index_not != -1 and index_poor != -1 and index_not < index_poor:
    string = string.replace(string[index_not:index_poor+4], 'good')

# Print the resulting string
print("Resulting string:", string)
