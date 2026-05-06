import e from "express";
import mongoose from "mongoose";
import process from "node:process";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string || "mongodb://localhost:27017/employee-tracker");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }


}
export default connectDB;