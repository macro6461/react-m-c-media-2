import React, { Component } from 'react';
import '../../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.demo.title} </h1>
      </div>
    );
  }
}

export default withRouter(Demo)
