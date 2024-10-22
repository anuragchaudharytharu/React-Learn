import { useContext, useState } from 'react';
import { PostContent } from './PostContent';
import { UserContext } from '../utils/contexts/UserContext';

export function PostContainer() {
  const [data, setData] = useState('hello World');

  const userContextData = useContext(UserContext);
  // console.log(userContextData);
  // console.log(userContextData.setUserData);

  return (
    <div>
      <div className="mb-[2px] text-[36px] font-bold">
        <span>Post Container Component</span>
      </div>
      <div>username: {userContextData.username}</div>
      <div>
        name:
        <span className="font-bold text-red-800">{userContextData.name}</span>
      </div>
      <PostContent data={data} />
    </div>
  );
}
