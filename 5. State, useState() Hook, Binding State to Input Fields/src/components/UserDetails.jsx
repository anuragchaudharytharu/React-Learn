import PropTypes from 'prop-types';

export function UserDetails({ detailsProps }) {
  console.log({ detailsProps });
  return (
    <div>
      <b>Id: </b>
      <span>{detailsProps.id}</span>
      <br />
      <b>Username: </b>
      <span>{detailsProps.username}</span>
      <br />
      <b>Email: </b>
      <span>{detailsProps.email}</span>
      <br />
    </div>
  );
}

UserDetails.propTypes = {
  detailsProps: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
