import React from 'react';
import Personal from './Personal';
import ProjectThumbs from './ProjectThumbs';
import Contact from './Contact';

export default React.createClass({
  render(){
    return(
      <div className="home">
        <header>
          <div id='name-skills'>
            <h1>Jeff Lawlis</h1>
            <span>Javascript / HTML / CSS / JQuery / React / Backbone</span>
          </div>
        </header>
        <ProjectThumbs/>
        <Personal/>
        <Contact/>
      </div>
    );
  }
});
