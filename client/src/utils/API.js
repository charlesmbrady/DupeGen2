const axios = require('axios');



module.exports = {
  test: function() {
    return axios.get('/api/scenarios').catch(err => console.log(err));
  },
  newScenario: async function(scenario) {
    return axios.post('/api/scenarios', scenario).catch(err => console.log("got an error" + err));
   
  }
};