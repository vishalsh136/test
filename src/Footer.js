import React, { Component } from 'react';
import Logo from './atos.png';
class Footer extends Component {
  render() {

  	var classFooter = {
  		position:'fixed',
  		right:0,
  		bottom:0,
  		left:0,
  		padding:'1rem',
  		backgroundColor:'#efefef',
  		textAlign:'center'

  	}



   return (
	      <div className="Footer">
	        <div className="col-sm-12">
				<span className="pull-right " style={classFooter}>
				<img alt="logo" src={Logo} width="40" /> @ 2017 All Rights Reserved, Powered By AtoS</span>
			</div>
	         
	      </div>
    );
  }
}

export default Footer;
