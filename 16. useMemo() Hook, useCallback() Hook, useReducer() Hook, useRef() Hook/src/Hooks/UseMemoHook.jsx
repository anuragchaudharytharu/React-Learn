import { useState, useMemo } from 'react';

const nums = new Array(30_000_000).fill().map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});

export default function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  // useMemo() Hook
  // Syntax ====> useMemo(() => first, [second])
  // useMemo(() => {memoise logic}, [dependency array that compute the memoise logic again when condition/stateVariable changes i.e when necessary])
  // Between rerenders, we dont want our value to compute again and again. This will create an expensive computation
  // In this case, we need to use useMemo() Hook
  // example : const magical = numbers.find((item) => item.isMagical === true); // Expensive Computation
  const magical = useMemo(
    () => numbers.find((item) => item.isMagical === true),
    [numbers]
  );

  return (
    <div style={{ marginTop: '30px' }}>
      <span>Magical number is {magical.index}</span>
      <button
        onClick={() => {
          setCount((count) => count + 1);
          if (count === 10) {
            setNumbers(
              new Array(10_000_000).fill(0).map((_, i) => {
                return {
                  index: i,
                  isMagical: i === 9_000_000,
                };
              })
            );
          }
        }}
      >
        useMemoHook count is {count}
      </button>
    </div>
  );
}
