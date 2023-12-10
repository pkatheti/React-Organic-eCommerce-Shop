import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './DemoCounterSlice';
interface sharedData {
    value: number,
    deleteMsg : any
};
const initialState: sharedData = {
    value: 0,
    deleteMsg : null,

    
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
          apiSlice.endpoints.deleteItem.matchFulfilled,
          (state, { payload }) => {
            state.deleteMsg = payload
          }
        )
      },
});

export const { Increment, Decrement } = counterSlice.actions;
export default counterSlice.reducer;