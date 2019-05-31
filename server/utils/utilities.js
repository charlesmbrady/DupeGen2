const utilities = {
    processScenario: function (scenario) {
        let account = {
            accountName: "",
            street: "",
            city: "",
            phone: ""
        };

        let contact = {
            firstName: "",
            lastName: "",
            accountName: "",
            city: "",
            phone: "",
            street: "",
            email: ""
        };

        let lead = {
            firstName: "",
            lastName: "",
            accountName: "",
            city: "",
            phone: "",
            street: "",
            email: ""
        };

        if (scenario.objectType === "account") {
            //read total number of records that should be 
            //given in 
            //incoming scenario, then loop through each match scenario
            scenario.matcharray.forEach(match => {
                
            })

        }
        if (scenario.objectType === "contact") {

        }
        if (scenario.objectType === "lead") {

        }
    },
    newAccount: function (scenarioId) {

    }
}

module.exports = utilities;