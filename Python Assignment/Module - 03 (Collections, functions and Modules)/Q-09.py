# take two lists and return true if both have at least one common element.

def check_elements(list_1, list_2):
    for item in list_2:
        if item in list_1:
            return True
    return False

list_1 = [1, 2, 3]
list_2 = [3, 4, 5]

if check_elements(list_1, list_2):
    print("lists have common member")
else:
    print("no common members.")
