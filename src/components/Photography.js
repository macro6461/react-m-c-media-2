import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

class Photography extends Component {
  render() {
    return (
      <div>
        <h1>Photography</h1>
        <h3>The Galápagos Islands</h3>
        <img class="slideshow-img" src="https://i.imgur.com/Yyu4Kzv.jpg"/>
        <img class="slideshow-img" src="https://i.imgur.com/AcvEGXb.jpg"/>
        <img class="slideshow-img" src="https://i.imgur.com/VxV3Ybn.jpg"/>
        <img class="slideshow-img" src="https://i.imgur.com/Chn4LbE.jpg"/>
        <img class="slideshow-img" src="https://i.imgur.com/tA5qofR.jpg"/>
        <p >Head over to my <a class="media-anchor" href="https://www.instagram.com/m_c_media/">instagram page</a> for a more extensive photography portfolio!</p>
        <p id="web-inquiry-p">☞ For full stack and multimedia inqueries, please leave a message on the <Link to="/contact">Contact</Link> page!</p>
      </div>
    );
  }
}

export default withRouter(Photography)
