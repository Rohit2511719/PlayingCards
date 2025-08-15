import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{
      backgroundColor: "#222",
      color: "#fff",
      textAlign: "center",
      padding: "40px 20px",
      boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
      marginTop: "40px",
    }}>
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "bold" }}>Your Company</h3>
        <p style={{ fontSize: "14px", marginTop: "5px" }}>Innovative solutions for your business</p>
      </div>
      
      <div style={{ marginBottom: "20px" }}>
        <Link 
  to="/privacy-policy"
  style={{
    color: "#fff", 
    textDecoration: "none", 
    margin: "0 15px", 
    fontSize: "16px", 
    transition: "color 0.3s ease"
  }}
>
  Privacy Policy
</Link>
        
        <Link to="/contact" style={{
          color: "#fff", 
          textDecoration: "none", 
          margin: "0 15px", 
          fontSize: "16px", 
          transition: "color 0.3s ease"
        }}>Contact</Link>
      </div>
      
      <div style={{ fontSize: "14px" }}>
        <p>&copy; {new Date().getFullYear()} Rohit Kumar Rai. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
