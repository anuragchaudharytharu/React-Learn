import { memo } from 'react';
// memo makes component to rerenders only when props is changed/updated .It wont rerender the component if props is not changed/updated evenif state value change

function Navbar({ adjective, getAdjective }) {
  console.log('Navbar is rendered');
  // Here, When using memo, although (getAdjective) prop didn't change/updates, Navbar component rerenders. This is becasue, whenever App.jsx component rerenders, getAdjective function changes which means Navbar thinks that (getadjective) props is being changed
  // example: In javascript, suppose, we have two different variable A & B with same function. If we A === B, we get output of false

  // To avoid this problem, we need to freeze that function from being changed. So, for this, we implement useCallback() Hook to that function
  return (
    <div>
      <span style={{ fontSize: '24px' }}>I am a {adjective} Navbar</span>
      <button
        onClick={() => {
          getAdjective();
        }}
      >
        {getAdjective()}
      </button>
    </div>
  );
}

export default memo(Navbar);
