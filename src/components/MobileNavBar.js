import React, { Component } from 'react'
import '../App.css';
import About from './About.js'
import Photography from './Photography.js'
import VideoProduction from './VideoProduction.js'
import DropMenu from './DropMenu.js'
import SoftwareEngineering from './SoftwareEngineering.js'
import Contact from './Contact.js'
import MobileNavMenu from './MobileNavMenu.js'
import { connect } from 'react-redux'
import { changeDropdown } from '../actions/actions'
import { detectHamburgerClicked } from '../actions/actions'

import {
  withRouter,
  Link,
  Route,
} from 'react-router-dom';
import {browserLocation} from 'browser-location'

class MobileNavBar extends Component {

  componentDidMount = () => {
    document.getElementsByClassName("mobile-nav-hamburger")[0].addEventListener("click", this.handleHamburgerClick)
  }

  handleHamburgerClick = () => {


    this.props.detectHamburgerClicked(!this.props.hamburgerClicked)
  }

  render() {

    return (
      <div>
      <div className="mobile-nav-div">
      <div className="mobile-nav-bar">
        <img className="mobile-nav-hamburger" src={require('../images/MCMedia-Hamburger.png')} alt="hamburger"/>
        <Link to="/" ><img className="mobile-nav-logo" src={require('../images/MCLogo.png')} alt="hamburger"/></Link>
        <Link to="/contact"><img className="mail-mobile" src={require('../images/mobile-mail-v1.png')} alt="Footer Mail"/></Link>

      </div>
          </div>
          <Route exact path="/" component={()=>{return(<About/>)}} />
          <Route exact path="/software-engineering" component={()=>{return(<SoftwareEngineering/>)}} />
          <Route exact path="/contact" component={()=>{return(<Contact/>)}} />
          <Route exact path="/photography" component={()=>{return(<Photography/>)}} />
          <Route exact path="/video-production" component={()=>{return(<VideoProduction/>)}} />
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    hamburgerClicked: state.dropdownReducer.hamburgerClicked,
    hovered: state.dropdownReducer.hovered
  }
}


export default withRouter(connect(mapStateToProps, { changeDropdown, detectHamburgerClicked })(MobileNavBar))
