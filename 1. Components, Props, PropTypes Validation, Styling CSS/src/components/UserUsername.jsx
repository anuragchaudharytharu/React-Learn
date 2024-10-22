import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export function UserUsername(props) {
  // console.log(props);
  // console.log(props.username);

  return (
    // Example:
    // <div>
    //   <b>Username: </b>
    //   <span>{props.user}</span>
    // </div>

    // <b> & <span> are the child element of main <div> element. In such instances,<div> becomes the immediate child element when rendering it to UserProfile.jsx component

    // To make <b> & <span> immediate child element when rendering to another component, instead of <div>, We need to use <React.Fragment></React.Fragment> or <></> as main parent element

    <React.Fragment>
      <b
        className={styles.username}
        style={{
          fontFamily: 'cursive',
        }}
      >
        Username:{' '}
      </b>
      <span className="text-[60px] text-blue-300">{props.user}</span>
      <br />
    </React.Fragment>
  );
}

// props.user is a propvalue from UserProfile.jsx component

UserUsername.propTypes = {
  user: PropTypes.string.isRequired,
};
