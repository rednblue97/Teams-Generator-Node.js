//This will be the HTML template
const generateHTML = (team) => {
    const internHTML = (intern) => {
        return`
        <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
        <p class="card-text">ID: ${intern.getId()}</p>
        <a href="#" class="card-link">${intern.getEmail()}</a>
        <a href="#" class="card-link">${intern.getSchool()}</a>
      </div>`
    }


    const engineerHTML = (engineer) => {
        return`
        <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
        <p class="card-text">ID: ${engineer.getId()}</p>
        <a href="#" class="card-link">${engineer.getEmail()}</a>
        <a href="#" class="card-link">${engineer.getGitHub()}</a>
      </div>
        `
    }

    const managerHTML = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
        <p class="card-text">ID: ${manager.getId()}</p>
        <a href="#" class="card-link">${manager.getEmail()}</a>
        <a href="#" class="card-link">${manager.getRoomNumber()}</a>
      </div>`
    }

    const html = [];

    html.push(
        team
        .filter((employee) => employee.getRole() === 'Intern')
        .map((intern) => internHTML(intern))
        .join('')
    )
    html.push(
        team
        .filter((employee) => employee.getRole() === 'Engineer')
        .map((engineer) => engineerHTML(engineer)) 
        .join('')
    )
    html.push(
        team
        .filter((employee) => employee.getRole() === 'Manager')
        .map((manager) => managerHTML(manager))
    )
    return html.join('')
    }

    module.exports = (team) => {
        return`
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Bootstrap demo</title>
</head>
<body>
<header class="p-5 mb-4 header bg-light">
<div class="container">
  <h1 class="display-4"> TEAM </h1>
        ${generateHTML(team)}
        </div>
        </body>
        </html>
        `
    }


