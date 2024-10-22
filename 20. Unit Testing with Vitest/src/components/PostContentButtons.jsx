import { useContext } from 'react';
import { UserContext } from '../utils/contexts/UserContext';

export function PostContentButtons() {
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div className="mb-[2px] text-[18px] font-bold">
        <span>Post Content Buttons Component</span>
      </div>
      <div>id: {userContextData.id}</div>
    </div>
  );
}
