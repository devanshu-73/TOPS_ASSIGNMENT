// WAP to Find Number is even or odd using ternary operator
#include<stdio.h>

void main() 
{
    int num;

    printf("Enter Number : ");
    scanf("%d", &num);

    (num%2 == 0) ? printf("%d is Even Number\n",num):printf("%d is Odd Number\n",num);

}