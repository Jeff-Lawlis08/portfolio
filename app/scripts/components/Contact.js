import React from 'react';
import $ from 'jquery';
import config from '../config';

export default React.createClass({
  getInitialState(){
    return{
      sent: false,
      sending: false
    }
  },
  render(){
    let emailForm;
    if(this.state.sent===false && this.state.sending===false){
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
    } else if(this.state.sending===true){
      emailForm = (
        <h2>Sending<i className="fa fa-spinner fa-spin" aria-hidden="true"></i></h2>
      )
    } else if(this.state.sent===true && this.state.sending===false){
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
    this.setState({sending: true});
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let message = this.refs.message.value;
    if(name!=='' && email!=='' && message!==''){
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
          this.setState({sent: true, sending: false})
          setTimeout(()=>{
            this.setState({sent: false});
            this.refs.name.value='';
            this.refs.email.value='';
            this.refs.message.value='';
          }, 3000);
        }
  });
} else if(name===''){
  alert('Please enter your name');
} else if(email===''){
  alert('Please enter your email');
} else if(message===''){
  alert('Please enter a message');
}
}
});
