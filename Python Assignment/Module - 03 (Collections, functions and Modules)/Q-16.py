# check whether a list contains a sub list

main_list = [1, 2, 3, 4, 5, 6, 7]
sub_list = [3, 4]

contains_sublist = False
for i in range(len(main_list) - len(sub_list) + 1):
    match = True
    for j in range(len(sub_list)):
        if main_list[i + j] != sub_list[j]:
            match = False
            break
    if match:
        contains_sublist = True
        break

if contains_sublist:
    print("Main list contains the sub-list.")
else:
    print("Main list does not contain the sub-list.")
