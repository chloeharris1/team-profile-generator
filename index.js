// Required Packages
const inquirer = require("inquirer")
const fs = require("fs")

// Require Employee classes 
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// Require Generate HTML
const GenerateHtml = require("./util/generateHtml")

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
        // GenerateHtml.generateTeam(managerArr)
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
        choices: ["Add an Engineer", "Add an Intern", "Quit"],
        name: "nextStepChoice"
        },
        // If statement for User choice
    ]).then(nextStepAns => {
        if(nextStepAns.nextStepChoice === "Quit") {
            // GenerateHtml.writeFooter()
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
        // Ask User if they want to add another Engineer
        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to add another engineer?",
                choices: ["Yes", "No"],
                name: "engineerChoice",
            }
            // If 'yes', start add Engineer prompt again
        ]).then(engineerChoiceAns => {
            if (engineerChoiceAns.engineerChoice === "Yes") {
                addEngineer()
            }
            // If 'no', write Engineer array to HTML
            if (engineerChoiceAns.engineerChoice === "No") {
                // GenerateHtml.generateTeam(engineerArr)
                engineerArr = []
                // Ask User what they want to do next
                inquirer.prompt([
                    {
                        type: "list",
                        message: "What would you like to do?",
                        choices: ["Add an Intern", "Quit"],
                        name: "endEngineer"
                    }
                    // If User selects add an Intern, start Intern prompt. If User selects quit, generate HTML 
                ]).then(endEngineerAns => {
                    if (endEngineerAns.endEngineer === "Quit") {
                        // GenerateHtml.writeFooter()
                        console.log("Goodbye")
                    }
                    if (endEngineerAns.endEngineer === "Add an Intern") {
                        addIntern()
                    }
                })
            }
        })
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
        // Ask User if they want to add another Intern
        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to add another intern?",
                choices: ["Yes", "No"],
                name: "internChoice"
            }
           // If 'yes', start add Intern prompt again
        ]).then(internChoiceAns =>{
            if (internChoiceAns.internChoice === "Yes") {
                addIntern()
            }
            // If 'no', write Intern array to HTML
            if (internChoiceAns.internChoice === "No") {
                // GenerateHtml.generateTeam(internArr)
                internArr = []
                // Ask User what they want to do next
                inquirer.prompt([
                    {
                        type: "list",
                        message: "What would you like to do?",
                        choices: ["Enter an Engineer", "Quit"],
                        name: "endIntern"
                    }
                    // If User selects add an Engineer, start Engineer prompt. If User selects quit, generate HTML 
                ]).then(endInternAns =>{
                    if (endInternAns.endIntern === "Enter an Engineer") {
                        addEngineer()
                    }
                    if (endInternAns.endIntern === "Quit") {
                        // GenerateHtml.writeFooter()
                        console.log("Goodbye")
                    }
                })
            }
        })
    })
}    