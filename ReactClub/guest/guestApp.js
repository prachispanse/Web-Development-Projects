import React from "react";
import ReactDOM from "react-dom";
import Data from "./Home";
import WebData from "./About.js";
import Access from "./Login.js";
import Activities from "./activities.js";
let page =null;

export default class GuestApp extends React.Component
{
	constructor(props) {
        super(props);
        this.state = {show: "home"}; 
		
		this.aboutHandler=this.aboutHandler.bind(this);
		this.homeHandler=this.homeHandler.bind(this);
		this.loginHandler=this.loginHandler.bind(this);
		this.activsHandler=this.activsHandler.bind(this);
		this.checkrole=props.checkrole;
    }
	aboutHandler(event) 
	{
		this.setState({show: "about"}); 
	}
	homeHandler(event) 
	{
		this.setState({show: "home"}); 
	}
	memberHandler(event)
	{
		this.setState({show: "member"});
	}
	loginHandler(event) 
	{
		this.setState({show: "login"}); 
	}
	activsHandler(event)
	{
		this.setState({show: "activs"});
	}
	render()
	{
		switch (this.state.show) {
			case "home":
				page = <Data />;
				break;
			case "about":
				page = <WebData  />;
				break;
			case "activs":
				page = <Activities />;
				break;
			case "member":
				page=<h2>Not implemented yet!</h2>;
				break;
			case "login":
				page = <Access checkrole={this.checkrole}/>;
				break;
			default:
				page = <h2>Warning something went wrong!!!</h2>;
		}
		return <div>
					<nav className="nav1">
						<ul className="nob">
							<li><a onClick={this.homeHandler}>Home</a></li>
							<li><a onClick={this.aboutHandler}>About us</a></li>
							<li><a onClick={this.activsHandler}>Activities</a></li>
							<li><a onClick={this.memberHandler.bind(this)}>Membership</a></li>
							<li><a onClick={this.loginHandler}>Login</a></li>
						</ul>
					</nav><br />{page}
				</div>
	}

}

