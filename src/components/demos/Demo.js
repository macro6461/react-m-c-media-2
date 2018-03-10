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

class Demo extends Component {

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
    } else {
      return <p>GitHub Frontend Repo: <a href={this.props.demo.frontend_url}>{this.props.demo.frontend_url}</a></p>
    }
  }

  checkBackendRepos = () => {
    if (this.props.demo.backend_url === null){
      return <p>GitHub Backend Repo: No repo</p>
    } else if (this.props.demo.backend_url === "Private"){
      return <p>GitHub Backend Repo: Private</p>
    } else {
      return <p>GitHub Backend Repo: <a href={this.props.demo.backend_url}>{this.props.demo.backend_url}</a></p>
    }
  }

  checkLiveUrl = () => {
      if (this.props.demo.live_url === null){
        return <p>Site: No Site</p>
      } else {
        return <p>Site: <a href={this.props.demo.live_url}>{this.props.demo.live_url}</a></p>
      }
  }

  render() {
    var front = this.checkFrontendRepos()
    var back = this.checkBackendRepos()
    var live = this.checkLiveUrl()
    var border = 'solid 1px black'

     console.log("demo rendered")
    return (
      <div style={{display: 'inline-block', margin: 3 + '%'}}>
        <h2> {this.props.demo.title} </h2>
        <div style={{float: 'left', width: 50 + "%", height: 20 + '%', fontSize: 1.2 + 'vw', margin: 1 + '%', verticalAlign: 'middle', textAlign: 'left'}}>
        <p>Languages: {this.props.demo.languages}</p>
        {front}
        {back}
        {live}
        <p style={{textAlign: 'justify', textJustify: 'inter-word'}}>{this.props.demo.description}</p>
        </div>
          <Iframe url={this.props.demo.url} width="45%"
            height="400px;"
            id={(this.props.demo.id).toString()}
            display="initial"
            position="relative"
            border="solid 1px black"
            styles={{marginTop: 2 + '%', border: 'solid 1px black'}}

            allowFullScreen/>
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
