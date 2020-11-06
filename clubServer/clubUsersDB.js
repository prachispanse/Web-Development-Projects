const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/logsDB', autoload: true});

const activities = require('./clubUsersHash.json');

db.insert(activities, function(err, newDocs) 
{
    if(err) 
	{
        console.log("Something went wrong when writing");
        console.log(err);
    } 
	else 
	{
        console.log("Added " + newDocs.length + " activities");
    }
});