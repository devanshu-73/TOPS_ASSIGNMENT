#include<stdio.h>

void main()
{
    int a,b;

    printf("Enter two numbers for swaping : ");
    scanf("%d %d",&a,&b);

    printf("Before swap : A = %d , B = %d\n\n",a,b);
    a = a + b;
    b = a - b;
    a = a - b;

    printf("After swap : A = %d , B = %d\n\n",a,b);
}