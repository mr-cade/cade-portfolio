import React from "react";
import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Card from "../components/Card";
import mePic from "../assets/images/IMG_0055.jpeg";

function About() {
  return (
    <div>
      <div>
        <Hero backgroundImage="https://c1.staticflickr.com/7/6019/6283399702_1f37edfd95_b.jpg"></Hero>
      </div>
      <div className="container">
        <div className="row">
          <img src={mePic} class="profPic img-fluid  p-3" alt=""></img>
          <div className="col ml-1 mr-4 mb-2 pb-3">
            <div className="card-body">
              <h4>Background</h4>
              <p>
                I was born and raised north of Salt Lake City in Bountiful, UT.
                Growing up, I loved to learn, ski, play sports and play
                videogames with my friends. I was a student at Bountiful High
                School where I participated in student council. Following high
                school I attended BYU's Marriott School of Business and majored
                in Finance.
                <br />
                <br />
                Shortly after graduating from college, I adopted a puppy who has
                become my best pal. He's half Bernese Mountain Dog, half Poodle,
                all bark and no bite.
              </p>
            </div>
          </div>

          <div className="col ml-1 mr-4 mb-2 pb-3">
            <div className="card-body">
              <h4>Professional Experience</h4>
              <h5>
                <i className="fas fa-chart-line"></i> Comcast NBC Universal
              </h5>
              <p>
                Out of college, I as recruited to participate in a corporate
                finance rotational program through three divisions of Comcast
                NBC Universal, one of the world's largest telecom and media
                companies. This provided me with a great breadth of experience
                within corporate finance.
                <br />
                <br />
                My three rotations took me through the following roles:
              </p>
              <ul>
                <li>Comcast West Division Revenue Analyst -- Denver, CO</li>
                <li>
                  NBC Universal First Run Syndication Financial Analysis -- New
                  York, NY
                </li>
                <li>
                  Comcast Corporate Headquarters Xfinity Home Product Analysis
                  -- Philadelphia, PA
                </li>
              </ul>
              <i className="fas fa-hand-holding-usd"></i>
              <h5> sPower</h5>
              <p>
                After my time with Comcast, I took a job in Salt Lake with a
                solar development company as a treasury analyst. There I was
                primarily responsible for cash management. We managed to a
                relatively low cash balance of about $20MM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
