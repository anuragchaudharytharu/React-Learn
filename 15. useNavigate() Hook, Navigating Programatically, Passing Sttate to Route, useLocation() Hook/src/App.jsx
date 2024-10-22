import { useEffect, useState } from 'react';
import { PostContainer } from './components/PostContainer';
import { UserContext } from './utils/contexts/UserContext';
import { useFetchuser } from './utils/custom hooks/useFetchUser';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function App() {
  // custom hook for custon data fetch
  const { user, loading, error } = useFetchuser(2);
  // console.log({ user, loading, error });

  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  // useNavigate() Hook is used to navigate the path programmatically when there occur some event or some condition is fulfilled

  useEffect(() => {
    if (!loading && !error && user) {
      setUserData(user);
      navigate('/users-page'); // this directly calls users-page when the given conition is fullfilled
    }
  }, [loading, error, user, navigate]);

  return (
    <>
      <nav>
        <ul className="list-disc pl-5 text-blue-900">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users-page">Users</Link>
          </li>
          <li>
            <Link to="/blog-posts-page">Blog</Link>
          </li>
        </ul>
      </nav>

      <div>
        <label htmlFor="data">Enter Data</label>
        <input
          type="text"
          id="data"
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value.length > 10) {
              navigate('/blog-posts-page', {
                // we pass state to this navigate so that the navigate page can access the state
                state: {
                  posts: [
                    {
                      id: 1,
                      title: 'hello world',
                      content: 'welcome to my first post',
                    },
                  ],
                },
              });
            }
          }}
        />
      </div>

      <UserContext.Provider value={{ ...userData, setUserData: setUserData }}>
        <div>{loading ? 'Loading....' : <PostContainer />}</div>
      </UserContext.Provider>
      <Outlet />
    </>
  );
}
