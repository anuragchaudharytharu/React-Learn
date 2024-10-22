import { useEffect, useState } from 'react';
import { PostContainer } from './components/PostContainer';
import { UserContext } from './utils/contexts/UserContext';
import { useFetchuser } from './utils/custom hooks/useFetchUser';

export default function App() {
  // custom hook for custon data fetch
  const { user, loading, error } = useFetchuser(2);
  // console.log({ user, loading, error });

  const [userData, setUserData] = useState({});

  console.log(loading);

  useEffect(() => {
    if (!loading && !error && user) {
      setUserData(user);
    }
  }, [loading, error, user]);

  return (
    <>
      <UserContext.Provider value={{ ...userData, setUserData: setUserData }}>
        <div>{loading ? 'Loading....' : <PostContainer />}</div>
      </UserContext.Provider>
    </>
  );
}
