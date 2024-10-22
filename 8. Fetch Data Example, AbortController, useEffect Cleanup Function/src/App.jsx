import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log('Rendering...');
    document.title = 'React tutorial ' + count;
  }, [sync]);

  // try and catch method
  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          {
            signal: controller.signal,
          }
        );
        const json = await response.json();
        console.log(json);
        console.log(controller.signal);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();

    // Cleanup function
    // userEffect has different stages. When we unmounts i.e it unrenders from the document, there is a stage known as unmounting phase or cleanup phase and this is basically where you want to take care of either cancelling your side effects such as api requests etc. The function that handle such case is known as cleanup function
    return () => {
      controller.abort();
      console.log(controller.signal);
    };
  });

  /*
  // .then and .catch method
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      // body: {
      //   usernmae: '.....'
      // }
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        console.log('Invlid Endpoint');
      });
  });
  */

  return (
    <div className="ml-[10px] mt-[8px] text-center">
      <div>You clicked the button {count} times</div>
      <button
        className="bg-slate-100 text-black pr-3 pl-3 mr-[10px] rounded-[4px]"
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        Click Me
      </button>
      <button
        className="bg-slate-100 text-black pr-3 pl-3 rounded-[4px]"
        onClick={() => {
          setSync((currentSync) => !currentSync);
        }}
      >
        Sync
      </button>
    </div>
  );
}
