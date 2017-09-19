import React,{ Component } from 'react';
import Projects from './Projects';

class test extends Component{

    constructor(){
    super();
    this.state = {
      projects:[]
    }

  }


  componentWillMount(){
    this.setState({projects:[
      {
        title:'Business website',
        category:'Web design'

      },
      {
        title:'Business Development',
        category:'Web Development'

      },
      {
        title:'Business ',
        category:'Web '

      }     

      ]})

  }


    render(){

    return (

      <div >
        My App
        <Projects projects={this.state.projects}/>
      </div>

      )


  }

}


export default test;

