# Que : Differentiate between append () and extend () methods?

# append() and extend() are methods used to add elements to a list,
# but they differ in how they handle the elements being added.


# 1) append() method:

# The append() method is used to add a single element to the end of the list.
# The element can be of any data type, including other lists.
# The entire object (whether it's a single value or a list) is added as a single element at the end of the list.

# Example:

list1 = [1, 2, 3]
list1.append(4)
print(list1) # Output : [1, 2, 3, 4]

# 2) extend() method:

# The extend() method is used to append elements from an iterable (e.g., another list, tuple, string) to the end of the list.
# It takes each element from the iterable and adds it individually to the list.
# It modifies the original list in place.

# Example:

list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)
print(list1) # Output: [1, 2, 3, 4, 5, 6]
