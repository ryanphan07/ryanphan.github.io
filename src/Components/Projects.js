import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div className="row swe">
          <div className="three columns header-col">
            <h1>
              <span>Software ENG</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div class="wrap-collapsible">
              <input id="collapsible1" class="toggle" type="checkbox" />
              <label for="collapsible1" class="lbl-toggle">
                Virtual Reality Cell Visualizer [PROJECT]
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <ul>
                    <li>Modeled a structural representation of a cell using Google Tilt Brush and exported it to Unity as a game object for user interaction</li>
                    <li>Implemented C# scripts that enabled users to display menu options, highlight various parts of the model with informative popups, and teleport around the VR space</li>
                    <li>Presented to audience of over 50 people, including CSE faculty and Scripps Research scientists</li>
                  </ul>

                  <img
                    src="images/b1.gif"
                    alt="VR Cell Visualizer Demo gif"
                  />
                  <a
                    href="https://github.com/ryanphan/BioEdVR-Vincent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Link
                  </a>
                </div>
              </div>

              <input id="collapsible2" class="toggle" type="checkbox" />
              <label for="collapsible2" class="lbl-toggle">
                Map Journal [PROJECT]
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <ul>
                    <li>Designed a web-based geographical map using JavaScript that allows users to pinpoint coordinates and write a journal entry based on location</li>
                    <li>Integrated tegola.io, a GIS tile server, to application’s backend by customizing its API in GoLang to retrieve map coordinates when a location is clicked on</li>
                  </ul>

                  <img
                    src="images/MapJournal Demo.png"
                    alt="MapJournal Demo"
                  />
                  
                  <a
                    href="https://github.com/ryanphan/MapJournal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <br></br>
                    Github Link
                  </a>
                </div>
              </div>

              <input id="collapsible3" class="toggle" type="checkbox" />
              <label for="collapsible3" class="lbl-toggle">
                Twitch TV Drawing Extension [PROJECT]
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <ul>
                      <li>Developed a panel extension for twitch.tv using React and Node.js that allows users to draw pictures on an
                      in-browser canvas, which could then be posted onto a broadcaster’s chatroom</li>
                      <li>Established database using AWS DynamoDB to store drawn pictures and utilized AWS Lambda to send those pics
                      to the chatroom</li>
                    </ul>

                  <a
                  href="https://github.com/xianhaic/chat-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    Github Link
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row ds">
          <div className="three columns header-col">
            <h1>
              <span>Systems ENG</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div class="wrap-collapsible">
              <input id="collapsible5" class="toggle" type="checkbox" />
              <label for="collapsible5" class="lbl-toggle">
                Motorola Solutions
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <ul>
                    <li>Deployed radio telecommunication systems for various Californian public safety institutions including City of Hemet Police Department, City of Redding, and San Jose Fire Department</li>
                    <li>Outlined system solutions using internal tools based on customer’s area of service, population density, and geographical landscape</li>
                    <li>Validated equipment orders composed by sales teams, saving up to thousands of dollars in project time</li>
                    <li>Generated RF coverage maps using proprietary software to ensure that radio subscribers passed audio quality tests</li>
                    <li>Conducted acceptance tests plans with customers to certify that staged equipment worked reliably and as proposed</li>
                    <li>Documented system designs through high-level diagrams using Visio Pro and AutoCAD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row neuro">
          <div className="three columns header-col">
            <h1>
              <span>Mathematics</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div class="wrap-collapsible">
              <input id="collapsible9" class="toggle" type="checkbox" />
              <label for="collapsible9" class="lbl-toggle">
                How Congressional Districts use Graph Theory for the Census
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    Report on how Graph Theory can be applied in cases such as the US Census
                    <br></br>
                    <embed src="images/presentation-vhchau.pdf" width="600px" height="800px"/>
                  </p>
                </div>
              </div>

              <input id="collapsible10" class="toggle" type="checkbox" />
              <label for="collapsible10" class="lbl-toggle">
                IBM Churn Rate
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    Report on churn rate for IBM Subscribers
                    <br></br>
                    <embed src="images/IBM Churn.pdf" width="800px" height="500px"/>                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
