import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import contactRouter from "./routes/contact.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// ✅ CORS (FINAL)
app.use(cors({
  origin: "https://ombhai07.vercel.app",
  methods: ["GET", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.options("*", cors());

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Routes
app.use("/", contactRouter);

// ✅ DB
connectDB();

// ✅ Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});