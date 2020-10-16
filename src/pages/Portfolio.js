import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import covidScreen from "../assets/images/covid.png";
import quizScreen from "../assets/images/js-quiz.png"
import pwScreen from "../assets/images/pw-gen.png"

function Portfolio() {
  return (
    <div>
      <Hero>
        <h1>Portfolio</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-4">
            <Card image={covidScreen} link="https://mr-cade.github.io/covid-api/">
            </Card>
          </Col>
          <Col size="md-4">
            <Card image={quizScreen} link="https://mr-cade.github.io/js-quiz/">
            </Card>
          </Col>
        </Row>
        <Row>  
        <Col size="md-4">
            <Card image={pwScreen} link="https://mr-cade.github.io/password-generator/" >
            </Card>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
