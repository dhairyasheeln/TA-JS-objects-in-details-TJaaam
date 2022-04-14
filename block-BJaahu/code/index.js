/*
- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)


For each different ways of creating object write different solutions.

- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
- Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
- Create using class
- Write test by creating two objects also test both methods.


let firstQuestion = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

*/
//Prototypal pattern 
function createQuestion(title,options,correctAnswerIndex){
    let question=Object.create(questionMethods);
    question.title=title;
    question.options=options;
    question.correctAnswerIndex=correctAnswerIndex;

    return question;
}

let questionMethods={
    isAnswerCorrect:function(index){
        return this.correctAnswerIndex===index;
    },
    getCorrectAnswer:function(){
        return this.options[this.correctAnswerIndex];
    }
}

let questions1=createQuestion(
    'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

//Pseudoclassical Pattern

function CreateQuestionPseudo(title,options,correctAnswerIndex){

    this.title=title;
    this.options=options;
    this.correctAnswerIndex=correctAnswerIndex;
}

CreateQuestionPseudo.prototype={
    isAnswerCorrect:function(index){
        return this.correctAnswerIndex===index;
    },
    getCorrectAnswer:function(){
        return this.options[this.correctAnswerIndex];
    }
}

let questions2=new CreateQuestionPseudo(
    'Where',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  3
);


//Create using class

class questionC{
    constructor(title,options,correctAnswerIndex){
        this.title=title;
        this.options=options;
        this.correctAnswerIndex=correctAnswerIndex;
    }

    isAnswerCorrect(index){
        return this.correctAnswerIndex===index;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }


}

let questions3=new questionC(
    'Where',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  3
);


