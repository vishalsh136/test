import React from 'react'

export default React.createClass({
  render() {

    var lineHeight ={
      lineHeight:"18px",
    }
     var lineHeight25 ={
      lineHeight:"25px",
    }
   
    
    var bgImg={
        background:"url(bg.png)",
        backgroundRepeat: "repeat"
    }
    
   /*  var margRight ={
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
                    <h4>My Profile</h4>
                </div>
                <div className="col-sm-4 text-right">
                    Home > My Profile
                </div>

           </div>

           <div className="col-sm-12 box-inner padd10px">

                <div className="col-md-2 text-center" >

                    <img src="default-user.jpg" width="100px;" alt="user" />

                </div>
                
                <div className="col-md-8">

                  <div className="col-md-12" style={lineHeight25}>
                        Patient Name <br/>
                        Priority Order: #1232 <br/>
                        Status: 16/02/2017, 15:06:01
                        <hr/>
                  </div>  

                  <div className="col-md-12">


                    <div className="col-md-6">
                        <form className="form-horizontal" role="form">                            
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Age     </label>
                                <div className="col-lg-7 radio-inline">
                                    : 58
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Sex     </label>
                                <div className="col-lg-7 radio-inline">
                                    : Male
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Organ Needed    </label>
                                <div className="col-lg-7 radio-inline">
                                    : Organ Name
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Contact No     </label>
                                <div className="col-lg-7 radio-inline">
                                    : +91 7545856954
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Email Id     </label>
                                <div className="col-lg-7 radio-inline">
                                    : Patient@donor.com
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Lab Verified    </label>
                                <div className="col-lg-7 radio-inline">
                                    : <input type="checkbox" name="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Hospital Verified    </label>
                                <div className="col-lg-7 radio-inline">
                                    : <input type="checkbox" name="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Organ Needs    </label>
                                <div className="col-lg-7 radio-inline">
                                    : Kidney
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Blood Group    </label>
                                <div className="col-lg-7 radio-inline">
                                    : AB Positive
                                </div>
                            </div>
                        </form>    
                    </div>

                    <div className="col-md-6">

                        <form className="form-horizontal" role="form">                            
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Address     </label>
                                <div className="col-lg-7 radio-inline">
                                    : 3c-453, XY Building , Near ee Mall, dssasd Road, Mumbai 400025
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">City     </label>
                                <div className="col-lg-7 radio-inline">
                                    : Mumbai
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">State     </label>
                                <div className="col-lg-7 radio-inline">
                                    : Maharashtra
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Country     </label>
                                <div className="col-lg-7 radio-inline">
                                    : India
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Email     </label>
                                <div className="col-lg-7 radio-inline">
                                    : patient@donor.com
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Phone     </label>
                                <div className="col-lg-7 radio-inline">
                                    : +91 9854569875
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-5 control-label hosp-detail-form-label">Reffered form of contact     </label>
                                <div className="col-lg-7 radio-inline">
                                    : On phone
                                </div>
                            </div>
                        </form>    

                    </div>


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


