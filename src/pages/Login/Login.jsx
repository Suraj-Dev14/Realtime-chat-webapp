import "./Login.css";
import assets from "../../assets/assets";
import { useState } from "react";
import { login, signup } from "../../config/firebase";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandlerSubmit = (e) => {
    e.preventDefault();
    if (currentState === "Sign Up") {
      signup(username, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.Chat_logo} alt="" className="logo" />
      <form onSubmit={HandlerSubmit} className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Sign Up" ? (
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email address"
          className="form-input"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" required />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currentState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrentState("Login")}>Login Here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
