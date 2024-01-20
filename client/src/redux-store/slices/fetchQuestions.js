import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action to fetch data asynchronously from an external API
export const fetchData = createAsyncThunk('fetchData' , async () => {
    try {
        // Fetching data from the Open Trivia Database API
        const response = await fetch('https://opentdb.com/api.php?amount=15');
        const data = await response.json();
        return data;
      } catch (error) {
        // Returning the error in case of any issues
        return error;
      }
})

// Creating a slice for managing the state related to questions
const fetchQuestion = createSlice({
    name: "questions",
    initialState: {
        // Initial state with various properties related to questions
        data: [],
        userData: [],
        isError: false,
        isLoading: false,
        responseCode: 1,
        totalQuestions: 0,
        options: [],
        visitedQuestionList: [],
        userEmail: '',
    },

    reducers: {
        // Reducer to set the user's email in the state
        setUserEmail: (state, actions) => {
            state.userEmail = actions.payload.userEmail;
        },

        // Reducer to update the visited question list
        updateTheVisited: (state, actions) => {
            state.visitedQuestionList[actions.payload.currenQuestion] = 1;
        },

        // Reducer to update the user's answers
        updateUserAnswers: (state, actions) => {
            const currentQuestion = actions.payload.currenQuestion;
            const userOption = actions.payload.userOption;
            state.userData[currentQuestion] = userOption;
        }
    },

    // Extra reducers to handle the asynchronous API call using createAsyncThunk
    extraReducers: (builder) => {
        // Handling the pending state while the data is being fetched
        builder.addCase(fetchData.pending, (state, actions) => {
            state.isLoading = true;
        })
        // Handling the fulfilled state when the data is successfully fetched
        builder.addCase(fetchData.fulfilled, (state, actions) =>{
            state.isLoading = false;
            state.responseCode = actions.payload.response_code;
            if(state.responseCode === 0){
                // Updating the state with the fetched data and processing it
                state.data = actions.payload.results;
                let sizeOfData = actions.payload.results.length;
                state.totalQuestions = sizeOfData;
                state.userData = new Array(sizeOfData).fill(undefined);
                state.visitedQuestionList = new Array(sizeOfData).fill(0);

                for(let i = 0; i<sizeOfData; i++){
                    const {correct_answer, incorrect_answers} = actions.payload.results[i];
                    let arr = [...incorrect_answers, correct_answer];

                    // Randomizing the options using fisherYatesShuffle method
                    const randomOptions = (arr) => {
                        for (let i = arr.length - 1; i > 0; i--) {
                          const j = Math.floor(Math.random() * i ) +1 ;
                          [arr[i], arr[j]] = [arr[j], arr[i]];
                        }
                        return arr;
                    };
                    state.options[i] = randomOptions(arr);
                }
            }
        })
        // Handling the rejected state when there is an error in fetching data
        builder.addCase(fetchData.rejected, (state, actions) =>{
            state.isLoading = false;
            state.isError= true;
        })
    }
})

// Exporting actions and reducer for use in the application
export const { setUserEmail, updateUserAnswers, updateTheVisited } = fetchQuestion.actions;
export default fetchQuestion.reducer;
