#include <iostream>
using namespace std;
class Matrix
{
public:
    int m1[5], m2[5];
    int matrix_add[5];

    void mat_1()
    {
        for (int i = 0; i < 5; i++)
        {
            cout << "Enter matrix 1 : " << endl;
            cin >> m1[i];
        }
    }
    void mat_2()
    {
        for (int i = 0; i < 5; i++)
        {
            cout << "Enter matrix - 2 : " << endl;
            cin >> m2[i];
        }
    }

    Matrix operator + ()
    {

        for (int i = 0; i < 5; i++)
        {
            matrix_add[i] = m1[i] + m2[i];
        }
        cout << " MATRIX ADDITION :" << endl;
        for (int i = 0; i < 5; i++)
        {
            cout << matrix_add[i];
            cout << endl;
        }
    }
};
int main()
{
    Matrix o1;
    o1.mat_1();
    o1.mat_2();
    +o1;
    return 0;
}