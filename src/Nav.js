import React, { Component } from 'react'
import './App.css';
import About from './About.js'
import Photography from './Photography.js'
import VideoProduction from './VideoProduction.js'
import DropMenu from './DropMenu.js'
import { connect } from 'react-redux'
import { changeDropdown } from './actions/actions'

import SoftwareEngineering from './SoftwareEngineering.js'
import Contact from './Contact.js'
import {
  withRouter,
  Link,
  Route,
} from 'react-router-dom';
import {browserLocation} from 'browser-location'

var navBar;
var navTop;
var dropMenu;

class Nav extends Component {

  state ={
      styles: {
        top: 0,
        left: 0,
      },
        hovered: true
    }

    componentDidMount(){

      if (window.innerWidth >= 500){
        setTimeout(function(){
          navBar = document.getElementById("nav-bar")
          navTop = navBar.getBoundingClientRect().top

        }, 100)
        window.addEventListener("scroll", this.stickyNav)
      } else {
        console.log("don't render")
      }
    }

    changeStyle = () =>{
      var drop = document.getElementById("media")
      var bottom = drop.getBoundingClientRect().bottom
      var left = drop.getBoundingClientRect().left
        this.setState({
          styles: {
            top: bottom,
            left: left
          }
        })
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
      }, 100)
    }

    onClick = () =>{
      this.setState({
        hovered: !this.state.hovered
      })
    }

  mouseEnter = () => {
    var drop = document.getElementById("drop-menu")
    if (drop){
      drop.classList = ""
    }
      this.props.changeDropdown(true)
      this.stickyNav()


    }

  mouseLeave = () => {
    var changeDrop = this.props.changeDropdown
    this.removeDropClass()
    setTimeout(function(){
      changeDrop(false)
    }, 1000)
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

          <Link id="media" className="link" to="#" onMouseEnter={this.mouseEnter} ><li>Multimedia</li></Link>

          <Link className="link" to="/contact" ><li>Contact</li></Link>

        </ul>
        </div>
        {this.props.hovered === false
          ? null
          : <DropMenu hovered={this.props.hovered} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} parentStyle={this.state.styles}/>
        }
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
    hovered: state.hovered

  }
}


export default withRouter(connect(mapStateToProps, { changeDropdown })(Nav))
