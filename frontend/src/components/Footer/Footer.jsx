import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <motion.div
      className="footer"
      id="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <a href="tel:+919679490960">+91-9679490960</a>
            </li>
            <li>
              <a href="mailto:dasrudra.suv@gmail.com">
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
    </motion.div>
  );
};

export default Footer;
