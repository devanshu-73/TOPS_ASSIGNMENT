#include<stdio.h>
void main()
{
    int i, j,k=1;

    for(i=1; i<=5; i++)
    {
        for(j=1; j<=5; j++)
        {
            if(j<=i){
                printf("%c",'A'-1+k);
                k++;
            }
            else{
                printf(" ");
            }
        }
    printf("\n");
    }
}
// #include <stdio.h>

// void main()
// {
//     int i, j, n;
//     printf("Enter Number : ");
//     scanf("%d", &n);

//     for (i = 1; i <= n; i++)
//     {
//         for (j = 1; j <= n; j++)
//         {
//             if (j <= i)
//             {
//                 printf("* ");
//             }
//             else
//             {
//                 printf(" ");
//             }
//         }
//         printf("\n");
//     }
// }
//     // OUTPUT : *
//     //          * *
//     //          * * *
//     //          * * * *
//     //          * * * * *

// #include <stdio.h>

// void main()
// {
//     int i, j, n;
//     printf("Enter Number : ");
//     scanf("%d", &n);

//     for (i = 1; i <= n; i++)
//     {
//         for (j = 1; j <= n; j++) 
//         {
//             if (j <= (n+1)-i)
//             {
//                 printf("* ");
//             }
//             else
//             {
//                 printf(" ");
//             }
//         }
//         printf("\n");
//     }
// }
// // OUTPUT :
// // * * * * * 
// // * * * *
// // * * *
// // * *    
// // *
// #include <stdio.h>

// void main()
// {
//     int i, j, n;
//     printf("Enter Number : ");
//     scanf("%d", &n);

//     for (i = 1; i <= n; i++)
//     {
//         for (j = 1; j <= n; j++)
//         {
//             if (j >= 6-i)
//             {
//                 printf("*");
//             }
//             else
//             {
//                 printf(" ");
//             }
//         }
//         printf("\n");
//     }
// }
// // OUTPUT:
// //     *
// //    **
// //   ***
// //  ****
// // *****

// #include <stdio.h>

// void main()
// {
//     int i, j, n;
//     printf("Enter Number : ");
//     scanf("%d", &n);

//     for (i = 1; i <= n; i++)
//     {
//         for (j = 1; j <= n; j++)
//         {
//             if (j >= i)
//             {
//                 printf("*");
//             }
//             else
//             {
//                 printf(" ");
//             }
//         }
//         printf("\n");
//     }
// }
// // OUTPUT :
// // *****
// //  ****
// //   ***
// //    **
// //     *
