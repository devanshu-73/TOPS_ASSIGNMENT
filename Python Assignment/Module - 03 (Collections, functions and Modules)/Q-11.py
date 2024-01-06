# create fun that takes a list and returns a new list with unique elements of the first list.

list_1 = [1, 2, 2, 3, 4, 4, 5]

def find_unique_list(list_1):
    
    unique_list = []
    for item in list_1:
        if item not in unique_list:
            unique_list.append(item)
    return unique_list

    # =====  or other solution  ==========

    # unique_list = list(set(input_list))  # set() method to remover duplicates
    # return unique_list

result_list = find_unique_list(list_1)
print("List with unique elements:", result_list)
