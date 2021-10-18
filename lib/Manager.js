// Manager class inherits from Employee class
const Employee = require ("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) 
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}
// Export Manager class 
module.exports = Manager