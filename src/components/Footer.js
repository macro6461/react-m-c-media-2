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
import {
  withRouter,
  Link,
  Route,
} from 'react-router-dom';
import {browserLocation} from 'browser-location'

class Footer extends Component {

  componentDidMount = () =>{
    document.addEventListener("scroll", this.revealIcons)
  }

    revealIcons = () => {
      var footTop = document.getElementsByClassName("FooterDiv")[0].getBoundingClientRect().top
      var ypos = window.pageYOffset

      var icons = document.getElementsByClassName("footer_social")
      var medium = document.getElementsByClassName("footer_social_medium")[0]
      if (window.innerHeight > document.getElementsByClassName("FooterDiv")[0].getBoundingClientRect().top){
          setTimeout(function(){
            icons[0].classList.add("fadeIn")
          }, 100)
          setTimeout(function(){
            icons[1].classList.add("fadeIn")
          }, 200)
          setTimeout(function(){
            medium.classList.add("fadeIn")
          }, 300)
          setTimeout(function(){
            icons[2].classList.add("fadeIn")
          }, 400)
          setTimeout(function(){
            icons[3].classList.add("fadeIn")
          }, 500)
          setTimeout(function(){
            icons[4].classList.add("fadeIn")
          }, 600)
      }
    }

  render() {

    return (
      <div>
      <div className="FooterDiv">
      <div className="footContainer">
      <img className="m-c-logo" src={require('../images/MCLogo.png')} alt="M C Logo"/>
          <ul className="foot-nav">
          <Link className="foot-link" to="/" style={{marginLeft: 8 + '%'}} ><li>About</li></Link>

            <Link className="foot-link" to="/software-engineering"><li>Software Engineering</li></Link>

            <Link id="media" className="foot-link" to="#" onMouseEnter={this.mouseEnter} ><li>Multimedia</li></Link>
            <ul id="foot-drop-menu" onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
               <Link className="foot-drop-link" to="/photography"><li>Photography</li></Link>
               <Link className="foot-drop-link" to="/video-production"><li>Video Production</li></Link>
              </ul>
            <Link className="foot-link" to="/contact" ><li>Contact</li></Link>

          </ul>
            <div className="footerList">
            <h3 id="connect">Connect</h3>
              <a href="https://www.linkedin.com/in/matthew-croak-18467483?trk=nav_responsive_tab_profile"><img className="footer_social" src={require('../images/linked_in_white.png')} alt="Footer LinkedIn"/></a>
              <a href="https://github.com/macro6461"><img className="footer_social" src={require('../images/github-footer.png')} alt="Footer Github"/></a>
              <a href="https://medium.com/@mattcroak718"><img className="footer_social_medium" src={require('../images/medium-footer.png')} alt="Footer Medium"/></a>
                <a href="https://www.instagram.com/m_c_media/"><img className="footer_social" src={require('../images/insta-footer.png')} alt="Footer Insta"/></a>
              <a href="https://www.youtube.com/channel/UCt2tt8VVuYUDYzr09uZK8-g"><img className="footer_social" src={require('../images/youtube-footer.png')} alt="Footer Youtbe"/></a>
              <Link to="/contact"><img className="footer_social" src={require('../images/footer-mail.png')} alt="Footer Mail"/></Link>

            </div>

      </div>
      <p id="copyright">Site developed by Matthew Croak Media ©2017</p>
      </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    hovered: state.dropdownReducer.hovered

  }
}


export default withRouter(connect(mapStateToProps, { changeDropdown })(Footer))
