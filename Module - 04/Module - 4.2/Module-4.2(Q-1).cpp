#include <iostream>
using namespace std;

class calc
{
public:
    int ch, a, b;
    void calcu()
    {
        cout << "enter a and b : ";
        cin >> a;
        cin >> b;
        cout << endl;
        cout << "Enter Choice : ";
        cin >> ch;

        switch (ch)
        {
        case 1:
            cout << "Add : " << a + b;
            break;
        case 2:
            cout << "Sub : " << a - b;
            break;
        case 3:
            cout << "Mul : " << a * b;
            break;
        case 4:
            cout << "Div : " << a / b;
            break;
        default:
            cout << "Invalid Choice...";
            break;
        }
    }
};
int main()
{
    calc obj;
    obj.calcu();
}