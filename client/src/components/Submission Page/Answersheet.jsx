import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserPerformance from './UserPerformance';
import { NavLink, useNavigate } from 'react-router-dom';

function Answersheet() {

  const questionsData = useSelector((state) => state.questions);
  const currentQuestion = useSelector((state) => state.currentQuestion);
 
  let correctAnswer = 0;
  function checking(){
    for(let i = 0; i<questionsData.totalQuestions; i++){
      const userAnswer = questionsData.userData[i];
      if((userAnswer !== undefined) && (userAnswer === questionsData.data[i].correct_answer)){
        correctAnswer++;
        
      }
    }
  }
  checking();

  return (
    <div>
      {}
        <div>
            <p>{`Quiz Attempted: ${questionsData.userEmail ? ("Yes") : ("No")}`}</p>
            {!questionsData.userEmail ? (<NavLink to ="/"><button>Attempt Quiz</button></NavLink>) : (
              <div>
                <p>{`User Email: ${questionsData.userEmail}`}</p>
                <p>{`Total Questions: ${questionsData.totalQuestions}`}</p>
                <p>{`Correct Answers: ${correctAnswer}`}</p>
                <p>{`Wrong Answers: ${questionsData.totalQuestions - correctAnswer}`}</p>
                <NavLink to ="/"><button >Try Again</button></NavLink>
               <UserPerformance />
              </div>
            )}

        </div>
      
    </div>
  )
}

export default Answersheet