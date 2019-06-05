const axios = require('axios');



module.exports = {
  download: function() {
    axios.get('/api/scenarios').catch(err => console.log(err));
  },
  newScenario: function(scenario) {
    axios.post('/api/scenarios', scenario).catch(err => console.log("got an error" + err));
  }
};