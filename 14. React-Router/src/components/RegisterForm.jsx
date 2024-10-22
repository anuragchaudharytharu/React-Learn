import { useState } from 'react';

const RegisterForm = () => {
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
    name: '',
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
            }));
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
        <label htmlFor="name">Display Name </label>
        <input
          id="name"
          value={formFields.name}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              name: e.target.value,
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
        <span>Display Name: {formFields.name}</span>
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