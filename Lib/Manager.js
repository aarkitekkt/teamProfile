const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        this.title = "Manager"
        return this.title
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}




// var bryce = new Manager(101);
// bryce.getRole();


// console.log(bryce);
// console.log(bryce.getOfficeNumber());


module.exports = Manager