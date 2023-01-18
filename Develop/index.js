const inquirer = require('inquirer');
const fs = require("fs");
const generateHTML = require('./src/source.js')

const teamData =[];

const Manager = require('./lib/manager.js');
const Intern = require('./lib/intern.js');
const Engineer = require('./lib/engineer.js');

const userPrompts = async () => {
const userAnswers = await inquirer
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
        teamData.push(userIntern);

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
        teamData.push(userEngineer);
    
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
        teamData.push(userManager);
       
    }
};

async function gen() {
    await userPrompts()

const finalAw = await inquirer
    .prompt([
        {
            type:'list',
            name:'addTeamMember',
            choices:['Add another team member', 'Generate Team'],
            message: "Add another team member or generate team!"
        }
    ]);

    if (finalAw.addTeamMember === 'Add another team member') {
        return gen()
    }

    return teamCreate();
    
}

gen();

function teamCreate () {
    fs.writeFileSync(
        './index.html',
        generateHTML(teamData),
    )
}