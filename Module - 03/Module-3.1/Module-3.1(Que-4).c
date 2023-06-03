#include<stdio.h>

void main ()
{
    //Find Simple Intrest
    int P,R,T;
    float SI;

    printf("Enter values To Find Simple Intrest\n");
    printf("Principle P :\n");
    scanf("%d",&P);
    printf("Rate of Intrest R :\n");
    scanf("%d",&R);
    printf("Time period T :\n");
    scanf("%d",&T);

    SI = (P*R*T)/100;
    printf("Simple Intrest : %f",SI);
}