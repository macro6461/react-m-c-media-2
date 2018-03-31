import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import '../../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux'
import Loader from '../Loader.js'
import $ from 'jquery';


var checkAgain;
var tag;
var player;
var firstScriptTag;


class Demo extends Component {

state = {
  loaded: false
}
  componentDidMount = () => {

    console.log(this.state.loaded)

  }

checkIframeLoaded = () => {

  $.ajax({
    url: this.props.demo.url,
    success: this.successState(),
    error: this.errorState()
  });
}

  successState = () => {
    console.log(this.state)
    this.setState({
      loaded: true
    })

  }

  errorState = () => {
    console.log($('#addr').val())
  }


  checkFrontendRepos = () => {
    if (this.props.demo.frontend_url === null){
      return <p>GitHub Frontend Repo: No repo</p>
    } else if (this.props.demo.frontend_url === "Private"){
      return <p>GitHub Frontend Repo: Private</p>
    } else if (!this.props.demo.backend_url){
      return null
    } else {
      return <p>GitHub Frontend Repo: <a style={{color: 'black'}} href={this.props.demo.frontend_url}>{this.props.demo.frontend_url}</a></p>
    }
  }

  checkBackendRepos = () => {
    if (this.props.demo.backend_url === null){
      return <p>GitHub Backend Repo: No repo</p>
    } else if (this.props.demo.backend_url === "Private"){
      return <p>GitHub Backend Repo: Private</p>
    } else if (!this.props.demo.backend_url){
      return null
    } else {
      return <p>GitHub Backend Repo: <a style={{color: 'black'}} href={this.props.demo.backend_url}>{this.props.demo.backend_url}</a></p>
    }
  }

  checkLiveUrl = () => {
      if (this.props.demo.live_url === null){
        return <p>Site: No Site</p>
      } else if (this.props.demo.live_url) {
        return <p>Site: <a style={{color: 'black'}} href={this.props.demo.live_url}>{this.props.demo.live_url}</a></p>
      } else if (this.props.demo.website){
        return <p>Site: <a style={{color: 'black'}} href={this.props.demo.website}>{this.props.demo.website}</a></p>
      } else {
        return null
      }
  }

  checkLanguages = () => {
    if (this.props.demo.languages){
      return <p>Languages: {this.props.demo.languages}</p>
    } else {
      return null
    }
  }

  checkAgain = () => {

    if (this.state.loaded === false){
      this.checkIframeLoaded()
    }
  }



  render() {
    var id = (this.props.demo.id).toString()
    var front = this.checkFrontendRepos()
    var back = this.checkBackendRepos()
    var live = this.checkLiveUrl()
    var languages = this.checkLanguages()
    var border = 'solid 1px black'

     console.log("demo rendered")
    return (
      <div style={{display: 'inline-block', margin: 3 + '%'}}>
        <h2> {this.props.demo.title} </h2>
        {this.state.loaded === false
          ? <Loader />
          : null
        }
        <ReactPlayer className="video" onReady={this.successState}
        url={this.props.demo.url}
        controls="true"
          id={id}
          display="initial"
          position="relative"
          style={{display: 'block', margin: 'auto'}}
          allowFullScreen/>
        <div className="text-for-demo">
        <p>Date: {this.props.demo.date}</p>
        {languages}
        {front}
        {back}
        {live}
        <p style={{textAlign: 'justify', textJustify: 'inter-word'}}>{this.props.demo.description}</p>
        </div>
        <div id="player"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

    return {
      demos: state.demosReducer.demos
    }

}

export default withRouter(connect(mapStateToProps)(Demo))
