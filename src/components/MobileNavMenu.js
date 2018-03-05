import React, { Component } from 'react'
import '../App.css';
import About from './About.js'
import Photography from './Photography.js'
import VideoProduction from './VideoProduction.js'
import DropMenu from './DropMenu.js'
import SoftwareEngineering from './SoftwareEngineering.js'
import Contact from './Contact.js'
import { connect } from 'react-redux'
import { changeDropdown } from '../actions/actions'
import { detectHamburgerClicked } from '../actions/actions'

import {
  withRouter,
  Link,
  Route,
} from 'react-router-dom';
import {browserLocation} from 'browser-location'

var icons;
var medium;
var xButton;
var menu;

class MobileNavMenu extends Component {

  state ={
    xClicked: false
  }

  componentDidMount = () => {
    xButton = document.getElementsByClassName("mobile-x-button")[0]
    xButton.addEventListener("click", this.slideOutMenuAndX)
    menu = document.getElementsByClassName("mobile-nav-menu")[0]
    var elements = document.getElementsByClassName("mobile-link")
    var aboutEl = document.getElementsByClassName("about-mobile-link")[0]
    aboutEl.addEventListener("click", this.slideOutMenuAndX)
    for (var i = 0; i < elements.length; i++){
      elements[i].addEventListener("click", this.slideOutMenuAndX)
    }
    icons = document.getElementsByClassName("footer_social_mobile")
    medium = document.getElementsByClassName("footer_social_medium_mobile")[0]
    this.fadeInIconsForMenu()
  }

  slideOutMenuAndX = () => {
    var clicked = this.props.detectHamburgerClicked
    var hamburger = this.props.hamburgerClicked
    console.log(this.props)
    xButton.classList.add("reverse")
    setTimeout(function(){
      menu.classList.add("reverse")
    }, 300)
    setTimeout(function(){

      clicked(!hamburger)
      console.log(hamburger)
    }, 1000)

  }

  fadeInIconsForMenu = () => {
    setTimeout(function(){
      icons[0].classList.add("fadeIn")
    }, 500)
    setTimeout(function(){
      icons[1].classList.add("fadeIn")
    }, 600)
    setTimeout(function(){
      icons[2].classList.add("fadeIn")
    }, 700)
    setTimeout(function(){
      icons[3].classList.add("fadeIn")
    }, 800)
    setTimeout(function(){
      medium.classList.add("fadeIn")
    }, 900)
    setTimeout(function(){
      icons[4].classList.add("fadeIn")
    }, 1000)
  }

  render() {


    return (
    <div>
      <div className="mobile-nav-menu">
      <img className="mobile-x-button" src={require('../images/mobile-x-button.png')} alt="Footer Github"/>
      <ul>
          <Link className="about-mobile-link" to="/"><li>About</li></Link>
          <Link className="mobile-link" to="/software-engineering"><li>Software Engineering</li></Link>
          <Link className="mobile-link" to="/photography"><li>Photography</li></Link>
          <Link className="mobile-link" to="/video-production"><li>Video Production</li></Link>
          <Link className="mobile-link" to="/contact" ><li>Contact</li></Link>
        </ul>
        <div id="connect-div-mobile">
          <h3 id="connect">Connect</h3>
            <a href="https://www.instagram.com/m_c_media/"><img className="footer_social_mobile" src={require('../images/insta-footer.png')} alt="Footer Insta"/></a>
            <a href="https://www.linkedin.com/in/matthew-croak-18467483?trk=nav_responsive_tab_profile"><img className="footer_social_mobile" src={require('../images/linked_in_white.png')} alt="Footer LinkedIn"/></a>
            <a href="https://github.com/macro6461"><img className="footer_social_mobile" src={require('../images/github-footer.png')} alt="Footer Github"/></a>
            <a href="https://www.youtube.com/channel/UCt2tt8VVuYUDYzr09uZK8-g"><img className="footer_social_mobile" src={require('../images/youtube-footer.png')} alt="Footer Youtbe"/></a>
            <a href="https://medium.com/@mattcroak718"><img className="footer_social_medium_mobile" src={require('../images/medium-footer.png')} alt="Footer Medium"/></a>
            <Link to="/contact"><img className="footer_social_mobile" src={require('../images/footer-mail.png')} alt="Footer Mail"/></Link>
        </div>

      </div>

    </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    hovered: state.dropdownReducer.hovered,
    hamburgerClicked: state.dropdownReducer.hamburgerClicked
  }
}


export default withRouter(connect(mapStateToProps, { changeDropdown, detectHamburgerClicked })(MobileNavMenu))
