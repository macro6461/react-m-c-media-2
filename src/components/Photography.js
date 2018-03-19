import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

var imgs;
var dots;
var leftArrow;
var rightArrow;
var currentIndex;
var time;

class Photography extends Component {

  componentDidMount = () => {
    dots = document.querySelectorAll(".dot i")
    leftArrow = document.querySelector(".arrow-left")
    rightArrow = document.querySelector(".arrow-right")
    imgs = document.getElementsByClassName("slideshow-img")
    currentIndex = 0
    time = 5000
    var defClass = this.defClass
    var start = this.startAutoSlide
    leftArrow.addEventListener("click", function(){
      currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
      defClass(0, currentIndex);
    })
    rightArrow.addEventListener("click", function(){
      currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
      defClass(0, currentIndex);
    })
    setTimeout(function(){
      defClass(1, 0)
      start()
    }, 500)

  }

defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {

    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    this.defClass(0, currentIndex);
  }, time);
};

  render() {
    return (
      <div>
        <h1>Photography</h1>
        <h3>The Galápagos Islands</h3>
          <div className="container">
            <div className="arrow arrow-left"><i className="fas fa-chevron-circle-left"></i></div>
              <img className="slideshow-img" src="https://i.imgur.com/Yyu4Kzv.jpg"/>
              <img className="slideshow-img" src="https://i.imgur.com/AcvEGXb.jpg"/>
              <img className="slideshow-img" src="https://i.imgur.com/VxV3Ybn.jpg"/>
              <img className="slideshow-img" src="https://i.imgur.com/Chn4LbE.jpg"/>
              <img className="slideshow-img" src="https://i.imgur.com/tA5qofR.jpg"/>
              <img className="slideshow-img" src="https://i.imgur.com/cnYHqkw.jpg"/>
              <div className="arrow arrow-right"><i className="fas fa-chevron-circle-right"></i>
              </div>
              <div className="dots">
                <div className="dot">
                  <i className="far fa-dot-circle"></i>
                </div>
                <div className="dot">
                  <i className="far fa-circle"></i>
                </div>
                <div className="dot">
                  <i className="far fa-circle"></i>
                </div>
                <div className="dot">
                  <i className="far fa-circle"></i>
                </div>
                <div className="dot">
                  <i className="far fa-circle"></i>
                </div>
                <div className="dot">
                  <i className="far fa-circle"></i>
                </div>
              </div>
          </div>
        <p >Head over to my <a className="media-anchor" href="https://www.instagram.com/m_c_media/">instagram page</a> for a more extensive photography portfolio!</p>
        <p id="web-inquiry-p">☞ For full stack and multimedia inqueries, please leave a message on the <Link to="/contact">Contact</Link> page!</p>
      </div>
    );
  }
}

export default withRouter(Photography)
