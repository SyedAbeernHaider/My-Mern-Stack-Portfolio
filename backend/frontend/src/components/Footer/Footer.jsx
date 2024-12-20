import React from 'react';
import "./footer.css";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Syed Abeer. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/syedabeer12/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/abeerhaider12/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092463235679" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://github.com/SyedAbeernHaider" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
