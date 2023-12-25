# find the repeated items of a tuple.

tuple_1 = (1, 1, 2, 3, 4, 4, 5)
repeated_items = []
unique = []

for item in tuple_1:
    if item in unique:
        repeated_items.append(item)
    else:
        unique.append(item)

print("Repeated items in the tuple:", repeated_items)
# print(" :", unique)
