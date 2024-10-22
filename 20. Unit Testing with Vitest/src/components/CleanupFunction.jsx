import { useState } from 'react';
import LoginForm from './LoginForm';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="text-center">
      <button
        className="bg-slate-100 text-black pr-2 pl-2 rounded-[4px]"
        onClick={() => {
          setToggle((currentToggleState) => !currentToggleState);
        }}
      >
        Toggle
      </button>
      {toggle && <LoginForm />}
    </div>
  );
};

export default CleanupFunction;
