import React from 'react';
import {
  Row, Col, Button, Container, Badge
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

export class HomeIndex extends React.Component {
  render() {
    return (
      <Container className="main-container">
        <Row>&nbsp;</Row>
        <Row className="header">
          <Col lg="3"><h2 className="header-title text-center">Stepper <span aria-label="steps" role="img">▶️▶️</span> </h2></Col>
          <Col lg="6" />
          <Col lg="3"><h2><Badge color="dark">v2.0 <span aria-label="passed" role="img">✅✅</span> </Badge></h2></Col>
        </Row>
        <Row className="main-promo-wrapper">
          <Col lg="4" />
          <Col lg="4" className="main-promo-text text-center">Choose button</Col>
          <Col lg="4" />
        </Row>
        <Row className="main-promo-btn-wrapper justify-content-md-center">
          <Link to="/registration"><Button color="danger" className="main-promo-btn btn-start">Start</Button></Link>
          <Col lg="6" />
          <a href="https://reactjs.org/"><Button color="primary" className="main-promo-btn btn-exit">Exit</Button></a>
        </Row>
      </Container>
    )
  }
}

export default HomeIndex;