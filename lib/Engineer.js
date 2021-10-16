// Class inherits from Employee
const Employee = require ("./Employee")

// Define Engineer class 
class Engineer extends Employee { 
    constructor(name, id, email, github) {
        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email 
        this.github = github
    }
    getRole() {
        const role = "Engineer"
        return role
    }
    getGitHub() {
        return this.github
    }
}
// Export Engineer class 
module.exports = Engineer