import React from "react";
import ReactDOM from "react-dom";
import neptune from "./image/wuc.jpg";


export default function WebData()
{
let nepImage =<img src={neptune}  />;

let WebData =<div><div className="about"><h2>&#128073;About | Blog and Author	<br /><br />{nepImage}</h2>
			<p>
				Hi, I'm <strong>Prachi Panse</strong>, a student of class CS651 Web Systems as well as the founder of this website! 
				<br />I am currently working on development of this website!
			</p></div><footer className="footer"><strong>&#127752; &copy; VE3568_prachipanse</strong></footer></div>;

return WebData;
}