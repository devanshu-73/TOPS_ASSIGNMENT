# Q-41 combine two dictionary adding values for common keys.
# Sample output: {'a': 400, 'b': 400,’d’: 400, 'c': 300}

d1 = {'a': 100, 'b': 200, 'c': 300}
d2 = {'a': 300, 'b': 200, 'd': 400}

combined_dict = {}

# Add values from d1
for key, value in d1.items():
    if key in combined_dict:
        combined_dict[key] = combined_dict[key] + value
    else:
        combined_dict[key] = value

# Add values from d2
for key, value in d2.items():
    if key in combined_dict:
        combined_dict[key] = combined_dict[key] + value
    else:
        combined_dict[key] = value

print(combined_dict)


# Way 2

# from collections import Counter

# d1 = {'a': 100, 'b': 200, 'c': 300}
# d2 = {'a': 300, 'b': 200, 'd': 400}

# combined_dict = Counter(d1) + Counter(d2)

# print(combined_dict)
