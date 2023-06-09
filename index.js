// importing the required modules
const fs = require('fs')
const generateHTML = require('./src/generateHTML')
const inquirer = require('inquirer')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

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
      message: "Please enter the manager's office number:"
    }
  ]).then((answers) => {
    // creating a manager object based on user input
    const manager = new Manager(
      answers.name, 
      answers.id, 
      answers.email, 
      answers.officeNum
      )
    // adding manager to teamRoster array
    teamRoster.push(manager)
    // after manager info is entered, calling the addEmployee function
    addEmployee()
  })
}

// function to allow user to choose to add another employee
function addEmployee() {
  inquirer.prompt({
    type: 'list',
    name: 'employeeChoice',
    message: 'Select which type of employee you wish to add to the team:',
    choices: [
      'Engineer',
      'Intern',
      'Exit',
    ],
  }).then((answers) => {
    // using a switch statement two employee options and exit
    switch (answers.employeeChoice) {
      case 'Engineer':
        addEngineer()
        break
      case 'Intern':
        addIntern()
        break
      case 'Exit':
        console.log('Generating index.html file in ./dist directory...')
        // fs code that writes the HTML file
        fs.writeFile('./dist/index.html', generateHTML(teamRoster), (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!'))
        // returns from the function, ends program
        return
      default:
        console.log('Invalid choice')
        addEmployee()
    }
  })
}

// functions for the two employee types, which are called in addEmployee() switch statement
function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Please enter the engineer's name:"
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the engineer's employee ID:"
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the engineer's email address:",
      validate: validateEmail
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the engineer's Github username:"
    }
  ]).then((answers) => {
    // creating an engineer object based on user input
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    )
    // adding engineer to teamRoster array
    teamRoster.push(engineer)
    // after engineer info is entered, calling the addEmployee function
    addEmployee()
  })
}

function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Please enter intern's name:"
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the intern's employee ID:"
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the intern's email address:",
      validate: validateEmail
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter the intern's school:"
    }
  ]).then((answers) => {
    // creating an intern object based on user input
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    )
    // adding manager to teamRoster array
    teamRoster.push(intern)
    // after intern info is entered, calling the addEmployee function
    addEmployee()
  })
}

// init function, in this case starting by calling addManager()
function init() {
  addManager()
}

init()