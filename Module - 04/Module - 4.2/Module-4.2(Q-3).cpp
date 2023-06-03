#include<iostream>

using namespace std;

class Calc
{
    public:
    int a,b;
    Calc(int a,int b)
    {
        cout<<"ADDITION : "<<a+b<<endl;
        cout<<"SUBTRACTION : "<<a-b<<endl;
        cout<<"MULTIPLICATION : "<<a*b<<endl;
        cout<<"DIVISION : "<<a/b<<endl;
        cout<<"MODULO : "<<a%b<<endl;
    }
};
int main()
{
    Calc obj(10,5);
    return 0;
}