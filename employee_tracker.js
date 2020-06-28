var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Milo5114",
    database: "employee_tracker"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected")
  });

const viewOptions = [
    "view departments",
    "view roles",
    "view employees",
    "view employee",
    "update employee",
    "exit"
];

const employeeOptions = [
    "Susan Williams",
    "Tyler Beck",
    "Ashley Helms",
    "Robin Evans",
    "Robert Michaels",
    "exit"
];

const updateOptions = [
    "first name",
    "last name",
    "role",
    "exit"
];

runSearch();

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "what would you like to do?",
            choices: "viewOptions"
        })
        .then(function (answer) {
            switch (answer.action) {
                case viewOptions[0]:
                    departmentView();
                    break;

                case viewOptions[1]:
                    roleView();
                    break;

                case viewOptions[2]:
                    employeeView();
                    break;

                case viewOptions[3]:
                    updateEmployee();
                    break;

                case updateOptions[4]:
                    connection.end();
                    break
            }
        })
}

function departmentView() {
    var sqlStr = "select * from department";
    connection.query(sqlStr, function(err, result) {
        if (err) throw err;

        console.table(result)
        runSearch();
    })
}

function employeeView() {
    var sqlStr = "select first_name, last_name, title, salary from employee";
    sqlStr += "left join role ";
    sqlStr += "on employee.role_id = role.id"
    connection.query(sqlStr, function(err, result) {
        if (err) throw err;

        console.table(result)
        runSearch();
    })
}

function roleView() {
    var sqlStr = "select * from role";
    connection.query(sqlStr, function(err, result) {
        if (err) throw err;

        console.table(result)
        runSearch();
    })
}

const updateEmployee = () => {

    function runUpdateSearch() {
        inquirer
            .prompt( {
                name: "action",
                type: "list",
                message: "Choose an employee to update.",
                choices: employeeOptions
            })
    }
    runUpdateSearch();
}