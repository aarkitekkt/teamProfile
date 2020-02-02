const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        this.title = "Intern"
        return this.title
    }

    getSchool() {
        return this.school;
    }
}


// var bryce = new Intern("UofU");
// bryce.getRole();


// console.log(bryce);
// console.log(bryce.getRole());
// console.log(bryce.getSchool());


module.exports = Intern