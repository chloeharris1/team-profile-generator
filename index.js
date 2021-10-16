const inquirer = require("inquirer")
const fs = require("fs")

// Require Employee classes 
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// Require Generate HTML
const GenerateHtml = require("./lib/generateHTML")

// Create arrays to store user input 
let managerArr = []
let engineerArr = []
let internArr = []


// Inquirer Prompt, Manager Info
const start =() => {
    inquirer.prompt([
        {
        type: "input",
        message: "Enter the team manager’s name",
        name: "managerName" 
        },
        {
        type: "input",
        message: "Enter their employee id",
        name: "managerID" 
        },
        {
        type: "input",
        message: "Enter their email address",
        name: "managerEmail" 
        },
        {
        type: "input",
        message: "Enter their office number",
        name: "officeNumber" 
        }
    // Push User input to Manager Array 
    ]).then(managerAns => {
        const newManager = new Manager(managerAns.managerName, managerAns.managerID, managerAns.managerEmail, managerAns.officeNumber)
        managerArr.push(newManager)
        // Write to HTML
        GenerateHtml.writeManager(managerArr)
        // Proceed to next step
        nextStep()
    })
}

// Start Inquirer Prompt 
start()

// Provide User a menu with the option to add an engineer or an intern or to finish building their team using nextStep
const nextStep = () => {
    inquirer.prompt([
        {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add an Engineer", "Add an Intern", "Finish"],
        name: "nextStepChoice"
        },
        // If statement for User choice
    ]).then(nextStepAns => {
        if(nextStepAns.nextStepChoice === "Finish") {
            GenerateHtml.writeFooter()
            console.log("Goodbye")
        }
        if(nextStepAns.nextStepChoice === "Add an Engineer") {
            addEngineer()
        }
        if(nextStepAns.nextStepChoice === "Add an Intern") {
            addIntern()
        }
    })
}

// Inquirer Prompt, Engineer Input
const addEngineer = () => {
    inquirer.prompt([
        {
        type: "input",
        message: "Enter engineer's name",
        name: "engineerName",
        },
        {
        type: "input",
        message: "Enter their employee id",
        name: "engineerID",
        },
        {
        type: "input",
        message: "Enter their email address",
        name: "engineerEmail",
        },
        {
        type: "input",
        message: "Enter their GitHub username",
        name: "engineerGitHub",
        }
    // Push User input to Engineer Array 
    ]).then(engineerAns => {
        const newEngineer = new Engineer(engineerAns.engineerName, engineerAns.engineerID, engineerAns.engineerEmail, engineerAns.engineerGitHub)
        engineerArr.push(newEngineer)
    })
}

// Inquirer Prompt, Intern Input
const addIntern = () => {
    inquirer.prompt([
        {
        type: "input",
        message: "Enter intern's name",
        name: "internName",
        },
        {
        type: "input",
        message: "Enter their employee id",
        name: "internID",
        },
        {
        type: "input",
        message: "Enter their email address",
        name: "internEmail",
        },
        {
        type: "input",
        message: "Enter their school",
        name: "internSchool",
        }
    // Push User input to Intern Array 
    ]).then(internAns => {
        const newIntern = new Intern(internAns.internName, internAns.internID, internAns.internEmail, internAns.internSchool)
        internArr.push(newIntern)
    })
}