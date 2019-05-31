const axios = require('axios');



module.exports = {
  getAccounts: function() {
      return axios.get('/api/accounts');
  },
  createAccount: function(account) {
      return axios.post('/api/accounts', account).catch(err => console.log(err));
  },
  removeAccount: function(id) {
    return axios.delete('/api/accounts', id);
  },
  createManyAccounts: function(accArr) {
    return axios.post('http://localhost:3001/api/accounts', accArr).catch(err => console.log(err));
  }
};