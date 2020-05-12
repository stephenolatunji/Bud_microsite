import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { Card } from "react-bootstrap";

const DownloadImage = ({ uploadedImageSrc, text }) => {

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }

  return (
    <div >
      <div className="mb5">
        <button onClick={printDocument}>Download</button>
      </div>

      <div id="divToPrint">
        <Card
          style={{
            width: "21rem",
            backgroundColor: "grey",
            color: "white",
            borderRadius: "25px",
            // paddingTop: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={uploadedImageSrc}
            variant="top"
            style={{
              borderRadius: "50%",
              border: "2px solid black",
              objectFit: "cover",
              width: "150px",
              height: "150px",
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
              , Endorse The Naija Bar Rescue Initiative.​ To curtail the spread
              of COVID-19, Bars have closed their doors. Consequently, they
              don’t have money to pay their staff and other bills. ​ Support
              your favorite bar and their employees. ​<br />
              <br />
              Buy a N1500 beer voucher, Budweiser would match it and pay the bar
              N3000 now. You can redeem your voucher when the bar opens
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DownloadImage;
