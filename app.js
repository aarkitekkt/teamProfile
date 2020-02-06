const inquirer = require("./node_modules/inquirer/lib/inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const prompts = require("./lib/prompts")

const employees = [];

// Run the app.
buildTeam();



// Function to build array of employees from user input.
function buildTeam() {

    promptManager()
        .then(() => promptEmployees())

}

function promptManager() {
    console.log("Hi! Let's add information about the manager.")
    return inquirer.prompt(prompts.managerPrompt)
        .then(val => {
            const mgr = new Manager(val.name, val.id, val.email, val.officeNumber);
            mgr.getRole();
            employees.push(mgr);
            console.log("Now let's add some employees.")
        })
}

// Function to ask user questions to gather employee information.
function promptEmployees() {
    return inquirer.prompt(prompts.employeePrompts)
        .then(val => {
            let e = new Employee(val.name, val.id, val.email);
            if (val.role === "engineer") {
                return inquirer.prompt(prompts.engineerPrompt)
                    .then(val => {
                        const eng = new Engineer(e.name, e.id, e.email, val.github);
                        eng.getRole();
                        employees.push(eng);
                    })
            } else if (val.role === "intern") {
                return inquirer.prompt(prompts.internPrompt)
                    .then(val => {
                        const int = new Intern(e.name, e.id, e.email, val.school);
                        int.getRole();
                        employees.push(int);
                    })
            }
        })
        // Ask user if they want to add another employee, if "no" then generate html from array
        .then(() => {
            return inquirer.prompt(prompts.anotherEmployee)
        })
        .then(val => {
            if (val.anotherEmployee == true) {
                console.log("Great, who's next?");
                promptEmployees();
            } else {
                console.log("Employee list has been created!");
                console.log(employees);
                writeHTML();
            }
        })
}

// Function to write html document from employees array
function writeHTML() {

    const html = generateHTML(employees);

    writeFileAsync("./output/team.html", html);

    console.log("team page built!")

}

// HTML template that will be used to write file.
function generateHTML(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
    <div class="container-fluid blue-grey lighten-4 z-depth-2">
    <h1 class="center-align blue-grey-text" style="padding: 50px; margin-top: 0px;">Team Profile</h1>
    </div>
    <div id="employeeCards" class="row">
    ${team.map(generateCard).join('')}
    </div>
    </body>
</html>`
}

// Function to generate an html card for every employee in array based on employee type.
function generateCard(emp) {
    if (emp.title === "Engineer") {
        return `
    <div class="col s12 m6 l4">
        <div class="card hoverable" style="border-radius: 5px;">
            <div class="blue-grey darken-2 center-align white-text"
                style="padding: 75px; border-radius: 25px; border: 15px solid white;">
                <h4 id="name" style="margin-bottom: 15px;">${emp.name}</h4>
                <h5>${emp.title}</h5>

            </div>
            <div class="card-content" style="padding: 5px 20px;">
                <ul>
                    <li id="id">id: ${emp.id}</li>
                    <li id="email">email: ${emp.email}</li>
                    <li id="github">github: ${emp.github}</li>
                </ul>
            </div>
        </div>
    </div>`
    } else if (emp.title === "Intern") {
        return `
        <div class="col s12 m6 l4">
        <div class="card hoverable" style="border-radius: 5px;">
            <div class="blue-grey darken-4 center-align white-text"
                style="padding: 75px; border-radius: 25px; border: 15px solid white;">
                <h4 id="name" style="margin-bottom: 15px;">${emp.name}</h4>
                <h5>${emp.title}</h5>

            </div>
            <div class="card-content" style="padding: 5px 20px;">
                <ul>
                    <li id="id">id: ${emp.id}</li>
                    <li id="email">email: ${emp.email}</li>
                    <li id="github">school: ${emp.school}</li>
                </ul>
            </div>
        </div>
    </div>`
    } else if (emp.title === "Manager") {
        return `
        <div class="col s12 m6 l4">
        <div class="card hoverable" style="border-radius: 5px;">
            <div class="blue-grey lighten-1 center-align white-text"
                style="padding: 75px; border-radius: 25px; border: 15px solid white;">
                <h4 id="name" style="margin-bottom: 15px;">${emp.name}</h4>
                <h5>${emp.title}</h5>

            </div>
            <div class="card-content" style="padding: 5px 20px;">
                <ul>
                    <li id="id">id: ${emp.id}</li>
                    <li id="email">email: ${emp.email}</li>
                    <li id="github">office number: ${emp.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`
    } else {
        return "Damn"
    }

}


