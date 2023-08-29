#! /usr/bin/env node   
//shebange path for environment
//import libraries
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkanimation.rainbow("Let's start calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.greenBright `
    _____________________
    |  _________________  |
    | | Aziz        0.  | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    `);
}
;
await welcome();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            choices: ["(+) Addition", "(-) Substraction", "(*) Multiplication", "(/) Division", "(**) Exponentiation", "(%) Module"],
            message: "Which operation you want to perform? \n",
        },
        {
            type: "number",
            name: "num1",
            message: "enter you first number: ",
        },
        {
            type: "number",
            name: "num2",
            message: "enter you second number: ",
        },
    ]);
    if (answers.operator === "(+) Addition") {
        console.log(chalk.yellowBright(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator === "(-) Substraction") {
        console.log(chalk.yellowBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator === "(*) Multiplication") {
        console.log(chalk.yellowBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator === "(/) Division") {
        console.log(chalk.yellowBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    else if (answers.operator === "(**) Exponentiation") {
        console.log(chalk.yellowBright(`${answers.num1} ** ${answers.num2} = ${answers.num1 ** answers.num2}`));
    }
    else if (answers.operator === "(%) Module") {
        console.log(chalk.yellowBright(`${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2}`));
    }
}
;
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue press y or n enter: "
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
