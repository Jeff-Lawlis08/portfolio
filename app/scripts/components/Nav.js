import {Link} from 'react-router';
import React from 'react';

export default React.createClass({
  getInitialState(){
    return {
      dropdown: false
    }
  },
  render(){
    let menu;
    if(this.state.dropdown===true){
      menu = (
          <div id='dropdown'>
            <a onClick={this.handleClick} href="/#home">HOME</a>
            <Link onClick={this.handleClick} to="/resume">RÈSUMÈ</Link>
            <a onClick={this.handleClick} href="/#project-container">PROJECTS</a>
            <a onClick={this.handleClick} href="/#personal">ABOUT ME</a>
            <a onClick={this.handleClick} href="/#form-container">CONTACT</a>
          </div>
        )
    } else {
      menu = (<span/>)
    }
    return(
      <nav>
        <div id='name-title'>
          <span>Jeff Lawlis</span>
          <span>Web Developer</span>
        </div>
        <div id='links'>
          <a href="/#home">HOME</a>
          <Link to="/resume">RÈSUMÈ</Link>
          <a href="/#project-container">PROJECTS</a>
          <a href="/#personal">ABOUT ME</a>
          <a href="/#form-container">CONTACT</a>
        </div>
        <div id='hamburger'>
          <span onClick={this.handleClick}><i className="fa fa-bars" aria-hidden="true"></i></span>
          {menu}
        </div>
      </nav>
    );
  },
  handleClick(e){
    if(this.state.dropdown===false){
      this.setState({dropdown: true});
    } else {
      this.setState({dropdown: false});
    }
  }
});
