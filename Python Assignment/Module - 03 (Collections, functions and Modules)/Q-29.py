# unzip a list of tuples into individual lists.

list_of_tuples = [(1, 'a'), (2, 'b'), (3, 'c')]
list_1,list_2 = zip(*list_of_tuples)  # with * (unpacking operator) we can achive unzip
print("list_1 :", list(list_1),"list_2 :",list(list_2))

