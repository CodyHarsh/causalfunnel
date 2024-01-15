import React from 'react'
import { useSelector } from 'react-redux';
import Loader from './components/Loader';
import LandingQuiz from './components/LandingQuiz';
import ApiError from './components/Error Pages/ApiError';

function Home() {
  const responseCode = useSelector((state) => state.questions.responseCode);

  return (
    <div>
        <LandingQuiz />
    </div>
  )
}

export default Home