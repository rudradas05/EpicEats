import React from "react";
import { motion } from "framer-motion";

import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <motion.div
      className="app-download"
      id="app-download"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>
        For Better Experience Download <br />
        EpicEats
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </motion.div>
  );
};

export default AppDownload;
