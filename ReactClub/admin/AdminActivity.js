import React,{Component} from 'react';
//import activities from "./activities.json";

var rows=null;

export default class Activities extends Component
{
	constructor(props) {
			super(props);
			this.state = {activities:[], addName:"",addDates:""};
			//this.displayTable=this.displayTable.bind(this);
		}

addRow() 
{  
	if(ename.value!==""&&edates.value!=="")
	{
		let newRec={name:ename.value, dates:edates.value}
		fetch('/activities/addActs', {
							method: 'POST',
							headers:{'Content-Type': 'application/json',},
							body: JSON.stringify(newRec),
							})
			.then((response) => response.json())
			.then((data) => {
				//this.componentDidMount();
				this.setState({activities: data});
				ename.value="";
				edates.value="";
			})
			.catch((error) => {
			  console.error('Error:', error);
			});
	}
	else
	{
		alert(`Can not add a blank activity!`)
	}
}

deleteRow(id)
{
	console.log(id);
		fetch('/activities/'+id, {
						method: 'DELETE',
						headers:{'Content-Type': 'application/json',}
						})
		.then((response) => response.json())
		.then((data) => {
				//this.componentDidMount();
			this.setState({activities: data});
		})
		.catch((error) => {
		  console.error(`Error: ${error}`);
		});
}

componentDidMount()
{
	let that=this;
	fetch('/activities', {
						method: 'GET',
						headers:{'Content-Type': 'application/json',}
						})
		.then((response) => response.json())
		.then((data) => {
			this.setState({activities: data})
		})
		.catch((error) => {
			console.error(`Error: ${error}`);
		});		
}	
	
render()
{
	return <div>
				<div className="activs">
					<h1> Activity Management</h1>
						<strong>Add Activity</strong>
							<form className="actcss">
								<label>Name : </label>
								<input type="text" id="ename" />
								<label>Date(s) : </label>
								<input type="text" id="edates" />
								<button type="button" onClick={this.addRow.bind(this)}>Add</button>
							</form> <br />
					<h2>Activities<br /></h2>
					<table>
						<thead>
							<tr>
								<td></td>
								<td>Name</td>
								<td>Dates</td>
							</tr>
						</thead>		
						<tbody>	
						{this.state.activities.map((u) => {
							const {_id, name, dates} = u
								return( <tr key={_id}>
									<td><button onClick={this.deleteRow.bind(this,_id)}> Delete </button></td>
					<td>{name}</td>
					<td>{dates}</td>
						</tr>)
						})}
						</tbody>
					</table>
				</div>
				<footer className="footer"><strong>&#127752; &copy; VE3568_prachipanse</strong></footer>
			</div>;
	}	
}

	