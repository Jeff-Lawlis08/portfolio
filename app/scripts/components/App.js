import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

export default React.createClass({
  render(){
      return(
        <div>
          <Nav params={this.props.params.project}/>
          {this.props.children}
          <Footer/>
        </div>
      );
  }
});
