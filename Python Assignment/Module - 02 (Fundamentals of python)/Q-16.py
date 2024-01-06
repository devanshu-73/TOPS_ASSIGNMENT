# Count occurrences of a substring in a string

# Solution : 1

str1 = input("Enter a string: ")
substr = input("Enter a substring: ")

count = 0
index = 0

while index < len(str1):
    index = str1.find(substr, index)
    if index == -1:
        break
    count += 1
    index += 1

print(f"Occurrences of '{substr}' in '{str1}': {count}")

# Solution : 2

# Using Count Method

str1 = input("Enter a string: ")
substr = input("Enter a substring: ")
count = str1.count(substr)
print(f"Occurrences of '{substr}' in '{str1}': {count}")

