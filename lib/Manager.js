// Manager class inherits from Employee class
const Employee = require ("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) 
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNumber
    }
    getRole() {
        const role = "Manager"
        return role 
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}
// Export Manager class 
module.exports = Manager