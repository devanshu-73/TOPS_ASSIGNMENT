#include <iostream>
using namespace std;
class Num
{
    int a = 12, b = 34;

    friend void swap(Num &o1);
};

void swap(Num &o1)
{

    cout<<"before swap A : "<<o1.a<<", B : "<<o1.b<<endl;
    o1.a = o1.a + o1.b; // a =  12 + 34 =46
    o1.b = o1.a - o1.b; // b =  46 - 34 =12
    o1.a = o1.a - o1.b; // a =  46 - 12 =34
    cout<<"After swap A : "<<o1.a<<", B : "<<o1.b<<endl;
}

int main()
{
    Num obj;

    swap(obj);
}
