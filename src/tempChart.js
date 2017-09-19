import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import Header from './Header';
import Footer from './Footer';
import HumidityChart from './humidityChart';
import Web3 from 'web3'
import _ from 'lodash'
//import { abi, address } from './common';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  
var newPeopleContractABI =  [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"regdevice","outputs":[{"name":"dname","type":"bytes32"},{"name":"didentification","type":"bytes32"},{"name":"dtype","type":"bytes32"},{"name":"dmake","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"device","outputs":[{"name":"devicename","type":"bytes32"},{"name":"partnername","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getLogisticPartner","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAssignDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getAccountDetail","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_devicename","type":"bytes32"},{"name":"_partnername","type":"bytes32"}],"name":"addAssignDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_didentification","type":"bytes32"},{"name":"_dtype","type":"bytes32"},{"name":"_dmake","type":"bytes32"}],"name":"addRegisterDevice","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getDataPoints","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"datapoints","outputs":[{"name":"dname","type":"bytes32"},{"name":"temp","type":"uint256"},{"name":"humidity","type":"uint256"},{"name":"datetime","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"partner","outputs":[{"name":"pname","type":"bytes32"},{"name":"plocation","type":"bytes32"},{"name":"ptype","type":"bytes32"},{"name":"pref","type":"bytes32"},{"name":"purl","type":"bytes32"},{"name":"pregion","type":"bytes32"},{"name":"pstate","type":"bytes32"},{"name":"pcity","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"details","outputs":[{"name":"fname","type":"bytes32"},{"name":"mname","type":"bytes32"},{"name":"lname","type":"bytes32"},{"name":"add","type":"bytes32"},{"name":"state","type":"bytes32"},{"name":"country","type":"bytes32"},{"name":"zipcode","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_dname","type":"bytes32"},{"name":"_temp","type":"uint256"},{"name":"_humidity","type":"uint256"},{"name":"_datetime","type":"bytes32"}],"name":"addDataPoints","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pname","type":"bytes32"},{"name":"_plocation","type":"bytes32"},{"name":"_ptype","type":"bytes32"},{"name":"_pref","type":"bytes32"},{"name":"_pregion","type":"bytes32"}],"name":"addLogisticPartner","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_mname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_add","type":"bytes32"},{"name":"_state","type":"bytes32"},{"name":"_country","type":"bytes32"},{"name":"_zipcode","type":"uint256"}],"name":"addAccountDetail","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getRegisterDevice","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"}];

var newPeopleContractAddress = '0xe61f628c346498b5ad2ed87f934e1a320a3a3705';
 
var newPeopleContract = ETHEREUM_CLIENT.eth.contract(newPeopleContractABI).at(newPeopleContractAddress);

  
class dataChart extends React.Component {

  constructor(props) {
    super(props);
    this.chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
            // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper 
          console.log('Selected ', Chart.chart.getSelection());
        },
      },
    ];

 
    this.state = {

      options: {
        title: 'Temp vs. Hours',
        hAxis: { title: 'Hours', minValue: 0, maxValue: 10 },
        vAxis: { title: 'Temp', minValue: 0, maxValue: 10 },
        legend: 'none',
      },
      rows: [
        [1, 12],
        [2, 5.5],
        [3, 14],
        [4, 5],
        [5, 3.5],
        [6.5, 7],
      ],
      columns: [
        {
          type: 'number',
          label: 'Age',
        },
        {
          type: 'number',
          label: 'Weight',
        },
      ],
    };
  }


      componentWillMount(){
        //peopleContract.addPerson("test","test","25");
        var deviceArr = newPeopleContract.getRegisterDevice();
        
         var dataPoints = newPeopleContract.getDataPoints();      
        
        this.setState({
                
                dnames: String(deviceArr[0]).split(','),
                dataPointdnames: String(dataPoints[0]).split(','),
                dataPointTemp: String(dataPoints[1]).split(','),
                dataPointHumid: String(dataPoints[2]).split(','),
                dataPointDateTime: String(dataPoints[3]).split(','),
                
        })

      }



  render() {

    var rowArr=[];
    var row = '';
    
        
      _.each(this.state.dataPointdnames,(value,index)=>{
       
        var date = ETHEREUM_CLIENT.toAscii(this.state.dataPointDateTime[index],32).replace(/\u0000/g, '');
        var temp = ETHEREUM_CLIENT.toDecimal(this.state.dataPointTemp[index],32);
 
        var newAr = [index,temp];
          rowArr[index] = newAr;

       });




    return (
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
                           <li><a href="/#/addDatapoints"  >Add Data Points</a></li>
               <li ><a href="/#/getDatapoints"  >Get Data Points</a></li>
                         <li > <a href="/#/approvePartner" >Approve Partners</a></li>
                         <li ><a href="/#/assignDevice" >Assign Device</a></li>
                         <li ><a href="/#/getDevice"  >Get Device</a></li>
                         <li ><a href="/#/registerDevice" >Register Device</a></li>
                         <li className="active"><a href="/#/tempChart" >Charts</a></li>    
                         </ul>
                    </div>
                  </div>

           
          <div className="col-md-12 panel text-center">
      <div>
        <div>
          <Chart
            chartType="LineChart"            
            columns={this.state.columns}
            options={this.state.options}
            rows={rowArr}
            graph_id="LineChart"
            width="100%"
            height="400px"
            chartEvents={this.chartEvents}
            key="0" />
        </div>
        <div>
          <HumidityChart key="1" />
        </div>
      </div>


      </div>
        </div>
        <Footer />
        </div>

    );
  }
}
export default dataChart;