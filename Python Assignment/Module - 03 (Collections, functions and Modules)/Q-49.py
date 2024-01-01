# write function to check whether a number is in a given range

def in_range(number, lower, upper):
    if lower <= number <= upper:
        return "In Range"
    else:
        return "Not In Range"

lower = int(input("enter lower for [range(lower,upper)] : "))
upper = int(input("enter upper for [range(lower,upper)] : "))
number = int(input("enter number : "))

result = in_range(number, lower, upper)
print("In range or Not :", result)
