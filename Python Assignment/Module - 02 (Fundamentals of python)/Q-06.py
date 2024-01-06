# Swap two numbers with and without a temp variable
a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

# With temp variable
temp = a
a = b
b = temp
print("After swapping (with temp variable):", a, b)

# Without temp variable
a, b = b, a
print("After swapping (without temp variable):", a, b)
