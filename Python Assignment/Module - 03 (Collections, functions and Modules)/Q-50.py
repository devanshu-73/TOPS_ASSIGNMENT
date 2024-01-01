# create function to find number is perfect or not

def find_perfect_number(n):
    divisors_sum = 0

    for divisor in range(1, n):
        if n % divisor == 0:
            divisors_sum += divisor

    # Check sum of divisors equals to n or not
    return divisors_sum == n

n = int(input("find number is perfect or not ? : "))

result = find_perfect_number(n)
print("Is a perfect number:", result)
