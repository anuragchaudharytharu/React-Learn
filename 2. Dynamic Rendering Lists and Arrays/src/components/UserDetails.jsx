import PropTypes from 'prop-types';

// Note: Instead of giving unique function arguement name and propVariable name of UserDetails.jsx component like in the above example, We can give same name and use destructuring method. So we can pass {detailsProps} in function argument and {detailsProps.id}/{detailsProps.email} etc in jsx element

export function UserDetails({ detailsProps }) {
  console.log({ detailsProps }); // output ==> prop: {...}
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

// Below method is not recommended although we can use that too
// no destructuring is used

// export function UserDetails(Props) {
//   // console.log(Props);
//   return (
//     <div>
//       <b>Id: </b>
//       <span>{Props.detailsProps.id}</span>
//       <br />
//       <b>Username: </b>
//       <span>{Props.detailsProps.username}</span>
//       <br />
//       <b>Email: </b>
//       <span>{Props.detailsProps.email}</span>
//       <br />
//     </div>
//   );
// }
