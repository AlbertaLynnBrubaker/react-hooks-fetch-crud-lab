import React, {useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({onUpdateQuestion, onDeleteQuestion, questions, onLoadList}) {
  

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(r => r.json())
      .then(loadQuestions => onLoadList(loadQuestions))

    return () => {
      onLoadList([])
    }
    
  }, [])

  const onDeleteQuestionItem = (deletedQuestion) => {
    return onDeleteQuestion(deletedQuestion)
  }

  const onUpdateQuestionItem = (updatedQuestion) => {
    return onUpdateQuestion(updatedQuestion)
  }

  const qsToDisplay = questions.map(question => {
    return <QuestionItem 
      key={question.id} 
      onDeleteQuestionItem={onDeleteQuestionItem} 
      onUpdateQuestionItem={onUpdateQuestionItem}
      question={question}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{qsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
