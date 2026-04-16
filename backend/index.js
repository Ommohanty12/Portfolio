import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import contactRouter from "./routes/contact.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// ✅ CORS
app.use(cors({
  origin: ["https://ombhai-nine.vercel.app"],
  methods: ["GET", "POST", "DELETE"],
  credentials: true,
}));

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ ONLY ONE ROUTE (IMPORTANT)
app.use("/", contactRouter);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Connect DB
connectDB();

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});