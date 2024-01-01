# Q-34 check if a given key already exists in a dictionary
# Q-36 Check Presence of a Key in a Dictionary:

my_dict = {'a':1,'b':2,'c':3,'d':4}

key = input("Enter Key To Check (only one char):")

if key in my_dict:
    print(f"The key '{key}' exists in the dictionary.")
else:
    print(f"The key '{key}' does not exist in the dictionary.")
