import React from "react";
import CommonPage from "./CommonPage";
import web from "../assest/images/dev3.png";
import "./App.css";
const About = () => {
  return (
    <>
      <CommonPage
        name="Know About Your Developer"
        info="We work with a large group of developer and provide wide range of facility to our customer."
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
