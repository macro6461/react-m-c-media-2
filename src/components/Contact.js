import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Contact extends Component {

  handleSubmit = (e) => {

    event.preventDefault();
    this.setState({ type: ‘info’, message: ‘Sending…’ });

    $.ajax({

    url: ‘/…./mailer.php’,
    type: ‘POST’,
    data: {

    “form_name”: this.state.contactName,
    “form_email”: this.state.contactEmail,
    “form_msg”: this.state.contactMessage
    },
    cache: false,
    success: function(data) {

    // Success..
    this.setState({ type: ‘success’, message: ‘We have received your message and will get in touch shortly. Thanks!’ });

    }.bind(this),

    error: function(xhr, status, err) {
    this.setState({ type: ‘danger’, message: ‘Sorry, there has been an error.  Please try again later or visit us at SZB 438.’ });
    }.bind(this)

    });

    }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form className="inquery-form" onSubmit={this.handleSubmit} action="contact-send.php">
          <label>First Name:</label>
          <input type="text" id="firstname" name="firstname"required/>
          <br/>
          <br/>
          <label>Last Name:</label>
          <input type="text" id="lastname" name="lastname"required/>
          <br/>
          <br/>
          <label>Email:</label>
          <input type="text" id="email" name="email"required/>
          <br/>
          <br/>
          <label>Phone:</label>
          <input type="text" id="phone" name="phone"/>
          <br/>
          <br/>
          <label>Message:</label><br/>
          <textarea className="inquery-message" type="text" id="message" name="message" required/>
          <br/><br/>
          <input className="button" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Contact;
