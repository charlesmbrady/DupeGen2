const utils = require('./utilities');


const scenario = {
	objectType: "account",
	totalRecordCount: 10,
	matches: [
		{
			name: "unknown",
			recordCount: 10,
			dupeCount: 2,
			fields: [
				{
					name:"accountName"
				}
			]
		}
	]
}

utils.newProcessScenario(scenario);

// {
//     totalRecordCount = 0,
//         objectType = "account",
//         matches = [
//             {
//                 name = "AccountName, phone, street",
//                 recordCount = 0;
//             dupeCount = 2;
//                 fields =[
//                     {
//                         name: "street"
//                     }
//                 ]
//             },
//             {
//                 name = "unknown"
//             fields =[];
//             }
//         ]
// }