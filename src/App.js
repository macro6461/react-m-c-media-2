import React, { Component } from 'react';
import Nav from './Nav.js'
import MobileNavBar from './MobileNavBar.js'
import Footer from './Footer.js'
import './App.css';
// import bannerImg from'../images/BWParkBanner.jpg'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {detectScreenChange} from './actions/actions'
import $ from 'jquery'
import MobileFooter from './MobileFooter.js'
import MobileNavMenu from './MobileNavMenu.js'
import { detectHamburgerClicked } from './actions/actions'

// import { waitForImgLoad } from './actions/actions'

class App extends Component {

  componentDidMount = () => {
    window.onbeforeunload = function(){ window.scrollTo(0,0); }
    window.addEventListener("load", this.checkResize)
    window.addEventListener("resize", this.checkResize)
    if (window.innerWidth >= 500){
      setTimeout(function(){
        document.getElementById("resume-download").style.display = "block"
      }, 3000)
    }
  }

  checkResize = () => {
    this.props.detectScreenChange("")
  }

  render() {

    return (
      <div className="App">
      <img className="BannerImg" src={require('./images/BWParkBanner.jpg')} alt="BannerImg"/>
        { this.props.mobileScreen === false
          ? <div><Nav /><a id="resume-download" href={require('./docs/Matthew_Croak_Tech_Resume.pdf')} download>Download Resume</a><Footer /></div>
          : <div><MobileNavBar /><MobileFooter /></div>
        }
        {this.props.hamburgerClicked === false
            ? null
            : <MobileNavMenu handleHamburgerClick={this.props.detectHamburgerClick}/>
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    hamburgerClicked: state.hamburgerClicked,
    hovered: state.hovered,
    mobileScreen: state.mobileScreen

  }
}


export default withRouter(connect(mapStateToProps, {detectScreenChange, detectHamburgerClicked})(App))
