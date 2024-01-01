# write function to check if a String is Palindrome or not

def palindrome(string):
    return string == string[::-1]

string = input("Check string is palindrome or not ? : ")
result = palindrome(string) # example mom,dad
print("Is palindrome:", result)
