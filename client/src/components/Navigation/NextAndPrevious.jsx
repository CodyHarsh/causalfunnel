import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux-store/slices/currentQuestion';
import { useNavigate, NavLink } from 'react-router-dom';
import './NextAndPrevious.css'

function NextAndPrevious() {
  const currentQuestion = useSelector((state) => (state.currentQuestion.value));
  const totalQuestion = useSelector((state) => (state.questions.totalQuestions))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className='next-prev-div'>
        <div className='next-prev-child-div1'>
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
        </div>

        <div>
          <NavLink to="submit">
            <button> Submit</button>
          </NavLink>
        </div>

    </div>
  )
}

export default NextAndPrevious