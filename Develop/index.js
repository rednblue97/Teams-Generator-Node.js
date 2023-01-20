//Requires the inquirer package downloaded by npm i
const inquirer = require('inquirer');
const fs = require("fs");
//Generates html template from the source.js file
const generateHTML = require('./src/source.js')

const teamData =[];
//Calling upon the manager, intern, and engineer libraries
const Manager = require('./lib/manager.js');
const Intern = require('./lib/intern.js');
const Engineer = require('./lib/engineer.js');
//Uses async for promises to mnake sure the prompts are answered
const userPrompts = async () => {
const userAnswers = await inquirer
//Prompts for name,id, email and role
    .prompt([
        {
            type:'input',
            message:'What is your name?',
            name:'name',
        },
        {
            type: 'input',
            message:'What is your ID number',
            name:'Id',
        },
        {
            type:'input',
            message:'What is your email?',
            name:'email',
        },
        {
            type:'list',
            message:'What is your role?',
            name:'role',
            choices: ['Engineer','Intern','Manager'],
        },
    ])
//If statements if the user selects intern, manager, and engineer
    //If the user selects intern, it will prompt what school they go to

    if(userAnswers.role === "Intern") {
        const internAw = await inquirer
        .prompt([
            {
                type: 'input',
                message:'What school do you go to?',
                name:'school',
            },
        ]);
        const userIntern = new Intern(
            userAnswers.name,
            userAnswers.Id,
            userAnswers.email,
            internAw.school
        );
        //pushes the collected data
        teamData.push(userIntern);
 //If the user selects the engineer it will prompt for the github username to be deployed in the html
    } else if (userAnswers.role === 'Engineer') {
        const engineerAw = await inquirer
        .prompt([
            {
                type: 'input',
                message:'What is your GitHub username?',
                name:'gitHub',
            },
        ]);
        const userEngineer = new Engineer(
            userAnswers.name,
            userAnswers.Id,
            userAnswers.email,
            engineerAw.gitHub,
        );
        //pushes the collected data
        teamData.push(userEngineer);
    //If the user selects the manager it will prompt for the room number
    } else if (userAnswers.role === 'Manager') {
        const managerAw = await inquirer
        .prompt([
            {
                type:'input',
                message:'What is your room number?',
                name:'roomNumber',
            },
        ]);
        const userManager = new Manager(
            userAnswers.name,
            userAnswers.Id,
            userAnswers.email,
            managerAw.roomNumber
        )
        //pushes the collected data
        teamData.push(userManager);
       
    }
};
//Waits for the prompts to be completed
async function gen() {
    await userPrompts()
//Gives the user after completing one team member, have the option to generate another team member or generate the html
const finalAw = await inquirer
    .prompt([
        {
            type:'list',
            name:'addTeamMember',
            choices:['Add another team member', 'Generate Team'],
            message: "Add another team member or generate team!"
        }
    ]);

//If the user selects to add another team member, it will return to generate another team member, if not, it will create the team
    if (finalAw.addTeamMember === 'Add another team member') {
        return gen()
    }

    return teamCreate();
    
}

gen();
// Generates the html, will be labeled as index.html, collected all the team data
function teamCreate () {
    fs.writeFileSync(
        './index.html',
        generateHTML(teamData),
    )
}
