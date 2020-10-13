const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search");

router.get("/search/:query", searchController.getResults);

module.exports = router;
