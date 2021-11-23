import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="Vincent Chau Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Hi I'm Ryan!
            </p>
            <p>
              I love chess, Hamilton, and math.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
