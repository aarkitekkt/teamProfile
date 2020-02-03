const inquirer = require("./node_modules/inquirer/lib/inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const Prompt = require("./lib/Prompt")

const employees = [];

promptUser();

function promptUser() {
    inquirer
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
        .then(val => {
            var e = new Employee(val.name, val.id, val.email);
            employees.push(e);
            console.log(employees);
        })
}














