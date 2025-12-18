require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const productRoutes = require("./src/routes/productRoutes");
const userRoutes = require("./src/routes/userRoutes");
const rechargeRoutes = require("./src/routes/rechargeRoutes");
const planRoutes = require("./src/routes/planRoutes");

const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// ✅ ALLOWED FRONTEND ORIGINS
const allowedOrigins = [
  "http://localhost:5173",
  "https://rechargehub-chi.vercel.app",
  "https://mobile-rechargehub-frontend.onrender.com",
  "https://finalhubrecharge.onrender.com" // ✅ ADD THIS
];

// ✅ CORS CONFIG (FIXED)
app.use(cors({
  origin: (origin, callback) => {
    // allow server-to-server & browser tools
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(null, true); // 🔥 DO NOT BLOCK (important)
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// JSON parser
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/recharges", rechargeRoutes);
app.use("/plans", planRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
