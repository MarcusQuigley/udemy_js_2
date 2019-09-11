 
 //var Question = function();
//var numbersToIgnore = [];
let score = 0;
let quitApp = false;
var questions = [
    {
        question: 'What year is is',
        answers: [2001, 1988, 2019],
        correctAnswer: 2
    }, 
    {
        question: 'What day is is',
        answers: ['Monday', 'Wednesday', 'Friday'],
        correctAnswer: 1
    }, 
    {
        question: 'How old am I',
        answers: [12, 34, 45],
        correctAnswer: 2
    }, 
    {
        question: 'My favourite team',
        answers: ['Liverpool', 'Fulham', 'Spurs'],
        correctAnswer: 0
    }, 
]; 

var getQuestion = function (){
    var randomNumber = Math.floor(Math.random() * questions.length);
    return questions[randomNumber];
}

var askQuestion = function(){
    const question = getQuestion();
    console.log(question.question);
    for (var i =0;i< question.answers.length;i++){
        console.log(`${i}. ${question.answers[i]}`)
    }
    var answer = prompt(question.question);
    if (answer!==null && answer.toLowerCase() === 'quit'){
        quitApp = true;
        return;
    }
     var isCorrect = (answer == question.correctAnswer);
     if (isCorrect === true) score+=1;
      displayAnswer(isCorrect);
      
}

function displayAnswer(isCorrect){
    var isCorrect = (isCorrect===true) ? 'Correct!': "wrong...";
    console.log(`Answer is ${isCorrect}`);
    console.log(`Total correct =  ${score}`);
}

while (!quitApp){
    askQuestion();
}
console.log(`Final correct =  ${score}`);