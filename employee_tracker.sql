DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department(
id integer auto_increment not null,
name varchar(30) not null,
primary key(id)
);

CREATE TABLE role(
id integer auto_increment not null,
title varchar(30) not null,
salary decimal not null,
department_id integer not null,
constraint fk_department_id foreign key (department_id) references department(id),
primary key(id)
);

CREATE TABLE employee(
id integer auto_increment not null,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id integer not null,
constraint fk_role_id foreign key (role_id) references role(id),
manager_id integer,
constraint fk_manager_id foreign key (manager_id) references employee(id),
primary key(id)
);

select * from employee;
select * from role;
select * from department;

INSERT into department (name)
VALUES ("sales");
INSERT into department (name)
VALUES ("engineering");
INSERT into department (name)
VALUES ("finance");
INSERT into department (name)
VALUES ("legal");
INSERT into department (name)
VALUES ("management");

select * from department;

INSERT into role (title, salary, department_id)
VALUES ("sales", 35000, 1);
INSERT into role (title, salary, department_id)
VALUES ("software engineer", 70000, 2);
INSERT into role (title, salary, department_id)
VALUES ("accountant", 50000, 3);
INSERT into role (title, salary, department_id)
VALUES ("lawyer", 80000, 4);
INSERT into role (title, salary, department_id)
VALUES ("general manager", 90000, 5);

select * from role;

INSERT into employee (first_name, last_name, role_id)
VALUES ("Susan", "Williams", 1);
INSERT into employee (first_name, last_name, role_id)
VALUES ("Tyler", "Beck", 2);
INSERT into employee (first_name, last_name, role_id)
VALUES ("Ashley", "Helms", 3);
INSERT into employee (first_name, last_name, role_id)
VALUES ("Robin", "Evans", 4);
INSERT into employee (first_name, last_name, role_id)
VALUES ("Robert", "Michaels", 5);

select * from employee;
