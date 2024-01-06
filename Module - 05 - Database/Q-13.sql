create database company;
use company;

-- table-1 Employee

create table Employee
(empid int primary key,
firstname varchar(10) not null,
lastname varchar(10) not null,
salary int default 0,
joiningdate datetime,
department varchar(15));

insert into Employee values
(1,"john","abraham",1000000,'2013-01-01 12:00:00',"banking"),
(2,"micheal","clarke",800000,'2013-01-01 12:00:00',"insurance"),
(3,"roy","thomas",700000,'2013-02-01 12:00:00',"banking"),
(4,"tom","jose",600000,'2013-02-01 12:00:00',"insurance"),
(5,"jerry","pinto",650000,'2013-02-01 12:00:00',"insurance"),
(6,"philip","mathew",750000,'2013-01-01 12:00:00',"services"),
(7,"testname1","123",650000,'2013-01-01 12:00:00',"services"),
(8,"testname2","lname%",600000,'2013-02-01 12:00:00',"insurance");

-- table-2 incentive

create table Incentive (
    emprefid int,
    incentivedate datetime,
    incentiveamount DECIMAL(10, 2),
    foreign key (emprefid) references Employee(empid)
);

insert into Incentive (emprefid, incentivedate, incentiveamount)
values
    (1, '2013-02-01', 5000),
    (2, '2013-02-01', 3000),
    (3, '2013-02-01', 4000),
    (1, '2013-01-01', 4500),
    (2, '2013-01-01', 3500);

-- Que-01 : Get First_Name from employee table using Tom name “Employee Name”
select firstname as "Employee Name"
from Employee
where firstname = 'Tom';

-- Que-02 :  Get FIRST_NAME, Joining Date, and Salary from employee table.
select firstname,joiningdate,salary from Employee;

-- Que-03 :  Get all employee details from the employee table order by First_Name 
--           Ascending and Salary descending?
select *
from Employee
order by firstname asc, salary desc;

-- Que-04 : Get employee details from employee table whose first name contains ‘J’.
select * from Employee
where firstname like '%j%';

-- Que-05 : Get department wise maximum salary from employee table order by salary 
-- ascending?

select department,max(salary) as max_salary from Employee
group by department order by max_salary; 

-- Que-06 :  Select first_name, incentive amount from employee and incentives table for 
-- those employees who have incentives and incentive amount greater than 3000
select E.firstname , I.incentiveamount from Employee E 
inner join Incentive I on E.empid = I.emprefid 
where I.incentiveamount > 3000;

-- Que-07 : Create After Insert trigger on Employee table which insert records in view table 

create view EmployeeView as
select empid, firstname, lastname, salary
from Employee;

delimiter $$
create trigger EmployeeInsertTrigger
after insert
on Employee for each row
begin
    insert into EmployeeView (empid, firstname, lastname, salary)
    values (new.empid, new.firstname, new.lastname, new.salary);
end;
$$
delimiter ;

