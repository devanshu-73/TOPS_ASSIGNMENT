# create a dictionary from a string.
# Note: Track the count of the letters from the string.

string = 'w3resource'
count = {}


for char in string:
    if char in count:
        count[char] = count[char] + 1
    else:
        count[char] = 1

print("Dictionary from string:", count)
