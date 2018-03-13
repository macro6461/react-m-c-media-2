import React, { Component } from 'react';
import Iframe from 'react-iframe'
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

var tag;
var player;
var firstScriptTag;

class Demo extends Component {

  // componentDidMount = () => {
  //   tag = document.createElement('script');
  //       tag.src = "https://www.youtube.com/iframe_api";
  //       firstScriptTag = document.getElementsByTagName('script')[0];
  //       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  // }

  shouldComponentUpdate() {
    if (this.props.demos.length === 7){

      return false
    } else {
      return true
    }
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


    // onYouTubePlayerAPIReady = () => {
    //   debugger
    //     player = new YT.Player('player', {
    //       height: '390',
    //       width: '640',
    //       videoId: 'M7lc1UVf-VE',
    //       events: {
    //         'onReady': this.onPlayerReady,
    //         'onStateChange': this.onPlayerStateChange
    //       }
    //     });
    //   }
    //
    // onPlayerReady = (event) => {
    //   event.target.playVideo();
    // }



  render() {
    var front = this.checkFrontendRepos()
    var back = this.checkBackendRepos()
    var live = this.checkLiveUrl()
    var languages = this.checkLanguages()
    var border = 'solid 1px black'

     console.log("demo rendered")
    return (
      <div style={{display: 'inline-block', margin: 3 + '%'}}>
        <h2> {this.props.demo.title} </h2>
          <Iframe className="video" url={this.props.demo.url} width="45%"
            height="400px"
            id={(this.props.demo.id).toString()}
            display="initial"
            position="relative"
            border="solid 1px black"
            styles={{marginTop: 2 + '%', border: 'solid 1px black'}}
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
