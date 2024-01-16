import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Action payload data comes from here
export const fetchData = createAsyncThunk('fetchData' , async () => {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=15');
        const data = await response.json();
        return data;
      } catch (error) {
        return error;
      }
})


const fetchQuestion = createSlice({
    name: "questions",
    initialState: {
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

        setUserEmail: (state, actions) => {
            state.userEmail = actions.payload.userEmail;
        },

        updateTheVisited: (state, actions) => {
            state.visitedQuestionList[actions.payload.currenQuestion] = 1;
        },

        updateUserAnswers: (state, actions) => {
            const currentQuestion = actions.payload.currenQuestion;
            const userOption = actions.payload.userOption;
            state.userData[currentQuestion] = userOption;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, actions) => {
            state.isLoading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, actions) =>{
            state.isLoading = false;
            state.responseCode = actions.payload.response_code;
            if(state.responseCode === 0){
                state.data = actions.payload.results;
                let sizeOfData = actions.payload.results.length;
                state.totalQuestions = sizeOfData;
                state.userData = new Array(sizeOfData).fill(undefined);
                state.visitedQuestionList = new Array(sizeOfData).fill(0);

                for(let i = 0; i<sizeOfData; i++){
                    const {correct_answer, incorrect_answers} = actions.payload.results[i];
                    let arr = [...incorrect_answers, correct_answer];

                    //Randomizing the options using fisherYatesShuffle method
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
        builder.addCase(fetchData.rejected, (state, actions) =>{
            state.isLoading = false;
            state.isError= true;
        })

    }
})

export const { setUserEmail, updateUserAnswers,updateTheVisited} = fetchQuestion.actions
export default fetchQuestion.reducer