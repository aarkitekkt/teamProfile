const inquirer = require("inquirer");

class Prompt {
    constructor() {

        var empData = inquirer.prompt([
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

        return empData;
    }

    showPrompt() {
        console.log(empData)
    }
}


module.exports = Prompt;