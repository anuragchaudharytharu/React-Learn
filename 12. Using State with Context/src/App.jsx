import { useState } from 'react';
import { PostContainer } from './components/PostContainer';
import { UserContext } from './utils/contexts/UserContext';
import Count from './components/Count';

export default function App() {
  const [userData, setUserData] = useState({
    id: 1,
    username: 'anson',
    email: 'ansonthedev@gmail.com',
    displayName: 'Anson the Dev',
  });

  return (
    <>
      <UserContext.Provider value={{ ...userData, setUserData: setUserData }}>
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
    </>
  );
}
