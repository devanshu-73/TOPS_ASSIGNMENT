# print all unique values in a dictionary.

# Way 1

my_dict = {'a': 100, 'b': 200, 'c': 100, 'd': 300}

unique = []

for value in my_dict.values():
    if value not in unique:
        unique.append(value)

print("Unique Values:", unique)

# Way 2 : using set which remove duplicates..
# my_dict = {'a': 100, 'b': 200, 'c': 100, 'd': 300}

# unique = set(my_dict.values())
# print("Unique Values:", unique)
