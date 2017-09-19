import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
class ThankYou extends React.Component {

	render(){
		return(

			<div className="col-md-12">  
        		<Header />
			          <div className="col-md-10 col-md-offset-1">
			            
			            <div className="text-center">
			              
			              <h1><b> Thank you </b> </h1>
			              <div className="col-md-10 col-md-offset-1  ">
			                Registration Complete              

			              </div>

			            </div>
			            
			            <div className="col-md-12 panel text-center">
			            <div className="col-md-1">
			            </div>
			            <div className="col-md-10 steps-content">
			              <div className="col-md-8">
			              </div>
			              <div className="col-md-4">
			               <form className="form-inline">
			                  <div className="form-group">
			                    <label for="exampleInputName2">&nbsp;</label>
			                   
			                   <a href="/" className='btn btn-primary' >Homepage</a>
			                  </div>
			                  <div className="form-group">
			                    <label for="exampleInputEmail2">&nbsp;</label>
			                   
			                   <a href="/#/addDataPoints" className='btn btn-success' >Continue To Login</a>
			                  </div>
			                  
			                </form>
			                </div>
			             

			              <div className="col-md-12 panel text-center">
			                  <h3>Your Registration ID is 07456</h3>
			              </div>
			            </div>
			             </div>
			        </div>

			    <Footer />



       		 </div>

			)};
	}

	export default ThankYou;