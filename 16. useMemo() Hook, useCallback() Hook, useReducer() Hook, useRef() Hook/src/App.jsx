import { useCallback, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import UseReducerHook from './Hooks/UseReducerHook';
// import UseMemoHook from './Hooks/UseMemoHook';
// import UseRefHook_2 from './Hooks/UseRefHook_2';
// import UseRefHook_1 from './Hooks/UseRefHook_1';

export default function App() {
  const [navbarCount, setNavbarCount] = useState(0);
  const [adjective, setAdjective] = useState('good');

  // useCallback() Hook
  // useCallback(() => {function}, [dependency array])

  /*
    const getAdjective = () => {
    return 'another ' + navbarCount;
  };
  // with every App.jsx component rerendering, this getAdjective function gets changed. Example: In javascript, suppose, we have two different variable A & B with same function. If we A === B, we get output of false
  // Which means Navbar getAdjective prop gets changed i.e Memo will think that Navbar getAdjective prop got a new value. Which means Navbar component rerenders itself even if we used memo to it.
  */

  // To avoid this problem, we need to freeze the getAdjective function from being changed/updated.
  // To do this i.e to freeze the function, we must implement useCalllback hook.
  const getAdjective = useCallback(() => {
    return 'another ' + navbarCount;
  }, [navbarCount]);

  return (
    <>
      <div>
        <Navbar adjective={adjective} getAdjective={getAdjective} />
        <button
          onClick={() => {
            setNavbarCount((currentNavbarCount) => currentNavbarCount + 1);
          }}
        >
          Navbar Count is {navbarCount}
        </button>
        <hr />
      </div>
      <UseReducerHook />
      {/* <UseRefHook_1 /> */}
      {/* <UseRefHook_2 /> */}
      {/* <UseMemoHook /> */}
    </>
  );
}
