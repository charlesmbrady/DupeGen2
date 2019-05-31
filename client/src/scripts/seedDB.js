const firstDescriptors = require('./data/firstDescriptors');
const secondDescriptors = require('./data/secondDescriptors');
const thirdDescriptors = require('./data/thirdDescriptors');
const utils = require('../utils/API');
let dbCount = 0;
let arrCount = 0;

const nameArray = [];
const accArr = [];
const recordCount = 1000000;


firstDescriptors.forEach(name => {
    let accountName = "";
    // accountName = `${name}`;
    // totalCount++;
    // console.log(totalCount);
    // utils.createAccount(accountName);
    if(arrCount > recordCount){
        
        return 0;
    }

    secondDescriptors.forEach(sname => {
        if(arrCount > recordCount){
            
            return 0;
        }
        // accountName = `${name} ${sname}`;
        // arrCount++;
        // console.log(arrCount);
        // accArr.push({name: accountName});
        thirdDescriptors.forEach(tname => {
            accountName = `${name} ${sname} ${tname}`;
        //     totalCount++;
        //     console.log(totalCount);
        //     utils.createAccount(accountName);

        arrCount++;
        console.log(arrCount);
        accArr.push({name: accountName});

        })
    })

})

// utils.createManyAccounts(accArr);

// nameArray.forEach(n => {
//     dbCount++;
//     console.log(dbCount);
//     utils.createManyAccounts(accArr);
// })

// for(let i = 0; i < 1; i++){
//     let account = {
//         name: accountNames[i]
//     };

//     utils.createAccount(account);
// }