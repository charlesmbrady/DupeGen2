const db = require("../models");

// Defining methods for the accountsController
module.exports = {
  findAll: function (req, res) {
    db.Account
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    let account = {
      accountName: req.body.name
    };
    db.Account
      .create(account)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
};
