# returns sum of all divisors of a number

def sum_of_divisors(n):
    divisors = 0
    for divisor in range(1, n + 1):
        if n % divisor == 0:
            divisors+=divisor
    return divisors

result = sum_of_divisors(12)
print("Sum of divisors:", result)
