// importing the required modules
const fs = require('fs')
const inquirer = require('inquirer')

// empty array containing team members
const teamRoster = []

// initial function to add team manager
function addManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Welcome to the Team Webpage Generator!\nPlease enter the team manager's name:"
    }
  ]).then((answers) => {
    console.log(`Hello, ${answers.name}!`)
  })
}

// init function, in this case starting by calling addManager()
function init() {
  addManager()
}

init()