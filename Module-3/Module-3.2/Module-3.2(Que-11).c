// Summation of given Number Ex: 1523 = 11
#include <stdio.h>

void main()
{
    int num, sum = 0;
    int rem[5];
    printf("Enter Number : ");
    scanf("%d", &num);

    for (int i = 0; i < 5; i++)
    {
        rem[i] = num % 10;
        num = num / 10;
        sum = sum + rem[i];
    }
    printf("sum : %d", sum);
}