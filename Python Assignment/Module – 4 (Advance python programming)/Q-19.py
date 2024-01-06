# How Do You Handle Exceptions With Try/Except/Finally

try:
    result = 10 / 0 # Code that may raise exception
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Always execute...")