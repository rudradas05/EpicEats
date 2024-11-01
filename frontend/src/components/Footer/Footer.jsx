import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="company logo" />
          <p>
            Your satisfaction is our priority. Whether it’s a quick snack or a
            hearty meal, we are here to serve you with care and speed.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>EpicEats</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <a
                href="tel:+919679490960"
                style={{ color: "#d9d9d9", textDecoration: "none" }}
              >
                +91-9679490960
              </a>
            </li>
            <li>
              <a
                href="mailto:dasrudra.suv@gmail.com"
                style={{ color: "#d9d9d9", textDecoration: "none" }}
              >
                dasrudra.suv@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ EpicEats - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
