import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import mePic from "../assets/images/IMG_0055.jpeg"
// import { FaTable } from "react-icons/fa";

function About() {
    return (
        <div>
            {/* <Container style={{ marginTop: 30 }}> */}
                <Row>
                    <div  >
                        <img style={{ width: 250 }} src={mePic} className="profPic mt-4 ml-5 float-left" alt="profile of Cade with puppy"></img>
                    </div>
                    <Col size="md-5">
                        <div className="card bg-light mt-4" style={{ height: "auto" }}>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Background</h4>

                                    <p >I was born and raised north of Salt Lake City in Bountiful, UT. Growing up, I loved to learn, ski, play sports and play videogames with my friends. I was a student at Bountiful High School where I participated in student council. Following high school I attended BYU's Marriott School of Business and majored in Finance.</p>
            
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col size="md-8">
                    <div className="card bg-light mt-4 ml-4" style={{ height: "auto" }}>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Professional Experience</h4>
                                    <h5>Comcast NBC Universal</h5>
                                    <p>Out of college, I was recruited to participate in a corporate finance rotational program through three divisions of Comcast NBC Universal, one of the world's largest telecom and media companies. This provided me with a great breadth of experience within corporate finance.</p>
                                    <p>My three rotations took me through the following roles:</p>
                                    <ul className="text-black">
                                        <li>Comcast West Division Revenue Analyst -- Denver, CO</li>
                                        <li>NBC Universal First Run Syndication Financial Analysis -- New York, NY</li>
                                        <li>Comcast Corporate Headquarters Xfinity Home Product Analysis -- Philadelphia, PA</li>
                                    </ul>
                                    <h5>sPower</h5>
                                    <p>After my time with Comcast, I took a job in Salt Lake with a solar development company as a treasury analyst. There I was primarily responsible for cash management. We managed to a relatively low cash balance of about $20MM</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                    <Col size="md-8">
                    <div className="card bg-light mt-4 ml-4 mb-4" style={{ height: "auto" }}>
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Hobbies</h4>
                                    <h5>Ham Radio</h5>
                                    <p>I am a licensed amateur radio operator (ham radio). People use ham radio to talk across town, around the world, or even into space, all without the Internet or cell phones. It's fascinating, social, educational, and can be a lifeline during emergencies when other forms of communication are inoperable or unavailable.</p>
                                    <p>The part of the hobby that I find most interesting is experimenting with antennas and radios to try to make the longest distance contacts possible. I have made contact with all 50 states, and 12 countries from Australia to Argentina, and Mexico to Japan.</p>
                                    <h5>Alpine Skiing</h5>
                                    <p>My Dad taught me how to ski when I was three years old. Growing up in Utah, it was always an integral part of winter life. My favorite terrain is steep and deep powder, but when these conditions don't exist, you can find me on moguls or ocassionally trying to beat my personal top speed record of 72 mph.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            {/* </Container> */}
        </div>
    );
}

export default About;
