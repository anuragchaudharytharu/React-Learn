//useState() returns an array
// [stateVariableName, stateUpdaterFunction/stateDispatchFunction] = useState()

// 1st method: use of stateVariable as object field inside the state and updating that specific field when needed. Recommended method.

import { useState } from 'react';

const RegisterForm = () => {
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
    displayName: '',
  });

  console.log(formFields);

  return (
    <form>
      <div className="mb-2">
        <label htmlFor="username">Username </label>
        <input
          id="username"
          value={formFields.username}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              username: e.target.value,
            })); //currentState is whatever formField is at the current moment. We will create a copy of the currentState value by use of spread operator inside the new object and then update the specific field of that new object// We can't use spreader operator in formFields state itself because we must never modify/mutate the actual state which in this case is formFields and formFields may not update as there is no guarentee that update will be synchronous

            // setFormFields({ username: e.target.value }); //This is not correct approach to update the field of an object becasue Override and change the entire formFields object. Here, password and displayName field no longer exist inside the foemFields object
          }}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password">Password </label>
        <input
          id="pasword"
          type="password"
          value={formFields.password}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              password: e.target.value,
            }));
          }}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="displayName">Display Name </label>
        <input
          id="displayName"
          value={formFields.displayName}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              displayName: e.target.value,
            }));
          }}
        />
      </div>

      <div>
        <span>Username: {formFields.username}</span>
      </div>
      <div>
        <span>Password: {formFields.password}</span>
      </div>
      <div>
        <span>Display Name: {formFields.displayName}</span>
      </div>

      {/* <button
        className="bg-slate-50 text-black pl-2 pr-2 rounded-[4px] mt-2"
        disabled={isDisabled}
      >
        Sign Up
      </button> */}
    </form>
  );
};

export default RegisterForm;

/*
  // 2nd method: use of different individual state for each three stateVariable and updating it separately. Not recommended method.

import { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const isDisabled = !username || !password || !displayName;

  return (
    <form>
      <div className="mb-2">
        <label htmlFor="username">Username </label>
        <input
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password">Password </label>
        <input
          id="pasword"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="displayName">Display Name </label>
        <input
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>

      <div>
        <span>Username: {username}</span>
      </div>
      <div>
        <span>Password: {password}</span>
      </div>
      <div>
        <span>Display Name: {displayName}</span>
      </div>

      <button
        className="bg-slate-50 text-black pl-2 pr-2 rounded-[4px] mt-2"
        disabled={isDisabled}
      >
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
*/
