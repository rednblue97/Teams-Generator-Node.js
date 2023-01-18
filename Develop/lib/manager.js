const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor(name,id,email,roomNumber) {
        super(name,id,email)

        this.roomNumber = roomNumber;
    }    

    getRoomNumber() {
        return this.roomNumber
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;