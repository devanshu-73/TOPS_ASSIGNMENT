# check multiple keys exists in a dictionary

my_dict = {'a': 1, 'b': 2, 'c': 3}
keys = ['a', 'b', 'd']

for key in keys:
    if key not in my_dict:
         keys_exist = False
         break

if keys_exist:
    print("All keys exist in the dictionary.")
else:
    print("Some keys do not exist in the dictionary.")
