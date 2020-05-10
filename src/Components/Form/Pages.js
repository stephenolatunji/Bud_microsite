import React, { useState } from "react";

//Components
import NextForm from "../Form/NextForm";
import NameForm from "../Form/NameForm";

const Pages = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(text);
    console.log(text);
    setCurrentPage(1);
  };

  if (currentPage === 0) {
    return (
      <NameForm
        setCurrentPage={setCurrentPage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  } else if (currentPage === 1) {
    return <NextForm text={text} />;
  }
};

export default Pages;
