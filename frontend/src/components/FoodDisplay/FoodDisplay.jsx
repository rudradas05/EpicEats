import React, { useContext } from "react";
import { motion } from "framer-motion";

import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list, search } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => {
            const categoryMatch = category === "All" || category === item.category;
            const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
            return categoryMatch && searchMatch;
          })
          .map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FoodItem
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default FoodDisplay;


