# combine values in python list of dictionaries.

# Way 1

data = [{'item': 'item1', 'amount': 400},
        {'item': 'item2', 'amount': 300},
        {'item': 'item1', 'amount': 750}]

combined_dict = {}

for i in data:
    if i['item'] in combined_dict:
        combined_dict[i['item']] += i['amount']
    else:
        combined_dict[i['item']] = i['amount']
        
print("Combined Dictionary:", combined_dict)


# Way 2 using counter

# from collections import Counter

# data = [{'item': 'item1', 'amount': 400},
#         {'item': 'item2', 'amount': 300},
#         {'item': 'item1', 'amount': 750}]

# combined_dict = Counter()

# for i in data:
#     combined_dict[i['item']] += i['amount']

# print("Combined Dictionary:", combined_dict)
