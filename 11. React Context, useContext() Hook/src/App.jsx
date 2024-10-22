import { PostContainer } from './components/PostContainer';
import { PostContentButtons } from './components/PostContentButtons';
import { UserContext } from './utils/contexts/UserContext';

export default function App() {
  return (
    <>
      {/* .Provider method of react context
    Any component inside <.Provider>...</.Provider> can access the data of the said React Context
    Here, .Provider method helps PostContainer.jsx component to access the data from UserContext react context
    We have pass in our object based on the userContext default value */}
      <UserContext.Provider
        value={{
          id: 1,
          username: 'anson',
          email: 'ansonthedev@gmail.com',
          displayName: 'Anson the Dev',
        }}
      >
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
      <PostContentButtons />
      {/* Here, PostContentButtons can only access UserContext default value i.e (id: 0) because its outside of UserContext.Provide element. Due to this it cannot access the latest value*/}
    </>
  );
}
