import React, { Component } from 'react';
import '../../App.css';
import Demo from './Demo.js'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import {fetchDemos} from '../../actions/actions.js'
import { connect } from 'react-redux'

class DemosContainer extends Component {

  componentDidMount = () => {
    debugger
    this.props.fetchDemos()
  }

  render() {

    var demos = this.props.demos.map((demo)=>{
      return <Demo demo={demo}/>
    })
    debugger

    return (
      <div>
        {demos}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return {
      demos: state.demosReducer.demos,
      imgLoaded: state.dropdownReducer.img_loaded,
      hovered: state.dropdownReducer.hovered
    }

}

export default withRouter(connect(mapStateToProps, { fetchDemos })(DemosContainer))
