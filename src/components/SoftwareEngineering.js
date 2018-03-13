import React, { Component } from 'react';
import '../App.css';
import {
  withRouter,
} from 'react-router-dom';
import Loader from './Loader.js'
import DemosContainer from './demos/DemosContainer'
import {connect} from 'react-redux'
import {fetchDemos} from '../actions/actions.js'


class SoftwareEngineering extends Component {

  componentDidMount = () => {
    debugger
    this.props.fetchDemos()
  }

  render() {
    console.log("software rendered")
    return (
      <div className="softwareEngineering">
        <h1>Software Engineering</h1>
        <h5>React, Redux, JavaScript, jQuery, Ruby on Rails, Ruby, Python, HTML, CSS</h5>
        <p>This site was made using React/Redux, JavaScript and PHP in cooperation with my own Ruby on Rails API. </p>
        {this.props.demos.length <=6
          ? <Loader/>
          :<DemosContainer videos={this.props.demos}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return {
      demos: state.demosReducer.demos
    }

}

export default withRouter(connect(mapStateToProps, {fetchDemos})(SoftwareEngineering))
