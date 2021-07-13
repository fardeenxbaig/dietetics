import React from "react";
import { Navbar, Nav } from "react-bootstrap";

//import history from "./history";
//onClick={() => history.push("/")}

// import logo from "/public/assets/images/logo.png";
// src={require("/public/assets/images/logo.png")}
// <img src="https://banner2.cleanpng.com/20190731/coj/kisspng-fork-icon-fast-food-icon-5d4125521cc0d5.6481897415645504821178.jpg"

export function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" style={{ color: "palevioletred" }}>
        <img
          src="https://uploads.codesandbox.io/uploads/user/1669b0fb-0e56-4898-9ab6-513d9342028d/9R04-Artboard+2_crop.png"
          width="50"
          height="30"
          class="d-inline-block align-top"
          alt=""
          style={{ marginRight: "15px", marginLeft: "0px", border: "0" }}
        />
        {props.heading}
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="#home">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}
