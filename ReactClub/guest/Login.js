import React from "react";
import ReactDOM from "react-dom";

export default class Access extends React.Component
{
	constructor(props) {
		super(props);
		this.checkrole=props.checkrole;
		this.handleClick = this.handleClick.bind(this);
	  }

	handleClick(event) 
	{ 
		const data ={email: email.value, password: password.value};
		fetch('/login', {
						method: 'POST',
						headers:{'Content-Type': 'application/json',},
						body: JSON.stringify(data)
						})
		.then((response) => response.json())
		.then((data) => {
		   this.checkrole(data.role, data);
		})
		.catch((error) => {
		  console.error('Error:', error);
		});
	}
	
	render()
	{
		return <div>
				 
				<div className="login">
					<h1>Login &#x1f510;</h1>
					<div className="log">
						<label>Email : </label>
						<input type="email" id="email" />
						<label>Password : </label>
						<input type="password" id="password"></input>	
						<button type="button" onClick={this.handleClick}>Login</button> 
					</div>
					<footer className="footer">
						<strong>&#127752; &copy; VE3568_prachipanse</strong>
					</footer>
					</div>
				</div>;
	  }
}