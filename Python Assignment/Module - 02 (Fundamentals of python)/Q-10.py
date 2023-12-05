# Return true if two given integers are equal or their sum or difference is 5

num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

if num1 == num2 or (num1 + num2)==5 or (num1 - num2)==5:
    print(True)
else:
    print(False)
