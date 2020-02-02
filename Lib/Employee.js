class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee"
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.title;
    }
}

const bryce = new Employee("bryce", 1, "bryce@bryce.com");

console.log(bryce.getName());
console.log(bryce.getId());
console.log(bryce.getEmail());
console.log(bryce.getRole());



// const inquirer = require("../node_modules/inquirer")

// const prompts = function promptUser() {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your name?"
//         }, {
//             type: "input",
//             name: "id",
//             message: "What is your ID number?"
//         }, {
//             type: "input",
//             name: "email",
//             message: "What is your email?"
//         }, {
//             type: "list",
//             name: "role",
//             message: "What is your role with the company?",
//             choices: [
//                 "engineer",
//                 "manager",
//                 "intern"
//             ]
//         }
//     ]);
// }
