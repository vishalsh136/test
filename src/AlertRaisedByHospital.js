import React from 'react'

export default React.createClass({
  render() {

    var lineHeight ={
      lineHeight:"18px",
    }
     
   
    
    var bgImg={
        background:"url(bg.png)",
        backgroundRepeat: "repeat"
    }
    var margRight ={
      marginRight: "15px"
    }
    
    
   /* var lineHeight25 ={
      lineHeight:"25px",
    }
     var margRight ={
      marginRight: "15px"
    }
    var lineHeight ={

      lineHeight:"18px",
    }
     var bgImg={
        background:"url(bg.png)",
        backgroundRepeat: "repeat"
    }
    var bgClr={
      background:"#f7f6f6",
    }
    var minHeightCenter ={
      minHeight: "150px",
      textAlign: "center",
      }
      var clrBlack ={
        color:"black",
      }
      var clrGreen ={
        color:"Green",
      }
      var bgClrF7 ={
        background:"#f7f6f6",
      }

      var bgWhite={
        background:"white"
      }
      var min800 ={
        minHeight: "800px"
      }*/

    return <div>
        <div className="navbar navbar-default" role="navigation" style={bgImg}>

        <div className="navbar-inner">
           <div className="col-sm-2">

           </div>
           <div className="col-sm-10">
                <div className="col-sm-12 ">
                     <div className="col-sm-6 pull-right text-right">
                         <div className="col-sm-8" style={lineHeight}>
                                You can call us on <br/>
                                1800 123 23 55
                         </div>
                         <div className="col-sm-4">
                            <span className="glyphicon glyphicon-bell"></span> | <span className="glyphicon glyphicon-log-out"></span> <a href="">Logout</a>
                         </div>
                     </div>
                </div>
                <div className="col-sm-12">
                    <ul className="collapse navbar-collapse nav navbar-nav top-menu">
                        
                        <li className="dropdown ">
                            <a href="#" data-toggle="dropdown"> Home <span className="caret"></span></a>
                            <ul className="dropdown-menu" role="menu">
                                <li><a href="#">Pending Aproval Details</a></li>
                                
                            </ul>
                        </li>
                        <li><a href="#"> Recipient</a></li>
                        <li><a href="#"> Intended Parent</a></li>
                        <li><a href="#"> Donor</a></li>
                        <li><a href="#"> Gestational Surrogate</a></li>
                        <li><a href="#"> About Us</a></li>
                        <li><a href="#"> Contact Us</a></li>
                        <li><a href="#"> Blog</a></li>
                       
                    </ul>
                </div>
           </div>
        </div>
    </div>
   
<div className="ch-container">
    <div className="row">
  

        <div id="content" className="col-sm-12">
            
           <div className="col-sm-12">

                <div className="col-sm-8">
                    <h4>Alert Raised By Hospitals</h4>
                </div>
                <div className="col-sm-4 text-right">
                    Home > Alert Raised By Hospitals
                </div>

           </div>

           <div className="col-sm-12">

                <div className="col-sm-8 box-inner padd10px" style={margRight}>
                    
                   <h4>Alert Raised By Hospitals</h4>
                   <table id="example" className="display" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Hospitals</th>                               
                                <th>Organ Available</th>
                                <th>Suggested by which Doctor</th>
                                <th>Request raised by which hospital</th>
                                <th>Age of Donor</th>
                                <th>Blood Group</th>
                                <th>Organ being shifted to which Hospital</th>
                                <th>Any Diseases</th>
                                <th>Alert Entities</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>XYZ</td>
                                <td>Yes</td>
                                <td>XYZ MBBS</td>
                                <td>ACB Hospital</td>
                                <td>40 Years</td>
                                <td>O Positive</td>
                                <td>DHJST</td>
                                <td>Yes</td>
                                <td>Broadcast</td>
                            </tr>
                            <tr>
                                <td>XYZ</td>
                                <td>Yes</td>
                                <td>XYZ MBBS</td>
                                <td>ACB Hospital</td>
                                <td>40 Years</td>
                                <td>O Positive</td>
                                <td>DHJST</td>
                                <td>Yes</td>
                                <td>Broadcast</td>
                            </tr>
                            <tr>
                                <td>XYZ</td>
                                <td>Yes</td>
                                <td>XYZ MBBS</td>
                                <td>ACB Hospital</td>
                                <td>40 Years</td>
                                <td>O Positive</td>
                                <td>DHJST</td>
                                <td>Yes</td>
                                <td>Broadcast</td>
                            </tr>
                        </tbody>
                        </table>    

                </div>
                <div className="col-sm-3 box-inner padd10px">                    
                    <div className="col-sm-12">

                       


                         <span className="pull-right"><a href="">Edit</a> </span>
                        <div className="col-sm-12">
                            <div className="col-sm-4">
                                <img src="default-user.jpg" width="50px;" alt="user" />
                            </div>
                            <div className="col-sm-8">
                                Patient Name <br/>
                                Priority Order #1232
                            </div>
                        </div>    
                         <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Status     </label>
                                <div className="col-lg-8 radio-inline">
                                    : Priority Order #1232
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Age     </label>
                                <div className="col-lg-8 radio-inline">
                                    : 58
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Sex     </label>
                                <div className="col-lg-8 radio-inline">
                                    : Male
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Organ Needed     </label>
                                <div className="col-lg-8 radio-inline">
                                    : Organ Name
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Contact No     </label>
                                <div className="col-lg-8 radio-inline">
                                    : +91 7545856954
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Email Id     </label>
                                <div className="col-lg-8 radio-inline">
                                    : Patient@donor.com
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Lab Verified    </label>
                                <div className="col-lg-8 radio-inline">
                                    : <input type="checkbox" name="" />
                                </div>
                            </div>

                        </form>    
                        
                        <span className="pull-right"><a href="">View more</a> </span>

                            

                      

                    </div>
                </div>

           </div>      
               
      
        </div>
    </div>

   
    <div className="row">
        

    </div>
    

    <hr/>

    

    <footer className="row footer">
        <div className="col-md-10 col-md-offset-1">
        <p className="col-md-9 col-sm-9 col-xs-12 copyright">Powered By : AtoS </p>

        <p className="col-md-3 col-sm-3 col-xs-12 powered-by">Be Socially Responsible <br/> </p>
        </div>
    </footer>

</div>
    </div>
  }
})


