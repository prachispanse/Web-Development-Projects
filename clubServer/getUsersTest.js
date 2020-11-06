const request = require('request-promise-native');
let cookiejar = request.jar();

let getActs={
	method: 'GET',
	url:'http://127.24.31.15:3125/users',
	json: true,
	jar: cookiejar	
};

let aLogin={
	method: 'POST',
	url:'http://127.24.31.15:3125/login',
	json: true, 
	body:{
		email: 'tirrivees1820@outlook.com',
		password: '49OqspUq'},
	jar: cookiejar
	};

let mLogin={
	method: 'POST',
	url:'http://127.24.31.15:3125/login',
	json: true, 
	body:{
		email: 'earrings1987@yandex.com',
		password: "X'jE6G|@"},
	jar: cookiejar
	};
	
let lgot={
	method: 'GET',
	url:'http://127.24.31.15:3125/logout',
	json: true, 
	jar: cookiejar
	};	

async function getActivity()
{
	console.log(`Get Users Test 1: Admin Login`);
	try
	{		
		let res1= await request(aLogin);
		console.log(`Admin login, Cookies: ${cookiejar.getCookieString(aLogin.url)}`);
		let res2 = await request(getActs);
		console.log(`No of users: ${res2.length}`);
		let res4= await request(lgot);
		console.log(`\nAfter logout, Cookies: ${cookiejar.getCookieString(lgot.url)}`);
	}
	catch(error)
	{
		console.log(`${error}`);
	}
	
	console.log(`\nGet Users Test 2: Member Login`);
	try
	{
		let res5= await request(mLogin);
		console.log(`Member login, Cookies: ${cookiejar.getCookieString(mLogin.url)}`);
		res2 = await request(getActs);
	}
	catch(error)
	{
		console.log(`Member get users error: ${error}`);
		res4= await request(lgot);
		console.log(`After logout, Cookies: ${cookiejar.getCookieString(lgot.url)}`);
	}
	
	console.log(`\nGet users Test 3: Guest`);
	try
	{
		res2 = await request(getActs);
	}
	catch(error)
	{
		console.log(`Guest get users error: ${error}`);
		console.log(`\nGet users test 3, Cookies: ${cookiejar.getCookieString(getActs.url)}`);
	}
}
getActivity();





