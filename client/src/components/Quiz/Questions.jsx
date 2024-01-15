import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './questions.css'
import { updateTheVisited, updateUserAnswers } from '../../redux-store/slices/fetchQuestions';


function Questions() {

  const dispatch = useDispatch();
  const currenQuestion = useSelector((state) => state.currentQuestion.value);
  const questions = useSelector((state) => (state.questions));
  const item =  questions.data[currenQuestion];
  const userSelectedOption = questions.userData[currenQuestion];
  const options = questions.options[currenQuestion];
  console.log(questions);
  const [selectedOption, setSelectedOption] = useState(userSelectedOption);

  useEffect(() => {
    if (questions.visitedQuestionList && questions.visitedQuestionList[currenQuestion] === 0) {
      dispatch(updateTheVisited({ currenQuestion }));
    }
  }, [currenQuestion]);
  
  function handleOptions(e){
    const userOption = e.target.value;
    // If the same option is clicked again, clear the selection
    if (userOption === selectedOption) {
      setSelectedOption(undefined);
      dispatch(updateUserAnswers({ currenQuestion, userOption: undefined }));
    } else {
      setSelectedOption(userOption);
      dispatch(updateUserAnswers({ currenQuestion, userOption }));
    }
    //dispactch(updateUserAnswers({currenQuestion, userOption}));
  }
  return (
    <div className='quiz-question'>
             <div className='div-quiz-category'>
                <p className='quiz-category'>{item.category}</p>
                <p className='quiz-category '><span>Difficulty: </span> {item.difficulty}</p>
             </div>
            
            <p className='quiz-question-value'><span>Q{currenQuestion+1}: </span> {item.question}</p>
            {
              options.map((val, index) => (
                <div key={index}>
                  <button className={
                    `btn ${userSelectedOption !== undefined && userSelectedOption === val ? ('correct'): ('')}`
                  } onClick={handleOptions} value={val}>{val}</button>
                </div>
              ))
            }
            
    </div>
  )
}

export default Questions