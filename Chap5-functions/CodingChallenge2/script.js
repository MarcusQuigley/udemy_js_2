'use strict';

(function(){
 
function Question(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
Question.prototype.displayQuestion = function(){
    console.log(this.question.concat('?'));
    this.answers.forEach((answer, index) => console.log(`${index}: ${answer}`))
};
Question.prototype.displayAnswer = function(answer, callback){
   var isCorrect = (answer === this.correctAnswer)? true: false;
    var sc ;
   console.log('Answer [' +  answer + '] is ' + isCorrect);

   if (!isCorrect ){
    console.log('Answer should be ' + this.correctAnswer);
    sc = callback(0);
   }
   else{
       user.addScore();
       sc=   callback(1);
   }
   user.displayScore();
   console.log('score... '.concat(sc));
};

function User(name = 'Marcus'){
    this.name = name;
    this.score = 0;
   // return function()
}
User.prototype.displayScore = function(){
    console.log(`${this.name} has a score of ${this.score}`);
}
User.prototype.addScore = function(){
    this.score +=1;
}

function score(){
    var score = 0;
    return function(value){
        score+=value;
        return score;
    }
}

var newscore = score()
var user = new User();
console.log(typeof(newscore));

function runApp(){
    var random, question,yourAnswer;
  
    var questions = [];
    questions.push(new Question('Favourite team',['Liverpool','Utd','Arsenal'],0));
    questions.push(new Question('Day of week',['Friday','Sunday','Tuesday'],2));
    questions.push(new Question('Weather',['Sunny','Raining','Snowing'],0));

    
    while (true){
        random = Math.floor(Math.random() * questions.length);
        question = questions[random] ;
        question.displayQuestion();

        yourAnswer = prompt("Choose correct answer.");
        if (yourAnswer.toLowerCase() === 'quit'){
            break;
        }
        question.displayAnswer(parseInt(yourAnswer), newscore);
    }
}
runApp();
})();
 
