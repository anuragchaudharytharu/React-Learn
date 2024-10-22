import { useContext } from 'react';
import { UserContext } from '../utils/contexts/UserContext';
import { PostContentButtons } from './PostContentButtons';

export function PostContent() {
  // const userContextData = useContext(UserContext);
  const { email, setUserData } = useContext(UserContext);

  return (
    <div>
      <div className="mb-[2px] text-[28px] font-bold">
        <span>Post Content Component</span>
      </div>
      email: {email}
      <br />
      <button
        className="bg-slate-100 text-black pr-2 pl-2 rounded-[4px]"
        onClick={() => {
          setUserData((currentState) => ({
            ...currentState,
            name: 'Updated Display Name',
          }));
        }}
      >
        Click Me
      </button>
      <PostContentButtons />
    </div>
  );
}
