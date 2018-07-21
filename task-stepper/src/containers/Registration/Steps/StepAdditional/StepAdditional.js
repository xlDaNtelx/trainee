import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  Row, Col, Button, Container, Form, Label, FormGroup
} from 'reactstrap';
import { require } from '../../../../validators/validators';
import StepField from '../../../../components/StepField';
import { additionalVisitedChange } from '../../../../store/actions/steps';
import '../steps.css';

export class AdditionalForm extends React.Component {
  render() {
    const { match, dispatch, invalid } = this.props;
    return (
      <Container className="additional-container">
        <Row className="justify-content-center">
          <Col md="5" className="step-wrapper additional-form">
            <h3>Step <span className="step-num">3</span> of <span className="step-num">3</span></h3>
            <Form>
              <FormGroup>
                <Label for="email">Additional info</Label>
                <Field id="email" validate={require} name="additional" component={StepField} type="text" className="step-input" />
              </FormGroup>
              <Link to={`${match.url}/stepPassword`.replace("stepAdditional/", "")} replace>
                <Button color="secondary" className="step-btn">&#8249; Prev step</Button>
              </Link>
              <Link to={`${match.url}/stepCongratulation`.replace("stepAdditional/", "")} onClick={() => dispatch(additionalVisitedChange())} replace>
                <Button disabled={invalid} color="primary" className="step-btn step-next">Next step &#8250;</Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
};

AdditionalForm = reduxForm({
  form: 'additional',
  destroyOnUnmount: false
})(AdditionalForm);

export default AdditionalForm;
