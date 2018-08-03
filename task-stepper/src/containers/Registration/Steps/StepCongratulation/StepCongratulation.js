import React from 'react';
import {
  Row, Col, Container, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../steps.css';

const Congratulation = (props) => {
  const {
    fields: { values: { login } },
    fields: { values: { password } },
    fields: { values: { additional } },
    startStep } = props;
  if (!login || !password || !additional) {
    props.history.push(startStep);
    return null;
  }
  props.history.block();
  return (
    <Container className="congratulation-container">
      <Row className="justify-content-center">
        <Col md="5" className="step-wrapper gongratuation-wrapper">
          Congratulation !
          <br />
          You did it, Neo
          <hr className="congratulation-separator" />
          <span className="congratulation-result"><b className="congratulation-result-title">Login:</b> {login} </span>
          <span className="congratulation-result"><b className="congratulation-result-title">Password:</b> {password} </span>
          <span className="congratulation-result"><b className="congratulation-result-title">Additional:</b> {additional} </span>
          {/* <Link to={`/registration`} replace><Button color="secondary" className="step-btn">Back home</Button></Link> */}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const defaultFields = { values: { login: '', password: '', additional: '' } };
  console.log('state',state);
  return {
    fields: state.form.registration && state.form.registration.values ? state.form.registration : defaultFields
    //login: state.form.registration ? state.form.registration.values.login : '',
    //password: state.form.registration ? state.form.registration.values.password : '',
    //additional: state.form.registration ? state.form.registration.values.additional : ''
  };
};

export default connect(mapStateToProps)(Congratulation)