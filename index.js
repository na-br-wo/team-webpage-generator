// importing the required modules
const fs = require('fs')
const inquirer = require('inquirer')

// empty array containing team members
const teamRoster = []

// regex function used to validate email addresses
const validateEmail = (input) => {
  // regex for validating email addresses
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (regex.test(input)) {
    return true
  }
  return 'Please enter a valid email address'
}

// function to add team manager
function addManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Welcome to the Team Webpage Generator!\nPlease enter the team manager's name:"
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the manager's employee ID:"
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email address:",
      validate: validateEmail
    },
    {
      type: 'number',
      name: 'officeNum',
      message: "Please enter the manager's office number:",
    }
  ]).then((answers) => {
    // creating a manager object based on user input
    const manager = {
      name: answers.name,
      id: answers.id,
      email: answers.email,
      officeNum: answers.officeNum
    }
    // adding manager to teamRoster array
    teamRoster.push(manager)
    console.log('Manager:', manager)
    console.log(teamRoster)
  })
}

// init function, in this case starting by calling addManager()
function init() {
  addManager()
}

init()