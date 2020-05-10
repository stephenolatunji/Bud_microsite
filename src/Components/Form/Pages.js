import React, { useState } from "react";

//Components
import NextForm from "../Form/NextForm";
import NameForm from "../Form/NameForm";
import GeneratedPage from "../General/GeneratedPage";

//Bootstrap
import Error from "../Modals/Error";

const Pages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [text, setText] = useState("");
  const [errorExists, setErrorExists] = useState(false);

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
    return <NextForm setCurrentPage={setCurrentPage} text={text} />;
  } else if (currentPage === 2) {
    return <GeneratedPage text={text} />;
  }
};

export default Pages;
