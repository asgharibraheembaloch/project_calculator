import inquirer from 'inquirer';

async function calculator() {
  let count = 0;
  let totals = 0;
  let values:number[] = [];
  let calc_done = false

  const calculation = await inquirer.prompt([
    { type: "list", name: "type", choices: ["add", "subtract", "multiply", "divide"] }
  ])

  while (!calc_done) {

    let input = await inquirer.prompt([
      { type: "number", name: "input", default: 0, message: "please input number value" }
    ])

    count += 1
    values.push(input['input'])
    
    if (count >= 2) {
      let confirmed = await inquirer.prompt([
        { type: "confirm", name: "(y/N)", message: "if you have completed all calculation please select y for yes else select n for No" }
      ])
      if (confirmed['(y/N)']) {
        switch (calculation.type) {
          case 'add':
            totals = values.reduce((total, val)=>total+val)
            break;        
          case 'subtract':
            totals = values.reduce((total, val)=>total-val)
            break;
          case 'multiply':
            totals = values.reduce((total, val)=>total*val)
            break;
          case 'divide':
            totals = values.reduce((total, val)=>total/val)
            break
        }
        calc_done = true
      } else {
        false
      }
    }
  }
  console.log(totals)
}

calculator()