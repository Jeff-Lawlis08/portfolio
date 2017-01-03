import React from 'react';
import Personal from './Personal';
import ProjectThumbs from './ProjectThumbs';

export default React.createClass({
  render(){
    return(
      <div className="home">
        <ProjectThumbs/>
        <Personal/>
      </div>
    );
  }
});
