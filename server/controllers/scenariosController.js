const db = require("../models");
const utils = require('../utils/utilities');
const results = require('../utils/results');

// Defining methods for the scenariosController
module.exports = {
  new: function (req, res) {
    // use the scenario passed in the req.body to generate data and put
    // into a variable
    // utils.processScenario(req.body).then( results => {
    //   utils.downloadCsv(results, res);
    // });
    const scenario = {
      objectType: "account",
      totalRecordCount: 100000,
      matches: [
        {
          name: "unique",
          recordCount: 100000,
          dupeCount: 2,
          fields: [
            {
              name:"accountName"
            }
          ]
        }
      ]
    }


    utils.newProcessScenario(scenario)
      .then(data => {
        console.log("data" + data);
        utils.downloadCsv(data, res);
        
        console.log("done");
      });

      
      
      

  },
  // res.json(results);
  // utils.downloadCsv(results, res);

  // utils.downloadCsv(results, res);


  download: function (req, res) {
    utils.downloadCsv(results, res);
    console.log("dwnloaded");
  }
  
};
