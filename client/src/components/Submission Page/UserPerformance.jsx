import React from 'react'
import { useSelector } from 'react-redux'
import "./UserPerformance.css"

function UserPerformance() {
  const questionsData = useSelector((state) => (state.questions));
  console.log("Questins Data: ", questionsData)
  const apiData = questionsData.data;
  const userChoosenOption = questionsData.userData;
  const correctOption = questionsData.data.results;
  const userSelectedOption = questionsData.userData;
  const options =questionsData.options;
  console.log(options)
  return (
    <div>
        {
            apiData.map((item, index)=>
                 { 
                    return ( 
                        <div key={index} className='submit-quiz-parent'>
                            <p className=''>Category: {item.category}</p>
                            <p>Q{index+1}: {item.question}</p>
                            {
                                options[index].map((val, ind) => (
                                    <div key={ind}>
                                    <button disabled={true} className={`submit-btn 
                                        ${userSelectedOption[index] !== undefined && userSelectedOption[index] === val ? ('submit-correct'): ('')}
                                        ${item.correct_answer === val ? ('submit-correct-answer-color') : ('')}`
                                    } value={val}>{val}</button>
                                    </div>
                                ))
                            }
                        </div>
                    )
                 }
            )
        }
    </div>
  )
}

export default UserPerformance