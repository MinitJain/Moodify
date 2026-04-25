const express = require("express");
const cors = require("cors");
const songRoutes = require("./routes/song.routes");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }),
);

/**
 * Routes
 */

app.use("/api/songs", songRoutes);

module.exports = app;
