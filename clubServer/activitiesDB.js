const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/actsDB', autoload: true});

const activities = require('./activities.json');

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