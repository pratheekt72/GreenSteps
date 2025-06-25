import Header from './Header.jsx';

function App() {
  return (
    <div className="container">
      <Header />
      <form className="signup-form">
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
