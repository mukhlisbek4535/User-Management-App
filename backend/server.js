import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5001;
app.use(express.json()); // Parses incoming JSON requests
app.use("/", userRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
});
