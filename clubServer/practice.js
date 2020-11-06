const request = require('request-promise-native');
let cookiejar = request.jar();

let mLogin={
	method: 'PUT',
	url:'http://127.24.31.15:3125/ChangePassword',
	json: true, 
	body:{
		email: 'earrings1987@yandex.com',
		password: "X'jE6G|@",
		NewPassword: "Hiprachi"},
	jar: cookiejar
	};

request(mLogin)
.then(function(body)
	{
		console.log(body);
	
	})
	
	.catch(function(error)
	{
		
		console.log("Error: "+error);
		
	})