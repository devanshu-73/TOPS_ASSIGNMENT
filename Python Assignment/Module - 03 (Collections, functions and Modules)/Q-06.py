# Write a Python program to count the number of strings where the string
# length is 2 or more and the first and last character are same from a given
# list of strings.

list1 = ["mom", "devanshu", "dad", "1221"]

count = 0
for i in list1:
    if len(i) >= 2 and i[0] == i[-1]:
        count += 1

print("total No of strings with len >= 2 and 1st char == 2nd char :", count)
