import React,{ Component } from 'react';

class AddProject extends Component{

	static defaultProps = {

		categories: ['Web design','Web developement','Web'],

	}

    render(){
    	let categoryOption = this.props.categories.map(category => {

    		return <option key={category} value={category} >{category}</option>
    	})
	
    return (

      <div >
      <h3>Add Project</h3>
        <form>
        	<div>
        		<label>Title</label>
        		<input type="text" ref="title" />
        	</div>
        	<div>
        		<label>category</label>
        		<select ref="category" >
        			{categoryOption}
        		</select>
        	</div>
        </form>
      </div>

      )


  }

}


export default AddProject;

