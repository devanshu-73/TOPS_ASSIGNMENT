#include <iostream>
using namespace std;

class Cricketer
{
public:
    int runs[5];
    int total_runs, best_performance;
    float avg_runs, sum = 0;
    string name;
};

class Batsman : public Cricketer
{
public:
    void input()
    {
        cout << "Enter name : ";
        cin >> name;
        for (int i = 0; i < 5; i++)
        {
            cout << "enter runs : ";
            cin>> runs[i];
        }
    }
    void avg()
    {
        for (int i = 0; i < 5; i++)
        {
            sum = sum + runs[i];
        }
        avg_runs = sum / 5;
        cout << "Average runs: " << avg_runs << endl;
    }
};
int main()
{
    Batsman o1;
    o1.input();
    o1.avg();
}