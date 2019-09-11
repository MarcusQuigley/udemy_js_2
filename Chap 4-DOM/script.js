var Person = function(name, yearOB, job){
    this.name = name;
    this.yearOfBirth = yearOB;
    this.job = job;
    this.calculateAge = function(){
        console.log(2019 - this.yearOfBirth);
    }
}

// Person.prototype.calculateAge = function(){
//     console.log(2019 - this.yearOfBirth);
// }

Person.prototype.lastName = 'Wanka';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1973, 'designer');
var pete = new Person('Peter', 1980, 'dancer');

john.calculateAge();
jane.calculateAge();
pete.calculateAge();

console.log(john);