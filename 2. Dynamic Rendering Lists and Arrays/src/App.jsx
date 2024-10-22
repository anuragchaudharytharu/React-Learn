import { UserDetails } from './components/UserDetails';

export default function App() {
  const mockUsers = [
    {
      id: 1,
      username: 'anson',
      email: 'anson@ansonthedev.com',
    },
    {
      id: 2,
      username: 'michael',
      email: 'michael@ansonthedev.com',
    },
    {
      id: 3,
      username: 'anson',
      email: 'anson@ansonthedev.com',
    },
    {
      id: 4,
      username: 'michael',
      email: 'michael@ansonthedev.com',
    },
  ];

  return (
    <div>
      {mockUsers.map((user) => {
        // each child in this case <div>, should have unique key value prop
        return <UserDetails key={user.id} detailsProps={user} />;
        // props is for UserDetails.jsx component in which user argument of map method is the propvalue
      })}
    </div>
  );
}
