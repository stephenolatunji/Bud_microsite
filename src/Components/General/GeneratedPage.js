import React from "react";

//Bootstrap
import { Card, Button, Col, Navbar } from "react-bootstrap";

//Image
import Logo from "../.././assets/NBR Logo/nbr-red.png";
import BudLogo from "../../assets/Bud Logo/bud-red.png";

const GeneratedPage = ({ text }) => {
  return (
    <Col
      style={{
        position: "relative",
        displa: "flex",
        alignItems: "center",
        top: "-70px",
        textAlign: "left",
        padding: "25px",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "100",
        fontSize: "1.1rem",
      }}
      className="pledgeContainer"
      lg={12}
      xs={12}
      md={12}
    >
      <div>
        <h3
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "400",
            fontSize: "2.1rem",
          }}
        >
          Congratulations!
        </h3>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "100",
            fontSize: "1.2rem",
          }}
        >
          Download and share your pledge.
        </p>
      </div>
      <Card
        style={{
          width: "22rem",
          backgroundColor: "grey",
          color: "white",
          borderRadius: "25px",
          paddingTop: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Card.Img
          variant="top"
          style={{
            borderRadius: "50%",
            border: "2px solid black",
            objectFit: "cover",
            height: "100px",
            width: "100px",
          }}
        />
        <Card.Body>
          <Card.Text
            style={{
              fontSize: "0.75rem",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            I{" "}
            <span
              style={{
                textTransform: "uppercase",
              }}
            >
              {text}
            </span>{" "}
            , Endorse The Naija Bar Rescue Initiative.​ To curtail the spread of
            COVID-19, Bars have closed their doors. Consequently, they don’t
            have money to pay their staff and other bills. ​ Support your
            favorite bar and their employees. ​<br />
            <br />
            Buy a N1500 beer voucher, Budweiser would match it and pay the bar
            N3000 now. You can redeem your voucher when the bar opens
          </Card.Text>
        </Card.Body>
        <div>
          <p
            style={{
              borderRadius: "25px",
              border: "3px solid black",
              padding: "8px",
              textTransform: "uppercase",
              color: "white",
              backgroundColor: "#b11917",
              width: "20px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              width: "218px",
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            www.naijabarrescue.com
          </p>
        </div>
      </Card>
    </Col>
  );
};

export default GeneratedPage;
