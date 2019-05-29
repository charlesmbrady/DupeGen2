const accountNames = require('./data/accountNames');
const utils = require('../utils/API');

accountNames.forEach(name => {
    let account = {
        name: name
    };

    utils.createAccount(account);
})

// for(let i = 0; i < 1; i++){
//     let account = {
//         name: accountNames[i]
//     };

//     utils.createAccount(account);
// }