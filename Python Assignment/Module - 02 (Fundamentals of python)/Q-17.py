# Count the occurrences of each word in a given sentence
sentence = input("Enter a sentence: ")
word_freq = {}

# Split the sentence into words
words = sentence.split(" ")

# Count the occurrences of each word
for word in words:
    # Check if the word is already in the dictionary
    if word in word_freq:
        word_freq[word] += 1
    else:
        word_freq[word] = 1

print("Word frequency:", word_freq)
