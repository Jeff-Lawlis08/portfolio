import {Link} from 'react-router';
import React from 'react';

export default React.createClass({
  render(){
    let about;
    let projects;
    if(this.props.params===undefined){
      about='#personal';
      projects='#project-container';
    } else {
      about='/#personal';
      projects='/#project-container';
    }
    return(
      <nav>
        <div id='name-title'>
          <span>Jeff Lawlis</span>
          <span>Web Developer</span>
        </div>
        <a href={about}>ABOUT ME</a>
        <a href={projects}>PROJECTS</a>
        <Link to="/resume">RÈSUMÈ</Link>
        <Link to="/">HOME</Link>
      </nav>
    );
  }
});
