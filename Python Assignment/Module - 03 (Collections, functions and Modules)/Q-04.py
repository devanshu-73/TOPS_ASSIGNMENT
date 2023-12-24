#  Write a Python function to get the largest number, smallest num and sum of all from a list.

def func1(list1):
    if not list1:
        return None, None, None  # Return a tuple of None for an empty list
    
    largest = smallest = list1[0]
    total_sum = 0
    
    for num in list1:
        total_sum += num

        # Find largest num
        if num > largest:
            largest = num

        # Find smallest num
        elif num < smallest:
            smallest = num

    return largest, smallest, total_sum
    

list1 = [1,2,3]
result = func1(list1)

if result:  # Check if the result is not None before accessing elements
    print("Largest Number:", result[0])
    print("Smallest Number:", result[1])
    print("Sum of All Numbers:", result[2])
else:
    print("Empty list...")
