import React, { Component } from 'react';
import { Steps, Step } from 'react-multistep-component';

import Header from './Header';
import Footer from './Footer';
import './login.css';


class Login extends Component{

  handleSubmit(e){
            
    var username = this.refs.username.value;    
    var pass = this.refs.pass.value;    
   
    if(username !== '' && pass !== '')
    {
      
        if(username == 'admin' && pass == 'admin')
        {

          window.location.href = "/#/getDataPoints";

        }else{

          alert('Incorrect Credential, Please try again');

        }

      e.preventDefault();

    }else{

      alert('Please Enter Credentials');
    }

    
    e.preventDefault();
  }


	render(){

		return(

			<div className="col-md-12">  
        	<Header />
          <div className="col-md-10 col-md-offset-1 highlight">
            
            <div className="LoginContent">
              
              <div className="col-md-10 col-md-offset-1 panel">
              <div className="col-md-8 col-md-offset-2 panel">
              <div className="col-md-6 panel">
                  
                <div className="panel-heading" >                      
                        <h3> <span className="pull-center">Login Or Register</span></h3> 
                </div>
                <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal" id="loginForm" method="POST">
                
                <div className="form-group">
                   
                  <div className="col-sm-12">
                    <input type="text" ref="username" className="form-control" placeholder="Username" id="username" data-bvalidator="required"/>

                  </div>
                </div>
                <div className="form-group">                 
                  <div className="col-sm-12">
                    <input type="password" ref="pass" className="form-control" placeholder="Password" id="password" data-bvalidator="required"/>
                  </div>
                </div>
                <div className="form-group">                 
                  <div className="col-sm-6 col-sm-offset-3">
                    <button type="submit" className="form-control btn-success" id="login">Login</button>
                  </div>
                </div>
              </form>
                  
              </div>
              <div className="col-md-6 text-center panel">
                  <div className="panel-heading" >                      
                          <h3> &nbsp;</h3> 
                  </div>
                    <form className="form-horizontal" action="/#/registerPartner" id="">
                    <div className="form-group">
                       
                      <div className="col-sm-12">
                        <label >Not registered yet?</label>
                      </div>
                    </div>
                    <div className="form-group">                 
                      <div className="col-sm-6">
                        
                        <button type="submit" className="form-control btn btn-primary">Register Now</button>
                        
                      </div>
                    </div>
                    
                  </form>
              </div>

              </div>

            </div>

            </div>
            
        </div>
        <Footer />
        </div>

		);


	}



}

export default Login;