import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Web3 from 'web3'
import _ from 'lodash'
import { LineChart, Line } from 'recharts';
import { abi, address } from './common';


var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  
var newPeopleContractABI = abi();  //[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"regdevice","outputs":[{"name":"dname","type":"bytes32"},{"name":"didentification","type":"bytes32"},{"name":"dtype","type":"bytes32"},{"name":"dmake","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"device","outputs":[{"name":"devicename","type":"bytes32"},{"name":"partnername","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getLogisticPartner","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAssignDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAccountDetail","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_devicename","type":"bytes32"},{"name":"_partnername","type":"bytes32"}],"name":"addAssignDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_didentification","type":"bytes32"},{"name":"_dtype","type":"bytes32"},{"name":"_dmake","type":"bytes32"}],"name":"addRegisterDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDataPoints","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"datapoints","outputs":[{"name":"dname","type":"bytes32"},{"name":"temp","type":"uint256"},{"name":"humidity","type":"uint256"},{"name":"datetime","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"partner","outputs":[{"name":"pname","type":"bytes32"},{"name":"plocation","type":"bytes32"},{"name":"ptype","type":"bytes32"},{"name":"pref","type":"bytes32"},{"name":"purl","type":"bytes32"},{"name":"pregion","type":"bytes32"},{"name":"pstate","type":"bytes32"},{"name":"pcity","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"details","outputs":[{"name":"fname","type":"bytes32"},{"name":"mname","type":"bytes32"},{"name":"lname","type":"bytes32"},{"name":"add","type":"bytes32"},{"name":"state","type":"bytes32"},{"name":"country","type":"bytes32"},{"name":"zipcode","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_temp","type":"uint256"},{"name":"_humidity","type":"uint256"},{"name":"_datetime","type":"bytes32"}],"name":"addDataPoints","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pref","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addLogisticPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_mname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_add","type":"bytes32"},{"name":"_state","type":"bytes32"},{"name":"_country","type":"bytes32"},{"name":"_zipcode","type":"uint256"}],"name":"addAccountDetail","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getRegisterDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"}];

var newPeopleContractAddress = address(); //'0xe3879de39b578fa4adf3d311cdddd770de770bac';
 
var newPeopleContract = ETHEREUM_CLIENT.eth.contract(newPeopleContractABI).at(newPeopleContractAddress);

class getDataPoints extends React.Component {

	   // componentWillMount(){
    
	   //      var data = newPeopleContract.getDatapoints();

	        
	   //      this.setState({
	                
	   //              dnames: String(data[0]).split(','),
	   //              temps: String(data[1]).split(','),
	   //              humiditys: String(data[2]).split(',')	      
	                
	   //      })

	   //    }

componentWillMount(){
	
  		//peopleContract.addPerson("test","test","25");
        var data = newPeopleContract.getDataPoints();

      this.setState({
                
                dnames: String(data[0]).split(','),
                temps: String(data[1]).split(','),
                humiditys: String(data[2]).split(','),
                datetimes: String(data[3]).split(','),
      
                
        })

      }

	render(){
		
	var TableRow=[];
      _.each(this.state.dnames,(value,index)=>{
 
       TableRow.push(
			<tr>
			<td>{index+1}</td>
			<td>{ETHEREUM_CLIENT.toAscii(this.state.datetimes[index],32).replace(/\u0000/g, '')}</td>
			<td>{ETHEREUM_CLIENT.toAscii(this.state.dnames[index],32).replace(/\u0000/g, '')}</td>
			<td>{ETHEREUM_CLIENT.toDecimal(this.state.temps[index],32)}</td>
			<td>{ETHEREUM_CLIENT.toDecimal(this.state.humiditys[index],32)}</td>
			
			</tr>	
			
            )

       })

		console.log(TableRow);
		 const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];

		return(

				<div className="col-md-12">  
				<Header />
	  			<div className="col-md-10 col-md-offset-1">
	  				
				  	<div className="text-center">
				  		
				  		<h2><b> Get Data Points </b> </h2>
						
				  		<div className="col-md-10 col-md-offset-1">			

	  					</div>						
	  				</div>

	  				<div className="">
	                  <div className="col-md-12">
	                    <ul className="nav nav-tabs">
	                         <li><a href="/#/addDatapoints"  >Add Data Points</a></li>
							 <li className="active"><a href="/#/getDatapoints"  >Get Data Points</a></li>
	                     	 <li > <a href="/#/approvePartner" >Approve Partners</a></li>
	                     	 <li ><a href="/#/assignDevice" >Assign Device</a></li>
	                     	 <li ><a href="/#/getDevice"  >Get Device</a></li>
	                     	 <li ><a href="/#/registerDevice" >Register Device</a></li>
	                          <li ><a href="/#/tempChart" >Charts</a></li> 
	                       </ul>
	                  </div>
	                </div>

	  				 
	  			
	  				<div className="col-md-12 panel">
	  				<div className="col-md-10 col-md-offset-1">
	  				{/*}
	  					<form action="login/" className="form-horizontal">
								 
							<table className="table">
								<thead>
									
								</thead>
								<tbody>
									  <tr>
										<td>
											<select className="form-control">
												<option>Select Device</option>
												<option> Device 1</option>
												<option> Device 2</option>
												<option> Device 3</option>
											</select>
										</td>
										<td><input type="text" className="form-control" placeholder="From Date"  />
											</td>
										<td><input type="text"  className="form-control" placeholder="To Date"/>
											</td>
										<td><input type="submit" className="btn btn-success"/></td>
										
									  </tr>	
									  
								</tbody>
							</table>  			
					
						</form> {*/}
	  				</div>
					
	  				<div className="col-md-12 steps-content">
	  				
	  					<div className="col-md-10 col-md-offset-1">
				  			<form action="login/" className="form-horizontal">
								 
							<table className="table">
								<thead>
									<tr>
										<th>SrNo</th><th>DateTime</th><th>Device</th><th>Temperature</th><th>Humidity</th>
									</tr>
								</thead>
								<tbody>
									{TableRow}
									  
								</tbody>
									
							</table>  			
					
							</form>

						<LineChart width={400} height={400} data={data}>
						  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
						</LineChart>

						</div>	

						<div className="container col-md-5 text-center">
						
						</div>


					</div>	
					
	  					
	  				</div>
				</div>

				<Footer />

	  		</div>

			)};
	}





	export default getDataPoints;