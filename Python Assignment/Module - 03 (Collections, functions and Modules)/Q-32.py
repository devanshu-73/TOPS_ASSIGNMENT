
my_dict = {'a': 50, 'b': 30, 'c': 80, 'd': 10}

sorted_items_asc = list(my_dict.items())
sorted_items_asc.sort(key=lambda x: x[1]) # x[1] means getting value of dict

sorted_items_desc = list(my_dict.items())
sorted_items_desc.sort(key=lambda x: x[1], reverse=True)

print("Ascending Order:",dict(sorted_items_asc))
print("\nDescending Order:",dict(sorted_items_desc))



# my_dict = {'a': 50, 'b': 30, 'c': 80, 'd': 10}

# # ascending order
# sorted_dict_asc = dict(sorted(my_dict.items(), key=lambda item: item[1]))

# # descending order
# sorted_dict_desc = dict(sorted(my_dict.items(), key=lambda item: item[1], reverse=True))

# print("Ascending Order:", sorted_dict_asc)
# print("Descending Order:", sorted_dict_desc)
