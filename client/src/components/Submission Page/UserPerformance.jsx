import React from 'react'
import { useSelector } from 'react-redux'

function UserPerformance() {
  const questionsData = useSelector((state) => (state.questions));
  const apiData = questionsData.data.results;
  const userChoosenOption = questionsData.userData;
  const correctOption = questionsData.data.results;
  const options =questionsData.options;
  return (
    <div>
        {
            apiData.map((item, index)=>
                 ( 
                    <div key={index}>
                        <p>Category: {item.category}</p>
                        <p>Question: {item.question}</p>
                        {
                        options[index].map((val, index) => (
                            <div key={index}>
                            <button className='btn correct' onClick={handleOptions} value={val}>{val}</button>
                            </div>
                        ))
                        }
                    </div>
                )
            )
        }
    </div>
  )
}

export default UserPerformance