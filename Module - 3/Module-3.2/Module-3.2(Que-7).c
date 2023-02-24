// Find factorial of given Number
#include<stdio.h>

int fact(int num)
{

    if(num <= 0)
    {
        return 1;
    }
    else
    {
        return num*fact(num-1);
    }
    
}
void main()
{
    int num;

    printf("Enter Number To Find Factorial : ");
    scanf("%d", &num);

    printf("Factorial : %d",fact(num));
    
    
}