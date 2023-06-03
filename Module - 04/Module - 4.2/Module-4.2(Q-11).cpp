#include <iostream>
using namespace std;

class foverload
{
public:
    int base, height, radius;
    int length, breadth;
    void display()
    {
        cout << "**Area Calculator**" << endl;
    }
    void area(int r)
    {
        radius = r;
        // cout << "Enter radius of circle : " << endl;
        // cin >> radius;
        cout << "Area of circle is : " << 3.141 * radius * radius<<endl;
    }

    void area()
    {
        cout << "Enter length  of recatangle :" << endl;
        cin >> length;
        cout << "Enter breadth of of rectangle :" << endl;
        cin >> breadth;
        cout << "Area of rectangle is : " << length * breadth<<endl;
    }

    void area(int b, int h)
    {
        base = b;
        height = h;
        // cout << "Enter base of triangle :";
        // cin >> base;
        // cout << "Enter height of triangle ";
        // cin >> height;
        cout << "Area of triangle is : " << (base * height) / 2;
    }
};
int main()
{
    foverload o1;
    o1.display();
    o1.area(10);
    o1.area();
    o1.area(10, 10);
    return 0;
}