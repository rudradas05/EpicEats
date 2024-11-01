// import mongoose from "mongoose";

// export const connectDB = async () => {
//   await mongoose
//     .connect(MONGOD_SECRET_KEY)
//     .then(() => console.log("DB Connected"));
// };

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOD_SECRET_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1); // Exit if connection fails
  }
};
