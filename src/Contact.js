import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form className="inquery-form" action="/action_page.php">
          <label>First Name:</label>
          <input type="text" name="firstname"/>
          <br/>
          <br/>
          <label>Last Name:</label>
          <input type="text" name="lastname"/>
          <br/>
          <br/>
          <label>Email:</label>
          <input type="text" name="lastname"/>
          <br/>
          <br/>
          <label>Phone:</label>
          <input type="text" name="lastname"/>
          <br/>
          <br/>
          <label>Message:</label><br/>
          <textarea className="inquery-message" type="text" name="lastname" />
          <br/><br/>
          <input className="button" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Contact;
