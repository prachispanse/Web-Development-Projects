const request = require('request-promise-native');
let cookiejar = request.jar();

let applTest1={
	method: 'POST',
	url:'http://127.24.31.15:3125/appicants',
	json: true, 
	body:{
		
		firstName: 'Blake',    
		lastName: 'Gray',     
		email: 'occults1985@yandex.com',      
		password: ',^h$ndMY',     
		role: 'member'
			},
	jar: cookiejar
};

let applTest2={
	method: 'POST',
	url:'http://127.24.31.15:3125/appicants',
	json: true, 
	body:{
		
		firstName: 'Melia',    
		lastName: 'Barker',     
		email: 'tirrivees1820@outlook.com',      
		password: '49OqspUq',     
		role: 'admin'
			},
	jar: cookiejar
};	

let applTest3={
	method: 'POST',
	url:'http://127.24.31.15:3125/appicants',
	json: true, 
	body:{
		
		firstName: 'Rio',    
		lastName: 'Merchant',     
		email: 'occultstheseaworldloverfrom1985@yandex.com',      
		password: '&w%3765',     
		role: 'member'
			},
	jar: cookiejar
};	

let applTest4={
	method: 'POST',
	url:'http://127.24.31.15:3125/appicants',
	json: true, 
	body:{
		
		firstName: 'Takyo',    
		lastName: 'Vasla',     
		email: 'actress@yandex.com',      
		password: 'R2&1U68a',     
		role: ''
			},
	jar: cookiejar
};

	
async function applicantTest()
{
	console.log(`Applicant Test 1: Good #1`);
	try
	{		
		let res1= await request(applTest1);
		console.log(`Applicant Result: ${JSON.stringify(res1)}`);
	}
	catch(error)
	{
		console.log(`${error}`);
	}
	
	console.log(`Applicant Test 2: Good #2`);
	try
	{		
		let res2= await request(applTest2);
		console.log(`Applicant Result: ${JSON.stringify(res2)}`);
	}
	catch(error)
	{
		console.log(`${error}`);
	}
	
	console.log(`Applicant Test 3: Bad #1`);
	try
	{		
		
		let res3= await request(applTest3);
		console.log(`Applicant Result: ${JSON.stringify(res3)}`);
	}
	catch(error)
	{
		console.log(`${error}`);
	}
	
	console.log(`Applicant Test 4: Bad #2`);
	try
	{		
		
		let res4= await request(applTest4);
		console.log(`Applicant Result: ${JSON.stringify(res4)}`);
	}
	catch(error)
	{
		console.log(`${error}`);
	}
	
}
applicantTest();
