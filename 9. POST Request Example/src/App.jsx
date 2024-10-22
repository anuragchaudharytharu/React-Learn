import { useState, useEffect } from 'react';

export default function App() {
  // POST Request
  // It's a type of request that we would make whenever we want to create some kind of record or resource on the server side. Example: Registering User by sign up button for new user. It gonna submit the data via POST Request body to the server

  const [blogPostData, setBlogPostData] = useState({
    title: '',
    body: '',
  });

  console.log(blogPostData);

  return (
    <div className="ml-[10px] mt-[8px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (blogPostData.title && blogPostData.body) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify({
                //body value should be in string type inorder to send the data
                userId: 1,
                title: blogPostData.title,
                body: blogPostData.body,
              }),
              headers: {
                //often times when we networks request the data, the server needs to know how to interpret parse the data
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log('Success');
                console.log(data);
              })
              .catch((error) => console.log(error));
          }
        }}
      >
        <div className="mb-[4px]">
          <label htmlFor="title">Title </label>
          <input
            type="text"
            id="title"
            value={blogPostData.title}
            onChange={(e) => {
              setBlogPostData((currentBlogPostData) => ({
                ...currentBlogPostData,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="body">Body </label>
          <input
            type="text"
            id="body"
            value={blogPostData.body}
            onChange={(e) => {
              setBlogPostData((currentBlogPostData) => ({
                ...currentBlogPostData,
                body: e.target.value,
              }));
            }}
          />
        </div>
        <button className="bg-slate-100 text-black pr-2 pl-2 rounded-[4px]">
          Create Post
        </button>
      </form>
    </div>
  );
}
