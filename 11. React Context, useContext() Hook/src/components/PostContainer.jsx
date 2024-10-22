import { useContext, useState } from 'react';
import { PostContent } from './PostContent';
import { UserContext } from '../utils/contexts/UserContext';

export function PostContainer() {
  const [data, setData] = useState('hello World');

  const userContextData = useContext(UserContext); // this is known as consuming the context
  console.log(userContextData);

  return (
    <div>
      <div>username: {userContextData.username}</div>
      <PostContent data={data} />
      <div>displayName: {userContextData.displayName}</div>
    </div>
  );
}
