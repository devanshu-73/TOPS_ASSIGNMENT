# user to enter only odd numbers, else will raise an exception.

try:
    number = int(input("Enter odd number: "))
    if number % 2 == 0:
        print("Entered number is even. Plz enter odd number.")
    else:
        print("Entered number is odd.")
except ValueError:
    print("Invalid input. Please enter a valid integer.")
