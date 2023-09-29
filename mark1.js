var readlineSync = require('readline-sync');
const chalk = require("chalk");
var score = 0;

function play (question,answer){
    var userAnswer = readlineSync.question(chalk.blueBright(question));

    if(userAnswer === answer){
        console.log(chalk.green("you were right!"));
        score++;
        console.log(chalk.yellow.underline("score :",score));
        console.log(chalk.magenta("---------------------"));
    } else{
        console.log(chalk.red("you were wrong!"));
        console.log(chalk.yellow.underline("score :",score));
        console.log(chalk.magenta("---------------------"));
    }
}

console.log(chalk.blue.bold("Welcome to Chethankumar's friends Zone"));
var questions = [
    {
        question : "Do you know Chethan? ",
        answer : "yes",
    },
    {
        question : "Is he older than 25? ",
        answer : "yes",
    },
    {
        question : "Where is he from? ",
        answer : "bangalore",
    },
    {
        question : "Is he a BTech graduate? ",
        answer : "yes",
    },
    {
        question : "What is his favourite color? ",
        answer : "blue",
    },
];

for(var i=0; i<questions.length; i++){
    var currentItem = questions[i];
    play(currentItem.question, currentItem.answer)
}
console.log(chalk.bgBlueBright("Yay! your total score is: ",score));

var highestScore = [
    {
        name : "Praveena",
        score : 5,
    },
    {
        name : "Niyu",
        score : 4,
    },
    {
        name : "Chikku",
        score : 2,
    },
];
console.log(chalk.red.bold("Highest scorere are"));
for(var i=0; i<highestScore.length; i++){
    console.log(highestScore[i].name +" : "+ highestScore[i].score);
}

console.log(chalk.yellowBright(`\n Please send the score of your screenshot,
                                        so that i will update score........`));


