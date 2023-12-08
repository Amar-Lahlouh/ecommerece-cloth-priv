function ForgotPass() {
  return (
    <div className="forgot-pass">
      <h3>Forgot Password</h3>
      <p>Enter your email address to receive a reset information</p>
      <p className="email-forgot">Enter Your Email</p>
      <input type="email" placeholder="Enter Your Email" />

      <button>Submit</button>
    </div>
  );
}

export default ForgotPass;
