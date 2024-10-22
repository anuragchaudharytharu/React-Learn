import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const { state } = useLocation();

  console.log(window.history.state);

  // we can access state that is passed in useNavigate hook in App.jsx component by using useLocation() Hook imported from react-router-dom

  useEffect(() => {
    console.log(state);
    if (state && state.posts) {
      setPosts(state.posts);
    }
  }, [state]);

  return (
    <div>
      <h1 className="font-bold text-[48px] text-red-400">
        Welcome to BlogPosts Page!
      </h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <section>{post.content}</section>
        </div>
      ))}
    </div>
  );
}

// when we navigate from the navbar Blogs link or directly navigate with direct link using the link bar of the browser, we will not see the post title and content on the content of blog-posts-page. This happens becasue the useNavigate hook condition is not fulfilled of input event. For it to appear, the condition of input value length of more than 10 should be fulfilled
