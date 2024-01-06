list1 = []

for i in range(5): 
    list1.append(input(f"Enter Word {i+1} : "))
    
max_length = 0

for word in list1:
    # Check if the current word is longer than the current maximum length
    if len(word) > max_length:
        max_length = len(word)
        
print("Length of the longest word:", max_length)

