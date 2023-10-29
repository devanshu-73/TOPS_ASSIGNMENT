create database school;
use school;

-- table-1 Student

create table student 
(Rollno int primary key,
Name varchar(10) not null,
Branch varchar(30) not null);

insert into student values 
(1,"Jay","Computer Science"),
(2,"Suhani","Electronic and Com"),
(3,"Kriti","Electronic and Com");

-- table-2 Exam

-- Create the Exam table with Rollno as a foreign key
create table Exam (
    Rollno int,
    S_Code varchar(10),
    Marks int,
    P_Code varchar(10),
    foreign key (Rollno) references student(Rollno)
);

insert into Exam (Rollno, S_Code, Marks, P_Code)
values
    (1, 'CS11', 50, 'CS'),
    (1, 'CS11', 60, 'CS'),
    (2, 'EC101', 66, 'EC'),
    (2, 'EC102', 70, 'EC'),
	(3, 'EC101', 45, 'EC'),
    (3, 'EC102', 50, 'EC');
