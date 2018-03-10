import React, { Component } from 'react';
import Iframe from 'react-iframe'
import '../../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux'

class Demo extends Component {

  shouldComponentUpdate() {

    if (this.props.demos.length === 7){

      return false
    } else {
      return true
    }
  }

  render() {
     console.log("demo rendered")
    return (
      <div>
        <h1> {this.props.demo.title} </h1>
          <Iframe url={this.props.demo.url} width="50%"
            height="auto"
            id={(this.props.demo.id).toString()}
            display="initial"
            position="relative"
            border="solid 1px black"

            allowFullScreen/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return {
      demos: state.demosReducer.demos
    }

}

export default withRouter(connect(mapStateToProps)(Demo))
