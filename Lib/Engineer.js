const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        this.title = "Engineer"
        return this.title
    }

    getGithub() {
        return this.github;
    }
}


// var bryce = new Manager(101);
// bryce.getRole();


// console.log(bryce);
// console.log(bryce.getOfficeNumber());


module.exports = Engineer