const db = require("../models");
const utils = require('../utils/utilities');

// Defining methods for the scenariosController
module.exports = {
  new: function (req, res) {
    utils.process()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
