const router = require("express").Router();
const scenarioRoutes = require("./scenarios");

router.use("/scenarios", scenarioRoutes);

module.exports = router;
