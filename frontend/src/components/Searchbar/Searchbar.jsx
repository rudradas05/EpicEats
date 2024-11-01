import React, { useContext, useEffect, useState } from "react";
import "./Searchbar.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(StoreContext);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(location.hash === "#explore-menu" && showSearch);
  }, [location.hash, showSearch]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClose = () => {
    setShowSearch(false);
  };

  return isVisible ? (
    <div className="searchbar">
      <div className="searchbar-container">
        <input
          className="searchbar-input"
          type="text"
          placeholder="Search your favorite food here"
          value={search}
          onChange={handleSearchChange}
        />
        <img className="searchbar-icon" src={assets.search_icon} alt="Search" />
      </div>
      <img
        onClick={handleClose}
        className="searchbar-close"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null;
};

export default Searchbar;
