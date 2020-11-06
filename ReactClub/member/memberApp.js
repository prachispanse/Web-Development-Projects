import React from "react";
import ReactDOM from "react-dom";
import Data from "./Home";
import WebData from "./About.js";
import Access from "./Login.js";
import Activities from "./Activities.js";

let page =null;

export default class MemberApp extends React.Component
{
	constructor(props) {
        super(props);
        this.state = {show: "home"}; 
		this.checkrole=props.checkrole;
    }
		homeHandler(event) 
	{
		this.setState({show: "home"}); 
	}
	aboutHandler (event) 
	{
		this.setState({show: "about"}); 
	}
	activsHandler(event)
	{
		this.setState({show: "activs"});
	}
	memberHandler(event)
	{
		this.setState({show: "member"}); 
	}
	logoutHandler(event) 
	{
		fetch('/logout', {
						method: 'GET',
						headers:{'Content-Type': 'application/json',}						
						})
		.then((response) => response.json())
		.then((data) => {
		   this.checkrole("guest", "");
		  // this.setState({show: "logout"}); 
		})
		.catch((error) => {
		  console.error('Error:', error);
		});		
	}
	render()
	{
		switch (this.state.show) {
			case "home":
				page = <Data />;
				break;
			case "about":
				page = <WebData />;
				break;
			case "activs":
				page = <Activities />;
				break;
			case "member":
				page=<h2>Welcome! You're already a member!</h2>;
				break;
			/*case "logout":
				page=<Access />;
				break;*/
			default:
				page = <h2>Warning something went wrong!!!</h2>;
	}
	
		return <div>
					<nav className="nav1">
						<ul className="nob">
							<li><a onClick={this.homeHandler.bind(this)}>Home</a></li>
							<li><a onClick={this.aboutHandler.bind(this)}>About us</a></li>
							<li><a onClick={this.activsHandler.bind(this)}>Activities</a></li>
							<li><a onClick={this.memberHandler.bind(this)}>Members Only</a></li>
							<li><a onClick={this.logoutHandler.bind(this)}>Logout</a></li>
						</ul>
					</nav>
					<br />{page}
			</div>
	}
}
