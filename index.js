#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { clear } from "console";
var end = () => {
    return new Promise((res) => { setTimeout(res, 4000); });
};
async function justBegining() {
    var mix = chalkAnimation.neon(`
     ---------------------------------------------------------------------------------------------------
    |***************************************************************************************************|
    |*****************************WELCOME!ARE YOU READY FOR CALCULATIONS********************************|
    |***************************************************************************************************|
    |*********************************CLI CALCULATOR APPLICATION****************************************|
     ---------------------------------------------------------------------------------------------------
    `);
    await end();
    mix.stop();
}
async function questions() {
    var answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.blueBright("Which Operation you want to Performed??"),
            choices: ["1.Addition", "2.Subtraction", "3.Multiplication", "4.Division", "5.Modulas", "6.Square",
                "7.Cube", "8.Negation", "9.Reciprocal", "10.Squre Root"]
        },
        {
            type: "number",
            name: "fnum",
            message: chalk.blueBright("Enter your First Number: ")
        },
        {
            type: "number",
            name: "snum",
            message: chalk.blueBright("Enter your Second Number: ")
        }
    ]);
    var end1 = () => {
        return new Promise((res) => { setTimeout(res, 2000); });
    };
    var mix = chalkAnimation.glitch(`  Calculating Results...`);
    await end1();
    mix.stop();
    if (answers.operator == "1.Addition") {
        console.log(chalk.greenBright(`  ${answers.fnum} + ${answers.snum} = ${answers.fnum + answers.snum}`));
    }
    else if (answers.operator == "2.Subtraction") {
        console.log(chalk.greenBright(`  ${answers.fnum} - ${answers.snum} = ${answers.fnum - answers.snum}`));
    }
    else if (answers.operator == "3.Multiplication") {
        console.log(chalk.greenBright(`  ${answers.fnum} * ${answers.snum} = ${answers.fnum * answers.snum}`));
    }
    else if (answers.operator == "4.Division") {
        if (answers.snum == 0) {
            answers.snum = 1;
        }
        console.log(chalk.greenBright(`  ${answers.fnum} / ${answers.snum} = ${answers.fnum / answers.snum}`));
    }
    else if (answers.operator == "5.Modulas") {
        console.log(chalk.greenBright(`  ${answers.fnum} %  ${answers.snum} = ${answers.fnum % answers.snum}`));
    }
    else if (answers.operator == "6.Square") {
        console.log(chalk.greenBright(`  Square of ${answers.fnum} = ${answers.fnum * answers.fnum}`));
        console.log(chalk.greenBright(`  Square of ${answers.snum} = ${answers.snum * answers.snum}`));
    }
    else if (answers.operator == "7.Cube") {
        console.log(chalk.greenBright(`  Cube of ${answers.fnum} = ${answers.fnum * answers.fnum * answers.fnum}`));
        console.log(chalk.greenBright(`  Cube of ${answers.snum} = ${answers.snum * answers.snum * answers.snum}`));
    }
    else if (answers.operator == "8.Negation") {
        console.log(chalk.greenBright(`  Negation of ${answers.fnum} = ${-1 * answers.fnum}`));
        console.log(chalk.greenBright(`  Negation of ${answers.snum} = ${-1 * answers.snum}`));
    }
    else if (answers.operator == "9.Reciprocal") {
        console.log(chalk.greenBright(`  Reciprocal of ${answers.fnum} = 1/${answers.fnum}`));
        console.log(chalk.greenBright(`  Reciprocal of ${answers.snum} = 1/${answers.snum}`));
    }
    else if (answers.operator == "10.Squre Root") {
        var a = answers.fnum;
        var b = answers.snum;
        console.log(chalk.greenBright(`  Square Root of ${answers.fnum} = ${Math.sqrt(a)}`));
        console.log(chalk.greenBright(`  Square Root of ${answers.snum} = ${Math.sqrt(b)}`));
    }
}
async function Exit() {
    while (1) {
        await justBegining();
        await questions();
        var check = await inquirer
            .prompt([
            {
                type: "input",
                name: "flag",
                message: chalk.red("Press 1 for Quit the App.")
            }
        ]);
        if (check.flag == '1') {
            var mix = chalkAnimation.rainbow(`
     ---------------------------------------------------------------------------------------------------
    |***************************************************************************************************|
    |*********************************THANKS FOR USING THE CALCULATOR***********************************|
    |***************************************************************************************************|
    |************************************DEVELOPED BY UMAIR*********************************************|
     ---------------------------------------------------------------------------------------------------
    `);
            await end();
            mix.stop();
            break;
        }
        clear();
    }
}
Exit();
