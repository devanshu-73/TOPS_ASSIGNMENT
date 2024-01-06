#include <iostream>
using namespace std;

class Students
{
public:
    int roll_num[5];
    void roll()
    {
        for (int i = 0; i < 5; i++)
        {
            cout << "Enter roll number : ";
            cin >> roll_num[i];
        }
    }
};
class Test : public Students
{
public:
    int sub1[5];
    int sub2[5];

    void sub_1()
    {
        for (int i = 0; i < 5; i++)
        {
            cout << "Enter Subject - 1 : " << roll_num[i] << endl;
            cin >> sub1[i];
        }
    }
    void sub_2()
    {
        for (int i = 0; i < 5; i++)
        {
            cout << "Enter Subject - 2 : " << roll_num[i] << endl;
            cin >> sub2[i];
        }
    }
};
class Result : public Test
{
public:
    int total_marks[5];
    void final_result()
    {

        for (int i = 0; i < 5; i++)
        {
            total_marks[i] = sub1[i] + sub2[i];
        }
        cout << " Final Result :" << endl;
        for (int i = 0; i < 5; i++)
        {
            cout << "total marks : " << roll_num[i];
            cout << " : " << total_marks[i];

            cout << endl;
        }
    }
};

int main()
{
    Result o1;
    o1.roll();
    o1.sub_1();
    o1.sub_2();
    o1.final_result();
}