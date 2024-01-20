// Importing necessary functions from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importing Redux slices (reducers) for the store
import currentQuestion from './slices/currentQuestion';
import fetchQuestions from './slices/fetchQuestions';

// Creating the Redux store using configureStore
export const store = configureStore({
    // Defining the reducers for the store
    reducer: {
        // Adding the currentQuestion reducer under the key 'currentQuestion'
        currentQuestion: currentQuestion,

        // Adding the fetchQuestions reducer under the key 'questions'
        questions: fetchQuestions,
    },
});
