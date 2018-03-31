import React, { Component } from 'react';
import '../App.css';
import {
  withRouter,
  Link,
  Route
} from 'react-router-dom';
import Loader from './Loader.js'
import DemosContainer from './demos/DemosContainer'
import {connect} from 'react-redux'
import {fetchDemos} from '../actions/actions.js'


class SoftwareEngineering extends Component {

  componentDidMount = () => {

    this.props.fetchDemos()
  }

  render() {
  
    return (
      <div className="softwareEngineering">
        <h1>Software Engineering</h1>
        <h5>React, Redux, JavaScript, jQuery, Ruby on Rails, Ruby, PHP, Python, HTML, CSS</h5>
        <p>This site was made using React/Redux, JavaScript and PHP in cooperation with my own Ruby on Rails API. </p>
        {this.props.demos.length <=6
          ? <Loader/>
          :<DemosContainer videos={this.props.demos}/>
        }
        <p >Head over to my <a class="media-anchor" href="https://github.com/macro6461">GitHub profile</a> for a more extensive software engineering profile!</p>
        <p id="web-inquiry-p">☞ For full stack and multimedia inqueries, please leave a message on the <Link to="/contact">Contact</Link> page!</p>
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
