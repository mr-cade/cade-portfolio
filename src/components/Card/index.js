import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card bg-light btn stretched-link"
    >
      <div className="card-img-top">
        <a href={props.link}><img src={props.image}></img></a>
        {props.children}
      </div>
      <div className="card-body">
        <div className="card-title">
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;