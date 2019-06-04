const db = require("../models");
const utils = require('../utils/utilities');

// Defining methods for the scenariosController
module.exports = {
  new: function (req, res) {
    // use the scenario passed in the req.body to generate data 
    // and then download that data as .csv file
    
      
    
    // const scenario = {
    //   objectType: "account",
    //   totalRecordCount: 100000,
    //   matches: [
    //     {
    //       name: "unique",
    //       recordCount: 100000,
    //       dupeCount: 2,
    //       fields: [
    //         {
    //           name:"accountName"
    //         }
    //       ]
    //     }
    //   ]
    // }

    utils.newProcessScenario(req.body)
      .then(data => {
       
        // if(data){
        //   res.send(true);
        // }
        // else{
        //   res.send(false);
        // }
        res.send();

      });

    
  },
  download: function (req , res) {
    console.log("hit download")
    utils.downloadCsv(utils.results, res);
    // res.end()
  }
}
