import React, { useContext } from "react";
import { motion } from "framer-motion";

import "./Searchbar.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Searchbar = () => {
  const { search, setSearch } = useContext(StoreContext);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchbar">
      <div className="searchbar-container">
        <input
          className="searchbar-input"
          type="text"
          placeholder="Search your favorite food here"
          value={search}
          onChange={handleSearchChange}
        />
        <motion.img
          className="searchbar-icon"
          src={assets.search_icon}
          alt="Search"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </div>
  );
};

export default Searchbar;
