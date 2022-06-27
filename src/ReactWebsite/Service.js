import React from "react";
import CardData from "./CardData";
import Card from "./Card";
import "./App.css";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <p className="service_head"> Our Services</p>
      </div>
      <div className="card_body">
        {CardData.map((val, index) => {
          return <Card key={index} imgsrc={val.imgsrc} title={val.title} />;
        })}
      </div>
    </>
  );
};

export default Service;
