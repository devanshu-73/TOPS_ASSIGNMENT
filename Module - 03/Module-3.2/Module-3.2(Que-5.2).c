#include <stdio.h>

void main()
{
    int a[10];
    int even = 0, odd = 0, se = 0, so = 0;

    printf("Enter 10 Numbers :");
    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &a[i]);
    }

    for (int j = 0; j < 10; j++)

    {
        if (a[j] % 2 == 0)
        {
            se = se + a[j];
            even++;
        }
        else
        {
            so = so + a[j];
            odd++;
        }
    }

    printf("Even Numbers in array : %d\n", even);
    printf("Odd Numbers in array : %d\n", odd);
    printf("Sum of All Even Numbers : %d\n", se);
    printf("Sum of All Odd Numbers : %d\n", so);
}