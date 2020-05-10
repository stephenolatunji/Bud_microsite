import React, { useState } from "react";
import "./input.css";
import { Col, Form, Button } from "react-bootstrap";

const NameForm = ({ handleChange, handleSubmit, text }) => {
  return (
    <Col
      style={{
        textAlign: "left",
        padding: "25px",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "100",
        fontSize: "1.1rem",
      }}
      lg={6}
    >
      {" "}
      <Form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
          }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              marginBottom: "0rem",
            }}
          >
            I
          </p>
          <div>
            <input
              type="text"
              id="name"
              value={text}
              placeholder=""
              maxLength="17"
              onChange={handleChange}
              className="formControl"
            />
          </div>
        </div>{" "}
        <br />
        <p>
          Endorse The Naija Bar Rescue Initiative.​ To curtail the spread of
          COVID-19, Bars have closed their doors. Consequently, they don’t have
          money to pay their staff and other bills. ​ Support your favorite bar
          and their employees.
          <br />
          <br />
          Buy a N1500 beer voucher, Budweiser would match it and pay the bar
          N3000 now. You can redeem your voucher when the bar opens.
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
          Pledge
        </Button>
      </Form>
    </Col>
  );
};

export default NameForm;
