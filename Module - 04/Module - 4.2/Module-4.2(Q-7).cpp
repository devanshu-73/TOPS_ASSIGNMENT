#include <iostream>
using namespace std;

class Math
{
public:
    void display(int a, int b, int c, int d)
    {
        cout << "Addition : " << a + b + c + d << endl;
    }
    void display(int a, int b)
    {
        cout << "Subtraction : " << a - b << endl;
    }
    void display(int a)
    {
        cout << "Multiplication : " << a * 10 << endl;
    }
    void display(int a, int b, int c)
    {
        cout << "Division : " << (a + b) / c;
    }
};
int main()
{
    Math o1;
    o1.display(10, 2, 8, 5);
    o1.display(10, 5);
    o1.display(10);
    o1.display(10, 5, 3);
}