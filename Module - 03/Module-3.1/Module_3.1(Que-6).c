// C Program to Convert Days into Years Weeks and Days
#include <stdio.h>

int main()
{
    int d, y, choice;
    // d = days
    // y = years
    printf("Enter 1 for convert years into days : \n");
    printf("Enter 2 for convert days into years : \n");
    printf("Enter your choice :");
    scanf("%d", &choice);

    switch (choice)
    {
    case 1:
    {
        printf("Enter the years :\n");
        scanf("%d", &y);
        d = (y * 365);
        printf("Days :%d", d);
        break;
    }

    case 2:
    {
        printf("Enter the days:\n");
        scanf("%d", &d);
        y = (d / 365);
        printf("Years : %d", y);
        break;
    }

    default:
    {
        printf("You Entered Wrong choice:");
        break;
    }
    }
}