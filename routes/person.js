const express = require("express");
const router = express.Router();
const personController = require("../controllers/person");

router.get("/person/:id", personController.getPerson);

module.exports = router;
