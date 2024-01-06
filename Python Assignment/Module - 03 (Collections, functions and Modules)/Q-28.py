# remove an empty tuple(s) from a list of tuples.

list_of_tuples = [(),(1, 2), (3, 4), (), (5, 6), (7, 8)]
new_list = []

for i in list_of_tuples:
    if i:
        new_list.append(i)

print(new_list)
