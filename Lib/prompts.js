const employeePrompts = [
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
            "intern"
        ]
    }];

const managerPrompt = [
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
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    }];

const internPrompt =
{
    type: "input",
    name: "school",
    message: "What school did you attend?"
};

const engineerPrompt =
{
    type: "input",
    name: "github",
    message: "What is your GitHub user name?"
};

const anotherEmployee =
{
    type: "confirm",
    name: "anotherEmployee",
    message: "Would you like to add another employee?"
};

const prompts = { employeePrompts, managerPrompt, internPrompt, engineerPrompt, anotherEmployee }


module.exports = prompts;