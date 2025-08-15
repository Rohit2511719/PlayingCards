import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Privacy.css"; // CSS file banani hogi

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="privacy-page">
        <div className="privacy-container">
          <h1 className="privacy-heading">Privacy Policy</h1>
          <p>
            Welcome to <strong>ART of CARDS</strong>. This Privacy Policy explains how we
            collect, use, and protect your personal information when you visit our
            website or make a purchase.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>Name, email address, and contact details</li>
            <li>Shipping and billing address</li>
            <li>Payment information (processed securely via payment gateways)</li>
            <li>Browsing data such as cookies, IP address, and device details</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To process your orders and deliver products</li>
            <li>To provide customer support and respond to queries</li>
            <li>To improve website functionality and user experience</li>
            <li>To send promotional offers (only if you opt-in)</li>
          </ul>

          <h2>Terms & Conditions</h2>
          <ul>
            <li>All prices are subject to change without prior notice.</li>
            <li>Orders once placed cannot be canceled after dispatch.</li>
            <li>We are not responsible for delays caused by courier services.</li>
            <li>All content, images, and designs are the property of ART of CARDS.</li>
          </ul>

          <h2>Security of Data</h2>
          <p>
            We take appropriate security measures to protect your personal information.
            However, no data transmission over the internet is 100% secure.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us at:  
            <strong> support@artofcards.com</strong>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
