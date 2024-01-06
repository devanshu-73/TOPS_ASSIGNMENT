string = input("Enter a string: ")
char_freq = {}

for char in string:
    if char in char_freq:
        char_freq[char] += 1
    else:
        char_freq[char] = 1

print("Character frequency:", char_freq)
