import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <li className="projects">
        <Link to={`/project/${this.props.project.name}`}>
          <h3>{this.props.project.name}</h3>
          <div className="image-container">
            <img src={this.props.project.image}/>
            <div className="description-container">
              <p>Light Description</p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
});
