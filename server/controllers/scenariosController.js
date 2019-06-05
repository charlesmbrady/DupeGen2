const db = require("../models");
const utils = require('../utils/utilities');

// Defining methods for the scenariosController
module.exports = {
  new: function (req, res) {
    // use the scenario passed in the req.body to generate data 
    // and then download that data as .csv file

    utils.newProcessScenario(req.body)
      .then(data => {
       
        if(data){
          res.send(data);
        }else{
          res.send(false);
        }

      });

    
  },
  download: function (req , res) {
    console.log("hit download")
    utils.downloadCsv(utils.results, res);

  }
}
