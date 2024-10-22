/*
Redux toolkit is a package that is used for state management.
  -to solve prop drilling problem by creating a single source of store or truth


Redux Toolkit steps:

1st step: Create a redux store. We will store entire logic of reducer function by registering it inside the redux store so that we can update the state

2nd step: We musr wrap App.jsx component inside the imported <provider></provider> from react-redux with props value of imported redux store so that App component can access all the state of that we maintains inside store.js file reducer .

3rd step: Create slice for the all the features. It contains name, initialState and reducer functions

4th step: In the slice, Create action for each reducers function and export it. Action creators are generated for each case reducer function.

5th step: In the slice, export the slice as reducer.

6th step: Register the exported reducer imported from the slice inside the redux store
*/

import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from './features/counter/CounterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);

  // useSelector() Hook
  // Its used to fetch the data from the redux store that has slice contianing the data by using useSelector() Hook

  // Here, In the redux store, we have slice named counter. This counter slice has value 0 inside initailState. We fetch this data by using useSelector() Hook of react-redux
  const count = useSelector((state) => state.counter.value);

  // useDispatch() Hook
  // It used to dispatch actions of reducer for executing those actions

  // In the slice, Reducer consist of different actions and to execute those actions, we need to dispatch the actions
  // to dispatch the action, we have to use useDisptach() Hook of react-redux
  const dispatch = useDispatch();

  const handleIncreamentClick = () => {
    dispatch(increment()); // dispating (increament)action of reducer inside the slice
  };

  const handleDecreamentClick = () => {
    dispatch(decrement()); // dispating (decreament)action of reducer inside the slice
  };

  const handleResetClick = () => {
    dispatch(reset()); // dispating (reset)action of reducer inside the slice
  };

  const handleIncreamentByAmountClick = () => {
    dispatch(incrementByAmount(amount)); // dispating (increamentByAmount)action with payload. Here, we insert payload value of (amount)stateVariable. This (amount)stateVariable depend on the input value. (increamentByAmount)action is action of reducer inside the slice.
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-[10px]">
      <button
        className="bg-black text-[24px] pl-[12px] pr-[12px] font-bold rounded-md"
        onClick={() => handleIncreamentClick()}
      >
        + 1
      </button>

      <div className="flex items-center justify-center gap-8">
        <button
          className="bg-black text-[24px] pl-[12px] pr-[12px] rounded-md"
          onClick={() => handleResetClick()}
        >
          Reset
        </button>

        <p className="text-[32px] font-bold">Count: {count}</p>

        <div className="flex items-center justify-center gap-[10px]">
          <input
            type="number"
            value={amount}
            placeholder="Enter  Amount"
            className="bg-black pl-[6px] pr-[6px] w-[100px] font-bold text-[23px] rounded-md"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="bg-black text-[24px] pl-[12px] pr-[12px] rounded-md"
            onClick={() => handleIncreamentByAmountClick()}
          >
            Increament By Amount
          </button>
        </div>
      </div>

      <button
        className="bg-black text-[24px] pl-[14px] pr-[14px] font-bold rounded-md"
        onClick={() => handleDecreamentClick()}
      >
        - 1
      </button>
    </div>
  );
}

export default App;

/*
WORK-FLOW:
In the UI, we see (Count: 0) where 0 is the value of count variable

Initally, We have count variable of value 0 in App.jsx.

(+)button ====> 
  When we click the (+)button, it register an onclick event that has (handleIncreamentclick) function. This handleIncreamentClick function then dispatch an action named (Increament) of reducer inside slice. Increament action triggers a function that updates the state.value by increasing it by 1. As soon as state.value is updated with increase by 1, the count varaible previous value in App.jsx also gets updated with increase by 1. The new value of count varaible is shown in our updated UI 

(-)button ====> 
  Same goes when we click (-)button but count value depend on state.value decreases by 1 as a Decreament action is dipatched which triggers a function that decreases state.valye by 1.

(Reset)button ====> 
  Same when we click on (Reset)button, count value gets reset to 0

(Increament by Amount)button ====> 
  Same with (Increament by Amount)button, count value change according to the input value. Here, when the (Increament by Amount)button is clicked with certain input value, it calls (handleIncreamentByAmount) function that dipatch an action named incrementByAmount with payload value depending on the input value. (incrementByAmount)Action then triggers a function that changes the state.value according to the action.payload. This playload value is the input value before we click the button as in mentioned above line. The count varaible linked with onclick function changes due to this state.value updating. We see this updated count value in our UI
*/
