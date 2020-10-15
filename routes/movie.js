const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie");

router.get("/movies/now-playing", movieController.getNowPlaying);
router.get("/movies/trending", movieController.getTrending);
router.get("/movies/upcoming", movieController.getUpcoming);
router.get("/tmovie/:id", movieController.getTmdbMovie);
router.get("/tmovie/:id/similar", movieController.getSimilar);
router.get("/omovie/:id", movieController.getOmdbMovieById);
router.get("/omovie/:title/:year", movieController.getOmdbMovieByTitle);

module.exports = router;
