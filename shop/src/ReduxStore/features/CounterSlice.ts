import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { testingApiSlice } from '../ApiJunction/apiEndPoints/TestingApiSlice';

interface sharedData {
    value: number,
    deleteMsg: any
};
const initialState: sharedData = {
    value: 0,
    deleteMsg: null,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        Increment(state) {
            state.value++;
        },
        Decrement(state, action: PayloadAction<number>) {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            testingApiSlice.endpoints.deleteItem.matchFulfilled,
            (state, { payload }) => {
                state.deleteMsg = payload
            }
        )
    },
});

export const { Increment, Decrement } = counterSlice.actions;
export default counterSlice.reducer;