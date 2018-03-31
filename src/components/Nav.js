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

var navBar;
var navTop;
var dropMenu;
var setTimeoutVar;

class Nav extends Component {

  state ={
      styles: {
        bottom: 0,
        left: 0,
      },
        hovered: false
    }

    componentDidMount(){
      var changeStyle = this.changeStyle
      if (window.innerWidth >= 500){
        setTimeout(function(){
          navBar = document.getElementById("nav-bar")
          navTop = navBar.getBoundingClientRect().top
          changeStyle()
        }, 1000)
        window.addEventListener("scroll", this.stickyNav)
      }
    }

    changeStyle = () =>{
      var drop = document.getElementById("media")
      if (drop){
        var bottom = drop.getBoundingClientRect().bottom
        var left = drop.getBoundingClientRect().left
          this.setState({
            styles: {
              bottom: bottom,
              left: left
            }
          })
      }
    }

    stickyNav = () => {
      setTimeout(function(){
        var ypos = window.pageYOffset
          if (ypos >= navTop){
            navBar.classList.remove("normal")
            navBar.classList.add("sticky")
            navBar.parentElement.nextElementSibling.style.marginTop = "5.5%"
            if (document.getElementById("drop-menu")){
              var drop = document.getElementById("drop-menu")
              drop.style.position = "fixed"
              drop.style.right = "25%"

              drop.style.top = `${navBar.getBoundingClientRect().bottom}px`
            }
          } else {
            if (navBar){
              navBar.classList.remove("sticky")
              navBar.classList.add("normal")
              navBar.parentElement.nextElementSibling.style.marginTop = "auto"
              if (document.getElementById("drop-menu")){
                var drop = document.getElementById("drop-menu")
                drop.style.position = "absolute"
                drop.style.right = "25%"
                drop.style.top = "100%"
              }
            }

        }
      }, 100)
      this.changeStyle()
    }

  mouseEnter = () => {
    var drop = document.getElementById("drop-menu")
    if (drop){
      clearTimeout(setTimeoutVar);
      drop.classList = ""
    }
      this.setState({
        hovered: true
      })
      this.stickyNav()
    }

    checkMouseLeave = (e) => {
      var drop = e.target

      if (e.pageX > (drop.offsetLeft + drop.offsetWidth)){
        this.mouseLeave()
      } else if (e.pageX < drop.offsetLeft) {
        this.mouseLeave()
      } else if (e.pageY < drop.getBoundingClientRect().top){
        this.mouseLeave()
      }
    }

  mouseLeave = () => {
    this.removeDropClass()
    var changeState = this.changeState
    var hovered = this.state.hovered
    setTimeoutVar = setTimeout(function(){
      changeState()
    }, 1000)
  }

  changeState = () => {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  removeDropClass = () =>{
    if (document.getElementById("drop-menu")){
      document.getElementById("drop-menu").classList = ""
        document.getElementById("drop-menu").classList.add("reverse")
    }
  }

  render() {

    return (
      <div>
      <div className="navDiv">
      <div id="nav-bar">
        <ul>

        <Link className="link" to="/" style={{marginLeft: 8 + '%'}} ><li>About</li></Link>

          <Link className="link" to="/software-engineering"><li>Software Engineering</li></Link>

          <Link id="media" className="link" to="#" onMouseEnter={this.mouseEnter} onMouseLeave={this.checkMouseLeave} ><li>Multimedia</li></Link>

          <Link className="link" to="/contact" ><li>Contact</li></Link>

        </ul>
        </div>
        {this.state.hovered === false
          ? null
          : <DropMenu hovered={this.state.hovered} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} parentStyle={this.state.styles}/>
        }
          </div>
          <Route exact path="/" component={About} />
          <Route exact path="/software-engineering" component={SoftwareEngineering} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/photography" component={Photography} />
          <Route exact path="/video-production" component={VideoProduction} />

        </div>

    );
  }
}


export default withRouter(Nav)
