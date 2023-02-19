// Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans:5)
#include <stdio.h>
#include <string.h>
void main()
{
    int num, sum, length;
    int rem[10];
    char len[10];
    printf("Enter Number : ");
    scanf("%d", &num);
    sprintf(len, "%d", num);
    length = strlen(len);
    // printf("Length : %d ", length);
    for (int i = 0; i < length; i++)
    {
        rem[i] = num % 10;
        num = num / 10;
    }
    sum = rem[0] + rem[length - 1];
    printf("Sum : %d", sum);
}