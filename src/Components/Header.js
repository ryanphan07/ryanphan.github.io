import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Ryan Phan</h1>
            <div class="slider-wrapper">
              <div class="slider">
                <div class="slider-text1">High School Student</div>
                <div class="slider-text2">1600 ELO Chess Player</div>
                <div class="slider-text3">Stanford/MIT Hopeful</div>
                <div class="slider-text4">Math Proficient</div>
              </div>
            </div>

            <hr />

            <ul className="social">
              <li key="linkedin">
                <a
                  href="https://www.linkedin.com/in/vincenthchau/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li key="github">
                <a
                  href="https://github.com/ryanphan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li key="email">
                <a
                  href="mailto:vincentchau72@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
