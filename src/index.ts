import inquirer from 'inquirer';
import * as fs from 'fs';

const CHOICES = fs.readdirSync(`./templates`);

const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input: string) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];


inquirer.prompt(QUESTIONS)
  .then((answers: string) => {
    console.log(answers);
});