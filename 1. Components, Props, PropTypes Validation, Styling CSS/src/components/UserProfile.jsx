import PropTypes from 'prop-types';
import { UserFavouriteFoods } from './UserFavouriteFoods';
import { UserUsername } from './UserUsername';

export function UserProfile(profileProps) {
  console.log(profileProps);

  profileProps.callMe();

  return (
    <div>
      <UserUsername user={profileProps.username} />
      <b>Age:</b> <span>{profileProps.age}</span>
      <UserFavouriteFoods />
      {profileProps.isLoggedIn}
      {String(profileProps.isLoggedIn)}
    </div>
  );
}

// Note: user is prop for UserUsername.jsx component in which its value i.e props.username is from App.jsx component

// UserUsername, UserFavouriteFoods are the child component of UserProfile.jsx component

// To install PropTypes package ===> npm i prop-types
UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  favouriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
    // .array to check if content is array or not
    // .arrayOf is used to checked if the content of array is valid or not. use this for prop validation
    // ProtoTypes.shape allows us to check if specific object has specific shape or not
  ),
};
