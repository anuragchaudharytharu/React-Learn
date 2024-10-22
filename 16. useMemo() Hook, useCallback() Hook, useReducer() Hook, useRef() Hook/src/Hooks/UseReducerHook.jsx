import { useReducer } from 'react';

const initialState = 0;
const reducerFunction = (currentState, action) => {
  switch (action) {
    case 'Increament':
      return currentState + 1;
    case 'Decreament':
      return currentState - 1;
    default:
      return currentState;
  }
};

export default function UseReducerHook() {
  // useReducer() Hook
  // const [stateVariable, dispatchFunction] = useReducer(reducer, initialState)
  // Its a react hook used for state management
  // useReducer Hook is an alternative to useState Hook. Its mainly used when there is complex state logic. Its highly recommended to use usReducer Hook in large codebase applications

  // dispatchFunction: It calls the pure function of reducer. There is no side effects present inside the reducer function. It sends action to the reducer to modify the state

  // Reducer
  // reducer: its a function that accepts two parameter ====> newState = reducer(currentState, action). Action comes from dispatchFunction

  const [count, dispatchFunction] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <h1 style={{ fontSize: '24px' }}>Count is {count}</h1>
      <button
        onClick={() => {
          dispatchFunction('Increament');
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          dispatchFunction('Decreament');
        }}
      >
        Decreament
      </button>
      <hr />
    </div>
  );
}
