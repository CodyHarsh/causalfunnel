import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './overviewOfQuestion.css' 
import { incrementByAmount } from '../../redux-store/slices/currentQuestion';
function OverviewOfQuestions() {
  const questionsData = useSelector((state) => (state.questions));
  const currentQuestion = useSelector((state) => (state.currentQuestion))
  const userData  = questionsData.userData
  const visitedQuestions  = questionsData.visitedQuestionList;
  const dispactch = useDispatch();

  function handleThePage(e){
    const clickedQuestionIndex = parseInt(e.target.value);
    console.log(clickedQuestionIndex)
    dispactch(incrementByAmount({clickedQuestionIndex}))
  }
  return (
    <div>
        {
          visitedQuestions.map((val, index) =>(
            <div key={index}>
              <button 
              value = {index}
              onClick={handleThePage}
              className={`question-number ${val != 0 ? ('visited')  : 'not-visited'} ${
                userData[index]  ? ('attempted') : ('not-attempted')}`}
              >{index + 1}</button>
            </div>
          ))
        }
    </div>
  )
}

export default OverviewOfQuestions