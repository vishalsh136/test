import React, { Component } from 'react';

class SecurityDetails extends React.Component {

	render(){
		return(

			<form action="/#/ThankYou" className="form-horizontal">
				<div className="text-left">
				 		<h3><b> Security Questions </b> </h3>
				</div> 
				<div className="form-group">
					<label className="col-sm-5 control-label">Question 1:</label>
					<div className="col-sm-6">
						<select className='form-control' >
							<option>Select a question</option>
							<option></option>
							
						</select>
					</div>
				</div> 
				<div className="form-group">
					<label className="col-sm-5 control-label">Your Answer:</label>
					<div className="col-sm-6">
						<input type="text" onChange={this.onChange} className='form-control' />
					</div>
				</div> 		

				<hr/>

				<div className="form-group">
				<label className="col-sm-5 control-label">Question 2:</label>
					<div className="col-sm-6">
						<select className='form-control' >
							<option>Select a question</option>
							<option></option>
							
						</select>
					</div>
				</div> 

				<div className="form-group">
				<label className="col-sm-5 control-label">Your Answer:</label>
					<div className="col-sm-6">
						<input type="text" onChange={this.onChange} className='form-control' />
					</div>
				</div> 									

				<hr/>

				<div className="form-group">
				<label className="col-sm-5 control-label">Question 3:</label>
					<div className="col-sm-6">
						<select className='form-control' >
							<option>Select a question</option>
							<option></option>
							
						</select>
					</div>
				</div> 
				<div className="form-group">
					<label className="col-sm-5 control-label">Your Answer:</label>
					<div className="col-sm-6">
						<input type="text" onChange={this.onChange} className='form-control' />
					</div>
				</div> 									

				<hr/>								
						
				<div className="text-left">
				 		<h3><b> Your Personal Details </b> </h3>
				</div> 

				<div className="form-group">
				<label className="col-sm-5 control-label">Your Contact:</label>
					<div className="col-sm-6">
						<input type="text" onChange={this.onChange} className='form-control' />
					</div>
				</div> 	
				<div className="form-group">
					<label className="col-sm-5 control-label">Your Email:</label>
					<div className="col-sm-6">
						<input type="text" onChange={this.onChange} className='form-control' />
					</div>
				</div> 								

					<hr/>
				<div className="text-left">
				 		<h5><b> Your Alternate Contact (Optional) </b> </h5>
				</div> 
				<div className="form-group">
				<label className="col-sm-5 control-label">Country Code:</label>
					<div className="col-sm-6">
						<select className='form-control' >
							<option>Select a country</option>
							<option></option>
							
						</select>
					</div>
				</div> 
				<div className="form-group">
				<label className="col-sm-5 control-label">Contact No:</label>
					<div className="col-sm-6">
					<input type="text" onChange={this.onChange} className='form-control' />
				</div>
				</div> 									

				<hr/>

				<div className="form-group">
				<label className="col-sm-5 control-label"></label>
				<div className="col-sm-7 ">
				<div className="col-sm-4">
					<input type="submit" onChange={this.onChange} className='btn btn-success' value="Submit" /> 
				</div>
				<div className="col-sm-3">
					<a href="/" className='btn btn-default' >Cancel</a>
				</div>
				</div> 
				</div>				  			

			</form>

			)};
	}

	export default SecurityDetails;