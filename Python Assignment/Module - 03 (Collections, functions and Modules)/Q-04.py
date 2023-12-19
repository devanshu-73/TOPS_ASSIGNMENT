#  Write a Python function to get the largest number, smallest num and sum of all from a list.

def func1(numbers):
    if not numbers:
        return None, None, 0  # Return None for largest and smallest if the list is empty

    largest = smallest = numbers[0]
    total_sum = 0

    for num in numbers:
        total_sum += num
        if num > largest:
            largest = num
        elif num < smallest:
            smallest = num

    return largest, smallest, total_sum

numbers_list = [5, 2, 8, 1, 7]
largest_num, smallest_num, sum_all = func1(numbers_list)

print("Largest Number:", largest_num)
print("Smallest Number:", smallest_num)
print("Sum of All Numbers:", sum_all)
