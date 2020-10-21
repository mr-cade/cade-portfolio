import React from "react";
import "./style.css"
// get react icons imports
import { FaGithub, FaWindowMaximize } from "react-icons/fa";

function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.img} alt=""></img>
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">{props.detail}</p>
        <a
          className="btn-small"
          href={props.deployLink}
          style={{ marginTop: "5px", marginRight: "5px" }}
        >
          <FaWindowMaximize style={{ marginTop: "5px" }} />
        </a>
        <a
          className="btn-small"
          href={props.githubLink}
          style={{ marginTop: "5px" }}
        >
          <FaGithub style={{ marginTop: "5px" }} />
        </a>
      </div>
    </div>
  );
}

export default Card;
