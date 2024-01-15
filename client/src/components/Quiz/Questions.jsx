import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './questions.css'
import { updateTheVisited, updateUserAnswers } from '../../redux-store/slices/fetchQuestions';


function Questions() {
  const dispactch = useDispatch();
  const currenQuestion = useSelector((state) => state.currentQuestion.value);
  const questions = useSelector((state) => (state.questions));
  const item =  questions.data[currenQuestion];
  const options = questions.options[currenQuestion];
  console.log(questions);
  useEffect(() => {
    if (questions.visitedQuestionList && questions.visitedQuestionList[currenQuestion] === 0) {
      dispactch(updateTheVisited({ currenQuestion }));
    }
  }, [currenQuestion]);
  
  function handleOptions(e){
    const userOption = e.target.value;
    dispactch(updateUserAnswers({currenQuestion, userOption}));
  }
  return (
    <div>
            <p>Category: {item.category}</p>
            <p>Question: {item.question}</p>
            {
              options.map((val, index) => (
                <div key={index}>
                  <button className='btn correct' onClick={handleOptions} value={val}>{val}</button>
                </div>
              ))
            }
            
    </div>
  )
}

export default Questions