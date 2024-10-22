// 3ed step: Create slice for the all the features

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
      // By default, the update value will be in string type. So, we have convert the string to number by using Number() method
    },
  },
});

// 4th step: Create action for each reducers and and export it
// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// 5th step: export the slice as reducer.
export default counterSlice.reducer;
