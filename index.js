import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/config.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

// Declaration
const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "https://gas-booking.netlify.app",
    credentials: true,
  })
);

// Database
connectDB();

// Default Route
app.get("/", (req, res) => {
  res.status(200).send("Hi welcome to my backend");
});

// API Routes
app.use("/api/user", userRoute);

// Listen
app.listen(process.env.PORT, () => {
  console.log("App is running on Port");
});
