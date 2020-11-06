import React from "react";
import ReactDOM from "react-dom";
import neptune from "./image/TravelWeb.jpg";

export default function Data()
{
let nepImage = <img src={neptune}  />;


let cont=<div><div className="div1">
		<h1>&#128747; Aspiring Voyagers<br /><br />{nepImage}</h1>
		<p>
			A Dutch proverb goes <strong>"He who is outside his door has the hardest part of his journey behind him."</strong>
			<br /><br />Planning a trip and being on the road is lot easier than you think. 
			It's the decision to take that step out the door that is the hardest part. 
			<br />It requires the most change. You're leaving your old life behind for a new one. 
			<br />I know what it is like because I made the same decision when I started. 
			<br />
			But you shouldn't let fear hold you back. 
			<br /><br />
			And, here, are some uplifting and inspiring posts to help you take that first step out the door.
		</p></div>
		<footer className="footer"><strong>&#127752; &copy; VE3568_prachipanse</strong></footer>
		</div>;
		
	return cont
}