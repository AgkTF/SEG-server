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
  let url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMBD_KEY}&language=en-US&append_to_response=credits%2Csimilar%2Cimages&include_image_language=en%2Cnull`;
  axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
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

exports.getSimilar = (req, res, next) => {
  let movie_id = req.params.id;
  let page = req.query.page;

  let url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.TMBD_KEY}&language=en-US&page=${page}`;
  axios
    .get(url)
    .then((response) => {
      res.status(200).json({
        similar: response.data.results,
        total_pages: response.data.total_pages,
      });
    })
    .catch((error) => {
      next(error);
    });
};
