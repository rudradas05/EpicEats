import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <motion.div
        className="header-contents"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Order your favourite food here</h2>
        <p>
          Indulge in a diverse menu showcasing an exquisite selection of dishes,
          thoughtfully crafted with premium ingredients and culinary expertise.
          Our goal is to delight your taste buds and elevate your dining
          experience to new heights
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
