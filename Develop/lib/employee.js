//Librarie that is the parent for name,id, and email. These functions will be used for the Engineer,Intern, and Manager
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
    return "Employee"
}

}
//Exports
module.exports = Employee
