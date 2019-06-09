**#DupeGen**

This app is designed for creating entire database tables of known "*bad*" data quality.

Creates unique and duplicate records based on fields you select for Accounts, Contacts, or Leads, then allows you to download them as a .csv file.

Check out the deployed app here: https://dupegen.herokuapp.com/

Or if you want to run locally, clone the repo and run `npm install` in the root of the project.  Then run `npm run start` which will start the server on localhost:3001 and the React App on localhost:3000

__*NOTE***__ 
If running locally, the proxy currently doesn't work for downloading the .csv file of your results.  To get around this, after you click the "generate records" button, don't click the "download .csv" button.  Instead open a new tab in your browser and type http://localhost:3001/api/scenarios  and click enter.  This will download the .csv file of results you just created.