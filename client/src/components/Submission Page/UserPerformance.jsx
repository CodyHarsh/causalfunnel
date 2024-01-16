import React from 'react'
import { useSelector } from 'react-redux'
import "./UserPerformance.css"
import parse from 'html-react-parser'

function UserPerformance() {
  const questionsData = useSelector((state) => (state.questions));
  const apiData = questionsData.data;
  const userSelectedOption = questionsData.userData;
  const options =questionsData.options;

  return (
    <div>
        {
            apiData.map((item, index)=>
                 { 
                    return ( 
                        <div key={index} className='submit-quiz-parent'>
                            <p><span style={{fontWeight:'600'}}>Q{index+1}:</span> {parse(item.question)}</p>
                            {
                                options[index].map((val, ind) => (
                                    <div key={ind}>
                                    <button disabled={true} className={`submit-btn 
                                        ${userSelectedOption[index] !== undefined && userSelectedOption[index] === val ? ('submit-correct'): ('')}
                                        ${item.correct_answer === val ? ('submit-correct-answer-color') : ('')}`
                                    } value={val}>{parse(val)}</button>
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