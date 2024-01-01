# Q-33 :Concatenated Dictionary and Create New One
# Q-39 :merge two Python dictionaries

# Way 1 :

dict1 = {'a': 1, 'b': 2}
dict2 = {'c': 3, 'd': 4}

concatenated_dict = {}
for key, value in dict1.items():
    concatenated_dict[key] = value

for key, value in dict2.items():
    concatenated_dict[key] = value

print("Concatenated Dictionary:", concatenated_dict)

# Way 2 :

# dict1 = {'a': 1, 'b': 2}
# dict2 = {'c': 3, 'd': 4}

# concatenated_dict = {**dict1, **dict2} # Concatenate dicts using ** operator

# print("Concatenated Dictionary:", concatenated_dict)
