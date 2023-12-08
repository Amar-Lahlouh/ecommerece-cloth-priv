import "./login.css";

import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-form">
      <h2>LOGIN FORM</h2>
      <h5>Welcome Back</h5>

      <p htmlFor="">Enter Your Email address</p>
      <input type="email" placeholder="Enter your Email..." />
      <p>Enter Your password</p>
      <input type="password" placeholder="enter password here..." />

      <Link to={"/ForgotPass"}>Forgot password?</Link>
      <div className="acc-sign">
        <p>Dont have an account?</p>
        <Link to={"/signup"}>Sign up</Link>
      </div>
      <>
        <button className="login">Login</button>
      </>
    </div>
  );
}

export default Login;
