import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {year} Arsyiil Shiddik</p>
    </footer>
  );
}

export default Footer;
