import { useEffect } from 'react';
import useDocumentClick from '../utils/custom hooks/UseDocumentClick';

function LoginForm() {
  useEffect(() => {
    const resizeEventHandler = () => {
      console.log('Window/Viewport Resized');
    };

    window.addEventListener('resize', resizeEventHandler);

    // cleanup function
    return () => {
      console.log('Unmounting Login Form');
      console.log('Removing Resize Event Listener');
      window.removeEventListener('resize', resizeEventHandler);
    };
  }, []);

  // custom hook
  useDocumentClick();

  // Note: When LoginForm componenet gets rendered from CleanUpFunction component, LoginForm gets rendered two times as by deafult behaviour of react. After this, hooks body code doent render even if there is change in the state
  // Note: Stages of it: (Mount-FirstRender-Unmount-SecondRender)....
  // (Mount):=> When LoginForm component gets called by cleanupFunction, useEffect and custom hook gets mounted for the first time render purpose,
  // (FIRST-TIME render):=> After mount stage, there is render for the first time. useEffect and custom Hook body code renders only here.
  // (Unmount):=> After the first render, all the hooks get for unmounting stage. Here, only Cleanup function of both useEffect and custom hook gets triggered i.e work under return function only gets called
  // (SECOND-TIME render) :=>  useEffect and custom hooks body code only render for the second time by default.
  // After all of the stage completion, the code doesn't work even if there is change in state due to the use of empty dependency array as the hooks depend on the it ofr the function

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const password = formData.get('password');
        fetch('https://localhost:3001/api/login', {
          body: {
            username,
            password,
          },
          method: 'POST',
        });
      }}
    >
      <label htmlFor="username">Username</label>
      <br />
      <input
        id="username"
        name="username"
        onChange={(e) => {
          console.log(`Username: ${e.target.value}`);
        }}
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        id="password"
        name="password"
        type="password"
        onChange={(e) => {
          console.log(`Password: ${e.target.value}`);
        }}
      />
      <br />
      <button className="text-black bg-white border-[2px] border-slate-900">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
