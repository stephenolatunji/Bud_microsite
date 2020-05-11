import React from "react";
import "../General/generate.css";

//Bootstrap
import { Col } from "react-bootstrap";

const Upload = ({ onChangeHandler, onClickHandler, uploadedImage }) => {
  return (
    <Col
      className="pledgeContainer"
      lg={12}
      xs={12}
      md={12}
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h4> Upload Photo</h4>
      <div
        style={{
          width: "200px",
          height: "200px",
          padding: "40px",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid black",
        }}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <button className="btn btn-dark">
          <input
            type="file"
            multiple={false}
            accept="image/*"
            onChange={onChangeHandler}
            style={{
              opacity: 0,
              position: "absolute",
              // display: "none",
              // pointerEvents: 'none',
            }}
          />
          Select Photo
        </button>
      </div>
      <div>
        <button
          className="btn btn-secondary"
          style={{ marginTop: 10 }}
          onClick={onClickHandler}
        >
          Upload
        </button>
      </div>
    </Col>
  );
};
export default Upload;
