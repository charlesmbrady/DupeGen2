const router = require("express").Router();
const accountRoutes = require("./accounts");
const scenarioRoutes = require("./scenarios");

// Account routes
router.use("/accounts", accountRoutes);
router.use("/scenarios", scenarioRoutes);

module.exports = router;
