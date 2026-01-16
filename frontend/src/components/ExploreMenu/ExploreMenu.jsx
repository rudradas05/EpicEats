import React from "react";
import { motion } from "framer-motion";

import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Explore a vibrant menu featuring a rich variety of dishes, skillfully
        prepared with the finest ingredients and artistry. We are committed to
        satisfying your cravings and making every dining experience
        unforgettable
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </motion.div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
