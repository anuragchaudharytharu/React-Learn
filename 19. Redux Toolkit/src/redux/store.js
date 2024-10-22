// 1st step: Create a redux store
// we will store entire logic of reducer so that we can update the state

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';

export const store = configureStore({
  // 6th step: register the exported reducer imported from the slice
  reducer: {
    counter: counterReducer,
  },
});
