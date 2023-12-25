#  Write a Python function to get the largest number, smallest num and sum of all from a list.

def func1(list1):
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

# list1 = []
list1 = [1,2,100,3,5,6]
if not list1:
    print("Empty list...")
else:
    result = func1(list1)
    print("Largest Number:", result[0])
    print("Smallest Number:", result[1])
    print("Sum of All Numbers:", result[2])
