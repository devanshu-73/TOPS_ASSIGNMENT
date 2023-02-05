#include <stdio.h>

void main()
{

    int choice;
    float base, height, radius, length, breadth;

    printf("\n**Area Calculator**\n");
    printf("Enter 1 to find area of circle \n");
    printf("Enter 2 to find area of rectangle \n");
    printf("Enter 3 to find area of Triangle \n");

    printf("enter your choice :");
    scanf("%d", &choice);
    switch (choice)
    {

    case 1:
    {
        printf("Enter radius of circle : ");
        scanf("%f", &radius);
        printf("Area of circle is %0.2f", 3.141 * radius * radius);
        break;
    }

    case 2:
    {
        printf("\nEnter length  of recatangle :");
        scanf("%f", &length);
        printf("\nEnter breadth of of rectangle :");
        scanf("%f", &breadth);
        printf("\nArea of rectangle is %0.2f ", length * breadth);
        break;
    }

    case 3:
    {

        printf("Enter base of triangle :");
        scanf("%f", &base);
        printf("Enter height of triangle :");
        scanf("%f", &height);
        printf("Area of triangle is %0.2f ", (base * height) / 2);
        break;
    }

    case 4:
    {

        printf("invalid choice :");
        break;
    }
    }
}
