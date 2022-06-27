import React from "react";
import { NavLink } from "react-router-dom";
// import "../App.css";

const CommonPage = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 md-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}</h1>
                  <h2 className="my-3">
                    <strong className="brand-name"> Tech Anda</strong>
                  </h2>
                  <div className="info">{props.info}</div>
                  <div className="info">{props.title}</div>
                  <div className="mt-3">
                    <NavLink className="btn btn-primary" to={props.visit}>
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonPage;
