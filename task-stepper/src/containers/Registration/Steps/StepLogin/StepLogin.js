import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  Row, Col, Button, Container, Form, Label, FormGroup
} from 'reactstrap';
import { require } from '../../../../validators/validators';
import StepField from '../../../../components/StepField';
import { loginVisitedChange } from '../../../../store/actions/steps';
import '../steps.css';

export class LoginForm extends React.Component {
  render() {
    const { match, dispatch, invalid } = this.props;
    return (
      <Container className="login-container">
        <Row className="justify-content-center">
          <Col md="5" className="step-wrapper login-form">
            <h3>Step <span className="step-num">1</span> of <span className="step-num">3</span></h3>
            <Form>
              <FormGroup>
                <Label for="username">Login</Label>
                <Field id="username" validate={require} name="login" label="Enter login..." component={StepField} type="text" className="step-input" />
              </FormGroup>
            </Form>
            <Link to={`${match.url}/stepPassword`.replace("stepLogin/", "")} replace onClick={() => dispatch(loginVisitedChange())}>
              <Button disabled={invalid} color="primary" className="step-btn step-login">Next step ></Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  };
}

LoginForm = reduxForm({
  form: 'login',
  destroyOnUnmount: false,
  enableReinitialize: true 
})(LoginForm);

export default LoginForm;
