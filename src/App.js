import React, { Component } from 'react';
import { Steps, Step } from 'react-multistep-component';
//import bgLogo from './home-bg.png';
//import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import AccountVerify from './AccountVerify';
import SecurityDetails from './SecurityDetails';

import './App.css';
import './Multistep.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.stepShouldChange = this.stepShouldChange.bind(this);
    var retrievedData     = localStorage.getItem("accountDetails");

    this.state = {
        formFail: false,
        oldVal:retrievedData
    };

  }

  render() {

       return (
      <div className="App">        
          
          <Steps
        currentStep={1}
        prevButton='&#8592;'
        nextButton='&#8594;'
        stepShouldChange={this.stepShouldChange}
        >
        <Step customNavigator="1 Login">
          
          <div className="col-md-10 col-md-offset-1 panel registerContent">
          <p>Registering for cold chain supplier portal allows you to access secure website and manage your client account on their behalf. <br/><br/>

          You can register yourself by confirming your details <br/><br/>

          With your clients authorisation you will be able to view or manage their account. your clients will be able to grant you access to their 
          accounts or you can request access on their behalf through the portal
          </p>
        </div>
        <div className="col-md-10 col-md-offset-1 panel">

          <h3> Login with your credential </h3><br/>
          <div className="col-md-2 col-md-offset-5">
            <form action="/#/login">
              <input type="submit" onChange={this.onChange} className='btn btn-success' value="Login" /> 
            </form>
          </div>
        </div>

        <span className="form-title hidden">PERSONAL DATA</span>      
              <div className="form-data hidden">
                <label>Name</label>
                <input ref="name"/>
                {
                  this.state.formFail ? <span className="error">Invalid Name, should be joe</span> : '' 
                }
              </div>
             
    
        </Step>


        <Step customNavigator="2 Verify your account details">
            
        <AccountVerify oldVal={this.state.oldVal}/>
        </Step>

        <Step customNavigator="3 security details">
         <SecurityDetails />
        </Step>
      </Steps>

          
      </div>
    );
  }

      stepShouldChange() {
    if (this.refs.name.value !== 'joe') {
      this.setState({
        formFail: false
      });
      return true;
    } else {
      this.setState({
        formFail: true
      });
    }
  }
}


class Index extends Component{

render(){

  return (

      <div className="col-md-12">  
            <Header />
            <div className="col-md-10 col-md-offset-1">
              
              <div className=" text-center">
                
                <h2><b> Register For cold chain supplier portal </b> </h2>
                <div className="col-md-10 col-md-offset-1 ">
              
                </div>

              </div>

              <App />
              
            </div>

            <Footer />
      </div>

  );

}


}

export default Index;
