  
const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {Table} = require('console-table-printer')
const { printTable } = require('console-table-printer');


function getTitle(){
    return chalk.blueBright(
        figlet.textSync(
            "Tip Calculator",
            {
                horizontalLayout: 'default',
                verticallayout: 'default',
                font: 'Nancyj-Underlined'
            }

        )
    )
}

function getTable(list){
    const bill = list.BillAmount
    const tip1 = list.Tip1
    const tip2 = list.Tip2
    const total = list.Total
    return [
        {'Bill Amount': bill, 'Tip (%)': tip1, "Tip": tip2, Total:total},
    ]
}

function firstInput(inp){
    const {input} = inp
    const message = "Bill amount?"
    return inquirer.prompt([
        {
            name: "input",
            type: "number",
            message: message,
            default: input,
            validate: function(val){
                if(val ==! "number" || val < 0){
                    return "Please enter a valid number"
                } else {
                    return true
                }
            }
        }
    ])
}

function secondInput(inp){
    const {input} = inp
    const message = "Tip(%)"
    return inquirer.prompt([
        {
            name: "input",
            type: "number",
            message: message,
            default: input,
            validate: function(val){
                if(val ==! "number" || val > 100 || val < 1){
                    return "Please enter a valid number"
                } else {
                    return true
                }
            }
        }
    ])
}


function view(list){
    return{
        title: getTitle(),
        table: getTable(list)
    }
}

module.exports = {
    getTitle,
    getTable,
    view,
    firstInput,
    secondInput,

}
