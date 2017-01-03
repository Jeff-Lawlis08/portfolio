import {Link} from 'react-router';
import React from 'react';

export default React.createClass({
  render(){
    return(
      <nav>
        <span>Jeff Lawlis</span>
        <span>Web Developer</span>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    );
  }
});
