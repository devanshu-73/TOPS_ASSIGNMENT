
my_dict = {'a': 50, 'b': 30, 'c': 80, 'd': 10}

asc_list = list(my_dict.items())
asc_list.sort(key=lambda x: x[1]) # x[1] means getting value of dict

desc_list = list(my_dict.items())
desc_list.sort(key=lambda x: x[1], reverse=True)

print("Ascending Order:",dict(asc_list))
print("Descending Order:",dict(desc_list))

