import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

function Portfolio() {
  return (
    <div>
      <Hero>
        <h1>Portfolio</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <div className="row justify-content-center">
            <a href="https://mr-cade.github.io/covid-api/" target="_blank"><img src="../assets/images/covid.png" className="col-sm-10 m-3 ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} portpic" alt="Covid Dashboard"></img></a>
            <div className="row justify-content-center">
              <a href="https://mr-cade.github.io/js-quiz/" target="_blank"><img src="../assets/images/js-quiz.png" className="col-sm-10 m-3 ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} portpic" alt="JavaScript Quiz"></img></a>
            </div>
          </div>
        </Row>
        <div className="row justify-content-center">
          <a href="https://mr-cade.github.io/password-generator/" target="_blank"><img src="../assets/images/pw-gen.png" className="col-sm-10 m-3 ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} portpic" alt="Password Generator"></img></a>
        </div>

      </Container>
    </div>
  );
}

export default Portfolio;
