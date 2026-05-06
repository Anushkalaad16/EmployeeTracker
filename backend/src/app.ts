import express, {Application} from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import updateRoutes from "./routes/updateRoutes";
import startCronJob from "./utils/corn";
import cors from "cors";


dotenv.config();

const app: Application = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
}));
app.use(express.json());
connectDB();
// console.log("JWT_SECRET:", process.env.JWT_SECRET);
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/update", updateRoutes);
app.get("/", (req, res) => {
    res.send("API is running...");
});

startCronJob();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
