#  find the second smallest number in a list.

numbers = [5, 2, 8, 1, 3, 7, 4, 6]

# sorted_list = sorted(numbers)
# second_smallest = sorted_list[1]

# ======= or ================

smallest = second_smallest = numbers[0]

for num in numbers:
    if (num < smallest):
        second_smallest = smallest
        smallest = num
    elif (num < second_smallest) and (num != smallest):
        second_smallest = num

print("Second smallest number :", second_smallest)


