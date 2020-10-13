require("dotenv").config();
const axios = require("axios").default;
const moviesFetcher = (req, res, next, url) => {
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
  moviesFetcher(req, res, next, url);
};

exports.getTrending = (req, res, next) => {
  let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMBD_KEY}`;
  moviesFetcher(req, res, next, url);
};

exports.getUpcoming = (req, res, next) => {
  let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMBD_KEY}&language=en-US&page=1`;
  moviesFetcher(req, res, next, url);
};

exports.getTmdbMovie = (req, res, next) => {
  let movie_id = req.params.id;
  let url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMBD_KEY}&language=en%2Cnull&append_to_response=credits%2Csimilar%2Cimages`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.status(200).json({
        movieDetails: response.data,
      });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getOmdbMovieById = (req, res, next) => {
  let movie_id = req.params.id;
  let url = `http://www.omdbapi.com/?apikey=${process.env.OMBD_KEY}&i=${movie_id}&plot=full`;
  axios
    .get(url)
    .then((response) => {
      res.status(200).json({
        movieDetails: response.data,
      });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getOmdbMovieByTitle = (req, res, next) => {
  let title = req.params.title;
  let year = req.params.year;

  let url = `http://www.omdbapi.com/?apikey=${process.env.OMBD_KEY}&t=${title}&y=${year}`;
  axios
    .get(url)
    .then((response) => {
      res.status(200).json({
        movieDetails: response.data,
      });
    })
    .catch((error) => {
      next(error);
    });
};
