import React from "react";
import history from "./history";
//onClick={() => history.push("/")
// <img src="https://banner2.cleanpng.com/20190731/coj/kisspng-fork-icon-fast-food-icon-5d4125521cc0d5.6481897415645504821178.jpg"
// src={require("./images/logo.png")}
export function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a classNAme="navbar-brand" href="/" style={{ color: "palevioletred" }}>
        <img
          src={require("./images/logo.png")}
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        {"  "}
        {props.heading}
      </a>

      <button
        className="navbar-toggler"
        type="button"
        dataToggle="collapse"
        dataTarget="#navbarSupportedContent"
        ariaControls="navbarSupportedContent"
        ariaExpanded="false"
        ariaLabel="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
