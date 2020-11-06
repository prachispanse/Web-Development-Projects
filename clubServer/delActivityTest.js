const request = require('request-promise-native');

let getActs={
	method: 'GET',
	uri:'http://127.24.31.15:3125/activities',
	json: true 
};

let delAct1={
	method: 'DELETE',
	uri:'http://127.24.31.15:3125/activities/Sno9yzeAsSwNi6ZV',
	json: true
};

let delAct2={
	method: 'DELETE',
	uri:'http://127.24.31.15:3125/activities/QRCxM6BDwpgGvE7z',
	json: true
};

request(getActs)
	.then(function(body)
	{
		console.log(`Initial Get of Activties`);
		console.log(`Currently ${body.length} activities`);
		return request(delAct1);
	})
	.then(function(body)
	{		
		console.log(`After first good activity deletion`);
		console.log(`Currently ${body.length} activities`);
		return request(delAct2);
	})
	.then(function(body)
	{
		console.log(`After another good activity deletion`);
		console.log(`Currently ${body.length} activities`);
	})
	.catch(function(error)
	{
		console.log(`After first bad activity deletion`);
		console.log(`Error: ${error}`);
	})
	
	