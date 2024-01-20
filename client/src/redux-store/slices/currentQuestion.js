import { createSlice } from '@reduxjs/toolkit';

// Initial state for the currentQuestion slice
const initialState = {
  value: 0,
};

// Creating a slice for managing the state related to the current question
export const currentQuestion = createSlice({
  name: 'currentQuestion',
  initialState,
  reducers: {
    // Reducer to increment the current question value
    increment: (state) => {
      state.value += 1;
    },

    // Reducer to decrement the current question value
    decrement: (state) => {
      state.value -= 1;
    },

    // Reducer to increment the current question value by a specific amount
    incrementByAmount: (state, actions) => {
      // Setting the current question value based on the payload
      state.value = actions.payload.clickedQuestionIndex;
    },
  },
});

// Exporting actions and reducer for use in the application
export const { increment, decrement, incrementByAmount } = currentQuestion.actions;
export default currentQuestion.reducer;
