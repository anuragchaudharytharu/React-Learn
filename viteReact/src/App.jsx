import Chai from './chai';

function App() {
  const username = 'hitesh';
  return (
    // <div>
    //   <Chai />
    //   <h1>Chai aur react</h1>
    //   <p>test para</p>
    // </div>

    <>
      <Chai />
      <h1>Vite React App {2 + 2}</h1>
      <p>test para {username}</p>
    </>
  );
}

export default App;
