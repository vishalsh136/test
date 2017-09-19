import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { abi, address } from './common';
import Web3 from 'web3';
import _ from 'lodash';
import { browserHistory } from 'react-router';

console.log(abi());
var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  
var newPeopleContractABI = abi(); //[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"regdevice","outputs":[{"name":"dname","type":"bytes32"},{"name":"didentification","type":"bytes32"},{"name":"dtype","type":"bytes32"},{"name":"dmake","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"device","outputs":[{"name":"devicename","type":"bytes32"},{"name":"partnername","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getLogisticPartner","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAssignDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAccountDetail","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_devicename","type":"bytes32"},{"name":"_partnername","type":"bytes32"}],"name":"addAssignDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_didentification","type":"bytes32"},{"name":"_dtype","type":"bytes32"},{"name":"_dmake","type":"bytes32"}],"name":"addRegisterDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDataPoints","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"datapoints","outputs":[{"name":"dname","type":"bytes32"},{"name":"temp","type":"uint256"},{"name":"humidity","type":"uint256"},{"name":"datetime","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"partner","outputs":[{"name":"pname","type":"bytes32"},{"name":"plocation","type":"bytes32"},{"name":"ptype","type":"bytes32"},{"name":"pref","type":"bytes32"},{"name":"purl","type":"bytes32"},{"name":"pregion","type":"bytes32"},{"name":"pstate","type":"bytes32"},{"name":"pcity","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"details","outputs":[{"name":"fname","type":"bytes32"},{"name":"mname","type":"bytes32"},{"name":"lname","type":"bytes32"},{"name":"add","type":"bytes32"},{"name":"state","type":"bytes32"},{"name":"country","type":"bytes32"},{"name":"zipcode","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_temp","type":"uint256"},{"name":"_humidity","type":"uint256"},{"name":"_datetime","type":"bytes32"}],"name":"addDataPoints","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pref","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addLogisticPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_mname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_add","type":"bytes32"},{"name":"_state","type":"bytes32"},{"name":"_country","type":"bytes32"},{"name":"_zipcode","type":"uint256"}],"name":"addAccountDetail","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getRegisterDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"}];

var newPeopleContractAddress = address(); //'0xe3879de39b578fa4adf3d311cdddd770de770bac';

var newPeopleContract = ETHEREUM_CLIENT.eth.contract(newPeopleContractABI).at(newPeopleContractAddress);

//console.log(abi());
class addDataPoints extends React.Component {

	constructor(){

		super();

		var retrievedData = JSON.parse(localStorage.getItem("dataPoints"));
		if(retrievedData === null){
			retrievedData = [];
		}

		this.state = {
			pDetails:retrievedData
		}	

	}

      componentWillMount(){
    //peopleContract.addPerson("test","test","25");
        var data = newPeopleContract.getRegisterDevice();

        this.setState({
                
                dnames: String(data[0]).split(','),
                didentifications: String(data[1]).split(','),
                dtypes: String(data[2]).split(','),
                dmakes: String(data[3]).split(',')
                
                
        })

      }

	handleSubmit(e){

		console.log(newPeopleContract.getDataPoints());

		var devicename 			= this.refs.devicename.value;
		var temp 				= this.refs.temp.value;
		var humidity 			= this.refs.humidity.value;

		var today = new Date();

		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

		var datetime = date+" "+time;
		//alert(datetime);


		var newArr = {};
		var dArr = new Array;

		if(devicename !== '' && temp !== '' && humidity !== ''){

			console.log(newPeopleContract.addDataPoints(devicename,temp,humidity,datetime, {gas: 200000}));
			//alert(pname+'-'+plocation+'-'+ptype+'-'+purl+'-'+pref+'-'+pregion+'-'+pstate+'-'+pcity);
			//this.refs.verify_btn.hide();

			alert('Data added successfully..!!');
			e.preventDefault();
		}else{

			alert('Please Enter all details');
		}
		
		/*newArr["devicename"] 	= devicename;		
		newArr["plocation"] 	= temp;
		newArr["humidity"] 		= humidity;


		if(this.state.dataPoints.dArr){
			this.state.dataPoints.dArr.push(newArr);			
			var nData = this.state.dataPoints.dArr;				
			var t = JSON.stringify({dArr:nData});
		}else{
			dArr.push(newArr);
			var t = JSON.stringify({dArr:dArr});
		}
		console.log(this.state);
		this.setState({dataPoints:JSON.parse(t)});
		
		localStorage.setItem('dataPoints',t);

		alert("Data Added Successfully");
		browserHistory.push('/approvePartner');
*/
		e.preventDefault();



	}


	render(){

		var Options=[];
      _.each(this.state.dnames,(value,index)=>{
 
       Options.push(
       <option>
            {
            	ETHEREUM_CLIENT.toAscii(this.state.dnames[index],32).replace(/\u0000/g, '')}
       </option>
            );

       });

		return(

				<div className="col-md-12">  
				<Header />
				<div className="col-md-10 col-md-offset-1">
					
					<div className=" text-center">
						
						<h2><b> Add Data Points </b> </h2>
					
						<div className="col-md-10 col-md-offset-1">			

						</div>							
					
					</div>

					<div className="">
	                  <div className="col-md-12">
	                    <ul className="nav nav-tabs">
	                         <li className="active"><a href="/#/addDatapoints"  >Add Data Points</a></li>
							 <li ><a href="/#/getDatapoints"  >Get Data Points</a></li>
	                     	 <li > <a href="/#/approvePartner" >Approve Partners</a></li>
	                     	 <li ><a href="/#/assignDevice" >Assign Device</a></li>
	                     	 <li ><a href="/#/getDevice"  >Get Device</a></li>
	                     	 <li ><a href="/#/registerDevice" >Register Device</a></li>
	                         <li ><a href="/#/tempChart" >Charts</a></li>   
	                       </ul>
	                  </div>
	                </div>

					 
					<div className="col-md-12 panel text-center">
					<div className="col-md-3"></div>
					<div className="col-md-6  steps-content">

						
					<form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal" action="/#verify">
					 
					<div className="form-group">
						<label className="col-sm-5 control-label">Device Name:</label>
						<div className="col-sm-4">
							<select ref="devicename" className='form-control' >
								<option>Select Device</option>
								{Options}
							</select>
						</div>
					</div>  
												
							
					 <div className="form-group">
						<label className="col-sm-5 control-label">Temperature:</label>
						<div className="col-sm-4">
						  <input type="text" ref="temp" className='form-control' />
						</div>
					  </div> 		
							
							
					<div className="form-group">
					<label className="col-sm-5 control-label">Humidity:</label>
					<div className="col-sm-4">
					<input type="text" ref="humidity" className='form-control' />
					</div>
					</div>  
					
					
						

					<div className="form-group">
					<label className="col-sm-5 control-label"></label>
					<div className="col-sm-5 ">
					<div className="col-sm-3">
						<input type="submit" className='btn btn-success' value="Submit" /> 
					</div>
					<div className="col-sm-3">
						<a href="/" className='btn btn-default' >Cancel</a>
					</div>
					</div> 
					</div>			  			

				</form>
				</div>
						
					</div>
				</div>
				<Footer />
				</div>

			)};
	}

	export default addDataPoints;