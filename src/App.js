import React from "react";
import Home from "./ReactWebsite/Home";
import About from "./ReactWebsite/About.js";
import Service from "./ReactWebsite/Service.js";
import Contact from "./ReactWebsite/Contact.js";
import Navbar from "./ReactWebsite/Navbar.js";
import Footer from "./ReactWebsite/Footer.js";
import Error from "./ReactWebsite/Error.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route } from "react-router-dom";
import "./ReactWebsite/App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
