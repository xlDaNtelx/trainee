import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  Row, Col, Button, Container, Form, Label, FormGroup
} from 'reactstrap';
import { require } from '../../../../validators/validators';
import StepField from '../../../../components/StepField';
import { passwordVisitedChange } from '../../../../store/actions/steps';
import '../steps.css';

export class PasswordForm extends React.Component {
  render() {
    const { match, dispatch, invalid } = this.props;
    return (
      <Container className="password-container">
        <Row className="justify-content-center">
          <Col md="5" className="step-wrapper password-form">
              <h3>Step <span className="step-num">2</span> of <span className="step-num">3</span></h3>
              <Form>
              <FormGroup>
                <Label for="password">Password</Label>
                <Field id="password" validate={require} label="Enter password..." name="password" component={StepField} type="password" className="step-input" />
              </FormGroup>
            </Form>
            <Link to={`${match.url}/stepLogin`.replace("stepPassword/", "")} replace>
              <Button color="secondary" className="step-btn"> &#8249; Prev step </Button>
            </Link>
            <Link to={`${match.url}/stepAdditional`.replace("stepPassword/", "")} onClick={() => dispatch(passwordVisitedChange())} replace>
              <Button color="primary" disabled={invalid} className="step-btn step-next">Next step &#8250;</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  };
}
PasswordForm = reduxForm({
  form: 'password',
  destroyOnUnmount: false,
})(PasswordForm);

export default PasswordForm;
