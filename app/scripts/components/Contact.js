import React from 'react';
import $ from 'jquery';
import config from '../config';

export default React.createClass({
  getInitialState(){
    return{
      sent: false
    }
  },
  render(){
    let emailForm;
    if(this.state.sent===false){
      emailForm=  (
        <div>
          <h2>Contact Me</h2>
          <form id='contact' onSubmit={this.handleSubmit}>
            <input ref='name' type='text' placeholder='Your Name'/>
            <input ref='email' type='email' placeholder='Your Email'/>
            <textarea ref='message' placeholder='Your Message'></textarea>
            <input type='submit' value='Submit'/>
          </form>
        </div>
      );
    } else {
      emailForm = (
        <h2>Message Sent!</h2>
      );
    }
    return(
      <div id='form-container'>
        {emailForm}
      </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let message = this.refs.message.value;
    $.ajax({
        type: 'POST',
        url: 'https://api.backendless.com/v1/messaging/email',
        contentType: 'application/json',
        headers: {
          'application-id': config.appId,
          'secret-key': config.secret
        },
        data: JSON.stringify({
            subject: name,
            bodyparts:{
              textmessage:message +' '+ email
            },
            to:['jeffrey.lawlis@g.austincc.edu']
        }),
        success: (response)=>{
          this.setState({sent: true})
          setTimeout(()=>{
            this.setState({sent: false});
          }, 3000);
          this.refs.name.value='';
          this.refs.email.value='';
          this.refs.message.value='';
        }
  });
}
});
