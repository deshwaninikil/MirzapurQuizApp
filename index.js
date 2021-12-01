var readlineSync= require('readline-sync');
chalk=require('chalk');

var score=0;

var highScores=[
  {
  name:"Mohan",
  score:5
  },

  {
  name:"Kishan",
  score:4
  }
]   

var userName=readlineSync.question(chalk.blue("Hey, May I know your name? "))
console.log(chalk.blueBright("Welcome "+userName+" on Mirzapur Quiz !!"))

var questions =[
{
question :"To whom did Kaleen Bhaiya say 'Aap Jis Sheher mein naukar banke aaye ho, hum malik hai us sheher ke'?",
options:[' Ratan Singh','Compounder','Maurya Ratan Singh'],
ans:'Maurya Ratan Singh'
},
{
question :"'Bawaal cheez hai be! Saala system hil jaata hai.'' In this dialogue what is Guddu Bhaiya referring to as ‘bawaal cheez’?",
options:['gun', 'opium','cocaine'],
ans:'gun'
},

{
question :"What is 'barfi' code for in Mirzapur lingo?",
options:['cocaine','guns','opium'],
ans:'cocaine'
},

{
question :"Who plays the role of Guddu Pandit?",
options:['Divyendu Sharma','Vikrant Massey','Ali Fazal'],
ans:'Ali Fazal'
},

{
question :"Who said, 'Agli baar Munna Bhaiya ghar aayein, zinda wapas nahi laute toh'?",
options:['Dimpy','Guddu Pandit','Bablu Pandit'],
ans:'Guddu Pandit'
}

]


if(readlineSync.keyInYN("Are you ready for the quiz? ")){
  console.log(chalk.yellow.italic("Let's begin then....\n"))
 
  for(var i=0;i<questions.length;i++){
    currentQuestion=questions[i];
    play(currentQuestion.question, currentQuestion.options,currentQuestion.ans)
  }

  function play(question,options,ans){
  console.log(chalk.bgMagenta(question))
  index=readlineSync.keyInSelect(options,"Kindly select the correct answer",
  {cancel:"None of the above"})
  if(options[index] == ans){
    score+=1;
    console.log(chalk.yellow("Your answer is correct!!"))
  }
  else{
    console.log(chalk.green("Your answer is incorrect!!"))
  }

  console.log("Your current score is "+score);
  console.log(chalk.magenta.bold("-----------------------------------------------------"))
    
}



console.log(chalk.bgBlue("Your total score is "+ score))


console.log(chalk.magenta("------------"))
if(score>=highScores[0].score){
  console.log(chalk.bgMagenta("***Congratulations!!You scored the highest***"))
}

else{
  console.log(chalk.bgCyan("Oooopsss!! You didn't score the highest!!"))
}

console.log(chalk.green("---------------------"))
console.log("Check out the below high scorers :- ")

for(var i=0; i<highScores.length;i++) {
  console.log("Name : "+chalk.redBright(highScores[i].name))
  console.log("Score : "+chalk.redBright(highScores[i].score))
 console.log(chalk.yellow("----------"))
}

console.log(chalk.red.bold.underline("If you scored the highest or second highest, please send the screeshot to get it updated. :) "))


}

else{
  console.log(chalk.magenta.bold.bgWhite("You've pressed No. Hope you will play it next time ."))
}






