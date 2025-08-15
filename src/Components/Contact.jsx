import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-container">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-subtext">
            Have any questions or suggestions? Fill out the form below and we will get back to you!
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
