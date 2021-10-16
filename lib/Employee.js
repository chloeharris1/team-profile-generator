// Define Employee class
class Employee {
    constructor (name, id, email) {
       this.name = name;
       this.id = id;
       this.email = email; 
    }
    getName() {
        this.name
    }
    getId() {
        this.id
    }
    getEmail() {
        this.email
    }
    getRole() {
        const role = "Employee"
        return role
    }
}

// Export Employee class
module.exports = Employee 