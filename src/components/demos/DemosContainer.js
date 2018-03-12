import React, { Component } from 'react';
import '../../App.css';
import Demo from './Demo.js'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';


class DemosContainer extends Component {

  state = {
    demos: [],
    youtube_videos: []
  }

  componentDidMount = () =>{
    debugger
    this.setState({
      demos: this.props.videos,
      youtube_videos: this.props.youtubeVideos
    })
  }

  shouldComponentUpdate(){
    if (this.props.videos.length === 7){
      return false;
    } else {
      return true
    }
  }

  render() {
      console.log(this.props)
    if (this.props.videos.length === 0){
      console.log("poop")
    } else {
      var demos = this.props.videos.map((demo)=>{
        return <Demo key={demo.id} demo={demo}/>
      })
    }


    return (
      <div>
        {demos}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//
//     return {
//       demos: state.demosReducer.demos
//     }
//
// }

export default withRouter(DemosContainer)
