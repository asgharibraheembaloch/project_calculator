import inquirer from 'inquirer';

async function calculator() {
  let count = 0
  let val = 0
  let calc_done = false

  const calculation = await inquirer.prompt([
    { type: "list", name: "type", choices: ["add", "subtract", "multiply", "divide"] }
  ])

  while (!calc_done) {

    let input = await inquirer.prompt([
      { type: "number", name: "input", default: 0, message: "please input number value" }
    ])

    count += 1

    if (calculation.type === 'add') {
      val += +input['input']
    } else if (calculation.type === 'subtract') {
      val -= input['input']
    } else if (calculation.type === 'multiply') {
      val *=  input['input']
    } else if (calculation.type === 'divide') {
      val /=  input['input']
    }
    console.log(count)
    if (count >= 2) {
      let confirmed = await inquirer.prompt([
        { type: "confirm", name: "(y/N)", message: "if you have completed all calculation please select y for yes else select n for No" }
      ])
      if (confirmed['(y/N)']) {
        calc_done = true
      } else {
        false
      }
    }
  }
  console.log(val)
}

calculator()