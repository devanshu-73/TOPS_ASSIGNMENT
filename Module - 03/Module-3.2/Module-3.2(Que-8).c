// Fibonaci series
#include <stdio.h>

void main()
{
    int t1 = 0, t2 = 1, nt, n;

    printf("Enter Number : ");
    scanf("%d", &n);

    printf("%d %d", t1, t2);

    for (int i = 3; i <= n; i++)
    {
        nt=t1+t2;
        printf(" %d ",nt);
        t1=t2;
        t2=nt;
    }
}