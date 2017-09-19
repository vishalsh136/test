import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Router, Route, hashHistory } from 'react-router';
import Web3 from 'web3'
import _ from 'lodash'
import { abi, address } from './common';

import { browserHistory } from 'react-router';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  
var newPeopleContractABI = abi(); //[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"regdevice","outputs":[{"name":"dname","type":"bytes32"},{"name":"didentification","type":"bytes32"},{"name":"dtype","type":"bytes32"},{"name":"dmake","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"device","outputs":[{"name":"devicename","type":"bytes32"},{"name":"partnername","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getLogisticPartner","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAssignDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAccountDetail","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_devicename","type":"bytes32"},{"name":"_partnername","type":"bytes32"}],"name":"addAssignDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_didentification","type":"bytes32"},{"name":"_dtype","type":"bytes32"},{"name":"_dmake","type":"bytes32"}],"name":"addRegisterDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDataPoints","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"datapoints","outputs":[{"name":"dname","type":"bytes32"},{"name":"temp","type":"uint256"},{"name":"humidity","type":"uint256"},{"name":"datetime","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"partner","outputs":[{"name":"pname","type":"bytes32"},{"name":"plocation","type":"bytes32"},{"name":"ptype","type":"bytes32"},{"name":"pref","type":"bytes32"},{"name":"purl","type":"bytes32"},{"name":"pregion","type":"bytes32"},{"name":"pstate","type":"bytes32"},{"name":"pcity","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"details","outputs":[{"name":"fname","type":"bytes32"},{"name":"mname","type":"bytes32"},{"name":"lname","type":"bytes32"},{"name":"add","type":"bytes32"},{"name":"state","type":"bytes32"},{"name":"country","type":"bytes32"},{"name":"zipcode","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_temp","type":"uint256"},{"name":"_humidity","type":"uint256"},{"name":"_datetime","type":"bytes32"}],"name":"addDataPoints","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pref","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addLogisticPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_mname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_add","type":"bytes32"},{"name":"_state","type":"bytes32"},{"name":"_country","type":"bytes32"},{"name":"_zipcode","type":"uint256"}],"name":"addAccountDetail","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getRegisterDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"}];

var newPeopleContractAddress = address(); //'0xe3879de39b578fa4adf3d311cdddd770de770bac';
 
var newPeopleContract = ETHEREUM_CLIENT.eth.contract(newPeopleContractABI).at(newPeopleContractAddress);

//ETHEREUM_CLIENT.eth.sendTransaction({to:newPeopleContractAddress, gas: 314159}); 

ETHEREUM_CLIENT.eth.defaultAccount	= ETHEREUM_CLIENT.eth.accounts[0];





class registerPartner extends React.Component {

	constructor(){

		super();

		var retrievedData = JSON.parse(localStorage.getItem("pDetails"));
		if(retrievedData === null){
			retrievedData = [];
		}

		this.state = {
			pDetails:retrievedData
		}	




	}



	handleSubmit(e){

		console.log(newPeopleContract.getLogisticPartner());

		var pname 			= this.refs.pname.value;
		var plocation 		= this.refs.plocation.value;
		var ptype 			= this.refs.ptype.value;
		var purl 			= this.refs.purl.value;
		var pref 			= this.refs.pref.value;
		var pregion 		= this.refs.pregion.value;
		var pstate 			= this.refs.pstate.value;
		var pcity 			= this.refs.pcity.value;

		/*var newArr = {};
		var dArr = new Array;
		
		newArr["pname"] 	= pname;		
		newArr["plocation"] = plocation;
		newArr["ptype"] 	= ptype;
		newArr["purl"] 		= purl;
		newArr["pref"] 		= pref;
		newArr["pregion"] 	= pregion;
		newArr["pstate"] 	= pstate;
		newArr["pcity"] 	= pcity;

		if(this.state.pDetails.dArr){
			this.state.pDetails.dArr.push(newArr);			
			var nData = this.state.pDetails.dArr;				
			var t = JSON.stringify({dArr:nData});
		}else{
			dArr.push(newArr);
			var t = JSON.stringify({dArr:dArr});
		}

		this.setState({pDetails:JSON.parse(t)});
		
		localStorage.setItem('pDetails',t);

		alert("Data Added Successfully");
		browserHistory.push('/approvePartner');
*/

		if(pname !== '' && plocation !== '' && ptype !== '' && purl !== '' && pregion !== '' 
			&& pstate !== '' && pcity !== ''){

console.log(newPeopleContract.addPartner(pname,plocation,ptype,pregion, {gas: 200000}));
//alert(pname+'-'+plocation+'-'+ptype+'-'+purl+'-'+pref+'-'+pregion+'-'+pstate+'-'+pcity);
			//this.refs.verify_btn.hide();

			alert('Data added successfully..!!');
			e.preventDefault();
		}else{

			alert('Please Enter all details');
		}


		e.preventDefault();
	}

