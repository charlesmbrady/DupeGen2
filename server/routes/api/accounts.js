const router = require("express").Router();
const accountsController = require("../../controllers/accountsController");

// Matches with "/api/accounts"
router.route("/")
  .get(accountsController.findAll)
  .post(accountsController.createMany);



module.exports = router;