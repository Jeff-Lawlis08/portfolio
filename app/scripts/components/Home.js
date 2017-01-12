import React from 'react';
import Personal from './Personal';
import ProjectThumbs from './ProjectThumbs';
import Contact from './Contact';

export default React.createClass({
  render(){
    return(
      <div className="home">
        <header>
          <h1>Jeff Lawlis</h1>
        </header>
        <ProjectThumbs/>
        <Personal/>
        <Contact/>
      </div>
    );
  }
});
