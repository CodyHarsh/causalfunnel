import { configureStore } from '@reduxjs/toolkit'
import currentQuestion from './slices/currentQuestion'
import fetchQuestions from './slices/fetchQuestions'
export const store = configureStore({
    reducer: {
        currentQuestion: currentQuestion,
        questions: fetchQuestions,
    },

})