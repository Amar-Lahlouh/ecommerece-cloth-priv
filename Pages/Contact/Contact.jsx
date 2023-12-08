import { BsFillTelephoneFill, BsFillClockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import "./Contact.css";
import c1 from "../../assets/images/about/c1.jpg";
import Message from "../../Components/Message/Message";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-photo">
          <img src={c1} alt="" />
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>
            <BsFillTelephoneFill size={25} />
            <span>Phone:</span> Call Us at +1 984 093 3826
          </p>
          <p>
            <MdEmail size={25} /> <span>Email:</span> fashionflair@gmail.com
          </p>
          <p>
            {" "}
            <BsFillClockFill size={25} /> <span>Hours Time :</span> from 8 am to
            6pm
          </p>
          <p>
            <FaRegAddressCard size={25} />
            <span>Address:</span>Italy main street, 2nd floor
          </p>
          <div className="contact-text">
            Ciao! Grazie mille for reaching out to us at fashion Flair! we are
            thrilled to assist you in any way we can. Whether you have questions
            about sizing, need style advice, or just want to say Ciao, our team
            is here for you. Feel free to drop us a message below, and we will
            get back to you faster than you can say bellissimo. Grazie again for
            choosing Fashion Flair, where style meets passion!
          </div>
        </div>
      </div>
      <Message />
    </>
  );
}

export default Contact;
