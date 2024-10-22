import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [sync, setSync] = useState(false);
  // useEffect() Hook
  // useEffect(() => {}, [Dependency Array. It is optional])
  // By default, useEffect callback function renders twice
  // We shouldn't add stateVariable inside useEffect hook if we don't intend to add it to dependency array
  // Its used to perform side effects
  // A side effect is anything that you perform outside of the scope of your component or application

  /*
  // Note: When dependency array is not used
  // When dependency array is not given, every single time when we are updating the state, react gonna umount and then rerenders the component reflecting the new state. And whenever app is rerendered, by default it is going to go ahead and call the callback function of useEffect Hook every single render
  // useEffect(() => {
  //   console.log('Rendering...');
  //   document.title = 'React tutorial ' + count;
  // });
  */

  // Note: When dependency array is used
  // Its generally used to to invoke useEffect callback function one time only
  // When dependency array is used i.e specifically empty dependency array to the useEffect hook, callback function gets invoked one time only which is when your app or component initially renders. And any state that is updated is not going to cause callback to be invoked
  useEffect(() => {
    console.log('Rendering...');
    document.title = 'React tutorial ' + count;
  }, [sync]); // We shouldn't add stateVariable inside useEffect hook if we don't intend to add it to dependency array. Lynting issue occur here as count stateVariable is used inside the useEffect hook but not used as dependency array like sync stateVariable.

  return (
    <div className="ml-[10px] mt-[8px] text-center">
      <div>You clicked the button {count} times</div>
      <button
        className="bg-slate-100 text-black pr-3 pl-3 mr-[10px] rounded-[4px]"
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        Click Me
      </button>
      <button
        className="bg-slate-100 text-black pr-3 pl-3 rounded-[4px]"
        onClick={() => {
          setSync((currentSync) => !currentSync);
        }}
      >
        Sync
      </button>
    </div>
  );
}
