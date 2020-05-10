import React from "react";
import { Next } from "react-bootstrap/PageItem";
import { Col, Form, Button } from "react-bootstrap";

const NextForm = ({ text }) => {
  return (
    <Col
      style={{
        textAlign: "left",
        paddingTop: "50px",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "100",
        fontSize: "1.1rem",
      }}
      lg={6}
    >
      <h3
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "400",
          fontSize: "2.1rem",
        }}
      >
        Hi, {text}
      </h3>
      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "100",
          fontSize: "1.2rem",
        }}
      >
        You are almost done
      </p>
      <Form>
        <Form.Row>
          <Form.Group
            as={Col}
            xs={12}
            md={12}
            lg={6}
            controlId="formGridPassword"
          >
            <Form.Control
              type="number"
              placeholder="Your Number"
              className="formInput"
              maxLength="11"
              minLength="11"
              required
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={12} lg={6} controlId="formGridEmail">
            <Form.Control
              type="email"
              placeholder="your@gmail.com"
              className="formInput"
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs={12} md={12} lg={6} controlId="formGridState">
            <Form.Control
              as="select"
              value="Select Gender"
              className="formInput"
              required
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={12} lg={6} controlId="formGridState">
            <Form.Control
              as="select"
              value="Select Location"
              className="formInput"
              required
            >
              <option>Select Location</option>
              <option>Abia</option>
              <option>Adamawa</option>
              <option>Akwa Ibom</option>
              <option>Anambra</option>
              <option>Bauchi</option>
              <option>Bayelsa</option>
              <option>Benue</option>
              <option>Borno</option>
              <option>Cross River</option>
              <option>Delta</option>
              <option>Ebonyi</option>
              <option>Edo</option>
              <option>Ekiti</option>
              <option>Enugu</option>
              <option>FCT</option>
              <option>Gombe</option>
              <option>Imo</option>
              <option>Jigawa</option>
              <option>Kaduna</option>
              <option>Kano</option>
              <option>Kastina</option>
              <option>Kebbi</option>
              <option>Kogi</option>
              <option>Kwara</option>
              <option>Lagos</option>
              <option>Nassarawa</option>
              <option>Niger</option>
              <option>Ogun</option>
              <option>Ondo</option>
              <option>Osun</option>
              <option>Osun</option>
              <option>Oyo</option>
              <option>Plateau</option>
              <option>Rivers</option>
              <option>Sokoto</option>
              <option>Taraba</option>
              <option>Yobe</option>
              <option>Zamfara</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "100",
            fontSize: "0.8rem",
          }}
        >
          You confirm that we can inform and invite you to subsequent campaigns.
        </p>
        <Button
          type="submit"
          style={{
            backgroundColor: "#977239",
            border: "none",
            outline: "unset",
            padding: "15px",
            width: "150px",
          }}
        >
          Confirm
        </Button>
      </Form>
    </Col>
  );
};

export default NextForm;
