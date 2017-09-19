import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Web3 from 'web3'
import _ from 'lodash'
import { abi, address } from './common';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var newPeopleContractABI = abi(); //[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"regdevice","outputs":[{"name":"dname","type":"bytes32"},{"name":"didentification","type":"bytes32"},{"name":"dtype","type":"bytes32"},{"name":"dmake","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"device","outputs":[{"name":"devicename","type":"bytes32"},{"name":"partnername","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getLogisticPartner","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAssignDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAccountDetail","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_devicename","type":"bytes32"},{"name":"_partnername","type":"bytes32"}],"name":"addAssignDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_didentification","type":"bytes32"},{"name":"_dtype","type":"bytes32"},{"name":"_dmake","type":"bytes32"}],"name":"addRegisterDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDataPoints","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"datapoints","outputs":[{"name":"dname","type":"bytes32"},{"name":"temp","type":"uint256"},{"name":"humidity","type":"uint256"},{"name":"datetime","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"partner","outputs":[{"name":"pname","type":"bytes32"},{"name":"plocation","type":"bytes32"},{"name":"ptype","type":"bytes32"},{"name":"pref","type":"bytes32"},{"name":"purl","type":"bytes32"},{"name":"pregion","type":"bytes32"},{"name":"pstate","type":"bytes32"},{"name":"pcity","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"details","outputs":[{"name":"fname","type":"bytes32"},{"name":"mname","type":"bytes32"},{"name":"lname","type":"bytes32"},{"name":"add","type":"bytes32"},{"name":"state","type":"bytes32"},{"name":"country","type":"bytes32"},{"name":"zipcode","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_temp","type":"uint256"},{"name":"_humidity","type":"uint256"},{"name":"_datetime","type":"bytes32"}],"name":"addDataPoints","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pref","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addLogisticPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_mname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_add","type":"bytes32"},{"name":"_state","type":"bytes32"},{"name":"_country","type":"bytes32"},{"name":"_zipcode","type":"uint256"}],"name":"addAccountDetail","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getRegisterDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"}];

var newPeopleContractAddress = address(); //'0xe3879de39b578fa4adf3d311cdddd770de770bac';
 
var newPeopleContract = ETHEREUM_CLIENT.eth.contract(newPeopleContractABI).at(newPeopleContractAddress);

ETHEREUM_CLIENT.eth.defaultAccount  = ETHEREUM_CLIENT.eth.accounts[0];

class registerDevice extends React.Component {

  handleSubmit(e){

    // important
    
    //var newL = newPeopleContract.addDataPoints('de',20,30, {gas: 200000});
    //console.log(newL);
    //console.log(newPeopleContract.addDataPoints('de',20,30,{gas: 200000}));
    console.log(newPeopleContract.getRegisterDevice());

    
    var dname = this.refs.dname.value;
    var didentification = this.refs.didentification.value;
    var dtype = this.refs.dtype.value;
    var dmake = this.refs.dmake.value;


    /*var newArr = {};
    var dArr = new Array;
    
    newArr["fname"]   = fname;    
    newArr["mname"]   = mname;
    newArr["lname"]   = lname;
    newArr["address"]   = address;
    newArr["state"]   = state;
    newArr["country"]   = country;
    newArr["zipcode"]   = zipcode;

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

    if(dname !== '' && didentification !== '' && dtype !== '' && dmake !== '')
    {

      console.log(newPeopleContract.addRegisterDevice(dname,didentification,dtype,dmake, {gas: 200000}));

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
            
            <div className="text-center">
              
              <h2><b> Register New Device </b> </h2>
                <div className="col-md-10 col-md-offset-1">      
                  

                </div>
            </div>

            <div className="">
                    <div className="col-md-12">
                      <ul className="nav nav-tabs">
                           <li><a href="/#/addDatapoints"  >Add Data Points</a></li>
                           <li ><a href="/#/getDatapoints"  >Get Data Points</a></li>
                           <li > <a href="/#/approvePartner" >Approve Partners</a></li>
                           <li ><a href="/#/assignDevice" >Assign Device</a></li>
                           <li ><a href="/#/getDevice"  >Get Device</a></li>
                           <li className="active"><a href="/#/registerDevice" >Register Device</a></li>
                           <li ><a href="/#/tempChart" >Charts</a></li>  
                         </ul>
                    </div>
                  </div>

            
            
            <div className="col-md-12 panel">
                  <div className="col-md-3"></div>
                    <div className="col-md-6  steps-content"> 
               <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
               <div className="form-group">
                  <label className="col-sm-5 control-label">Device Name:</label>
                  <div className="col-sm-6">
                   
                    <input type="text" ref="dname" className="form-control"/>
                  </div>
                </div>   

                

                <div className="form-group">
                  <label className="col-sm-5 control-label">Device Identification:</label>
                  <div className="col-sm-6">
                    <input type="text" ref="didentification" className="form-control"/>
                    
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-5 control-label">Device Type:</label>
                  <div className="col-sm-6">
                    <input type="text" ref="dtype" className="form-control"/>
                    
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-5 control-label">Device Make:</label>
                  <div className="col-sm-6">
                    <input type="text" ref="dmake" className="form-control"/>
                    
                  </div>
                </div>

                
                <div className="form-group">
                  <label className="col-sm-5 control-label"></label>
                  <div className="col-sm-7 ">
                  <div className="col-sm-4">                        
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

	export default registerDevice;