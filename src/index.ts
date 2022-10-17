import inquirer from 'inquirer';

async function calculator() {
  const calculation = await inquirer.prompt([
    {type:"list", name:"type", choices:["add", "subtract", "multiply", "divide"]}
  ])
  const input1 = await inquirer.prompt([
    {type: "number", name:"input", message:"please input number value"}
  ])
  const input2 = await inquirer.prompt([
    {type: "number", name:"input", message:"please input number value"}
  ])
  if(calculation.type==='add'){
    let  val = 0
    let flag = false

    /* let input = await inquirer.prompt([
      {type: "number", name:"input", message:"please input number value"}
    ])

    add += input */
    
    if(!flag){
      let confirmed = await inquirer.prompt([
        {type: "confirm", name:"(y/N)", message:"if you have completed all calculation please select y for yes else select n for No"}
      ])
      if (confirmed['(y/N)']){
        flag = true
      } else
      {
        flag = false
      }
    } else {
      let input = await inquirer.prompt([
        {type: "number", name:"input", message:"please input number value"}
      ])
      val += input['input']
    }

  } else if(calculation.type==='subtract'){
    console.log(input1['input'] - input2['input'])
  } else if(calculation.type==='multiply'){
    console.log(input1['input'] * input2['input'])
  } else if(calculation.type==='divide'){
    console.log(input1['input'] / input2['input'])
  }
}

calculator()

/* const CHOICES = ["add", "sutract", "multiply", "divide" ];

const QUESTIONS = [
  {
    name: 'Caculation Type',
    type: 'list',
    message: 'please select type of caculation you want to proceed',
    choices: CHOICES
  },
  {
    name: 'General Purpose',
    type: 'input',
    message: 'input number value:',
  },
  {
    name: 'General Purpose',
    type: 'input',
    message: 'input number value:',
  }
];


inquirer.prompt(QUESTIONS)
  .then((answers: number) => {
    console.log(answers);
}); */