import React from 'react';
import PropTypes from 'prop-types';
import StepLogin from './Steps/StepLogin';
import StepPassword from './Steps/StepPassword';
import StepAdditional from './Steps/StepAdditional';
import StepCongratulation from './Steps/StepCongratulation';
import Steps from '../../components/Steps';
import { Form } from 'reactstrap';
import { reduxForm } from 'redux-form';
import './registration.css';

const steps = [
  {
    path: '/registration/stepLogin',
    text: 'Login',
    field: StepLogin
  },
  {
    path: '/registration/stepPassword',
    text: 'Password',
    field: StepPassword
  },
  {
    path: '/registration/stepAdditional',
    text: 'Additional',
    field: StepAdditional
  },
  {
    path: '/registration/stepCongratulation',
    text: 'Congratulation',
    field: StepCongratulation
  }
];

const Registration = (props) => {
  const { invalid, handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Steps steps={steps} invalid={invalid}/>
    </Form>
  );
};

Registration.defaultProps = {
  handleSubmit: () => {}
};

Registration.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({ form: 'registration' })(Registration);
