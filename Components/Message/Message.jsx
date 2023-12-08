import "./Message.css";

function Message() {
  return (
    <div className="message">
      <h3 className="message-title">Leave Us a Message</h3>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />

      <p>Enter You Email Address</p>
      <input type="email" placeholder="Email" />

      <p>Type a Message</p>
      <textarea></textarea>
      <button>Submit</button>
    </div>
  );
}

export default Message;
