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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 70px",
        }}
      >
        <Row>
          <Col lg={3}>
            <img src={Bottle} width="250px" height="400px" className="images" />
          </Col>
          <Pages />
          <Col lg={3}>
            <img src={Bottle} width="250px" height="400px" className="images" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
