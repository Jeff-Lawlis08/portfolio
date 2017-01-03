import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <li className="projects">
        <Link to={`/project/${this.props.project.name}`}>
          <h3>{this.props.project.name}</h3>
          <img src={this.props.project.image}/>
        </Link>
        <a href={this.props.project.url}>See Live Project</a>
        <span>OR</span>
        <a href={this.props.project.githubUrl}>View on Github</a>
      </li>
    );
  },
});
