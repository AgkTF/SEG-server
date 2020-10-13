require("dotenv").config();
const axios = require("axios").default;

exports.getPerson = (req, res, next) => {
  let person_id = req.params.id;
  let url = `https://api.themoviedb.org/3/person/${person_id}?api_key=${process.env.TMBD_KEY}&language=en-US&append_to_response=combined_credits`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.status(200).json({
        person: response.data,
      });
    })
    .catch((error) => {
      next(error);
    });
};
