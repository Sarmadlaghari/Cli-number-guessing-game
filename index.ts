#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will genrate a random number

// 2) user input for guessing number

// 3) compare user input with computer genrated number and show result


const randomNumber = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([

{
    name: "userGuessednumber",
    type: "number",
    message: "Please guess a number between 1-10: ",
},

]);

if (answer.userGuessednumber === randomNumber) {
console.log("Yell,Congratulations! You won the game,");

}else {
    console.log("Great effort! Keep trying, you'll get it next time!");
    
}






