function Question(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (let index = 0; index < this.answers.length; index++) {
        console.log(`${index}. ${this.answers[index]}`);
    }
}

Question.prototype.displayAnswer = function(answer){
    var isCorrect = (answer=== this.correctAnswer) ? 'Correct!': "wrong...";
    console.log(`Answer(${this.correctAnswer}) is ${isCorrect}`);
}

//Question.prototype.score = 0;

var q1 = new Question('What year is is', [2001, 1988, 2019], 2);
var q2 = new Question('What day is is', ['Monday', 'Wednesday', 'Friday'], 1);
var q3 = new Question('How old am I', [12, 34, 45], 2);
var q4 = new Question('My favourite team', ['Liverpool', 'Fulham', 'Spurs'], 0);

var questions = [q1,q2,q3,q4];
var random = Math.floor(Math.random() * questions.length);
questions[random].displayQuestion();
var answer=parseInt(prompt(this.question));
questions[random].displayAnswer(answer);








































































