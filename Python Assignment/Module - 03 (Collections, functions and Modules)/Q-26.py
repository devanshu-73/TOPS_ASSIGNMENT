# replace last value of tuples in a list.

list_1 = [(1, 2, 3), (4, 5, 6), (7, 8, 9)]
new_value = 10

for i in range(len(list_1)):
    list_1[i] = list_1[i][:-1] + (new_value,)

print("Modified list of tuples:", list_1)
