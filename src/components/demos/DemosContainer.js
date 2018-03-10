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
    if (this.props.demos.length !== 7){
      this.props.fetchDemos()
    } else {

    }
  }

  shouldComponentUpdate(){

    if (this.props.demos.length === 7){
      return false;
    } else {
      return true
    }
  }

  render() {
    console.log("demos rendered")
    var demos = this.props.demos.map((demo)=>{
      return <Demo key={demo.id} demo={demo}/>
    })

    return (
      <div>
        {demos}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return {
      demos: state.demosReducer.demos
    }

}

export default withRouter(connect(mapStateToProps, { fetchDemos })(DemosContainer))
