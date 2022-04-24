let form=document.querySelector('form');
let prev=document.querySelector('.prev');
let next=document.querySelector('.next');
let quizElm=document.querySelector('.quiz');
let totalQuestion=document.querySelector('.score');
let showResult=document.querySelector('.showResult');



class Question{
    constructor(title,options,correctAnswerIndex){
        this.title=title;
        this.options=options;
        this.correctAnswerIndex=correctAnswerIndex;
    }
    isCorrect(answer){
        return this.options[this.correctAnswerIndex]===answer;
    }
    getCorrectAnswer(){
        return thhis.options[this.correctAnswerIndex];
    }
}


class Quiz{
    constructor(questions=[],score=0){
        this.questions=questions;
        this.score=score;
        this.activeIndex=0;
    }
    incrementScore(){
        this.score=this.score+1;
    }

    nextQuestion(){
        this.activeIndex=this.activeIndex+1;
        this.creatUI();
    }

    previousQuestion(){
        this.activeIndex=this.activeIndex-1;
        this.creatUI();
    }

    addQuestion(title,options,answerIndex){
        let question=new Question(title,options,answerIndex);
        this.questions.push(question);
    }
    handleButton(){
        if(this.activeIndex==0){
            prev.style.visibility="hidden";
        }
        else{
            prev.style.visibility="visible";
        }
        if(this.activeIndex==(this.questions.length-1)){
            next.style.visibility="hidden";
            showResult.style.display="block";
        }
        else{
            next.style.visibility="visible";
            showResult.style.display="none";
        }
    }
    creatUI(){
        quizElm.innerHTML="";
        let activeQuestion=this.questions[this.activeIndex];
        let form=document.createElement('form');
        let fieldset=document.createElement('fieldset');
        let legend=document.createElement('legend');
        legend.innerText=activeQuestion.title;

        let optionsElm=document.createElement('div');
        optionsElm.classList.add('options');

        let buttonwrapper=document.createElement('div');
        let button=document.createElement('button');
        button.type="submit";
        button.innerText="Submit"
        button.style.color="white";
        button.style.backgroundColor="black";
        button.style.border="none";
        button.style.padding="10px 20px";
        buttonwrapper.append(button);

        activeQuestion.options.forEach((option,index)=>{
            let input=document.createElement('input');
            let div=document.createElement('div');
            input.id=`option-${index}`;
            input.type="radio";
            input.name="options";
            input.value=option;
            let label=document.createElement('label');
            label.for=`option-${index}`;
            label.innerText=option;

            form.addEventListener('submit',(event)=>{
                event.preventDefault();
                if(input.checked){
                console.log(input.value);
                if(activeQuestion.isCorrect(input.value)){
                    this.incrementScore();
                }                
                    
            }
            });

            div.append(input,label);
            optionsElm.append(div);

        });


        this.handleButton();
        totalQuestion.innerText=`Total Question: ${this.questions.length}`
        fieldset.append(legend,optionsElm,buttonwrapper);
        form.append(fieldset);

        quizElm.append(form);
    }
}


function init(){
    let quiz=new Quiz();
quizCollection.forEach((question)=>{
    quiz.addQuestion(
        question.title,
        question.options,
        question.answerIndex,
    );
});

quiz.creatUI();
next.addEventListener('click',quiz.nextQuestion.bind(quiz));
prev.addEventListener('click',quiz.previousQuestion.bind(quiz));
showResult.addEventListener('click',()=>{
    alert(`Your score is ${quiz.score}`);
});
}

init();