# check whether a list contains a sub list

main_list = [1, 2, 3, 4, 5, 6, 7, 8]
sublist = [3, 4, 5]

for item in sublist:
    if item not in main_list:
        print("list does not contain the sublist.")
        break
else:
    print("list contains the sublist.")
