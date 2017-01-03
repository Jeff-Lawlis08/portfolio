import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

export default React.createClass({
  render(){
      return(
        <div>
          <Nav/>
          {this.props.children}
          <Footer/>
        </div>
      );
  }
});
