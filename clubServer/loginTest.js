const request = require('request-promise-native');
let cookiejar = request.jar();

let opt={
	method: 'GET',
	url:'http://127.24.31.15:3125/activities',
	json: true, 
	jar: cookiejar
	};
	
let opt1={
	method: 'POST',
	url:'http://127.24.31.15:3125/login',
	json: true, 
	body:{
		email: 'tirrivees1820@outlook.com',
		password: '49OqspUq'},
	jar: cookiejar
	};
	
let opt2={
	method: 'POST',
	url:'http://127.24.31.15:3125/login',
	json: true, 
	body:{
		email: 'prachi_ve3568@yandex.com',
		password: 'iloveweb!'},
	jar: cookiejar
	};
	
let opt3={
	method: 'POST',
	url:'http://127.24.31.15:3125/login',
	json: true, 
	body:{
		email: 'bibiri1807@yandex.com',
		password: 'j5sshQ'},
	jar: cookiejar
	};
	
let opt4={
	method: 'GET',
	url:'http://127.24.31.15:3125/logout',
	json: true, 
	jar: cookiejar
	};	
	
async function loginTests(){
	console.log(`Login test 1: Good Login`);
	try
	{
		let res=await request(opt);
		console.log(`Called activities, Cookie: ${cookiejar.getCookieString(opt.url)}`);
		let res1=await request(opt1);
		console.log(`Good login test result:${JSON.stringify(res1)}`);
		console.log(`\nAfter good login, Cookie: ${cookiejar.getCookieString(opt1.url)}`);
		let res2=await request(opt4);
		console.log(`\nAfter good logout, Cookie: ${cookiejar.getCookieString(opt4.url)}`);
	}
	catch(error)
	{
		console.log(`Error:${error}`);
	}

	console.log(`\nLogin test 2: Bad email`);
	try
	{
		res=await request(opt);
		console.log(`Called activities, Cookie: ${cookiejar.getCookieString(opt.url)}`);
		let res3=await request(opt2);
	}
	catch(error)
	{
		console.log(`Bad email login error:${error}`);
		console.log(`After login test 2, Cookie: ${cookiejar.getCookieString(opt2.url)}`);
	}
	
	console.log(`\nLogin test 3: Bad password`);
	try
	{
		let res4=await request(opt3);
	}
	catch(error)
	{
		console.log(`\nBad password login error:${error}`);
		console.log(`\nAfter login test 3, Cookie: ${cookiejar.getCookieString(opt3.url)}`);
	}
}

loginTests();
