import React from 'react';
import projects from '../collections/projects';

export default React.createClass({
  render(){
    let project = projects.filter((proj, i, arr)=>{
      if(proj.name===this.props.params.project){
        return true;
      }
    })[0];
    return(
      <div className="proj-page">
        <h3>{project.name}</h3>
        <img src={project.image}/>
        <p>Description</p>
      </div>
    );
  }
});
