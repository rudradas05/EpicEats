import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const startTime = Date.now(); // Start timing the connection

    // Establish database connection with retries and timeout settings
    await mongoose.connect(process.env.MONGOD_SECRET_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 10000, // Timeout after 10 seconds
      reconnectTries: Number.MAX_VALUE, // Retry indefinitely
      reconnectInterval: 500, // Retry every 500ms
    });

    const endTime = Date.now(); // End timing the connection
    console.log(`DB Connected in ${endTime - startTime}ms`);

  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1); // Exit if connection fails
  }
};
