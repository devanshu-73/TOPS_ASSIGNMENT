#include <iostream>
using namespace std;

class Person
{
public:
    string name;
    int age;
};
class Teacher : public Person
{
public:
    int salary;
    void display()
    {
        cout << "Teacher name : ";
        cin >> name;
        cout << "Teacher age : ";
        cin >> age;
    }
};
class Student : public Person
{
public:
    int marks[5], sum = 0;
    float percentage;
    void perc()
    {
        cout << "Student Name : ";
        cin >> name;
        cout << "Age : ";
        cin >> age;

        for (int i = 0; i < 5; i++)
        {
            cout << "Enter marks : ";
            cin >> marks[i];
        }
        for (int i = 0; i < 5; i++)
        {
            sum = sum + marks[i];
        }
        percentage = sum / 5;
        cout << "Percentage : " << percentage;
    }
};
int main()
{
    Teacher o1;
    Student o2;
    o1.display();
    o2.perc();
}