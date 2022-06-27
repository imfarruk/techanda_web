import React from "react";
// import web from "/images/dev3.png";
import web from "../assest/images/dev3.png";
import "./App.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.imgsrc} className="card-img-top card_img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
