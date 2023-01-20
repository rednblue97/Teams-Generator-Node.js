//Uses the employee, adds the school and role for the intern with getSchool and getRole
const Employee = require("../lib/employee")

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);

        this.school = school;
    }
    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern";
    }
}
//exports
module.exports = Intern;
