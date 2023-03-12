#include <iostream>
using namespace std;

class Concat
{
public:
    string s1, s2;
    Concat operator+()
    {
        cout << "Enter S1 : ";
        cin >> s1;
        cout << "Enter S2 : ";
        cin >> s2;

        cout << "Concatenatation of S1 And S2 : " << s1 + s2;
    }
};

int main()
{
    Concat o1;
    +o1;
}