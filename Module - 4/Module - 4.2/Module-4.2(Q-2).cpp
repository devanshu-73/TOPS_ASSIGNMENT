#include <iostream>
using namespace std;

class Bank_details
{
public:
    string b_name, b_accounttype;
    int acc_number, b_amount;

    void values(string name, int amount, int account,string acctype )
    {
        // value assignment
        b_name = name;
        b_accounttype = acctype;
        acc_number = account;
        b_amount = amount;
    }
    void deposit()
    {
        cout<<"Name Of Depositer : "<<b_name<<", Balance : "<<b_amount<<endl;
    }
};
int main()
{
    Bank_details obj;
    obj.values("dev",50000,545452235,"saving");
    obj.deposit();
}