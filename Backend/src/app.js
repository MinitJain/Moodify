const express = require("express");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

/**
 * Routes
 */
const songRoutes = require("./routes/song.routes")

app.use("/api/songs", songRoutes)

module.exports = app