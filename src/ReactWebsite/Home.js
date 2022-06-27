import React from "react";
import CommonPage from "./CommonPage";
// import web from "/images/dev2_.png";
import web from "../assest/images/dev2_.png";
import "./App.css";

const Home = () => {
  return (
    <>
      <CommonPage
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
        title="“Websites promote you 24/7. No employee will do that.”"
      />
    </>
  );
};

export default Home;
