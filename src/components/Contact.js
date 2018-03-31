import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Contact extends Component {

  componentDidMount = () => {
  
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form className="inquery-form" action="contact-send.php" method="POST">
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
          <input className="button" name="submit" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Contact;
