function LoginForm() {
  return (
    // <form method="POST" action="/api/login"> This method and action attribute are not recommended to use
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // preventDefault() method prevent default behaviour of the browser
        const formData = new FormData(e.target);
        // FormData() is a class that allows to retrieve value from form element itself.
        const username = formData.get('username');
        const password = formData.get('password');
        fetch('https://localhost:3001/api/login', {
          body: {
            username,
            password,
          },
          method: 'POST',
        });
      }}
    >
      <label htmlFor="username">Username</label>
      <br />
      <input
        id="usernmae"
        name="username"
        // name='uniqueName' should be unique
        onChange={(e) => {
          // target is the htmlinputelement instance
          console.log(`Username: ${e.target.value}`);
        }}
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        id="password"
        name="password"
        type="password"
        onChange={(e) => {
          console.log(`Password: ${e.target.value}`);
        }}
      />
      <br />
      <button className="text-black bg-white border-[2px] border-slate-900">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
