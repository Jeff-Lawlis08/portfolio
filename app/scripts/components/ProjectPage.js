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
    let nextLink;
    let prevLink;
    if(this.state.project.name==="Nerd Social"){
      prevLink = '/project/Jeopardy';
    } else if(this.state.project.name==="Bring the Band"){
      prevLink = '/project/Nerd Social';
    } else {
      prevLink = '/project/Bring the Band';
    }
    if(this.state.project.name==="Nerd Social"){
      nextLink = '/project/Bring the Band';
    } else if(this.state.project.name==="Bring the Band"){
      nextLink = '/project/Jeopardy';
    } else {
      nextLink = '/project/Nerd Social';
    }
    let allImages = this.state.project.pageImages.map((image, i, arr)=>{
      return <img src={image} key={i}/>;
    });
    let bgStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${this.state.project.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',

    }
    return(
      <div className="proj-page">
        <h3 id='proj-page-title'>{this.state.project.name}</h3>
        <div id='proj-images' style={bgStyle}>
          {allImages}
        </div>
        <div id="proj-links">
          <a href={this.state.project.url}>See Live Project</a>
          <span>OR</span>
          <a href={this.state.project.githubUrl}>View on Github</a>
        </div>
        <p>{this.state.project.description}</p>
        <a href={prevLink} className='prev-next'>
          <i className="fa fa-arrow-circle-left" aria-hidden="true" onClick={this.handleBack}></i>
        </a>
        <a href={nextLink} className='prev-next'>
          <i className="fa fa-arrow-circle-right" aria-hidden="true" onClick={this.handleForward}></i>
        </a>
      </div>
    );
  },
  handleBack(e){

  },
  handleForward(e){

  }
});
