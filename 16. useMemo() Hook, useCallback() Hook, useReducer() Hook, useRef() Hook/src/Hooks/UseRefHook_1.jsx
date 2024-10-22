import { useEffect, useRef, useState } from 'react';

export default function UseRefHook_1() {
  const [count, setCount] = useState(0);
  /*
  let a = 0;
  */

  let a = useRef(0);
  // useRef() Hook
  // useRef hook helps in persisting the value across rerenders i.e value of reference doesnt change
  // when ref.current property is changed or updated, it doesnot rerenders the component unlike stateVariable value of useState hook
  // That is, ref.current is not used inside the return() of component cause it won't rerender and value won't update

  useEffect(() => {
    /*
    a = a + 1;
    console.log(`rendering and the value of a is ${a}..`);
    // Here the output of value of a in sole again is 1 because whenever the count state is changed it rerenders the whole component which makes the value of a to be 0  and then useEffect is called by which value of a increases by 1 as per useEffect callback function written logic. Even though count stateVariable is updated, value of a is not updated.It doesnt persist. Normal variable doesnot persist 
    // So if we want to increase the value of a whenever count state changed, we need to use useRef hook
    */

    a.current = a.current + 1;
    console.log(`rendering and the value of a is ${a.current}..`);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        UseRefHook_1 Count is {count}
      </button>
      <hr />
    </div>
  );
}
