import React from "react";

function Footer() {
  const footerStyle = {
    content: { textAlign: "center", color: "#ffffff" },
    hr: { color: "#fff" },
  }; // Renamed the variable to avoid confusion
  return (
    <section>
      <hr style={footerStyle.hr} />
      <div style={footerStyle.content}>
        <span>© 2024 MadeBy Tarun :)</span>
      </div>
    </section>
  );
}

export default Footer;
