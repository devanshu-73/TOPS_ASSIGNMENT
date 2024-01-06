use school;

create table voting
(FirstName varchar(10),
LastName varchar(10),
Address varchar(20),
City varchar(10),
Age int);

insert into voting (FirstName, LastName, Address, City, Age)
values
    ('John', 'Doe', '123 Main St', 'New York', 30),
    ('Jane', 'Smith', '456 Elm St', 'Los Ang', 25),
    ('Bob', 'Johnson', '789 Oak St', 'Chicago', 35),
    ('Alice', 'Brown', '101 Pine St', 'Houston', 28),
    ('Charlie', 'Davis', '222 Maple St', 'San Fran', 42),
    ('Eva', 'Garcia', '333 Cedar St', 'Miami', 29),
    ('David', 'Lee', '444 Birch St', 'Boston', 32),
    ('Grace', 'Wilson', '555 Walnut St', 'Denver', 26);
