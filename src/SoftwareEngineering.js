import React, { Component } from 'react';
import './App.css';
import {
  withRouter,
} from 'react-router-dom';

class SoftwareEngineering extends Component {
  render() {
    return (
      <div className="softwareEngineering">
        <h1>Software Engineering</h1>
        <h5>React, Redux, JavaScript, jQuery, Ruby on Rails, Ruby, Python, HTML, CSS</h5>
        <p id="CrimPara">Here is a site that I developed for my friends' rock band, Crimshaw. This heavy metal group had strict demands. They wanted something that would deliver a rock n' roll PUNCH to those who dared to exolore their website. The 'New Rocker' Google Font proved to be a wise stylistic font choice, and the final countdown clock was the pièce de résistance of the events page. For more information on these soldiers of rock, visit them at <a href="http://crimshaw.com/">crimshaw.com</a> and be a part of THE ROCK N' ROLL REVOLUTION!!!
        </p>
      </div>
    );
  }
}

export default withRouter(SoftwareEngineering)
