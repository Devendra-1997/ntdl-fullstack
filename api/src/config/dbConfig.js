import mongoose from "mongoose";

const mongo_db_url =
  process.env.mongo_db_url || "mongodb://localhost:27017/ntdl-db";

export const connectMongo = () => {
  try {
    const connect = mongoose.connect(mongo_db_url);
    if (connect) {
      console.log("Database conected at" + mongo_db_url);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
