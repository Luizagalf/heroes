import React from 'react';
import {Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Heroe from './components/Heroe';
import jsonHeroes from './jsonHeroes.js';
class App extends React.Component {
  render() {
  return (
    <Row xs={1} md={3} className="g-4 justify-content-md-center">
      {
        jsonHeroes.map((heroe) =>
        <Col className="d-flex p-2">
          <Heroe name={heroe.name} img={heroe.img} description={heroe.description} facts={heroe.facts}></Heroe>
        </Col>
        )
      }
    </Row>
  );
  }
}

export default App;
