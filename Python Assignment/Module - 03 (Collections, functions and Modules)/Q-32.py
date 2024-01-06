# sort (ascending and descending) a dictionary by value.

my_dict = {'a': 50, 'b': 30, 'c': 80, 'd': 10}

# Sorting in Ascending Order
asc_dict = dict(sorted(my_dict.items(), key=lambda x: x[1])) # x[1] means getting value of dict

# Sorting in Descending Order
desc_dict = dict(sorted(my_dict.items(), key=lambda x: x[1], reverse=True))

print("Ascending Order:", asc_dict)
print("Descending Order:", desc_dict)

