# remove duplicates from a list.

list1 = [1, 2, 2, 3, 4, 4, 5]

new_list = []

for i in list1:
    if i not in new_list:
        new_list.append(i)
print("New list after removing duplicates:",new_list)

