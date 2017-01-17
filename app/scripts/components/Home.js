import React from 'react';
import Personal from './Personal';
import ProjectThumbs from './ProjectThumbs';
import Contact from './Contact';

export default React.createClass({
  render(){
    return(
      <div className='home'>
        <header id='home'>
          <div id='name-skills'>
            <h1>Hi, I'm Jeff. </h1>
          </div>
        </header>
        <ProjectThumbs/>
        <Personal/>
        <Contact/>
      </div>
    );
  }
});
