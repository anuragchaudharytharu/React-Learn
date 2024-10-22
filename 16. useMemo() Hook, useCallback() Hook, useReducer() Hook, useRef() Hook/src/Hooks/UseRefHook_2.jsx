import { useEffect, useRef, useState } from 'react';
import UseRefHook_1 from './UseRefHook_1';

export default function UseRefHook_2() {
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(true);
  const btnRef = useRef(0);

  useEffect(() => {
    console.log('First rendering...');
    btnRef.current.style.backgroundColor = 'red';
  }, []);

  return (
    <div>
      <button
        ref={btnRef}
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        UseRefHook_2 Count is {count}
      </button>
      {/* In this button, here we dont want do DOM manipulation but instead we can just reference it with ref vaiable name  */}
      {isDisplay ? (
        <button
          onClick={() => {
            btnRef.current.style.display = 'none';
            setIsDisplay(false);
          }}
        >
          Remove UseRefHook_2
        </button>
      ) : (
        <button
          onClick={() => {
            btnRef.current.style.display = 'inline-block';
            setIsDisplay(true);
          }}
        >
          Display UseRefHook_2
        </button>
      )}
      <hr />
    </div>
  );
}

// In most of the cases, we dont do DOM manipulation in ReactJS. Instead we use ref attribute for this functionality by the use of useRef() Hook and its .current method
