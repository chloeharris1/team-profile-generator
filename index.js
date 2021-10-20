// Required packages
const inquirer = require('inquirer');

// Importing employee class files
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = require('./util/generateHtml');
const fs = require('fs');

// Employees array
const employees = []

// Start prompts, request manager information 
function startManager() {
    inquirer.prompt([
       {
            type: 'input',
            name: 'name',
            message: 'Enter the team manager\’s name',  
       }, 
       {
            type: 'input',
            name: 'id',
            message: 'Enter their employee id',  
       },
       {
            type: 'input',
            name: 'email',
            message: 'Enter their email address',  
       },
       {
            type: 'input',
            name: 'office',
            message: 'Enter their office number',  
       },
    // Push manager information into Employees array
    ]).then(({name, id, email, office}) => {
        employees.push(new Manager(name, id, email, office));
        menu();
    });
};
// Give user the option to continue building their team
function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next?',
            choices: ['Add Engineer', 'Add Intern', 'Finish building team'],  
       },  
    ]).then(answers => {
        switch (answers.menu) {
            case 'Add Engineer':
                getEngineer();
                break;
            case 'Add Intern':
                getIntern();
                break;
            default: 
                init();
                break;
        };
    });
};
// Add Engineer(s)
function getEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineer\'s name', 
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the engineer\'s employee id',  
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineer\'s email',  
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the engineer\'s github username',  
        },
    // Push engineer information into Employees array
    ]).then(({name, id, email, github}) => {
        employees.push(new Engineer(name, id, email, github));
        menu();  
    });
};
// Add Intern(s)
function getIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the intern\'s name',  
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the intern\'s employee id',  
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the intern\'s email',  
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the intern\'s school',  
        },
    // Push intern information into Employees array
    ]).then(({name, id, email, school}) => {
        employees.push(new Intern(name, id, email, school));
        menu();  
    });
};

// Write Employee array data to HTML file
function init() {
    fs.writeFile('./dist/Employees.html', team(employees), (err) => err ? console.log(err) : console.log('Success!'));
};

startManager();
