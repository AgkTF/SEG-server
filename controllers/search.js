require("dotenv").config();
const axios = require("axios").default;

exports.getResults = (req, res, next) => {
  let query = req.params.query;
  let page = req.query.page;
  let url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMBD_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.status(200).json({
        results: response.data.results,
        total_pages: response.data.total_pages,
      });
    })
    .catch((error) => {
      next(error);
    });
};
