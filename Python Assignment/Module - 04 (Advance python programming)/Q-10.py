# Count the frequency of words in a file:


with open('file.txt', 'r') as file:
    data = file.read()
    words = data.split()
    word_count = {}
    for word in words:
        if word in word_count:
            word_count[word] +=1
        else:  
            word_count[word] = 1  
    print("Word frequency:", word_count)

