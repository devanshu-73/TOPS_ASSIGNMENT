#include <stdio.h>

void main()
{
    int a,b;
    int choice;

    printf("Enter Two Numbers :");
    scanf("%d %d",&a,&b);
    printf("Simple Calculator:\n");
    printf("Enter 1 for Addition\n");
    printf("Enter 2 for Subtraction\n");
    printf("Enter 3 for Multiplication\n");
    printf("Enter 4 for Division\n");
    printf("Enter 5 for Modulo\n");
    
    printf("enter your choice :");
    scanf("%d", &choice);

    switch (choice)
    {
    case 1:
    {
        printf("Addition of %d + %d = %d\n", a, b, a + b);
        break;
    }
    case 2:
    {
        printf("Subtraction of %d - %d = %d\n", a, b, a - b);
        break;
    }
    case 3:
    {
        printf("Multiplication of %d * %d = %d\n", a, b, a * b);
        break;
    }
    case 4:
    {
        printf("Division of %d / %d = %d\n", a, b, a / b);
        break;
    }
    case 5:
    {
        printf("Modulo of %d , %d = %d\n", a, b, a % b);
        break;
    }

    default:
    {
        printf("Wrong Choice Entered :");
    }
    break;
    }
}