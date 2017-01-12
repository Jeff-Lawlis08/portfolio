import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <li className="projects">
          <div className="image-container">
            <Link to={`/project/${this.props.project.name}`}>
              <img src={this.props.project.image}/>
              <div className="title-container">
                <h3>{this.props.project.name}</h3>
              </div>
            </Link>
          </div>
      </li>
    );
  }
});
