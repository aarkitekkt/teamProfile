const inquirer = require("./node_modules/inquirer/lib/inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const Prompt = require("./lib/Prompt")

const employees = [];

getEmployee();

function getEmployee() {
    promptUser()
        .then(val => {
            let e = new Employee(val.name, val.id, val.email);
            if (val.role == "manager") {
                return inquirer
                    .prompt(
                        {
                            type: "input",
                            name: "officeNumber",
                            message: "What is your office number?"
                        }
                    )
                    .then(val => {
                        const mgr = new Manager(e.name, e.id, e.email, val.officeNumber);
                        mgr.getRole();
                        employees.push(mgr);
                        console.log("Employee has been added!");
                        console.log(employees);
                    })
            } else if (val.role == "engineer") {
                return inquirer
                    .prompt(
                        {
                            type: "input",
                            name: "github",
                            message: "What is your GitHub User Name?"
                        }
                    )
                    .then(val => {
                        const eng = new Engineer(e.name, e.id, e.email, val.github);
                        eng.getRole();
                        employees.push(eng);
                        console.log("Employee has been added!");
                        console.log(employees);
                    })
            } else if (val.role == "intern") {
                return inquirer
                    .prompt(
                        {
                            type: "input",
                            name: "school",
                            message: "What school did you go to?"
                        }
                    )
                    .then(val => {
                        const int = new Intern(e.name, e.id, e.email, val.school);
                        int.getRole();
                        employees.push(int);
                        console.log("Employee has been added!");
                        console.log(employees);
                    })
            }
        })
        .then(function () {
            return inquirer
                .prompt(
                    {
                        type: "confirm",
                        name: "anotherEmployee",
                        message: "Would you like to add another employee?"
                    }
                )
        })
        .then(val => {
            if (val.anotherEmployee == true) {
                console.log("Lets add a new employee!");
                getEmployee();
            } else {
                console.log("Employee list has been created!");
                return
            }
        })
}

function promptUser() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            }, {
                type: "input",
                name: "id",
                message: "What is your ID number?"
            }, {
                type: "input",
                name: "email",
                message: "What is your email?"
            }, {
                type: "list",
                name: "role",
                message: "What is your role with the company?",
                choices: [
                    "engineer",
                    "manager",
                    "intern"
                ]
            }
        ])
}












