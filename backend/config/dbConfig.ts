import mongoose from "mongoose";
import { DB_URI } from "./keys";

const connectDB = async (): Promise<void> => {
  return new Promise((res, rej) => {
    mongoose.connect(DB_URI, {}, err => {
      if (err) {
        rej(err);
      } else {
        console.log("Connected to database :)");
        res();
      }
    });
  });
};

export default connectDB;