	render(){
		return(

				<div className="col-md-12">  
				<Header />
				<div className="col-md-10 col-md-offset-1">

				<div className=" text-center">
				  
				  <h2><b> Register For Logistic Partner </b> </h2>
				  <div className="col-md-10 col-md-offset-1">			  
				    

				  </div>

				</div>

				<div className="col-md-12 panel text-center">
				<div className="col-md-3"></div>
				<div className="col-md-6  steps-content">
				<form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal" action="/#verify">
				   <div className="form-group">
				      <label className="col-sm-5 control-label">Partner Name:</label>
				      <div className="col-sm-6">
				       
				        <input type="text" ref="pname" className="form-control" required />
				      </div>
				    </div>   

				    <div className="form-group">
				      <label className="col-sm-5 control-label">Partner Location:</label>
				      <div className="col-sm-7">
				        <textarea ref="plocation" className="form-control" rows="3" required></textarea>
				        
				      </div>
				    </div>

				    <div className="form-group">
				      <label className="col-sm-5 control-label">Partner Type:</label>
				      <div className="col-sm-6">
				        
				        <select ref="ptype" className="form-control" required>
				          <option>Logistic Partner</option>
				        </select>
				      </div>
				    </div>

				    <div className="form-group">
				      <label className="col-sm-5 control-label">References:</label>
				      <div className="col-sm-6">
				        <input type="text" ref="pref" className="form-control"/>
				        
				      </div>
				    </div>

				    <div className="form-group">
				      <label className="col-sm-5 control-label">Certification URL:</label>
				      <div className="col-sm-6">
				        <input type="text" ref="purl" className="form-control"/>
				        
				      </div>
				    </div>

				    <div className="form-group">
				      <label className="col-sm-5 control-label">Region Covered:</label>
				      <div className="col-sm-6">
				        <select ref="pregion" className="form-control" required>
				          <option>EAST</option>
				          <option>WEST</option>
				          <option>NORTH</option>
				          <option>SOUTH</option>
				        </select>
				        
				      </div>
				    </div>

				    <div className="form-group">
				      <label className="col-sm-5 control-label">State:</label>
				      <div className="col-sm-6" id="state">
				        <select ref="pstate" className="form-control" required>
				          <option>Maharashtra</option>
				          <option>Gujarat</option>
				          <option>Goa</option>                      
				        </select>                    
				      </div>
				    </div>



				    <div className="form-group">
				      <label className="col-sm-5 control-label">City:</label>
				      <div className="col-sm-6">
				        <select ref="pcity" className="form-control" required>
				          
				         	<option>Mumbai</option>
				         	 <option>Pune</option>   
				        </select>
				        
				      </div>
				    </div>

				    <div className="form-group">
				      <label className="col-sm-5 control-label"></label>
				      <div className="col-sm-7 ">
				      <div className="col-sm-4">                       
				        
				        <input type="submit" className="btn btn-success" value="Submit"/>
				      </div>
				      <div className="col-sm-3">
				         <a href="/" className='btn btn-default'>Cancel</a>
				      </div>
				      </div>      
				      </div>

				</form>    
				</div>
				</div>
				</div>

				<Footer />
				</div>

			)
	};

}

	export default registerPartner;