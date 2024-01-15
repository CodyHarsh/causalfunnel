import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux-store/slices/currentQuestion';
import { useNavigate, NavLink } from 'react-router-dom';

function NextAndPrevious() {
  const currentQuestion = useSelector((state) => (state.currentQuestion.value));
  const totalQuestion = useSelector((state) => (state.questions.totalQuestions))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div>
        
        <button 
          onClick={() => dispatch(decrement())} 
          disabled={currentQuestion <= 0}>
          Previous
        </button>
        <button 
          onClick={() => dispatch(increment())}
          disabled = {currentQuestion === totalQuestion - 1}>
          Next
        </button>

        <NavLink to="submit">
          <button> Submit</button>
        </NavLink>

    </div>
  )
}

export default NextAndPrevious