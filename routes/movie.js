const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie");

router.get("/movies/now-playing", movieController.getNowPlaying);
router.get("/movies/trending", movieController.getTrending);
router.get("/movies/upcoming", movieController.getUpcoming);

module.exports = router;
