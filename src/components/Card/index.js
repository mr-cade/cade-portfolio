import React from "react";
import "./style.css";

function Card(props) {
    return (
      <div
        className="card"
        style={{
          // backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
      >
        <a href={props.link}><img src={props.image}></img></a>
        {props.children}
      </div>
    );
  }
  
  export default Card;