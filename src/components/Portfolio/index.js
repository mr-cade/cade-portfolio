import React, { Component } from "react";
import Hero from "../Hero";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import projects from "../../assets/documents/projects.json";
import _ from "lodash";
import covidScreen from "../../assets/images/covid.png";
import quizScreen from "../../assets/images/js-quiz.png";
import pwScreen from "../../assets/images/pw-gen.png";
import teamBuilder from "../../assets/images/team-builder.png"
import noteTaker from "../../assets/images/note-taker.png"
import dayPlanner from "../../assets/images/day-planner.png"

class Portfolio extends Component {
    state = {
      projects,
      projectsImg: [
        covidScreen,
        quizScreen,
        pwScreen,
        teamBuilder,
        noteTaker,
        dayPlanner, 
      ],
    };
    render() {
      console.log(projects);
      return (
        <div>
          <h1 id="portfolio1" style={{ marginTop: "60px", marginRight: "90px" }}>
            Portfolio
          </h1>
  
          <div className="row">
            {_.zip(this.state.projects, this.state.projectsImg).map((app) => (
              <Card
                key={app[0].id}
                name={app[0].name}
                detail={app[0].detail}
                img={app[1]}
                deployLink={app[0].deployLink}
                githubLink={app[0].githubLink}
              />
            ))}
          </div>
        </div>
      );
    }
  }
  export default Portfolio;