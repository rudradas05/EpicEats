import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const {
    getTotalCartAmount,
    getTotalCartItems,
    token,
    setToken,
    setShowSearch,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const [showHamMenu, setShowHamMenu] = useState(false);
  const hamHandleMenu = () => {
    setShowHamMenu(!showHamMenu);
  };

  return (
    <div className="navbar">
      <div className="ham-menu">
        <button className="ham-menu-btn" onClick={hamHandleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
      <Link to="/">
        <img src={assets.logo} alt="Company logo" className="logo" />
      </Link>
      <nav className={showHamMenu ? "mobile-menu" : "web-menu"}>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          {/* <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
              Near By Resturent
          </a> */}
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
      </nav>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt=""
          />
        </div>

        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className="cart-count">{getTotalCartItems()}</div>
        </div>
        {!token ? (
          <button className="sign-btn" onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        ) : (
          <div className="navbar-profile">
            <img
              className="navbar-profile-icon"
              src={assets.profile_icon}
              alt=""
            />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/profile")}>
                <img src={assets.profile_icon} alt="" />

                <p>My Profile</p>
              </li>
              <hr />
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
