import React, { Component } from "react";
import _ from "lodash";
import Card from "../Card";
import Row from "../Row"
import projects from "./projects.json";
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
            <div className="text-center"><h1 >Portfolio</h1>
                <div className="card-deck">
                    <Row>
                        <div className="col">
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

                    </Row>
                </div>
            </div>
        );
    }
}
export default Portfolio;