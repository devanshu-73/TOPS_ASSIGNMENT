# print a dictionary where the keys are numbers between 1 and 15.

my_dict = {}

for i in range(1, 16):
    my_dict[i] = chr(ord('A') +(i - 1))

print("Dictionary with keys between 1 and 15:", my_dict)
