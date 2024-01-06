# Find the longest words

with open('file.txt', 'r') as file:
    data = file.read()
    words = data.split()
    longest_word = words[0]
    
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word

    print("Longest word:", longest_word)
