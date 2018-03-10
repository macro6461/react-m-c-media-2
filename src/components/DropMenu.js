import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import Photography from './Photography.js'
import VideoProduction from './VideoProduction.js'

class DropMenu extends Component {

  state = {
    hovered: true
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.checkFixed)
    this.setState({
      hovered: this.props.hovered
    })
  }

  render() {
    console.log('drop re-rendered')
    return (
      (this.props.hovered === false
        ? null
        : <ul id="drop-menu" onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
           <Link className="drop-link" to="/photography"><li>Photography</li></Link>
           <Link className="drop-link" to="/video-production"><li>Video Production</li></Link>
          </ul>
      )

    );
  }
}

export default withRouter(DropMenu)
