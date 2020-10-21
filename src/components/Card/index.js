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
          style={{ marginTop: "10px", marginRight: "10px" }}
        >
          <FaWindowMaximize style={{ marginTop: "10px" }} />
        </a>
        <a
          className="btn-small"
          href={props.githubLink}
          style={{ marginTop: "10px" }}
        >
          <FaGithub style={{ marginTop: "10px" }} />
        </a>
      </div>
    </div>
  );
}

export default Card;
















{/* <div>
      <section
        className="container-section scrollspy"
        id="portfolio"
        style={{ margin: "20px" }}
      >
        <div className="col-4">
          <div className="card">
            
            <img className="card-img-top" alt="project's img" src={props.img} />
            
            <div className="card-content">
              <span
                className="card-title"
                style={{ fontSize: "20px" }}
              >
                {props.name}
                <i className="material-icons right"></i>
              </span>
              <p>
                <a
                  className="btn-small"
                  href={props.deployLink}
                  style={{ marginTop: "10px", marginRight: "10px" }}
                >
                  <FaWindowMaximize style={{ marginTop: "10px" }} />
                </a>
                <a
                  className="btn-small"
                  href={props.githubLink}
                  style={{ marginTop: "10px" }}
                >
                  <FaGithub style={{ marginTop: "10px" }} />
                </a>
              </p>
            </div>
            <div className="card-reveal" style={{ backgroundColor: "black" }}>
              <span className="card-title activator" style={{ color: "white" }}>
                {props.name}
                <i
                  className="material-icons right"
                  style={{ color: "white" }}
                  data-rel={props.id}
                >
                  close
                </i>
              </span>
              <p>{props.detail}</p>
            </div>
          </div>
        </div>
      </section>
    </div> */}




















// import React from "react";
// import "./style.css";

// function Card(props) {
//   return (
//     <div
//       className="card bg-light btn stretched-link"
//     >
//       <div className="card-img-top">
//         <a href={props.link}><img src={props.image} alt={props.alt}></img></a>
//         {props.children}
//       </div>
//       <div className="card-body">
//         <div className="card-title">
//           <h5>{props.title}</h5>
//           <p>{props.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;