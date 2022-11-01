import mongoose from "mongoose";
const connectdb = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbname: "admin_portal",
    };
    mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("database connection successfully...");
  } catch (error) {
    console.log(error);
  }
};
export default connectdb;
