import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./Styles/ContactUs.css";
// import Contactimg from "./Images/contact.avif";

const Contact = () => {
  return (
    <div className="get-in-touch">
      <div className="left-section">
        {/* <img src={Contactimg} alt="Kids Learning" className="contact-image" /> */}
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.591132479089!2d73.14107294893411!3d22.294926275043974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc6275cd7fc5f%3A0x422c96ab7a8d25b!2sDEC%20Gaming%20Studio%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1741527366925!5m2!1sen!2sin"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="contact-map"
    title="DEC Gaming Studio Pvt Ltd"
  ></iframe>
      </div>

      <div className="right-section">
        <h2 className="title">GET IN TOUCH</h2>
        <p className="text">
          C-230, Siddharth Excellence, Opp D-mart, Vasna Road, Vadodara,
          Gujarat, India.
        </p>
        <p className="text">
          <FaEnvelope className="icon" />{" "}
          <a href="mailto:support@deckidz.com" className="email">
            support@deckidz.com
          </a>
        </p>
        <p className="text">
          <FaPhone className="icon" />{" "}
          <a href="tel:7990667314" className="phone">
            Mo: 7990667314
          </a>
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Name" className="form-input" required/>
          <input type="text" placeholder="Address" className="form-input" />
          <div className="form-row">
            <input
              type="email"
              placeholder="Email"
              className="form-input half-width"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="form-input half-width"
              required
            />
          </div>
          <input type="text" placeholder="Subject" className="form-input" />
          <textarea
            placeholder="Type your message here..."
            className="form-textarea"
          ></textarea>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
