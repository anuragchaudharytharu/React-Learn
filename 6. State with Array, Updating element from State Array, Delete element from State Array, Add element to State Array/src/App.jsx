import { useState } from 'react';
import { UserDetails } from './components/UserDetails';

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [counter, setCounter] = useState(3);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'anson',
      email: 'anson@gmail.com',
    },
    {
      id: 2,
      username: 'michael',
      email: 'michael@gmail.com',
    },
  ]);

  return (
    <div>
      <form
        className="mb-[30px] ml-[10px] mt-[10px]"
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: counter,
            username: username,
            email: email,
          };
          setCounter((currentCounter) => {
            return currentCounter + 1;
          });
          setUsers((currentUsersState) => {
            return [...currentUsersState, newUser];
          });
        }}
      >
        <div>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mr-3"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-slate-100 text-black rounded-[4px] pl-2 pr-2"
          // we ca use Add user button onclick event to add elements to the array instead of form onsubmit event

          // onClick={() => {
          //   const newUser = {
          //     id: counter,
          //     username: username,
          //     email: email,
          //   };
          //   setCounter((currentCounter) => {
          //     return currentCounter + 1;
          //   });
          //   setUsers((currentUsersState) => {
          //     return [...currentUsersState, newUser];
          //   });
          // }}
        >
          Add User
        </button>
      </form>

      {users.map((user) => (
        <UserDetails key={user.id} detailsProps={user} setUsers={setUsers} />
      ))}
    </div>
  );
}

// Note: We can use index of an array as unique id but not as a unique key
