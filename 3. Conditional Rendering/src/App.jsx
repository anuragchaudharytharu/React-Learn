// Below is conditional rendering use by switch case method

export default function App() {
  const USER_STATUS = 'ACCOUNT_DISABLED';

  switch (USER_STATUS) {
    case 'NOT_VERIFIED':
      return (
        <div>
          <span>
            You are not verified. Please verify your Email or Mobile number.
          </span>
        </div>
      );
    case 'VERIFIED':
      return (
        <div>
          <span>
            You are not verified. Please verify your Email or Mobile number.
          </span>
        </div>
      );
    case 'ACCOUNT_DISABLED':
      return (
        <div>
          <span>Your account is disabled.</span>
        </div>
      );
    default:
      return (
        <div>
          <span>Please contact a system admin.</span>
        </div>
      );
  }
}

// Below is conditional rendering use by if, else if, else statement

// export default function App() {
//   const USER_STATUS = 'ACCOUNT_DISABLED';

//   if (USER_STATUS === 'NOT_VERIFIED') {
//     return (
//       <div>
//         <span>
//           You are not verified. Please verify your Email or Mobile number.
//         </span>
//       </div>
//     );
//   } else if (USER_STATUS === 'VERIFIED') {
//     return (
//       <div>
//         <span>
//           you are verified. Congrats! Click here to Access Your Dashboard.
//         </span>
//       </div>
//     );
//   } else if (USER_STATUS === 'ACCOUNT_DISABLED') {
//     return (
//       <div>
//         <span>Your account is disabled.</span>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <span>Please contact a system admin.</span>
//       </div>
//     );
//   }
// }

// Below is conditional rendering use by ternary operator

// export default function App() {
//   const isAuthenticated = true;

//   return isAuthenticated ? (
//     <div>
//       <h1>Welcome, User!</h1>
//     </div>
//   ) : (
//     <div>
//       <h1>You are not logged in</h1>
//     </div>
//   );
// }

// Below is conditional rendering use by if statement

// export default function App() {
//   const isAuthenticated = false;

//   if (isAuthenticated) {
//     return (
//       <div>
//         <h1>Welcome, User!</h1>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <span>You are not logged in</span>
//     </div>
//   );
// }
