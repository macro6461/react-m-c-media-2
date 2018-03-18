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
import Loader from './Loader.js'
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

    return (
      <div>
        <h1>Video Production</h1>
        {this.props.youtubeVideos.length <= 5
          ? <Loader/>
          :<DemosContainer videos={this.props.youtubeVideos}/>
        }
        <p>Head over to my <a class="media-anchor" href="https://www.youtube.com/channel/UCt2tt8VVuYUDYzr09uZK8-g?view_as=subscriber">YouTube</a> channel for a more extensive video portfolio!</p>
        <p id="web-inquiry-p">☞ For full stack and multimedia inqueries, please leave a message on the <Link to="/contact">Contact</Link> page!</p>
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
