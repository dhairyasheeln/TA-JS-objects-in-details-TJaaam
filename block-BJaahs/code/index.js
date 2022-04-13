// title: 'Where is the capital of Jordan',
//   options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   correctAnswerIndex: 1

  function createQuestion(title,options,correctAnswerIndex){
      let question={};
      question.title=title;
      question.options=options;
      question.correctAnswerIndex=correctAnswerIndex;

      question.isAnswerCorrect=function(correctAnswerIndex){
          return this.correctAnswerIndex===correctAnswerIndex;
      }

      question.getCorrectAnswer=function(){
          return this.options[this.correctAnswerIndex];
      }
      return question;
  }

  const firstQuestion=createQuestion(
      "Where is the capital of Jordan'",
      ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
      1
  )