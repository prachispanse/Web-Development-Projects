import React from 'react';
import actS from "./activities.json";
let page = null;
let rows =null;
export default class Activities extends React.Component

{
	render()
	{
		rows = actS.map(function(u, i){
				return <tr key={i}>
							<td>{u.name}</td>
							<td>{u.dates}</td>
						</tr>;
		});

		page=<div>
				<div className="activs">
					<h1>&#128204; Club Activities<br /></h1>
					<h3>
						Don't Just Watch The Local Color. Become Part Of It. <br />
						Traveling On Foot Pushes You To Experience Life In New & Delightful Ways.
						<br /> 
						Let Our Insider Expertise Broaden Your Horizons. <br />
					</h3>
					<section><br />
						<table>	
							<thead>
								<tr>
									<td>Events</td>
									<td>Dates</td>
								</tr>
							</thead>
							<tbody>{rows}</tbody>
						</table>
					</section>
				</div>
				<footer className="footer">
					<strong>&#127752; &copy; VE3568_prachipanse</strong>
				</footer>
			</div>
		return page;
	}
}

	