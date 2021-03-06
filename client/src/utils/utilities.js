/* eslint-disable no-undef */
const stringify = require('csv-stringify');
const firstDescriptors = require('./data/firstDescriptors');
const secondDescriptors = require('./data/secondDescriptors');
const thirdDescriptors = require('./data/thirdDescriptors');
const cities = require('./data/cities');
const streetNames = require('./data/streets');
const firstNames = require('./data/firstNames');
const lastNames = require('./data/lastNames');

const utilities = {
    results: [],
    recordAccountNames: [],
    recordCities: [],
    recordStreets: [],
    recordPhoneNumbers: [],
    recordFirstNames: [],
    recordLastNames: [],
    recordEmails: [],
    newProcessScenario: function (scenario) {
        this.results = [];
        this.generateAccountNames(scenario.totalRecordCount + 2);
        this.generateStreets(scenario.totalRecordCount);
        this.generateCities(scenario.totalRecordCount);
        this.generateFirstNames(scenario.totalRecordCount);
        this.generateLastNames(scenario.totalRecordCount);
        this.generateEmails(scenario.totalRecordCount);
        this.generatePhoneNumbers(scenario.totalRecordCount);

        //loop through the matches, handling unique,
        //unknowns, and dupe scenarios
        for (let i = 0; i < scenario.matches.length; i++) {
            //first handle unique scenarios
            let matchFields = [];

            scenario.matches[i].fields.forEach(matchField => {
                matchFields.push(matchField.name);
            });

            if (scenario.matches[i].name === "unique") {
                const currentMatch = scenario.matches[i];
                for (let i = 0; i < currentMatch.recordCount; i++) {
                    //handle accounts
                    if (scenario.objectType === "account") {
                        const tempAccount = {
                            accountName: this.getTopField("accountName"),
                            city: this.getTopField("city"),
                            phone: this.getTopField("phone"),
                            street: this.getTopField("street")
                        }
                        this.popTopField("accountName");
                        this.popTopField("city");
                        this.popTopField("phone");
                        this.popTopField("street");

                        this.results.push(tempAccount);
                    }
                    //contact
                    if (scenario.objectType === "contact") {
                        const tempRecord = {
                            firstName: this.getTopField("firstName"),
                            lastName: this.getTopField("lastName"),
                            email: this.getTopField("email"),
                            accountName: this.getTopField("accountName"),
                            city: this.getTopField("city"),
                            phone: this.getTopField("phone"),
                            street: this.getTopField("street")
                        }
                        this.popTopField("firstName");
                        this.popTopField("lastName");
                        this.popTopField("email");
                        this.popTopField("accountName");
                        this.popTopField("city");
                        this.popTopField("phone");
                        this.popTopField("street");

                        this.results.push(tempRecord);
                    }
                    //lead
                    if (scenario.objectType === "lead") {
                        const tempRecord = {
                            firstName: this.getTopField("firstName"),
                            lastName: this.getTopField("lastName"),
                            email: this.getTopField("email"),
                            accountName: this.getTopField("accountName"),
                            city: this.getTopField("city"),
                            phone: this.getTopField("phone"),
                            street: this.getTopField("street")
                        }
                        this.popTopField("firstName");
                        this.popTopField("lastName");
                        this.popTopField("email");
                        this.popTopField("accountName");
                        this.popTopField("city");
                        this.popTopField("phone");
                        this.popTopField("street");

                        this.results.push(tempRecord);
                    }
                }
            }

            //now handle regular dupe matches
            if (scenario.matches[i].name !== "unique" && scenario.matches[i].name !== "unknown") {
                const currentMatch = scenario.matches[i];
                for (let i = 0; i < currentMatch.recordCount; i += 2) {
                    //handle accounts
                    if (scenario.objectType === "account") {
                        let tempAccount = {
                            accountName: this.getTopField("accountName"),
                            city: this.getTopField("city"),
                            phone: this.getTopField("phone"),
                            street: this.getTopField("street")
                        };
                        //push the original new record
                        this.results.push(tempAccount);

                        let dupeFields = [];
                        //now make the duplicate by looping through field names
                        //if field name is included in the match fields array, push
                        //to dupeFields array to be used in next step
                        for (accountField in tempAccount) {

                            //loop through match fields array and see if it's in there
                            for (let t = 0; t < matchFields.length; t++) {
                                if (accountField === matchFields[t]) {
                                    dupeFields.push(accountField);
                                }
                            }
                        }
                        //look at each field again compared to dupeFields array
                        //if it is not in there, change the field bc not creating
                        //a dupe based on it
                        for (accountField in tempAccount) {
                            if (!dupeFields.includes(accountField)) {
                                this.popTopField(accountField);
                            }
                        }


                        //and then reassemblying the tempAccount and pushing
                        tempAccount = {
                            accountName: this.getTopField("accountName"),
                            city: this.getTopField("city"),
                            phone: this.getTopField("phone"),
                            street: this.getTopField("street")
                        }

                        //finally, pop the fields that weren't popped, and then all
                        currentMatch.fields.forEach(field => {
                            this.popTopField(field.name);
                        });
                        this.popTopField("accountName");
                        this.popTopField("city");
                        this.popTopField("phone");
                        this.popTopField("street");

                        this.results.push(tempAccount);
                    }
                    //handle contacts and leads
                    if (scenario.objectType === "contact" || scenario.objectType === "lead") {
                        let tempRecord = {
                            firstName: this.getTopField("firstName"),
                            lastName: this.getTopField("lastName"),
                            email: this.getTopField("email"),
                            accountName: this.getTopField("accountName"),
                            city: this.getTopField("city"),
                            phone: this.getTopField("phone"),
                            street: this.getTopField("street")
                        }
                        //push the original new record
                        this.results.push(tempRecord);

                        const dupeFields = [];
                        //now make the duplicate by looping through field names
                        //if field name is included in the match fields array, push
                        //to dupeFields array to be used in next step
                        for (recordField in tempRecord) {

                            //loop through match fields array and see if it's in there
                            for (let t = 0; t < matchFields.length; t++) {
                                if (recordField === matchFields[t]) {
                                    dupeFields.push(recordField);
                                }
                            }
                        }
                        //look at each field again compared to dupeFields array
                        //if it is not in there, change the field bc not creating
                        //a dupe based on it
                        for (recordField in tempRecord) {
                            if (!dupeFields.includes(recordField)) {
                                this.popTopField(recordField);
                            }
                        }


                        //and then reassemblying the tempRecord and pushing
                        tempRecord = {
                            firstName: this.getTopField("firstName"),
                            lastName: this.getTopField("lastName"),
                            email: this.getTopField("email"),
                            accountName: this.getTopField("accountName"),
                            city: this.getTopField("city"),
                            phone: this.getTopField("phone"),
                            street: this.getTopField("street")
                        }

                        //finally, pop the fields that weren't popped, and then all
                        currentMatch.fields.forEach(field => {
                            this.popTopField(field.name);
                        });
                        this.popTopField("firstName");
                        this.popTopField("lastName");
                        this.popTopField("email");
                        this.popTopField("accountName");
                        this.popTopField("city");
                        this.popTopField("phone");
                        this.popTopField("street");

                        this.results.push(tempRecord);
                    }
                }
            }
            //lastly, handle unknowns
            if (scenario.matches[i].name === "unknown") {
                //for unknowns, only insert REQUIRED fields for that object type
                const currentMatch = scenario.matches[i];
                for (let i = 0; i < currentMatch.recordCount; i++) {
                    //handle accounts
                    if (scenario.objectType === "account") {
                        const tempAccount = {
                            accountName: this.getTopField("accountName"),
                            city: "",
                            phone: "",
                            street: ""
                        }
                        this.popTopField("accountName");
                        this.popTopField("city");
                        this.popTopField("phone");
                        this.popTopField("street");

                        this.results.push(tempAccount);
                    }
                    //  contact 
                    if (scenario.objectType === "contact") {
                        const tempRecord = {
                            firstName: this.getTopField("firstName"),
                            lastName: this.getTopField("lastName"),
                            email: "",
                            accountName: "",
                            city: "",
                            phone: "",
                            street: ""
                        }
                        this.popTopField("firstName");
                        this.popTopField("lastName");
                        this.popTopField("email");
                        this.popTopField("accountName");
                        this.popTopField("city");
                        this.popTopField("phone");
                        this.popTopField("street");

                        this.results.push(tempRecord);
                    }
                    // lead
                    if (scenario.objectType === "lead") {
                        const tempRecord = {
                            firstName: this.getTopField("firstName"),
                            lastName: this.getTopField("lastName"),
                            email: "",
                            accountName: "",
                            city: "",
                            phone: "",
                            street: ""
                        }
                        this.popTopField("firstName");
                        this.popTopField("lastName");
                        this.popTopField("email");
                        this.popTopField("accountName");
                        this.popTopField("city");
                        this.popTopField("phone");
                        this.popTopField("street");

                        this.results.push(tempRecord);
                    }
                }
            }
        }

        this.getCsv();

    },
    getTopField: function (fieldName) {
        if (fieldName == "accountName") {
            return this.recordAccountNames[this.recordAccountNames.length - 1];
        }
        if (fieldName == "firstName") {
            return this.recordFirstNames[this.recordFirstNames.length - 1];
        }
        if (fieldName == "lastName") {
            return this.recordLastNames[this.recordLastNames.length - 1];
        }
        if (fieldName == "email") {
            return this.recordEmails[this.recordEmails.length - 1];
        }
        if (fieldName == "phone") {
            return this.recordPhoneNumbers[this.recordPhoneNumbers.length - 1];
        }
        if (fieldName == "city") {
            return this.recordCities[this.recordCities.length - 1];
        }
        if (fieldName == "street") {
            return this.recordStreets[this.recordStreets.length - 1];
        }
    },
    popTopField: function (fieldName) {
        if (fieldName == "accountName") {
            this.recordAccountNames.pop();
        }
        if (fieldName == "firstName") {
            this.recordFirstNames.pop();
        }
        if (fieldName == "lastName") {
            this.recordLastNames.pop();
        }
        if (fieldName == "email") {
            this.recordEmails.pop();
        }
        if (fieldName == "phone") {
            this.recordPhoneNumbers.pop();
        }
        if (fieldName == "city") {
            this.recordCities.pop();
        }
        if (fieldName == "street") {
            this.recordStreets.pop();
        }
    },
    generatePhoneNumbers: function (scenarioTotalRecordCount) {
        let thePhoneNumber = 2522551122;
        const tempPhoneNumbers = [];

        for (let i = 0; i < scenarioTotalRecordCount; i++) {
            tempPhoneNumbers.push(thePhoneNumber);
            thePhoneNumber++;
        }
        this.recordPhoneNumbers = tempPhoneNumbers;
    },
    generateFirstNames: function (scenarioTotalRecordCount) {
        const tempFirstNames = [];

        for (let i = 0; i < scenarioTotalRecordCount; i++) {
            const newFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            tempFirstNames.push(newFirstName);
        }
        this.recordFirstNames = tempFirstNames;
    },
    generateLastNames: function (scenarioTotalRecordCount) {
        const tempLastNames = [];

        for (let i = 0; i < scenarioTotalRecordCount; i++) {
            const newLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            tempLastNames.push(newLastName);
        }
        this.recordLastNames = tempLastNames;
    },
    generateEmails: function (scenarioTotalRecordCount) {
        const tempEmails = [];

        for (let i = 0; i < scenarioTotalRecordCount; i++) {
            const first = this.recordFirstNames[i].replace(' ', '');
            const last = this.recordLastNames[i].replace(' ', '');
            if (this.recordAccountNames[i] === undefined) {
                console.log('undefined here at ' + i);
            }
            else {
                const domain = this.recordAccountNames[i].split(" ").join("").replace(' ', '');

                const newEmail = `${first}${last}@${domain}.com`;
                tempEmails.push(newEmail);
            }


        }
        this.recordEmails = tempEmails;
    },
    generateCities: function (scenarioTotalRecordCount) {
        const tempCities = [];
        for (let i = 0; i < scenarioTotalRecordCount; i++) {
            const newCity = cities[Math.floor(Math.random() * cities.length)];
            tempCities.push(newCity);
        }
        this.recordCities = tempCities;
    },
    generateStreets: function (scenarioTotalRecordCount) {
        const streetDesignators = ["Rd", "St", "Ave", "Dr"];
        let streetCount = 0;
        const streets = [];
        for (let i = 1; streetCount < scenarioTotalRecordCount; i++) {
            //choose a random street from the streets array and incrmenet number
            const streetName = streetNames[Math.floor(Math.random() * streetNames.length)];
            const streetDesignator = streetDesignators[Math.floor(Math.random() * streetDesignators.length)];
            const fullStreet = `${i} ${streetName} ${streetDesignator}`;
            streets.push(fullStreet);
            streetCount++;

        }
        this.recordStreets = streets;

    },
    generateAccountNames: function (scenarioTotalRecordCount) {
        //generates and returns an array of account names
        const maxNumberAccountNames = firstDescriptors.length * secondDescriptors.length * thirdDescriptors.length; //this number is currently limited by the max number of accountNames possible 
        //handle if too many account names requested
        if (scenarioTotalRecordCount > maxNumberAccountNames) {
            console.log(`Record count requested is too many.  Can only generate a maximum of ${maxNumberAccountNames} account names right now.`)
            return 0;
        }

        let accountName = "";
        let accountNames = [];

        // for very large orgs don't worry about trying to make the account names look 'natural'
        if (scenarioTotalRecordCount > 500000) {
            let first = "";
            let second = "";
            let third = "";

            for (one of firstDescriptors) {
                first = one;
                if (first === undefined) {
                    console.log('uh oh undefined');
                } else {
                    for (two of secondDescriptors) {
                        second = two;
                        if (second === undefined) {
                            console.log('uh oh undefined');
                        } else {
                            for (three of thirdDescriptors) {
                                third = three;
                                if (third === undefined) {
                                    console.log('uh oh undefined');
                                } else {
                                    accountName = `${first} ${second} ${third}`;
                                    accountNames.push(accountName);
                                }

                            }
                        }

                    }
                }

            }
        }
        else {
            for (let i = 0; i < scenarioTotalRecordCount; i++) {
                let first = firstDescriptors[Math.floor(Math.random() * firstDescriptors.length)];
                let second = secondDescriptors[Math.floor(Math.random() * secondDescriptors.length)];
                let third = thirdDescriptors[Math.floor(Math.random() * thirdDescriptors.length)];
                accountName = `${first} ${second} ${third}`;

                if (accountNames.includes(accountName)) {
                    console.log('included');
                    i--;

                }
                else {
                    accountNames.push(accountName);
                }

            }
        }



        this.recordAccountNames = this.shuffle(accountNames);

    },
    getCsv: function () {
        const csvData = this.objectToCsv(this.results);

        const blob = new Blob([csvData], { type: 'text/csv' });

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'DupeGen-Records.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    },
    objectToCsv: function (data) {
        const csvRows = [];
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(','));

        for (const row of data) {
            const values = headers.map(header => {
                const escaped = ('' + row[header]).replace(/"/g, '\\"');
                return `${escaped}`;
            })
            csvRows.push(values.join(','));
        }
        return csvRows.join('\n');
    },
    downloadCsv: function (req, res) {
        // adding appropriate headers, so browsers can start downloading
        // file as soon as this request starts to get served
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'download-' + Date.now() + '.csv\"');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Pragma', 'no-cache');

        // stringify return a readable stream, that can be directly piped
        // to a writeable stream which is "res" (the response object from express.js)
        // since res is an abstraction over node http's response object which supports "streams"
        stringify(req, { header: true })
            .pipe(res);
    },
    shuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}

module.exports = utilities;