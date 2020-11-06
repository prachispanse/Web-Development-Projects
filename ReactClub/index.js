import React from "react";
import ReactDOM from "react-dom";
import neptune from "./image/TravelWeb.jpg";
import GuestApp from "./guest/guestApp.js";
import MemberApp from "./member/memberApp.js";
import AdminApp from "./admin/adminApp.js";

let nepImage = <img src={neptune}  />;
let contents=null;
let lbl=null;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest"}; 	
		this.checkrole=this.checkrole.bind(this);		
    }
	
	checkrole(roleval,userinfo)
	{
		this.setState({role: roleval, userinfo: userinfo});
	}
	render() {
	
		switch (this.state.role) {
			case "guest":
			  contents = <GuestApp checkrole={this.checkrole}/>;
			  lbl=null;
			  break;
			case "member":
			  contents = <MemberApp checkrole={this.checkrole}/>;
			  lbl=this.state.userinfo.firstName + " " + this.state.userinfo.lastName + ": " + this.state.role;
			  break;
			case "admin":
			  contents = <AdminApp checkrole={this.checkrole}/>;
			  lbl=this.state.userinfo.firstName + " " + this.state.userinfo.lastName + ": " + this.state.role;
			  break;
			default:
			  contents = <h2>Warning something went wrong!!!</h2>;
		}
        return <div>
					<label id="display"> {lbl}</label>
					{contents}<br />
				</div>
    }
}
ReactDOM.render(<App />, document.getElementById("root"));