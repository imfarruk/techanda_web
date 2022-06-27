import React, { useState } from "react";
import web from "../assest/images/contact1.png";
import { NavLink, Redirect } from "react-router-dom";
import "./App.css";

const Contact = (props) => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    // alert(
    //   `Thank you for contacting... Your Details are... Name :${data.fullname} Email :${data.email} Mobile :${data.phone} We will Contact you soon`
    // );
  };

  return (
    <>
      <div className="contact_div">
        <h1>Contact</h1>
      </div>
      <section
        id="header"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10  md-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-10 col-10 order-2 order-lg-1 md-auto">
                      <form onSubmit={formSubmit} className="row g-3">
                        <div className="col-md-12 ">
                          <label for="inputEmail4" className="form-label">
                            Name:
                          </label>
                          <input
                            type="type"
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter Your Name"
                            className="form-control"
                            id="inputEmail4"
                          />
                        </div>

                        <div className="col-md-12 ">
                          <label for="inputEmail4" className="form-label">
                            Email:
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="Enter Your Name"
                            className="form-control"
                            id="inputEmail4"
                          />
                        </div>
                        <div className="col-md-12">
                          <label for="inputPassword4" className="form-label">
                            Password:
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            name="password"
                            value={data.password}
                            onChange={InputEvent}
                            placeholder="Enter Your Name"
                          />
                        </div>
                        <div className="col-12">
                          <label for="inputAddress" className="form-label">
                            Mobile Number:
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputAddress"
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="Enter Your Name"
                          />
                        </div>

                        <div className="col-12">
                          <label for="inputAddress" className="form-label">
                            Message:
                          </label>
                          <input
                            type="textfield"
                            className="form-control"
                            id="inputAddress"
                            name="message"
                            value={data.message}
                            onChange={InputEvent}
                            placeholder="Enter Your Name"
                          />
                        </div>

                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="contact _img"
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

export default Contact;
