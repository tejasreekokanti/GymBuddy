// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Default route (test)
app.get("/", (req, res) => {
  res.send("🏋️‍♀️ GymBuddy Backend is Running Successfully!");
});

// ✅ API Routes
app.use("/api/workouts", require("./routes/workouts"));
app.use("/api/meals", require("./routes/meals"));
app.use("/api/users", require("./routes/users"));

// ✅ Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
