import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./generate.css";

//Bootstrap
import { Card, Col, Navbar } from "react-bootstrap";
import Share from "../Layout/Share";
import DownloadImage from "./DownloadImage";

//Images
import Logo from "../.././assets/NBR Logo/nbr-white.png";
import BudLogo from "../../assets/Bud Logo/bud-fill.png";

const GeneratedPage = ({ text, uploadedImage, uploadedImageSrc }) => {
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };
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
      <Card id="divToPrint" className="downloadImage">
        <Navbar>
          <Navbar.Brand
            style={{
              color: "white",
              padding: "25px 5px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              alt=""
              src={Logo}
              height="50"
              width="45"
              className="d-inline-block align-top"
            />{" "}
            <img
              alt=""
              src={BudLogo}
              height="40"
              width="55"
              className="d-inline-block align-top budlogo"
            />{" "}
          </Navbar.Brand>
        </Navbar>
        <DownloadImage
          uploadedImageSrc={uploadedImageSrc}
          text={text}
          printDocument={printDocument}
        />
      </Card>
      <Share text={text} printDocument={printDocument} />
    </Col>
  );
};

export default GeneratedPage;
