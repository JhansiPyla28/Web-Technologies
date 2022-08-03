create database companyDatabase;
use companyDatabase;
create table employee(fname varchar(20),mname varchar(20),lname varchar(20),ssn varchar(20) primary key,bdate date,address varchar(20),gender enum('f','m') not null,salary float(10),super_ssn varchar(20),dno int);
create table department(dname char(20),dnumber int(11) primary key,mgr_ssn varchar(20),mgr_start_date date); 
create table project(pname char(20), pnumber varchar(20) primary key,plocation varchar(20),dnum int(11));
create table works_on(essn varchar(20),pno varchar(20),hours int);
create table dept_locations(dnumber int(11),dlocation varchar(20));
create table family(essn varchar(20),dependent_name varchar(20),gender enum('f','m'),relationship varchar(20));
insert into employee values('sachin','A','classy',531,'1980/09/01','nuzvid','m',20000,532,5),('sehwag','B','sixer',532,'1992/10/03','vijayawada','m',30000,538,5),('mithali', 'C','raj',533,'1986/11/04','kadapa','f',15000,534,4),('rohit','D','sharma',534,'1998/06/07','kakinada','m',33000,538,4);
insert into employee values('harmanpet','E','kaur',535,'1989/03/09','vizianagaram','f',18000,532,5),('bhuvi','F','yarker',536,'1994/04/07','tirupati','m',26000,532,5);
insert into employee values('virat','G','shot',537,'1977/11/10','hyderabad','m',26000,534,4),('ravi','H','sastry',538,'1960/11/08','delhi','m',40000,NULL,1);
insert into department values('playing',5,532,'2008/06/20'),('admininstration',4,532,'2012/03/25'),('headquarters',1,538,'1994/11/11');
insert into dept_locations values(1,'kadapa'),(4,'east godavari'),(5,'west godavari'),(5,'srikakulam'),(5,'kadapa');
insert into project values('t20',1,'west godavari',5),('world cup',2,'srikakulam',5),('ipl',3,'kadapa',5),('tests',4,'east godavari',4),('dpl',5,'kadapa',1),('ranji',6,'east godavari',4);
insert into family values(531,'koti','m','son'),(532,'krishna','m','son'),(532,'ritika','f','spouse'),(534,'shashi','f','spouse'),(531,'balaji','m','son'),(531,'koti','m','son'),(531,'lohith','f','spouse');
insert into works_on values(531,1,12),(531,2,13),(535,3,9),(536,1,8),(536,2,25),(532,2,2),(532,3,9),(532,4,12),(532,5,6),(533,6,10),(533,4,10),(537,4,11),(537,6,3),(534,6,8),(534,5,4),(538,5,null);
alter table employee add constraint fk foreign key(super_ssn) references employee(ssn) on delete cascade on update cascade;
alter table employee add constraint fk1 foreign key(dno) references department(dnumber) on delete cascade on update cascade;
alter table department add constraint fk2 foreign key(mgr_ssn)references employee(ssn) on delete cascade on update cascade;
alter table project add constraint fk3 foreign key(dnum)references department(dnumber) on delete cascade on update cascade;
alter table family add constraint fk4 foreign key(essn)references employee(ssn) on delete cascade on update cascade;
alter table works_on add constraint fk5 foreign key(essn) references employee(ssn) on delete cascade on update cascade;
alter table works_on add constraint fk6 foreign key(pno) references project(pnumber) on delete cascade on update cascade;
alter table dept_locations add constraint fk7 foreign key(dnumber)references department(dnumber)on delete cascade on update cascade;

-- Query1
select *from employee where fname='sehwag' and lname='sixer'; 

-- Query2
 select concat(mname,'',fname,'',lname) as Name,address from employee where dno=(select dnumber from department where dname='administration');
 
-- Query 3
select pnumber,dname,fname as manager_name,address as manager_address from project,department,employee where plocation='kadapa' and dnumber-dnum and mgr_ssn=ssn;

-- Query 4
select e.fname as employee,employee.fname as supervisor from employee as e,employee where e.super_ssn = employee.ssn;

-- Query 5
select distinct salary from employee;

-- Query 6
select *from employee group by salary having count(salary)=1;

-- Query 7
select pno from employee,works_on where fname='sehwag' and essn=ssn union select pno from employee,department,works_on where fname='sehwag' and ssn=mgr_ssn and mgr_ssn=essn;

-- Query 8
select *from employee where fname like 'r%' and lname like '%arm%';

-- Query 9
select fname,lname,salary from employee where salary between 20000 and 25000;

-- Query 10
select fname,ssn,salary*1.15 as incremented_salary from employee where dno in(select dnumber from department where dname='administration');
 
-- Query 11
select e.fname,e.address,dname from employee,employee as e,department where e.dno=employee.dno and e.dno=dnumber group by fname;
 
-- Query 12
select fname,lname from employee,project,works_on where dnum-5 and pnumber=pno and essn=ssn group by fname;
  
-- Query 13
select fname,lname from employee where ssn in(select essn from family);
  
-- Query 14
select fname,dependent_name from employee,family where ssn=essn;

-- Query 15
select *from employee where ssn in(select essn from works_on where pno in(2,3,4));

-- Query 16
