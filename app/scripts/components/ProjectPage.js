import React from 'react';
import {browserHistory} from 'react-router';
import projects from '../collections/projects';

export default React.createClass({
  getInitialState(){
    return{
      project: projects.filter((proj, i, arr)=>{
        if(proj.name===this.props.params.project){
          return true
        }
      })[0]
    }
  },
  componentWillReceiveProps(nextProps){
    if(nextProps.params.project!==this.props.params.project){
      this.setState({project: projects.filter((proj, i, arr)=>{
        if(proj.name===nextProps.params.project){
          return true
        }
      })[0]});
    }
  },
  render(){
    return(
      <div className="proj-page">
        <h3>{this.state.project.name}</h3>
        <img src={this.state.project.image}/>
        <a href={this.state.project.url}>See Live Project</a>
        <span>OR</span>
        <a href={this.state.project.githubUrl}>View on Github</a>
        <p>{this.state.project.description}</p>
        <i className="fa fa-arrow-circle-left" aria-hidden="true" onClick={this.handleBack}></i>
        <i className="fa fa-arrow-circle-right" aria-hidden="true" onClick={this.handleForward}></i>

      </div>
    );
  },
  handleBack(e){
    if(this.state.project.name==="Nerd Social"){
      browserHistory.push('/project/Jeopardy')
    } else if(this.state.project.name==="Bring the Band"){
      browserHistory.push('/project/Nerd Social')
    } else {
      browserHistory.push('/project/Bring the Band')
    }
  },
  handleForward(e){
    if(this.state.project.name==="Nerd Social"){
      browserHistory.push('/project/Bring the Band')
    } else if(this.state.project.name==="Bring the Band"){
      browserHistory.push('/project/Jeopardy')
    } else {
      browserHistory.push('/project/Nerd Social')
    }
  }
});
