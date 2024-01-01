# find the highest 3 values in a dictionary

my_dict = {'a': 10, 'b': 50, 'c': 20, 'd': 60 ,'e': 30, 'f': 70, 'g': 40}

sorting = sorted(my_dict.values(), reverse=True) # reverse = True for descending
print("Highest 3 values:", sorting[:3]) # slicing for getting 3 values only
