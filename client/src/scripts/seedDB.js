const utils = require('../utils/API');
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

utils.newScenario(scenario);
// utils.test();
