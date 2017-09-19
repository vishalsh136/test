import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route } from 'react-router';
import {HashRouter, Route} from 'react-router-dom';

import App from './App';
import Login from './Login';
import ThankYou from './thank_you';
import addDataPoints from './add_data_points';
import registerPartner from './register_partner';
import getDataPoints from './get_data_points';
import approvePartner from './approve_partner';
import assignDevice from './assign_device';
import getDevice from './get_device';
import registerDevice from './register_device';
import newtest from './newtest';
import tempChart from './tempChart';
import test from './test';
import './css/index.css';


ReactDOM.render((
<HashRouter>
  
  <div>
  
    {/*}<Route path="/" component={App}/>{*/}
    <Route path="/Login" component={Login}/>
    <Route path="/ThankYou" component={ThankYou}/>
    <Route path="/addDataPoints" component={addDataPoints}/>
    <Route path="/registerPartner" component={registerPartner}/>
    <Route path="/getDataPoints" component={getDataPoints}/>
    <Route path="/approvePartner" component={approvePartner}/>
    <Route path="/assignDevice" component={assignDevice}/>
    <Route path="/getDevice" component={getDevice}/>
    <Route path="/registerDevice" component={registerDevice}/>
    <Route path="/test" component={test}/>
    <Route path="/newtest" component={newtest}/>
    <Route path="/tempChart" component={tempChart}/>
    {/* add the routes here */}   

  </div>

  </HashRouter>
), document.getElementById('root'));




