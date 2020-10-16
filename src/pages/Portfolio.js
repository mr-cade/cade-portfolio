import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import covidScreen from "../assets/images/covid.png";
import quizScreen from "../assets/images/js-quiz.png";
import pwScreen from "../assets/images/pw-gen.png";
import teamBuilder from "../assets/images/team-builder.png"

function Portfolio() {
  return (
    <div>
      <Hero>
        <h1>Portfolio</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-4">
            <Card
              image={covidScreen}
              link="https://mr-cade.github.io/covid-api/"
              title="Covid Tracker"
              description="Covid-19 statistics tracker with data visualizations. Data is refreshed from an API.">
            </Card>
          </Col>
          <Col size="md-4">
            <Card
              image={quizScreen}
              link="https://mr-cade.github.io/js-quiz/"
              title="JavaScript Quiz"
              description="A quiz about JavaScript, written in JavaScript. This app features a countdown timer and highscore tracker.">
            </Card>
          </Col>
          <Col size="md-4">
            <Card
              image={pwScreen}
              link="https://mr-cade.github.io/password-generator/"
              title="Password Generator"
              description="Simple password generation application. It builds a password of a specified length using your choice of character types.">
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Card
              image={teamBuilder}
              link="https://mr-cade.github.io/password-generator/"
              title="Team Builder"
              description="This application allows the user to build a team of managers, engineers and interns from the command line.">
            </Card>
          </Col>          
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
