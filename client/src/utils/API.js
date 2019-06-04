const axios = require('axios');



module.exports = {
  test: function() {
    return 0;
  },
  newScenario: function(scenario) {
    console.log(scenario);
    return axios.get('/api/scenarios', scenario).catch(err => console.log("got an error" + err));
  }
};