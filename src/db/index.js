import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstanace = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST:${connectionInstanace.connection.host}`
    );
  } catch (error) {
    console.log("ERROR:", error);
    process.exit(1);
  }
};

export default connectDB;
