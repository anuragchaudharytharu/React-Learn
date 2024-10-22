import { useEffect, useState } from 'react';
import { PostContainer } from './components/PostContainer';
import { UserContext } from './utils/contexts/UserContext';
import { useFetchuser } from './utils/custom hooks/useFetchUser';
import { Outlet, Link } from 'react-router-dom';

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
      <nav>
        <ul className="list-disc pl-5 text-blue-900">
          <li>
            <Link to="/">Home</Link>
            {/* <Link></Link> is imported from react-router-dom for linking pages without the whole page refreshig behaviour like when used in anchor <a> html element. So, use this react-router link tag instead of html anchor tag */}
          </li>
          <li>
            <Link to="/users-page">Users</Link>
            {/* User page content link will also have home page content as it is the child page of home page */}
          </li>
          <li>
            <Link to="/blog-posts-page">Blog</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={{ ...userData, setUserData: setUserData }}>
        <div>{loading ? 'Loading....' : <PostContainer />}</div>
      </UserContext.Provider>
      <Outlet />
    </>
  );
}
