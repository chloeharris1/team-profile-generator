// Engineer class inherits from Employee class
const Employee = require ("./Employee")

// Define Engineer class 
class Engineer extends Employee { 
    constructor(name, id, email, github) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email; 
        this.github = github;
        this.role = "Engineer"
    }
    getGithub() {
        return this.github
    }
}
// Export Engineer class 
module.exports = Engineer