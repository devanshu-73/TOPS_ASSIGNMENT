// Maximum out of given Numbers
#include <stdio.h>

void main()
{
    int num, max = 0;
    int rem[5];
    printf("Enter Number : ");
    scanf("%d", &num);

    for (int i = 0; i < 5; i++)
    {
        rem[i]= num%10;
        num = num/10;
        if(rem[i]>max)
        {
            max = rem[i];
        }
    }
    printf("Max : %d", max);
}

// #include <stdio.h>

// void main()
// {
//     int a[5], max = 0;

//     printf("Enter Number : ");
//     for (int i = 0; i < 5; i++)
//     {
//         scanf("%d", &a[i]);
//     }

//     for (int i = 0; i < 5; i++)
//     {
//         if (a[i] > max)
//         {
//             max = a[i];
//         }
//     }
//     printf("Maximum : %d", max);
// }

