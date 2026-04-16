import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import contactRouter from "./routes/contact.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// ✅ CORS
app.use(cors({
  origin: "https://ombhai-nine.vercel.app", // your frontend
  credentials: true,
}));

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/contact", contactRouter); // 🔥 FIXED (removed /api)

// ✅ Simple test route (VERY IMPORTANT for debugging)

app.use("/", contactRouter);
// ❌ REMOVE frontend serving (NOT needed on Render)
// (we deploy frontend separately on :contentReference[oaicite:0]{index=0})

// ✅ Connect DB
connectDB();

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});