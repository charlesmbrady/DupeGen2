const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountName: { type: String, unique: true }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
