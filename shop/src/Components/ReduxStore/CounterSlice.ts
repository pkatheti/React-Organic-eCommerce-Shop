import { createSlice } from '@reduxjs/toolkit'

interface counterState {
    value: number
};
const initialState: counterState = {
    value: 0,
    
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        Increment(state) {
            state.value++;
        },
        Decrement(state) {
            state.value--;
        }
    }
});

export const { Increment, Decrement } = counterSlice.actions;
export default counterSlice.reducer;