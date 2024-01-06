create database salescompany;
use salescompany;

create table salesperson
(sno int primary key,
sname varchar(10) not null,
city varchar(10),
comm decimal(4,2));

insert into salesperson values
(1001,"peel","london",.12),
(1002,"serres","san jose",.13),
(1004,"motika","london",.11),
(1007,"rafkin","barcelona",.15),
(1003,"axelrod","new york",.1);


create table customer
(cnm int primary key,
cname varchar(10) not null,
city varchar(10),
rating int,
sno int,
foreign key (sno) references salesperson(sno));

insert into customer(cnm,cname,city,rating,sno) values
(201,"hoffman","london",100,1001),
(202,"giovanne","roe",200,1003),
(203,"liu","san jose",300,1002),
(204,"grass","barcelona",100,1002),
(206,"clemens","london",300,1007),
(207,"pereira","roe",100,1004);
 
 
 
-- a) All orders for more than $1000:

select *
from customer
where rating > 1000;
-- b) Names and cities of all salespeople in London with commission above 0.12:

select sname, city
from salesperson
where city = 'london' AND comm > 0.12;

-- c) All salespeople either in Barcelona or in London:

select *
from salesperson
where city in ('barcelona', 'london');

-- d) All salespeople with commission between 0.10 and 0.12 (excluding boundary values):

select *
from salesperson
where comm > 0.10 and comm < 0.12;

-- e) All customers excluding those with rating <= 100 unless they are located in Rome:

select *
from customer
where (rating > 100 or city = 'rome');