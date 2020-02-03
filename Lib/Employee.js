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

// const bryce = new Employee("bryce", 5, "bryce@bryce.com");

// console.log(bryce);

module.exports = Employee;