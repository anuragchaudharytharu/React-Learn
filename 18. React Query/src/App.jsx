import { useQuery, useMutation } from 'react-query';

const POSTS = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
];

export default function App() {
  const postsQuery = useQuery({
    queryKey: ['posts'], //unique identifier
    queryFn: () => wait(1000).then(() => [...POSTS]), //to get data, usually its axios or fetch api request
    // queryFn: () => Promise.reject('Error message'),
  });

  const newPostMutation = useMutation({
    mutationFn: (title) =>
      wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), title })),
  });

  if (postsQuery.isLoading)
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <h1 className="text-[32px]">Loding...</h1>
      </div>
    );

  if (postsQuery.isError)
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <pre className="text-[32px] text-red-900">
          {JSON.stringify(postsQuery.error)}
        </pre>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {postsQuery.data.map((post) => (
        <div key={post.id} className="text-[32px]">
          {post.title}
        </div>
      ))}
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

// Query ===> to get post, data
// Mutation ===> to create brand new post, new data
