import React, { useEffect, useState } from 'react';
import Questions from './Quiz/Questions';
import { useDispatch, useSelector } from 'react-redux';
import NextAndPrevious from './Navigation/NextAndPrevious';
import { setUserEmail } from '../redux-store/slices/fetchQuestions';
import OverviewOfQuestions from './Overview/OverviewOfQuestions';
import Timer from './Timer/Timer';

function LandingQuiz() {
  const dispactch = useDispatch();
  const [showQuiz, setShowQuiz] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userEmail = event.target.email.value;
    dispactch(setUserEmail({ userEmail }));
    setShowQuiz(true); // Trigger quiz display
  };

  return (
    <div>
      {!showQuiz && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='johndoe@gmail.com'
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {showQuiz && (
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

export default LandingQuiz;
