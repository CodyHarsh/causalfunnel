// Importing necessary React components, hooks, styles, and utilities
import React from 'react'
import { useSelector } from 'react-redux'
import "./UserPerformance.css"
import parse from 'html-react-parser'

// UserPerformance component for displaying user's performance on each question
function UserPerformance() {
  // Accessing relevant data from the Redux store
  const questionsData = useSelector((state) => (state.questions));
  const apiData = questionsData.data;
  const userSelectedOption = questionsData.userData;
  const options = questionsData.options;

  return (
    <div>
      {/* Mapping through API data to display performance for each question */}
      {apiData.map((item, index) => {
        return (
          <div key={index} className='submit-quiz-parent'>
            {/* Displaying question number and question text */}
            <p><span style={{fontWeight:'600'}}>Q{index+1}:</span> {parse(item.question)}</p>

            {/* Mapping through options to display buttons for each option */}
            {options[index].map((val, ind) => (
              <div key={ind}>
                {/* Button for each option with conditional styling based on user selection and correct answer */}
                <button
                  disabled={true}
                  className={`submit-btn 
                    ${userSelectedOption[index] !== undefined && userSelectedOption[index] === val ? ('submit-correct'): ('')}
                    ${item.correct_answer === val ? ('submit-correct-answer-color') : ('')}`
                  }
                  value={val}
                >
                  {parse(val)}
                </button>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// Exporting the UserPerformance component as the default export
export default UserPerformance
