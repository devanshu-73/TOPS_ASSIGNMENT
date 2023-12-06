#  Write a Python Program to insert a string in the middle of a string. 

sentence = input("Enter the main string: ")
short_string = input("Enter the string to be inserted: ")

middle_index = len(sentence) // 2

# Insert the string in the middle
result_string = sentence[:middle_index] + short_string + sentence[middle_index:]

print("Result String:", result_string)
