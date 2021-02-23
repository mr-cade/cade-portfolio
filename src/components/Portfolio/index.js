import React, { Component } from "react";
import _ from "lodash";
import Card from "../Card";
import projects from "./projects.json";
import covidScreen from "../../assets/images/covid.png";
import quizScreen from "../../assets/images/js-quiz.png";
import pwScreen from "../../assets/images/pw-gen.png";
import teamBuilder from "../../assets/images/team-builder.png"
import noteTaker from "../../assets/images/note-taker.png"
import tc from "../../assets/images/tangible-creativity.png"
import uarc from "../../assets/images/uarc.png"

class Portfolio extends Component {
    state = {
        projects,
        projectsImg: [
            covidScreen,
            quizScreen,
            pwScreen,
            teamBuilder,
            noteTaker,
            tc,
            uarc,
            uarc
        ],
    };
    render() {
        console.log(projects);
        return (
            <div className="ml-4 text-center"><h1 >Portfolio</h1>
                <div className="card-deck">
                    {/* <div className="col"> */}
                        <div className="row">
                            {_.zip(this.state.projects, this.state.projectsImg).slice(0, 3).map((app) => (

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
                    {/* </div> */}
                        <div className="row">
                            {_.zip(this.state.projects, this.state.projectsImg).slice(4, 7).map((app) => (
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
            </div>
        );
    }
}
export default Portfolio;