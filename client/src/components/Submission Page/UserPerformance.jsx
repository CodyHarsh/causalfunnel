import React from 'react'
import { useSelector } from 'react-redux'
import "./UserPerformance.css"

function UserPerformance() {
  const questionsData = useSelector((state) => (state.questions));
  console.log("Questins Data: ", questionsData)
  const apiData = questionsData.data;
  const userSelectedOption = questionsData.userData;
  const options =questionsData.options;

  //Converts html code to regular characters
  function removeCharacters(question){
    return question.replace(/(&quot\;)/g, "\"").replace(/(&rsquo\;)/g, "\"").replace(/(&#039\;)/g, "\'").replace(/(&amp\;)/g, "\"");
  }
  return (
    <div>
        {
            apiData.map((item, index)=>
                 { 
                    return ( 
                        <div key={index} className='submit-quiz-parent'>
                            <p><span style={{fontWeight:'600'}}>Q{index+1}:</span> {removeCharacters(item.question)}</p>
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