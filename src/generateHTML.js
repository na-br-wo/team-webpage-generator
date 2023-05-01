// the generateHTML function takes in teamRoster array as an arg
function generateHTML(teamRoster) {
  // using .map method, will loop through the function for every
  // object in the array
  // teamHTML will be the large template literal that will contain
  // all employee's cards, employeeCardHTML is each individual team member's
  // info as a card
  const teamHTML = teamRoster.map(employee => {
    // creating a card <div> element, starting with the basic info -- name, ID, email -- that
    // every employee has
    let employeeCardHTML = `
      <div id="card">
        <h2>${employee.name}</h2>
        <p>ID: ${employee.id}</p>
        <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
    `

    // now adding a series of if statements that add a template literal to the card
    // if other conditions (like having .github value) are present
    if (employee.officeNum) {
      employeeCardHTML += `<p>Office Number: ${employee.officeNum}</p>`
    }
    if (employee.github) {
      employeeCardHTML += `<p>Github: <a href="https://github.com/${employee.github}">${employee.github}</a></p>`
    }
    if (employee.school) {
      employeeCardHTML += `<p>School: ${employee.school}</p>`
    }

    // closing the card div with another template literal
    employeeCardHTML += `</div>`
    return employeeCardHTML
  }).join("") // using the .join method to combine strings into a single string

  // now returning the HTML doc with teamHTML inserted
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Project Team</title>
      </head>
      <body>
        <h1>Project Team</h1>
        ${teamHTML}
      </body>
    </html>
  `
}


module.exports = generateHTML