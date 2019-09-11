console.log("chap 5");

function getRetirementFunc( ){
    return function(currentAge){
        console.log(`Retire in ${65 - currentAge}`);
    }
}
// getRetirementFunc()(45);
 var a =  getRetirementFunc()

 console.log('---')
 a(47);

 a(27);

 console.log('-----')
 console.log('-- Closures ---')

 function InterviewQuestion(job){
    return function(name){
        switch (job){
            case 'designer':
                console.log(`${name} is designing`);
                break;
            case 'teacher':
                console.log(`${name} is a teacher which is most important job`);
                break;
            default:
                console.log(`what kind of job is ${job} ${name}`);
                break;
        }
    }
 }

 InterviewQuestion('biker')('Joan');
 InterviewQuestion('teacher')('mike');


 console.log('-----')
 console.log('-- Apply, Call, Bind ---')

 var john = {
     name: 'John',
     age: '26',
     job: 'teacher',
     presentation: function(style, timeOfday){
         if (style === 'formal'){
         console.log(`good ${timeOfday}, ladies and gents. Im ${this.name} a ${this.job} and my age is ${this.age} `)
         } else{
             console.log(`sup bitches. Im a rocking ${this.name}  on a ${this.job} job and my age is ${this.age} bruhs `)
         }
     }
    }
 
  var joan = {
    name: 'joan',
    age: '26',
    job: 'lover'
}

john.presentation('formal', 'evening');
john.presentation('', 'evening');

john.presentation.call(joan, '', 'afternoon');

john.presentation.apply(joan, ['', 'afternoon']);