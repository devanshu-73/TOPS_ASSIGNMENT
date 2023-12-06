string = input("Enter a string: ")

if len(string) % 4 == 0:
    # Reverse the string
    reversed_string = string[::-1]
    
    print("Reversed String:", reversed_string)
else:
    print("Original String:", string)
