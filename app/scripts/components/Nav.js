import {Link} from 'react-router';
import React from 'react';

export default React.createClass({
  render(){
    return(
      <nav>
        <div id='name-title'>
          <span>Jeff Lawlis</span>
          <span>Web Developer</span>
        </div>
        <a href='#personal'>ABOUT ME</a>
        <a href='#project-container'>PROJECTS</a>
        <Link to="/resume">RÈSUMÈ</Link>
        <Link to="/">HOME</Link>
      </nav>
    );
  }
});
