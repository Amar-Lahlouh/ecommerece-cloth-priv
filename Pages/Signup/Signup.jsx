import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // hyde prevent enu al form y3ml submit do8re

    if (password != comfirmPassword) {
      setError("Password dont match");
    } else {
      setError("Signup succesful");
      setEmail("");
      setPassword("");
      setComfirmPassword("");
    }
  };
  return (
    <div className="signup">
      <form action="" onSubmit={handleSubmit}>
        <h2>Sign Up </h2>
        <h5>Join us in shopping!!</h5>

        <p>Enter Your Email address</p>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <p>Enter Your password </p>
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>Confirm Your password</p>
        <input
          type="password"
          value={comfirmPassword}
          onChange={(event) => setComfirmPassword(event.target.value)}
          placeholder="Comfirm your password..."
        />
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="acc-log">
          <p>Have an account</p>
          <Link to="/login">Login</Link>
        </div>

        <button className="sign-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
