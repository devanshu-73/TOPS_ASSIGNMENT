# Que : How will you remove last object from a list? 
#       Suppose list1 is [2, 33, 222, 14, and 25], what is list1 [-1]? 

# We can use the pop() method

list1 = [1, 2, 3, 4, 5]
list1.pop()  # Removes the last element by Default
print(list1)

# what is list1 [-1]?
# it simply accesses the last element of the list.
list2 = [2, 33, 222, 14, 25]
print(list2[-1]) # it prints 25