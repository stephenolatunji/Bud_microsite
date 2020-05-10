import React from "react";
import "./nav.css";

//Bootstrap
import { Navbar } from "react-bootstrap";

//Image
import Logo from "../.././assets/NBR Logo/nbr-white.png";

const Nav = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand
          style={{
            color: "white",
            padding: "25px 20px",
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            textTransform: "uppercase",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "500",
          }}
        >
          <img
            alt=""
            src={Logo}
            width="50"
            height="60"
            className="d-inline-block align-top logo"
          />{" "}
          Extra Special Pledge
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Nav;
