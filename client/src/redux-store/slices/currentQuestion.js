import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const currentQuestion = createSlice({
  name: 'currentQuestion',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, actions) => {
      state.value = actions.payload.clickedQuestionIndex;
    },
  },
})

export const { increment, decrement,incrementByAmount } = currentQuestion.actions

export default currentQuestion.reducer