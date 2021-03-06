import React, { useState } from "react";
import "./home.css";
import Bottle from "../.././assets/NBR Logo/bottle.png";

//Bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//Components
import Nav from "../Layout/Nav";
import Pages from "../Form/Pages";

const Home = () => {
  return (
    <div className="homePage">
      <Nav />
      <div className="homeContainer">
        <Row>
          <Col
            lg={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Col>
          <Pages />
          <Col
            lg={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
