import React from 'react';
import {
  Row, Col, Button, Container, Badge, Form, FormGroup, Label, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../steps.css';

let Congratulation = () => {
  return (
    <Container className="congratulation-container">
      <Row className="justify-content-center">
        <Col md="5" className="step-wrapper gongratuation-wrapper">
          Congratuation !
          <br />
          You did it, Neo
        {/* <Link to={`/registration`} replace><Button color="secondary" className="step-btn">Back home</Button></Link> */}
        </Col>
      </Row>
    </Container>
  );
};


export default Congratulation;