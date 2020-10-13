require("dotenv").config();
const axios = require("axios").default;
const fetcher = (req, res, next, url) => {
  axios
    .get(url)
    .then((response) => {
      res.status(200).json({
        movies: response.data.results,
      });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getNowPlaying = (req, res, next) => {
  let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMBD_KEY}&language=en-US&page=1`;
  fetcher(req, res, next, url);
};

exports.getTrending = (req, res, next) => {
  let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMBD_KEY}`;
  fetcher(req, res, next, url);
};

exports.getUpcoming = (req, res, next) => {
  let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMBD_KEY}&language=en-US&page=1`;
  fetcher(req, res, next, url);
};
