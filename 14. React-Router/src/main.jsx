import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import UsersPage from './pages/UsersPage';
import BlogPostsPage from './pages/BlogPostsPage';

const router = createBrowserRouter([
  {
    path: '/', //default path of homepage is '/'
    element: <App />, //html element or actual component that we want to render
    children: [
      {
        path: '/users-page',
        element: <UsersPage />,
      },
    ],
  },
  {
    path: '/users',
    element: (
      <div>
        <div>Users</div>
      </div>
    ),
  },
  {
    path: '/blog-posts-page',
    element: <BlogPostsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
