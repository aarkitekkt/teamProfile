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



getEmployee();



function buildTeam() {

    const html = generateHTML(employees);

    writeFileAsync("./output/team.html", html);

    console.log("team page built!")

}

//Function to build array of employees from user input.
async function getEmployee() {

    await promptUser()
        .then(val => {
            let e = new Employee(val.name, val.id, val.email);
            if (val.role === "manager") {
                return inquirer.prompt(prompts.managerPrompt)
                    .then(val => {
                        const mgr = new Manager(e.name, e.id, e.email, val.officeNumber);
                        mgr.getRole();
                        employees.push(mgr);
                    })

            } else if (val.role === "engineer") {
                return inquirer
                    .prompt(prompts.engineerPrompt)
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
        .then(() => {
            return inquirer.prompt(prompts.anotherEmployee)
        })
        .then(val => {
            if (val.anotherEmployee == true) {
                console.log("Lets add a new employee!");
                getEmployee();
            } else {
                console.log("Employee list has been created!");
                console.log(employees);
                buildTeam();
            }
        })
}

//function to ask user questions to gather employee information.
function promptUser() {
    return inquirer.prompt(prompts.employeePrompts)
}

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
    <h1 id="headerText">TEAM</h1>
    <div id="employeeCards" class="row">
    ${team.map(generateCard).join('')}
    </div>
    </body>
</html>`
}

function generateCard(emp) {
    if (emp.title === "Engineer") {
        return `
    <div class="col s12 m6 l4">
            <div class="card hoverable" style="border-radius: 25px;">
                <div class="blue-grey darken-2 center-align white-text"
                    style="padding: 75px; border-radius: 25px; border: 15px solid white;">
                    <img src="../assets/devIcon.png" alt="">
                    <h4 id="name" style="margin-bottom: 15px;">${emp.name}</h4>
                    <h5>${emp.title}</h5>

                </div>
                <div class="card-content">
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
            <div class="card hoverable" style="border-radius: 25px;">
                <div class="blue-grey darken-4 center-align white-text"
                    style="padding: 75px; border-radius: 25px; border: 15px solid white;">
                    <img src="../assets/devIcon.png" alt="">
                    <h4 id="name" style="margin-bottom: 15px;">${emp.name}</h4>
                    <h5>${emp.title}</h5>

                </div>
                <div class="card-content">
                    <ul>
                        <li id="id">id: ${emp.id}</li>
                        <li id="email">email: ${emp.email}</li>
                        <li id="school">school: ${emp.school}</li>
                    </ul>
                </div>
            </div>
        </div>`
    } else if (emp.title === "Manager") {
        return `
    <div class="col s12 m6 l4">
            <div class="card hoverable" style="border-radius: 25px;">
                <div class="blue-grey lighten-1 center-align white-text"
                    style="padding: 75px; border-radius: 25px; border: 15px solid white;">
                    <img src="../assets/devIcon.png" alt="">
                    <h4 id="name" style="margin-bottom: 15px;">${emp.name}</h4>
                    <h5>${emp.title}</h5>

                </div>
                <div class="card-content">
                    <ul>
                        <li id="id">id: ${emp.id}</li>
                        <li id="email">email: ${emp.email}</li>
                        <li id="office">office number: ${emp.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>`
    } else {
        return "Damn"
    }

}


