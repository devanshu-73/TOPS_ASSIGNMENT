# create and display all combinations of letters,selecting each letter from a different key in a dictionary.
# Expected Output: ac ad bc bd

data = {'1': ['a', 'b'], '2': ['c', 'd']}

combinations = []

for combo1 in data['1']:
    # print(combo1)
    for combo2 in data['2']:
        # print(combo2)
        combinations.append(combo1 + combo2) # concate ex: a + c = ac

print("Combinations:", combinations)
