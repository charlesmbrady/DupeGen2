const router = require("express").Router();
const scenariosController = require("../../controllers/scenariosController");

// Matches with "/api/scenarios"
router.route("/")
  .post(scenariosController.new)
  .get(scenariosController.download)



module.exports = router;