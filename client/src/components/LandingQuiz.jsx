// Importing necessary React components, hooks, styles, and Redux actions
import React, { useEffect, useState } from 'react';
import Questions from './Quiz/Questions';
import { useDispatch, useSelector } from 'react-redux';
import NextAndPrevious from './Navigation/NextAndPrevious';
import { setUserEmail } from '../redux-store/slices/fetchQuestions';
import OverviewOfQuestions from './Overview/OverviewOfQuestions';
import Timer from './Timer/Timer';
import './LandingPage.css';

// LandingQuiz component for managing the landing page and quiz display
function LandingQuiz() {
  // Initializing useDispatch hook
  const dispatch = useDispatch();

  // State to control whether to show the quiz or not
  const [showQuiz, setShowQuiz] = useState(false);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const userEmail = event.target.email.value;
    dispatch(setUserEmail({ userEmail }));
    setShowQuiz(true); // Trigger quiz display
  };

  return (
    <div>
      {/* Conditional rendering based on whether to show the quiz or not */}
      {!showQuiz && (
        // Form for collecting user email before starting the quiz
        <form onSubmit={handleSubmit}>
          <div className='form-email-div'>
            <label htmlFor="email">Write Your Email to start the quiz: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='johndoe@gmail.com'
              required
            />
            <button type="submit">Start Quiz</button>
          </div>
        </form>
      )}

      {showQuiz && (
        // Displaying quiz components when showQuiz is true
        <div>
          <Timer />
          <Questions />
          <NextAndPrevious />
          <OverviewOfQuestions />
        </div>
      )}
    </div>
  );
}

// Exporting the LandingQuiz component as the default export
export default LandingQuiz;
