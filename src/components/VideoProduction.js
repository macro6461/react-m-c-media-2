import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import {connect} from 'react-redux'

import DemosContainer from './demos/DemosContainer.js'
import Demo from './demos/Demo.js'
import {fetchYoutubeVideos} from '../actions/actions'

class VideoProduction extends Component {

  state = {
    youtubeVideos: []
  }

  componentDidMount = () => {
    this.props.fetchYoutubeVideos()
  }

  renderVideos = (data) => {
    this.setState({
      youtubeVideos: data
    })
  }

  render() {
    console.log(this.state.youtubeVideos)
    return (
      <div>
        <h1>Video Production</h1>
        <DemosContainer videos={this.props.youtubeVideos}/>
        <p id="youtube-channel">Head over to my <a href="https://www.youtube.com/channel/UCt2tt8VVuYUDYzr09uZK8-g?view_as=subscriber">YouTube</a> channel for a more extensive video portfolio!</p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  debugger
    return {
      youtubeVideos: state.demosReducer.youtube_videos
    }

}

export default withRouter(connect(mapStateToProps, { fetchYoutubeVideos })(VideoProduction))
