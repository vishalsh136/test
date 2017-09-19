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
      var bgWhite={
        background:"white"
      }
      var min800 ={
        minHeight: "800px"
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
                            <button className="btn btn-success">Register Now</button>
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
  

        <div id="content" className="col-sm-12" style={bgClr}>
            
            <div id="home-bg" className="col-sm-12" style={minHeightCenter}>
                <h1 style={clrGreen}>Register your Details</h1>
                 <h3 style={clrBlack}>This Form will take  no more than 2 minutes to complete </h3>
            </div>
            <div className="col-sm-12" style={bgClr}>
                     <div className="col-sm-3"></div>
                  <div className="col-sm-6" >
                    
                        <div className="box-inner" style={bgWhite}>
                            <div className="box-header well" data-original-title="">
                                <div className="col-sm-12">
                                   Lab Registration
                                </div>

                               
                            </div>
                            <div className="box-content" style={min800}>
                                <div className="col-sm-12">
                                <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Lab Name   :  </label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" id="" placeholder="" />
                                    </div>
                                </div>
                                
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">NABH   :  </label>
                                    <div className="col-lg-8">
                                        <select  className="form-control" id=""><option>Please Select</option></select>
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Certification   :  </label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" id="" placeholder="" />
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Blood Bank   :  </label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" id="" placeholder="" />
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Eligible Organ   :  </label>
                                    <div className="col-lg-8">
                                    <select  className="form-control" id=""><option>Please Select</option></select>
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Post Code   :  </label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" id="" placeholder="" />
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Address   :  </label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" id="" placeholder="" />
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">City   :  </label>
                                    <div className="col-lg-8">
                                        <select  className="form-control" id=""><option>Please Select</option></select>
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">State   :  </label>
                                    <div className="col-lg-8">
                                        <select  className="form-control" id=""><option>Please Select</option></select>
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Country   :  </label>
                                    <div className="col-lg-8">
                                        <select  className="form-control" id=""><option>Please Select</option></select>
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Email   :  </label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" id="" placeholder="" />
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Phone   :  </label>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control" id="" placeholder="" />
                                    </div>
                                </div>
                                 <div className="form-group">
                                    <label for="inputEmail1" className="col-lg-3 control-label">Prefered form of contact   :  </label>
                                    <div className="col-lg-8">
                                        <select  className="form-control" id=""><option>Please Select</option></select>
                                    </div>
                                </div>
                                   <div className="form-group">
                                    <div className="col-lg-offset-5 col-lg-10">
                                        <button type="submit" className="btn btn-success">Submit</button>
                                        <button type="submit" className="btn btn-danger">Cancel</button>
                                    </div>
                                    
                                </div>
                                </form>    
                                </div>    
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


