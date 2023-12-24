# Que : Differentiate between append () and extend () methods?

# 1) append() method:

# The append() method is used to add a single element to the end of the list.
# a single value or entire list is added as a single element at the end of the list.

# Example:

list1 = [1, 2, 3]
list1.append(4) 
print(list1) # Output : [1, 2, 3, 4]

# append methos add list as a single element list1.append([4,5,6])
# Output : [1, 2, 3,[4,5,6]]

# 2) extend() method:

# A) The extend() method is used to append elements from an iterable object (e.g., another list, tuple, string) 
#    to the end of the list.
# B) It takes each element from the iterable and adds it individually to the list.
# C) It modifies the original list in place.

# Example:

list1 = [1, 2, 3]
list1.extend([4, 5, 6])
print(list1) # Output: [1, 2, 3, 4, 5, 6]
