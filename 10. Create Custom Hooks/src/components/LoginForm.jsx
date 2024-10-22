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
