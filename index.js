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
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the manager's employee ID:"
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email address:"
    },
    {
      type: 'number',
      name: 'officeNum',
      message: "Please enter the manager's office number:"
    }
  ]).then((answers) => {
    // creating a manager object based on user input
    const manager = {
      name: answers.name,
      id: answers.id,
      email: answers.email,
      officeNum: answers.officeNum
    }
    console.log('Manager:', manager)
  })
}

// init function, in this case starting by calling addManager()
function init() {
  addManager()
}

init()