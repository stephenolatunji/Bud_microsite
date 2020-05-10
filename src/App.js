import React from 'react';
import Upload from './Upload';
import { Container } from 'react-bootstrap';
import "./App.css";

//Components
import Eligible from "./Components/Modals/Eligible";
import Home from "./Components/General/Home";


function App() {
  return (
    <Container fluid>
      
      <Eligible />
      <Home />
      <Upload />
    </Container>
  );
}

export default App;
