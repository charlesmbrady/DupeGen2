const axios = require('axios');



module.exports = {
  test: function() {
    return 0;
  },
  newScenario: function(scenario) {
    return axios.post('/api/scenarios', scenario).catch(err => console.log("got an error" + err));
  }
};