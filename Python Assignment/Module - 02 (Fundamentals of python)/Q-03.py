n = int(input("Enter the range for Fibonacci series: "))
a = 0 
b = 1
for i in range(n):
    print(a, end=" ")
    # Update the values of 'a' and 'b' for the next iteration using a temporary variable
    new_a = b
    new_b = a + b
    a = new_a
    b = new_b
