import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
      <FaLinkedin />
      </div>
      <p> &copy; 2024 slice&dice.com</p>
    </div>
  );
}

export default Footer;