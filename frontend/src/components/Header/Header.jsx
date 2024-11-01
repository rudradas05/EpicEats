import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Indulge in a diverse menu showcasing an exquisite selection of dishes,
          thoughtfully crafted with premium ingredients and culinary expertise.
          Our goal is to delight your taste buds and elevate your dining
          experience to new heights
        </p>

        <button onClick={() => navigate("/#explore-menu")}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
