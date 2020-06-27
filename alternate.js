const inquirer = require("inquirer");
const fs = require("fs");

async function mainApp() {
    var response = await inquirer.prompt(
    {
        type: "input",
        message: "What is your username?",
        name: "username"
    },
        {
        type: "list",
        message: "What file type would you like to create?",
        name: "filename",
        choices: ["README.md", "index.html"]
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "How would you describe this project?",
        name: "description"
    },
    {
        type: "checkbox",
        message: "What content would you like to include?",
        name: "content",
        choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"]
    },
    {
        type: "input",
        message: "What application(s) is/are required?",
        name: "Installation"
    },
    {
        type: "input",
        message: "How is this application used?",
        name: "Usage"
    },
    {
        type: "list",
        message: "Choose a license:",
        name: "License",
        choice: ["MIT License", "GNU GPLv3", "No License"]
    },
    {
        type: "input",
        message: "Who are the additional contributing members?",
        name: "Contributing"
    },
    {
        type: "input",
        message: "How will this application be used?",
        name: "Tests"
    },
    {
        type: "input",
        message: "How can you be contacted for inquiries?",
        name: "Questions"
    }
)};