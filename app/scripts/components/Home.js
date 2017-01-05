import React from 'react';
import Personal from './Personal';
import ProjectThumbs from './ProjectThumbs';

export default React.createClass({
  render(){
    return(
      <div className="home">
        <header>
          <h1>Jeff Lawlis</h1>
        </header>
        <ProjectThumbs/>
        <Personal/>
      </div>
    );
  }
});
