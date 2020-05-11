import React from "react";
import "./generate.css";

//Bootstrap
import { Col } from "react-bootstrap";
import Share from "../Layout/Share";
import DownloadImage from "./DownloadImage";

const GeneratedPage = ({ text, uploadedImage, uploadedImageSrc }) => {
  return (
    <Col className="pledgeContainer" lg={12} xs={12} md={12}>
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
      <DownloadImage uploadedImageSrc={uploadedImageSrc} text={text} />
      <div>
        <p
          style={{
            border: "2px solid #b11917",
            backgroundColor: "#b11917",
            borderRadius: "25px",
            padding: "11px",
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "400",
          }}
        >
          www.naijabarrescue.com
        </p>
      </div>
      <Share text={text} />
    </Col>
  );
};

export default GeneratedPage;
