#include <iostream>
using namespace std;
class Num
{
    int a = 12, b = 34;

    friend void swap(Num &obj);
};

void swap(Num &obj)
{

    cout<<"before swap A : "<<obj.a<<", B : "<<obj.b<<endl;
    obj.a = obj.a + obj.b; // a =  12 + 34 =46
    obj.b = obj.a - obj.b; // b =  46 - 34 =12
    obj.a = obj.a - obj.b; // a =  46 - 12 =34
    cout<<"After swap A : "<<obj.a<<", B : "<<obj.b<<endl;
}

int main()
{
    Num obj;

    swap(obj);
}
