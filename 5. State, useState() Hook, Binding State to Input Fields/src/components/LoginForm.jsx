function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

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
        onChange={(e) => {
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
