# Check if a number is positive, negative, or zero
num = float(input("Enter a number: "))
if num > 0:
    print("Positive number")
elif num < 0:
    print("Negative number")
else:
    print("Zero")

# Get the factorial of a given number
fact_num = int(input("Enter a number to find factorial: "))
factorial = 1
for i in range(1, fact_num + 1):
    factorial *= i
print("Factorial:", factorial)

# Get the Fibonacci series of a given range
fib_range = int(input("Enter the range for Fibonacci series: "))
fibonacci_series = [0, 1]
while len(fibonacci_series) < fib_range:
    fibonacci_series.append(fibonacci_series[-1] + fibonacci_series[-2])
print("Fibonacci series:", fibonacci_series)

# Memory management in Python:
# Python uses a private heap space for memory management. The memory is managed using a system of private heaps,
# and the Python memory manager takes care of allocating and freeing memory.

# Purpose of the continue statement in Python:
# The continue statement is used to skip the rest of the code inside a loop for the current iteration and
# proceed to the next iteration of the loop.

# Swap two numbers with and without a temp variable
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))
print("Before swapping - num1:", num1, "num2:", num2)

# Swap with a temp variable
temp = num1
num1 = num2
num2 = temp
print("After swapping with temp variable - num1:", num1, "num2:", num2)

# Swap without a temp variable
num1, num2 = num2, num1
print("After swapping without temp variable - num1:", num1, "num2:", num2)

# Check if a number is even or odd
num_even_odd = int(input("Enter a number to check even or odd: "))
if num_even_odd % 2 == 0:
    print("Even number")
else:
    print("Odd number")

# Check if a passed letter is a vowel or not
letter = input("Enter a letter: ").lower()
if letter in "aeiou":
    print("Vowel")
else:
    print("Not a vowel")

# Sum of three given integers with a special case
num_sum1 = int(input("Enter the first number: "))
num_sum2 = int(input("Enter the second number: "))
num_sum3 = int(input("Enter the third number: "))
if num_sum1 == num_sum2 or num_sum2 == num_sum3 or num_sum1 == num_sum3:
    print("Sum is 0 (two values are equal)")
else:
    print("Sum:", num_sum1 + num_sum2 + num_sum3)

# Check conditions on two integer values
num1_condition = int(input("Enter the first number: "))
num2_condition = int(input("Enter the second number: "))
if num1_condition == num2_condition or abs(num1_condition - num2_condition) == 5 or num1_condition + num2_condition == 5:
    print("True")
else:
    print("False")

# Sum of the first n positive integers
n_sum = int(input("Enter the value of n: "))
sum_n = n_sum * (n_sum + 1) // 2
print("Sum of first", n_sum, "positive integers:", sum_n)

# Calculate the length of a string
string_length = len(input("Enter a string: "))
print("Length of the string:", string_length)

# Count the number of characters in a string
string_count = input("Enter a string: ")
char_frequency = {}
for char in string_count:
    char_frequency[char] = char_frequency.get(char, 0) + 1
print("Character frequency:", char_frequency)

# Negative indexes and their use:
# Negative indexes in Python represent positions from the end of the sequence. They are used to access
# elements from the end of the sequence without knowing the length.

# Count occurrences of a substring in a string
main_string = input("Enter a string: ")
substring = input("Enter a substring: ")
substring_count = main_string.count(substring)
print("Occurrences of substring:", substring_count)

# Count occurrences of each word in a given sentence
sentence = input("Enter a sentence: ")
word_frequency = {}
words = sentence.split()
for word in words:
    word_frequency[word] = word_frequency.get(word, 0) + 1
print("Word frequency:", word_frequency)

# Get a single string from two given strings, swap the first two characters
string1 = input("Enter the first string: ")
string2 = input("Enter the second string: ")
result_string = string2[:2] + string1[2:] + " " + string1[:2] + string2[2:]
print("Resulting string:", result_string)

# Add 'ing' at the end of a given string
input_string = input("Enter a string: ")
if len(input_string) >= 3:
    if input_string[-3:] == 'ing':
        input_string += 'ly'
    else:
        input_string += 'ing'
print("Modified string:", input_string)

# Replace 'not'...'poor' with 'good' if 'not' follows 'poor'
given_string = input("Enter a string: ")
not_index = given_string.find('not')
poor_index = given_string.find('poor')
if not_index != -1 and poor_index != -1 and not_index < poor_index:
    given_string = given_string[:not_index] + 'good' + given_string[poor_index + 4:]
print("Resulting string:", given_string)
