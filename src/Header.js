import React, { Component } from 'react';
import headerLogo from './headerLogo.png';


class Header extends Component {
  render() {

  	var navBand = {
  		backgroundColor:'white',
  		minHeight:'60px',
	    letterSpacing: '2px',	    
	    width: '135px',
	    fontSize: '17px',
  	}

  	var navBar = {
  		backgroundImage:'none !important',
  		backgroundColor:'#CFD8DC'
  	}

  	var logoClass = {
  		float: 'left',
	    height: '120px !important',
	    width: '210px  !important',
	    marginRight: '5px'
  	}
  	
  	var pad10 = {
  		padding:'10px',
  	}
   return (
	      <div className="Header">
	        <nav className="navbar-default" style={navBar}>
                <div className="container-fluid">
                    
                    <div className="navbar-header" style={pad10}>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="" href="" style={navBand}>
                            <img alt="Cold Chain" src={headerLogo} width="100" height="45" style={logoClass}/>
                        </a>
                        
                    </div>

                   
                </div>
            </nav>
	         
	      </div>
    );
  }
}

export default Header;
