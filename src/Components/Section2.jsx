import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon

const Section2 = () => {
  const handleInstagramRedirect = () => {
    window.open("https://www.instagram.com/banarasi__boy_up__65", "_blank"); // Replace with your Instagram URL
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
  style={{
    margin: 0,
    background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}
>
  Follow us on Instagram
</h1>
        <button
          onClick={handleInstagramRedirect}
          style={{
            background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px", // Space between text and icon
          }}
        >
          <FaInstagram size={20} /> {/* Instagram Icon */}
          Artofcards.In
        </button>
      </div>
      <h4
        style={{
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        We deliver best quality playing cards that are tried and tested. Our wide
        range of cards can take you to the multiverse, help you win a game of poker,
        or turn you into a cool magician.
      </h4>
    </div>
  );
};

export default Section2;
