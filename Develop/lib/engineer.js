// Calls upon the employee library used, gets the github and role for engineer
const Employee = require("../lib/employee");

class Enigneer extends Employee {
    constructor(name,id,email,gitHub) {
        super(name,id,email);

        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub
    }

    getRole() {
        return "Engineer";
    }
}
//exports
module.exports = Enigneer; 
