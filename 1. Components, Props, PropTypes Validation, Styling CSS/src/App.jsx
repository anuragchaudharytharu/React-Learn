import { UserProfile } from './components/Userprofile';

export default function App() {
  const callMe = () => {
    console.log('Hello');
  };

  return (
    <>
      <h1 className="text-[48px]">Root Component</h1>
      <UserProfile
        username="Bob"
        age={25}
        isLoggedIn={false}
        favouriteFoods={[
          {
            name: 'Sushi',
            id: 'Sushi',
          },
          {
            name: 'Pizza',
            id: 'Pizza',
          },
        ]}
        callMe={callMe}
      />
      {/* prop = {number}, prop = 'string', prop = {boolean}  */}
    </>
  );
}

// username, age, isLoggedIn,favouriteFoods are props for UserProfile.jsx component

// UserProfile is the child component of App.jsx component

// We can share props of parent component into child components
