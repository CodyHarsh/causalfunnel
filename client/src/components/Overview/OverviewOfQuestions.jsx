// Importing necessary React components, hooks, styles, and Redux action
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './overviewOfQuestion.css' 
import { incrementByAmount } from '../../redux-store/slices/currentQuestion';

// OverviewOfQuestions component for displaying an overview of questions
function OverviewOfQuestions() {
  // Accessing relevant data from the Redux store
  const questionsData = useSelector((state) => (state.questions));
  const currentQuestion = useSelector((state) => (state.currentQuestion.value))
  const userData  = questionsData.userData
  const visitedQuestions  = questionsData.visitedQuestionList;
  
  // Initializing useDispatch hook
  const dispatch = useDispatch();

  // Function to handle page navigation on button click
  function handleThePage(e){
    const clickedQuestionIndex = parseInt(e.target.value);
    dispatch(incrementByAmount({clickedQuestionIndex}))
  }

  return (
    // Container div for the overview of questions
    <div className='overview-of-question'>
      
      {/* Div for displaying question buttons */}
      <div className='overview-coloumn'>
        {
          // Mapping through visitedQuestions array to render buttons
          visitedQuestions.map((val, index) =>(
            <div key={index} className=''>
              {/* Button for each question */}
              <button 
                value={index}
                onClick={handleThePage}
                // Applying different classes based on conditions
                className={`question-number ${val !== 0 ? ('visited')  : 'not-visited'} ${
                  userData[index]  ? ('attempted') : ('not-attempted')}
                  ${index === currentQuestion ? ('on-current'): ('')}`}
              >
                {index + 1}
              </button>
            </div>
          ))
        }
      </div>

      {/* Div for displaying learning symbols and counts */}
      <div className='learning-symbols'>
        <div className='learningVisited'>Visited: <button> 1 </button></div>
        <div className='learningAttempted'>Attempted: <button> 1 </button></div>
        <div >Not Visited: <button> 1 </button></div>
      </div>
    </div>
  )
}

// Exporting the OverviewOfQuestions component as the default export
export default OverviewOfQuestions
