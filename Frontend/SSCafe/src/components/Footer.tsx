
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h3>Our Branches</h3>
          <a href="#"> <i className="fas fa-arrow-right"></i> India</a>
          <a href="#"> <i className="fas fa-arrow-right"></i> USA</a>
          <a href="#"> <i className="fas fa-arrow-right"></i> France</a>
          <a href="#"> <i className="fas fa-arrow-right"></i> Africa</a>
          <a href="#"> <i className="fas fa-arrow-right"></i> Japan</a>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="#home"><i className="fas fa-arrow-right"></i> Home</a>
          <a href="#about"><i className="fas fa-arrow-right"></i> About</a>
          <a href="#menu"><i className="fas fa-arrow-right"></i> Menu</a>
          <a href="#review"><i className="fas fa-arrow-right"></i> Review</a>
          <a href="#book"><i className="fas fa-arrow-right"></i> Book</a>
        </div>

        <div className="footer-box">
          <h3>Contact Info</h3>
          <a href="tel:+1234567890"><i className="fas fa-phone"></i> +123-456-7890</a>
          <a href="tel:+1112223333"><i className="fas fa-phone"></i> +111-222-3333</a>
          <a href="mailto:coffee@gmail.com"><i className="fas fa-envelope"></i> coffee@gmail.com</a>
          <a href="#"><i className="fas fa-map-marker-alt"></i> Perú, Lima</a>
        </div>

        <div className="footer-box">
          <h3>Follow Us</h3>
          <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
          <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>

      </div>

      <div className="footer-credit">
        Created by <span>Mr. Web Designer</span> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
