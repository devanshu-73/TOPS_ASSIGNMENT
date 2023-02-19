// Print given pattern
//     *
//    ***
//   *****
//  *******
// *********
#include <stdio.h>

void main()
{
    int i, j,row,column;
    printf("Row :");
    scanf("%d",&row);
    printf("Column :");
    scanf("%d",&column);

    for (i = 1; i <= row; i++)
    {
        for (j = 1; j <= column; j++)
        {
            if (j >= (row+1) - i && j <= (row-1) + i)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
}