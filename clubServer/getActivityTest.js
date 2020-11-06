const request = require('request-promise-native');

let getActs={
		method:'GET',
		uri:'http://127.24.31.15:3125/activities',
		json: true 
	};

request(getActs)
	.then(function (body) 
	{
		body.forEach(function(activity, i){
			console.log(`Activity ${i+1} name ${activity.name}, date: ${activity.dates}, id:${activity._id}`);});
	})
	.catch (function (error)
	{
		console.log(`Error: ${error}`);
	});