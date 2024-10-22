import PropTypes from 'prop-types';
import { useState } from 'react';

export function UserDetails({ detailsProps, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(detailsProps.username);
  const [email, setEmail] = useState(detailsProps.email);

  // console.log(isEditing);

  return (
    <div className="ml-[10px] mt-[10px]">
      <div>
        <button
          className="bg-slate-50 text-black pl-2 pr-2 rounded-[4px] mr-2"
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button
          className="bg-slate-50 text-black pl-2 pr-2 rounded-[4px] mr-2"
          onClick={() => {
            setUsers((currentUsersState) =>
              // .filter() is a method that filters out the specific array field and then return the new array
              currentUsersState.filter(
                (currentUser) => currentUser.id !== detailsProps.id
              )
            );
          }}
        >
          Delete
        </button>
        {isEditing && (
          <button
            className="bg-slate-50 text-black pl-2 pr-2 rounded-[4px] mr-2"
            onClick={() => {
              setUsers((currentUsersState) => {
                return currentUsersState.map((currentUser) =>
                  currentUser.id === detailsProps.id
                    ? { ...currentUser, username: username, email: email }
                    : currentUser
                );
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
          /*
          // by using if condition statement
          <button
            className="bg-slate-50 text-black pl-2 pr-2 rounded-[4px] mr-2"
            onClick={() => {
              setUsers((currentUsersState) => {
                return currentUsersState.map((currentUser) => {
                  if (currentUser.id === detailsProps.id) {
                    return { ...currentUser, username: username, email: email };
                  } else {
                    return currentUser;
                  }
                });
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
          */
        )}
      </div>
      <div className="mb-3">
        <b>Id: </b>
        <span>{detailsProps.id}</span>
        <br />
        <b>Username: </b>
        {isEditing ? (
          <input
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        ) : (
          <span>{detailsProps.username}</span>
        )}
        <br />
        <b>Email: </b>
        {isEditing ? (
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        ) : (
          <span>{detailsProps.email}</span>
        )}
        <br />
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  detailsProps: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
