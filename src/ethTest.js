import React from 'react'

class ethTest extends React.Component {

constructor(props) {
    super(props);
    this.state = {name: '', Sname: '', age: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + ' --- ' + this.state.Sname + '---' +this.state.age);
    event.preventDefault();
  }
  render() {

    var lineHeight ={
      lineHeight:"18px",
    }
    var margRight ={
      marginRight: "15px"
    }
    var spanClr ={
     fontSize: "35px",
     color: "#59822c"
    }
    var bgImg={
        background:"url(bg.png)",
        backgroundRepeat: "repeat"
    }

   /* var lineHeight ={

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
 
<div className="ch-container">
    <div className="row">
  

        <div id="content" className="col-sm-12">
            
           <div className="col-sm-12">

                

           </div>

           <div className="col-sm-12">

                <div className="col-sm-8 box-inner padd10px" style={margRight}>
                    
                    <div className="col-sm-12 box-inner hosp-detail-div">
                        <table className="table">
							<thead>
								<th>Name</th>
								<th>Last Name</th>
								<th>Age</th>
							
							</thead>
							<tbody>
							
							</tbody>
						</table>
                    </div> 

 

                </div>
                <div className="col-sm-3 box-inner padd10px">                    
                    <div className="col-sm-12">
                     
                          
                         <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Name     </label>
                                <div className="col-lg-8 radio-inline">
                                    : <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Surname     </label>
                                <div className="col-lg-8 radio-inline">
                                    : <input type="text" name="Sname" className="form-control" value={this.state.Sname} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputEmail1" className="col-lg-4 control-label hosp-detail-form-label">Age     </label>
                                <div className="col-lg-8 radio-inline">
                                    :<input type="text" name="age" className="form-control" value={this.state.age} onChange={this.handleChange} />
                                </div>
                            </div> 
							
							<div className="form-group">
                                
                                <div className="col-lg-8 radio-inline">
                                    :<input type="submit" value="Submit" />
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
  }
}
export default ethTest;

