# Find Factorial of a Number using Function 

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

n = int(input("Enter number to find Factorial : "))

result = factorial(n)
print("Factorial:", result)
