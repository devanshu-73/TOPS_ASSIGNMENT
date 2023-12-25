# generate and print a list of first and last 5 elements 
# where the values are square of numbers between 1 and 30.

square_list = []
for x in range(1, 31):
    square_list.append(x**2)

result_list = square_list[:5] + square_list[-5:]

print("List of first and last 5 elements :", result_list)
