import React from "react";
import ReactDOM from "react-dom";



let contents =null;
export default class Access extends React.Component
{
constructor(props) {
 super(props);
	this.checkrole=props.checkrole;
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick(event) { 
    if (email.value==="member@email.org") 
		this.checkrole("member","Name is Member");
	else if (email.value==="admin@email.org")
		this.checkrole("admin","Name is admin");
	else
		this.checkrole("guest","");
	
  }
  render(){
	
return <div className="login"><h1>Login &#x1f510;</h1>
			<div className="log">
				<label>Email : </label>
				<input type="email" id="email" />
				<label>Password : </label>
				<input type="password"></input>	
				<button type="button" onClick={this.handleClick}>Login</button> 
			</div><footer className="footer"><strong>&#127752; &copy; VE3568_prachipanse</strong></footer></div>;

  }
}