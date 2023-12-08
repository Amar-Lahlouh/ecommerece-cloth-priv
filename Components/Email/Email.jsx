import "./Email.css";

function Email() {
  return (
    <div className="email">
      <div className="email-first">
        <h5>Sign Up for a newsletter</h5>
        <p>
          Get email updates on all our <span>special offers</span>
        </p>
      </div>
      <div className="email-second">
        <input type="text" className="email-input" />
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default Email;
