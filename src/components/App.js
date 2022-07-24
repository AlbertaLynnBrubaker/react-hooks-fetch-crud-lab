import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const handleLoadList = (loadQuestions) => {
    setQuestions(q => loadQuestions)
  }

  const handleAddQuestion = (newQuestion) => {
    setQuestions(q => [
      ...questions, newQuestion
    ]
    )
  }

  const handleDeleteQuestion = (deletedQuestion) => {
    const updatedQuestions = questions.filter(question => deletedQuestion.id !== question.id)
    setQuestions(() => updatedQuestions)
  }

  const handleUpdateQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map(question => {
      if(updatedQuestion.id === question.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    })

    setQuestions(q => updatedQuestions)
  }
  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm 
          onAddQuestion={handleAddQuestion} 
        /> : 
        <QuestionList 
          questions={questions} 
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateQuestion={handleUpdateQuestion} 
          onLoadList={handleLoadList} 
      />}
    </main>
  );
}

export default App;
