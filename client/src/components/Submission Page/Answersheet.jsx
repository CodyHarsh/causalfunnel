// Importing necessary React components, hooks, and styles
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserPerformance from './UserPerformance';
import { NavLink, useNavigate } from 'react-router-dom';

// Answersheet component for displaying quiz results
function Answersheet() {
  // Accessing relevant data from the Redux store
  const questionsData = useSelector((state) => state.questions);
  const currentQuestion = useSelector((state) => state.currentQuestion);

  // Variable to store the count of correct answers
  let correctAnswer = 0;

  // Function to check and count correct answers
  function checking(){
    for(let i = 0; i < questionsData.totalQuestions; i++){
      const userAnswer = questionsData.userData[i];
      if((userAnswer !== undefined) && (userAnswer === questionsData.data[i].correct_answer)){
        correctAnswer++;
      }
    }
  }

  // Calling the checking function to calculate correct answers
  checking();

  return (
    <div>
      {/* Conditional rendering based on whether the quiz is attempted or not */}
      <div>
        {/* Checking if the quiz is attempted */}
        <p>{`Quiz Attempted: ${questionsData.userEmail ? ("Yes") : ("No")}`}</p>

        {/* Conditional rendering based on quiz attempt status */}
        {!questionsData.userEmail ? (
          // If quiz is not attempted, display a link to attempt the quiz
          <NavLink to="/"><button>Attempt Quiz</button></NavLink>
        ) : (
          // If quiz is attempted, display user performance details
          <div>
            <p>{`User Email: ${questionsData.userEmail}`}</p>
            <p>{`Total Questions: ${questionsData.totalQuestions}`}</p>
            <p>{`Correct Answers: ${correctAnswer}`}</p>
            <p>{`Wrong Answers: ${questionsData.totalQuestions - correctAnswer}`}</p>

            {/* Link to try the quiz again */}
            <NavLink to="/"><button>Try Again</button></NavLink>

            {/* Rendering the UserPerformance component */}
            <UserPerformance />
          </div>
        )}
      </div>
    </div>
  )
}

// Exporting the Answersheet component as the default export
export default Answersheet
