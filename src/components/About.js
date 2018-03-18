import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux'
// import { waitForImgLoad } from './actions/actions'


class About extends Component {
  render() {

    return (
      (this.props.img_loaded === false
        ? null
        : <div>
            <h1>About</h1>
            <div className="about">
            <p>My passion for media began at an early age. My father would sit me down to watch classic films with him, and throughout the film he would point out small things that made the film great, as well as things that made the film suffer.</p>
            <figure>
                <img className="croakTree" src={require('../images/CroakTree.png')} alt="CroakTree"/>
                <figcaption>
                  Prospect Park, Brooklyn
                  <br/>
                  January, 2016
                </figcaption>
            </figure>

            <p>As I got older, this scrutiny would manifest into deep appreciation of film as a medium. I soon found myself not only analyzing the story that was being told, but how it was being told. How was it made? How did they shoot that? What cameras were used?</p>

            <p>Fast forward to my life as a college student. I was studying advertising and public relations. My field of study was...interesting. But there was too much theory and virtually no application. It wasn't enough to study different media.</p>

            <p>I wanted to create it.</p>
            <figure>
                  <img className="croakPrivate" src={require('../images/ThroughTheWall.PNG')} alt="CroakWall"/>
                  <figcaption>
                    Private Photoshoot, Queens
                    <br/>
                    March, 2017
                  </figcaption>
            </figure>

            <p>When I studied abroad in England, I began to explore video production and post-production. Soon I became fascinated with the software I was using, and the machines that I worked on. I started to become interested in understanding the differences between Mac OS and Windows. When I came back to The States I decided to declare myself a New Communication Media major and picked up a minor in Software Engineering. The marriage of both fields was perfectly suited to my interests.</p>
            <p>By my graduation, I had already developed websites and became proficient in computer networks. I had produced video content as a member of 20 CSTV where I worked in a professional television studio, and as an intern for the SUNY Cortland Communications department.</p>
              <figure>
                <img className="CroakSeals" src={require('../images/CroakSeals.jpg')} alt="Matthew Croak in the Galapagos"/>

                    <figcaption>
                    Isla Mosquera, The Galápagos Islands
                        <br/>
                        December, 2016
                    </figcaption>
                </figure>
              <p>So what is Matthew Croak Media? It is as much a brand as it is an exposition. I am an ambitious full stack developer with proficiency in multimedia. This site is my portfolio.</p>

            </div>
            <p >Please see my <a class="media-anchor" href="https://www.linkedin.com/in/matthew-croak-18467483?trk=nav_responsive_tab_profile">LinkedIn profile</a> for a more extensive software engineering profile!</p>
            <p id="web-inquiry-p">☞ For full stack and multimedia inqueries, please leave a message on the <Link to="/contact">Contact</Link> page!</p>
          </div>
      )
    );
  }
}

const mapStateToProps = (state) => {

    return {
      imgLoaded: state.dropdownReducer.img_loaded,
      hovered: state.dropdownReducer.hovered
    }

}


export default withRouter(connect(mapStateToProps)(About))
