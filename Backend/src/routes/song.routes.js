const express = require("express");

const songController = require("../controllers/song.controller");

const router = express.Router();

/**
 * POST /api/songs/
 */

router.get("/", songController.getSong);

module.exports = router;
