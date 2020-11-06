const request = require('request-promise-native');
let cookiejar = request.jar();

let getActs={
	method: 'GET',
	url:'http://127.24.31.15:3125/activities',
	json: true,
	jar: cookiejar	
};

let AdmAct={
	method: 'POST',
	url:'http://127.24.31.15:3125/activities/addActs',
	json: true, 
	body:{
		name:'Segway Tour',
		dates:['Saturdays 10 AM','Sundays 12 PM']},
	jar: cookiejar
};

let MemAct={
	method: 'POST',
	url:'http://127.24.31.15:3125/activities/addActs',
	json: true, 
	body:{
		name:'Helicopter Tour',
		dates:['4th April, 28th April']},
	jar: cookiejar
};

let GstAct={
	method: 'POST',
	url:'http://127.24.31.15:3125/activities/addActs',
	json: true, 
	body:{
		name:'Downtown Tour',
		dates:['Saturdays','Sundays']},
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

async function addActivity()
{
	console.log(`Add Activity Test 1: Admin Login`);
	try
	{		
		let res1= await request(aLogin);
		console.log(`Admin login, Cookies: ${cookiejar.getCookieString(aLogin.url)}`);
		let res2 = await request(getActs);
		console.log(`No of activities: ${res2.length}`);
		let res3= await request(AdmAct);
		console.log(`\nAfter add number of activities: ${res3.length}`);
		let res4= await request(lgot);
		console.log(`\nAdmin logout, Cookies: ${cookiejar.getCookieString(lgot.url)}`);
	}
	catch(error)
	{
		console.log(`${error}`);
	}
	
	console.log(`\nAdd Test 2: Member Login`);
	try
	{
		let res5= await request(mLogin);
		console.log(`Member login, Cookies: ${cookiejar.getCookieString(mLogin.url)}`);
		res2 = await request(getActs);
		console.log(`No of activities: ${res2.length}`);
		let res6= await request(MemAct);
	}
	catch(error)
	{
		console.log(`\nMember add activity error: ${error}`);
		res2 = await request(getActs);
		console.log(`No of activities: ${res2.length}`);
		res4= await request(lgot);
		console.log(`\nAfter logout, Cookies: ${cookiejar.getCookieString(lgot.url)}`);
		console.log(`\nAfter login test 2, Cookie: ${cookiejar.getCookieString(mLogin.url)}`);
	}
	
	console.log(`\nAdd activity Test 3: Guest`);
	try
	{
		res2 = await request(getActs);
		console.log(`No of activities: ${res2.length}`);
		res7=await request(GstAct);
	}
	catch(error)
	{
		console.log(`\nBad password login error: ${error}`);
		res2 = await request(getActs);
		console.log(`\nAfter add activity test 3, Cookies: ${cookiejar.getCookieString(GstAct.url)}`);
	}	
}
addActivity();
