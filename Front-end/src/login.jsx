function Login() {
  return (
    <form className="login-form">
      <div>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" placeholder="Enter username" />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" placeholder="Enter password" />
      </div>
      <button type="submit" style={{ marginTop: '1.5rem' }}>Login</button>
    </form>
  );
}

export default Login;
