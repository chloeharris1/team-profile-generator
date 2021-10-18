// Intern class inherits from Employee class
const Employee = require ("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email; 
        this.school = school;
        this.role = "Intern"
    }
    getSchool() {
        return this.school
    }
}
// Export Intern class 
module.exports = Intern