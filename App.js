const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");

const movieRoutes = require("./routes/movie");
const personRoutes = require("./routes/person");
const searchRoutes = require("./routes/search");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // we don't need all the verbs here, but we might in the future
  // so I'll leave them here for now
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(movieRoutes);
app.use(personRoutes);
app.use(searchRoutes);
app.use(helmet());

app.use((error, req, res, next) => {
  // console.log(error.response);
  let statusCode;
  let message;
  if (error.response) {
    statusCode = error.response.status;
    message = error.response.data.status_message;
  } else {
    statusCode = 500;
    message = "Something wrong happened. We are working on it";
  }

  res.status(statusCode).json({
    message,
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("SEG server is up and running on 8080 🏃🏃");
});
