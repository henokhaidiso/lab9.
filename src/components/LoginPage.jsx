import { useState } from "react";

 function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // hardcoded people
  const users = [
    { username: "Henny", password: "1234" },
    { username: "DW", password: "1234" },
  ];
// checks if the user is in the list 
  function handleLogin() {
  const user = users.find((u) => u.username === username && u.password === password);
 
  if (user) {
    localStorage.setItem("loggedInUser", username);
    onLogin(user);
    navigate("/");
  } else {
    alert("Invalid username or password");
  }

  }
   

  return (
    <div className="login-box">
      <h2>Login</h2>

      <input 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password"
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button onClick={handleLogin}>Login</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
export default LoginPage;


