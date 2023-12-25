# get unique values from a list

list_1 = [1, 2, 2, 3, 4, 4, 5]

unique_list = []

for item in list_1:
    if item not in unique_list:
        unique_list.append(item)

print("List with unique values:", unique_list)


