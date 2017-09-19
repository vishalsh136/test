import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Web3 from 'web3'
import _ from 'lodash'
import { abi, address } from './common';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  
var newPeopleContractABI = abi(); 

var newPeopleContractAddress = address(); //'0xe3879de39b578fa4adf3d311cdddd770de770bac';
 
var newPeopleContract = ETHEREUM_CLIENT.eth.contract(newPeopleContractABI).at(newPeopleContractAddress);



ETHEREUM_CLIENT.eth.defaultAccount	= ETHEREUM_CLIENT.eth.accounts[0];

class AccountVerify extends React.Component {

	constructor(){

		super();
		var retrievedData = JSON.parse(localStorage.getItem("accountDetails"));
		if(retrievedData === null){
			retrievedData = [];
		}

		this.state = {
			accountDetails:retrievedData
		}
		//console.log(this.state);

	}

	handleSubmit(e){

		// important
		
		//var newL = newPeopleContract.addDataPoints('de',20,30, {gas: 200000});
		//console.log(newL);
		//console.log(newPeopleContract.addDataPoints('de',20,30,{gas: 200000}));
		console.log(newPeopleContract.getAccountDetail());

		
		var fname = this.refs.fname.value;
		var mname = this.refs.mname.value;
		var lname = this.refs.lname.value;
		var address = this.refs.address.value;
		var state 	= this.refs.state.value;
		var country = this.refs.country.value;
		var zipcode = this.refs.zipcode.value;

		/*var newArr = {};
		var dArr = new Array;
		
		newArr["fname"] 	= fname;		
		newArr["mname"] 	= mname;
		newArr["lname"] 	= lname;
		newArr["address"] 	= address;
		newArr["state"] 	= state;
		newArr["country"] 	= country;
		newArr["zipcode"] 	= zipcode;

		if(this.state.accountDetails.dArr){
			this.state.accountDetails.dArr.push(newArr);			
			var nData = this.state.accountDetails.dArr;				
			var t = JSON.stringify({dArr:nData});
		}else{
			dArr.push(newArr);
			var t = JSON.stringify({dArr:dArr});
		}

		this.setState({accountDetails:JSON.parse(t)});
		
		localStorage.setItem('accountDetails',t);*/

		if(fname !== '' && mname !== '' && lname !== '' && address !== '' && state !== '' && country !== '' && zipcode !== ''){

			console.log(newPeopleContract.addAccountDetail(fname,mname,lname,address,state,country,zipcode, {gas: 200000}));

			//this.refs.verify_btn.hide();

			alert('Data added successfully..!!');
			e.preventDefault();
		}else{

			alert('Please Enter all details');
		}

		
		e.preventDefault();
	}

	render(){
		// console.log(this.state.accountDetails);
		return(

			<form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">

			<div className="form-group">
				<label className="col-sm-5 control-label">First Name:</label>
				<div className="col-sm-6">
				<input type="text" ref="fname" className='form-control' />
				</div>
			</div> 									
			<div className="form-group">
				<label className="col-sm-5 control-label">Middle Name:</label>
				<div className="col-sm-6">
				<input type="text" ref="mname" className='form-control' />
				</div>
			</div>
			<div className="form-group">
				<label className="col-sm-5 control-label">Last Name:</label>
				<div className="col-sm-6">
				<input type="text" ref="lname" className='form-control' />
				</div>
			</div> 							
			<hr/>

			<div className="form-group">
				<label className="col-sm-5 control-label">Address:</label>
				<div className="col-sm-6">
				<input type="text" ref="address" className='form-control' />
				</div>
			</div> 									
			<div className="form-group">
				<label className="col-sm-5 control-label">State:</label>
				<div className="col-sm-6">
				<input type="text" ref="state" className='form-control' />
				</div>
			</div>
			<div className="form-group">
				<label className="col-sm-5 control-label">Country:</label>
				<div className="col-sm-6">
				<input type="text" ref="country" className='form-control' />
				</div>
			</div> 								
			<div className="form-group">
				<label className="col-sm-5 control-label">Zip Code:</label>
				<div className="col-sm-6">
				<input type="text" ref="zipcode" className='form-control' />
				</div>
			</div> 
			<hr/>



			<div className="form-group">
			<label className="col-sm-5 control-label"></label>
			<div className="col-sm-7 ">
			<div className="col-sm-4">
				<input type="submit" id="verify_btn" className='btn btn-success' value="Submit" /> 
			</div>
			<div className="col-sm-3">
				<a href="http://localhost/react/" className='btn btn-default' >Cancel</a>
			</div>
			</div> 
			</div>				  			

			</form>


	)};

}

export default AccountVerify;