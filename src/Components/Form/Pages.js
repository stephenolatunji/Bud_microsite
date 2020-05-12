import React, { useState } from "react";

//Components
import NextForm from "../Form/NextForm";
import NameForm from "../Form/NameForm";
import Upload from "../Form/Upload";
import GeneratedPage from "../General/GeneratedPage";

const Pages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [text, setText] = useState("");
  const [errorExists, setErrorExists] = useState(false);
  const [file, setFile] = useState(null);
  const uploadedImage = React.useRef(null);
  const [uploadedImageSrc, setUploadedImageSrc] = useState("");

  //user name
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setErrorExists(true);
      console.log("error");
    } else {
      setErrorExists(false);
      setText(text);
      console.log(text);
      setCurrentPage(1);
    }
  };

  //image upload
  const onChangeHandler = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;

      reader.onload = (e) => {
        current.src = e.target.result;
        setUploadedImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const onClickHandler = (e) => {
    setFile(file);
    setCurrentPage(3);
    // e.preventDefault();
    // if (file === null) {
    //   setErrorExists(true);
    // } else {
    //   setErrorExists(false);
     
    // }
  };

  if (currentPage === 0) {
    return (
      <NameForm
        setCurrentPage={setCurrentPage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errorExists={errorExists}
      />
    );
  } else if (currentPage === 1) {
    return (
      <NextForm
        setCurrentPage={setCurrentPage}
        errorExists={errorExists}
        setErrorExists={setErrorExists}
        text={text}
      />
    );
  } else if (currentPage === 2) {
    return (
      <Upload
        setCurrentPage={setCurrentPage}
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
        uploadedImage={uploadedImage}
        errorExists={errorExists}
      />
    );
  } else if (currentPage === 3) {
    return (
      <GeneratedPage
        uploadedImage={uploadedImage}
        uploadedImageSrc={uploadedImageSrc}
        text={text}
      />
    );
  }
};

export default Pages;
