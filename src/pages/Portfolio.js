import React from "react";
import Row from "../components/Row";
import Portfolio from "../components/Portfolio"

function PortfolioPage() {
  return (
    <Row>
      <div>
        <Portfolio>
        </Portfolio>
      </div>
      </Row>
  )}
export default PortfolioPage




















// function Portfolio() {
//   return (
//     <div>
        //       <Hero backgroundImage="https://c1.staticflickr.com/7/6019/6283399702_1f37edfd95_b.jpg">

          //       </Hero>
//       <Container style={{ marginTop: 30 }}>
          //         <Row>
            //           <Col size="md-4">
              //             <Card
//               image={covidScreen}
//               link="https://mr-cade.github.io/covid-api/"
//               title="Covid Tracker"
//               description="Covid-19 statistics tracker with data visualizations. Data is refreshed from an API.">
//             </Card>
//           </Col>
//           <Col size="md-4">
//             <Card
//               image={quizScreen}
//               link="https://mr-cade.github.io/js-quiz/"
//               title="JavaScript Quiz"
//               description="A quiz about JavaScript, written in JavaScript. This app features a countdown timer and highscore tracker.">
//             </Card>
//           </Col>
//           <Col size="md-4">
//             <Card
//               image={pwScreen}
//               link="https://mr-cade.github.io/password-generator/"
//               title="Password Generator"
//               description="Simple password generation application. It builds a password of a specified length using your choice of character types.">
//             </Card>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-4">
//             <Card
//               image={teamBuilder}
//               link="https://github.com/mr-cade/template-engine"
//               title="Team Builder"
//               description="This application allows the user to build a team of managers, engineers and interns from the command line.">
//             </Card>
//           </Col>
//           <Col size="md-4">
//             <Card
//               image={noteTaker}
//               link="https://let-us-take-notes.herokuapp.com/notes"
//               title="Notes"
//               description="Enables user to write, save and edit notes. This application is deployed on Heroku.">
//             </Card>
//           </Col>
//           <Col size="md-4">
//             <Card
//               image={dayPlanner}
//               link="https://mr-cade.github.io/day-planner/"
//               title="Planner"
//               description="Day planner application that dynamically changes formatting based on the time of day.">
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
