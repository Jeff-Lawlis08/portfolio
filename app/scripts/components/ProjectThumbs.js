import React from 'react';
import projects from '../collections/projects';
import SingleProjThumb from './SingleProjThumb';

export default React.createClass({
render(){
  let allprojs = projects.map((proj, i, arr)=>{
    return (
      <SingleProjThumb key={i} project={proj}/>
    )
  })
  return(
    <div className="project-container">
      <h2>My Projects</h2>
      <ul>
      {allprojs}
      </ul>
    </div>
  );
}

});
