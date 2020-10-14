import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

function About() {
    return (
        <div>
            <Hero backgroundImage="https://c1.staticflickr.com/7/6019/6283399702_1f37edfd95_b.jpg">

            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Card>
                    <Col size="md-5">
                        <div class="card-title">
                            <h4>The Early Years</h4>
                            <p class="card-text">I was born and raised north of Salt Lake in Bountiful, UT. Growing up, I loved to learn, ski, play sports and play videogames with my friends. I was a student at Bountiful High School where I participated in student council. Following high school I attended BYU's Marriott School of Business and majored in Finance.</p>
                            <p class="card-text">Shortly after graduating from college, I adopted a puppy who has become my best pal. He's half Bernese Mountain Dog, half Poodle, all bark and no bite.</p>
                        </div>
                    </Col>
                    <Col size="md-5">
                        <div class="card-title">
                        <h4>Professional Experience</h4>
                        <h6><i class="fas fa-chart-line"></i> Comcast NBC Universal</h6>
                            <p class="card-text">Out of college, I as recruited to participate in a corporate finance rotational program through three divisions of Comcast NBC Universal, one of the world's largest telecom and media companies. This provided me with a great breadth of experience within corporate finance</p>
                            <p class="card-text">My three rotations took me through the following roles:</p>
                                <ul class="pl-5">
                                    <li>Comcast West Division Revenue Analyst -- Denver, CO</li>
                                    <li>NBC Universal First Run Syndication Financial Analysis -- New York, NY</li>
                                    <li>Comcast Corporate Headquarters Xfinity Home Product Analysis -- Philadelphia, PA</li>
                                </ul>
                        <i class="fas fa-hand-holding-usd"></i><h6> sPower</h6>
                            <p class="card-text">After my time with Comcast, I took a job in Salt Lake with a solar development company as a treasury analyst. There I was primarily responsible for cash management. We managed to a relatively low cash balance of about $20MM</p>
                        </div>
                    </Col>
                </Card>
            </Container>
        </div>
    );
}

export default About;
