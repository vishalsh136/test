import React,{ Component } from 'react';
import ProjectItems from './ProjectItems';
import AddProject from './AddProject';


class Projects extends Component{



    render(){


	let projectItems;
	if(this.props.projects){

		projectItems = this.props.projects.map(project => {

			//console.log(project);	
			return (
				<ProjectItems key={project.title} project={project}/>
			);
		});
	}

    return (

      <div >
      	Add Project <br />
      	<AddProject />
        My Projects
        {projectItems}
      </div>

      )


  }

}


export default Projects;

