// Importing necessary React components, hooks, and styles
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux-store/slices/currentQuestion';
import { useNavigate, NavLink } from 'react-router-dom';
import './NextAndPrevious.css'

// NextAndPrevious component for navigation and submission buttons
function NextAndPrevious() {
  // Accessing the current question and total question count from the Redux store
  const currentQuestion = useSelector((state) => (state.currentQuestion.value));
  const totalQuestion = useSelector((state) => (state.questions.totalQuestions))
  
  // Initializing useDispatch and useNavigate hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    // Container div for next, previous, and submit buttons
    <div className='next-prev-div'>
      
      {/* Div for next and previous buttons */}
      <div className='next-prev-child-div1'>
        {/* Previous button */}
        <button 
          onClick={() => dispatch(decrement())} 
          disabled={currentQuestion <= 0}>
          Previous
        </button>

        {/* Next button */}
        <button 
          onClick={() => dispatch(increment())}
          disabled={currentQuestion === totalQuestion - 1}>
          Next
        </button>
      </div>

      {/* Div for submit button */}
      <div>
        {/* NavLink for navigation to the 'submit' route */}
        <NavLink to="submit">
          {/* Submit button */}
          <button>Submit</button>
        </NavLink>
      </div>

    </div>
  )
}

// Exporting the NextAndPrevious component as the default export
export default NextAndPrevious
