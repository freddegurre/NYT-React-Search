const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
.post(articlesController.create)

module.exports = router