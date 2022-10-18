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

  let calc_done = false


  while (!calc_done) {
    let val = 0
    let confirmed = await inquirer.prompt([
      {type: "confirm", name:"(y/N)", message:"if you have completed all calculation please select y for yes else select n for No"}
    ])
    if (confirmed['(y/N)']){
      calc_done = true
    } else {
      let input = await inquirer.prompt([
        {type: "number", name:"input",default:0, message:"please input number value"}
      ])
      if(calculation.type==='add'){
        val += input['input']
      } else if(calculation.type==='subtract'){
        val -= input['input']
      } else if(calculation.type==='multiply'){
        val *= input['input']
      } else if(calculation.type==='divide'){
        (input1['input'] / input2['input'])
        calc_done = true
      }
      val += input['input']
      calc_done = false
    }
  }  
}

calculator()